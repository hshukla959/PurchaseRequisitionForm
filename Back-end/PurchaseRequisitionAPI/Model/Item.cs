using Microsoft.EntityFrameworkCore;

namespace PurchaseRequisitionAPI.Model
{
	public class Item
	{
		public int Id { get; set; }
		public string ItemName { get; set; }
		public int ItemQuantity { get; set; }
		public string QuantityUOM { get; set; }
		public string Make { get; set; }
		public string Model { get; set; }

		[Precision(18, 2)]
		public decimal TentativeCost { get; set; }
		public string CostUOM { get; set; }
		public string RequisitionBy { get; set; }
		public DateTime ExpectedDate { get; set; }
	}
}
