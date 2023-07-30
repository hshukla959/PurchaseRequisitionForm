using System.ComponentModel.DataAnnotations;

namespace PurchaseRequisitionAPI.Model
{
	public class User
	{
		public int Id { get; set; }

		[Required]
		public string Password { get; set; }

		[Required]
		[EmailAddress]
		public string Email { get; set; }
	}
}
