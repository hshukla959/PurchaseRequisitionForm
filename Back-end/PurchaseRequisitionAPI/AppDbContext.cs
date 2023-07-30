using Microsoft.EntityFrameworkCore;
using PurchaseRequisitionAPI.Model;

namespace PurchaseRequisitionAPI
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}

		public DbSet<Item> Items { get; set; }
		public DbSet<User> Users { get; set; }
	}
}
