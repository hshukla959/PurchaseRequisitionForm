using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PurchaseRequisitionAPI.Model;

namespace PurchaseRequisitionAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly AppDbContext _dbContext;

		public UserController(AppDbContext context)
		{
			_dbContext = context;
		}


		[HttpPost("register")]
		public async Task<IActionResult> Register(User user)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			// Check if the email already exists
			if (_dbContext.Users.Any(u => u.Email == user.Email))
			{
				return Conflict();
			}

			// Save the user to the database
			_dbContext.Users.Add(user);
			await _dbContext.SaveChangesAsync();

			return Ok(new { message = "Item successfully created!" });
		}

		[HttpPost("login")]
		public Task<IActionResult> Login(User user)
		{
			if (!ModelState.IsValid)
			{
				return Task.FromResult<IActionResult>(BadRequest(ModelState));
			}

			// Check if the user exists in the database
			var existingUser = _dbContext.Users.FirstOrDefault(u => u.Email == user.Email);

			if (existingUser == null)
			{
				return Task.FromResult<IActionResult>(NotFound());
			}

			// Check if the password matches
			if (existingUser.Password != user.Password)
			{
				return Task.FromResult<IActionResult>(Unauthorized());
			}

			return Task.FromResult<IActionResult>(Ok(new { message = "Login successful!" }));
		}
	}
}
