using Microsoft.AspNetCore.Mvc;
using HospitalBackend.Controllers.Methods;
using Microsoft.EntityFrameworkCore;

namespace HospitalBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DashboardController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        public DashboardController(AplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult> GetEgressDataAsync()
        {
            try
            {
                var result = await _context.Employees.Include(x=> x.Role).ToListAsync();
                return Ok(new { apiName = "GetEgressData", error = false, msg = "Ok", data = result});
            }catch (Exception ex)
            {
                return Ok(new { error = true, msg = ex.Message, apiName = "GetEgressData" });
            }
        }
    }
}
