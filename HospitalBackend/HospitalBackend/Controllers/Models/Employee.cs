namespace HospitalBackend.Controllers.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public DateTime? DateOdAdmission { get; set; }
        public int isActive { get; set; }
        public DateTime? EgressDate { get; set; }
        public int RoleId {  get; set; }
        public Role? Role { get; set; }
    }
}
