namespace HospitalBackend.Controllers.Methods
{
    public class DashboardMethods
    {
        public static List<object> GetEgressData()
        {
            List<object> data = new();
            using (var context = new AplicationDbContext())
            {
                var query = from e in context.Employees
                            join r in context.Roles on e.RoleId equals r.Id
                            where e.isActive == 0 && e.EgressDate.Value.Year == 2023
                            group e by new { Month = e.EgressDate.Value.Month, Year = e.EgressDate.Value.Year } into g
                            select new
                            {
                                Egress = g.Count(),
                                Date = g.Key.Month + "- 2023"
                            };

                foreach (var item in query)
                {
                    data.Add(item);
                }
            }
            return data;
        }
    }
}
