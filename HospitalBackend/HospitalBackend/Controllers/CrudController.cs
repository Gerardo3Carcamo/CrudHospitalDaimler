using HospitalBackend.Controllers.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CrudController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        public CrudController(AplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> saveNewEmployee(Employee data)
        {
            try
            {
                _context.Add(data);
                
                await _context.SaveChangesAsync();
                return Ok(new { data = true, error = false, msg = "Ok", apiName = "saveNewEmployee" });
            }
            catch (Exception ex)
            {
                return Ok(new { data = false, error = true, msg = ex.Message, apiName = "saveNewEmployee" });
            }

        }
        [HttpPost]
        public ActionResult UpdateEmployee(Employee data)
        {
            try
            {
                var employee = _context.Employees.Where(x => x.Id == data.Id).FirstOrDefault();
                if (employee != null)
                {
                    employee.PhoneNumber = data.PhoneNumber;
                    employee.Email = data.Email;
                }
                _context.Update(employee);
                _context.SaveChanges();
                return Ok(new { data = true, error = false, msg = "Ok", apiName = "UpdateEmployee" });
            }
            catch (Exception ex)
            {
                return Ok(new { data = false, error = true, msg = ex.Message, apiName = "UpdateEmployee" });
            }
        }
        [HttpPost]
        public ActionResult DeleteEmployee(Employee data)
        {
            try
            {
                var employee = _context.Employees.Where(x => x.Id == data.Id).FirstOrDefault();
                if (employee != null)
                {
                    _context.Remove(employee);
                    _context.SaveChanges();
                }
                return Ok(new { data = true, error = false, msg = "Ok", apiName = "DeleteEmployee" });
            }
            catch (Exception ex)
            {
                return Ok(new { data = false, error = true, msg = ex.Message, apiName = "DeleteEmployee" });
            }
        }
        [HttpGet]
        public async Task<ActionResult> GetAllEmployees()
        {
            try
            {
                var result = await _context.Employees.Include(x => x.Role).ToListAsync();
                return Ok(new { apiName = "GetAllEmployee", error = false, msg = "Ok", data = result });
            }
            catch (Exception ex)
            {
                return Ok(new { error = true, msg = ex.Message, apiName = "GetAllEmployee" });
            }
        }
        [HttpPost]
        public async Task<ActionResult> GetSpecificEmployee(Employee data)
        {
            try
            {
                var result = await _context.Employees.Include(x=> x.Role).Where(x=> x.Id == data.Id).ToListAsync();
                return Ok(new { apiName = "GetSpecificEmployee", error = false, msg = "Ok", data = result });
            }
            catch (Exception ex)
            {
                return Ok(new { error = true, msg = ex.Message, apiName = "GetSpecificEmployee" });
            }
        }
        [HttpGet]
        public async Task<ActionResult> GetAllAreas()
        {
            try
            {
                var result = await _context.Roles.ToListAsync();
                return Ok(new { apiName = "GetAllAreas", error = false, msg = "Ok", data = result });
            }
            catch (Exception ex)
            {
                return Ok(new { error = true, msg = ex.Message, apiName = "GetAllAreas" });
            }
        }
    }
}
