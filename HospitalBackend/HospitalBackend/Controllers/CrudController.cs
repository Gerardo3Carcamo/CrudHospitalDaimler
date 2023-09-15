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

        [HttpGet]
        public async Task<ActionResult> GetEgressDataAsync()
        {
            try
            {
                var result = await _context.Employees.Include(x => x.Role).Where(x => x.RoleId == 1 && x.isActive == 1).ToListAsync();
                return Ok(new { apiName = "GetEgressData", error = false, msg = "Ok", data = result });
            }
            catch (Exception ex)
            {
                return Ok(new { error = true, msg = ex.Message, apiName = "GetEgressData" });
            }
        }
    }
}
