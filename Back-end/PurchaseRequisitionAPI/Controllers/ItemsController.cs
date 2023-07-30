using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PurchaseRequisitionAPI.Model;

namespace PurchaseRequisitionAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ItemsController : ControllerBase
	{
		private readonly AppDbContext _context;

		public ItemsController(AppDbContext context)
		{
			_context = context;
		}

		[HttpPost]
		public async Task<IActionResult> PostItem(Item item)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Items.Add(item);
			await _context.SaveChangesAsync();

			return Ok(new { message = "Item successfully created!" });
		}
	}
}
