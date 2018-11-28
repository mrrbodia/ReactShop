using ReactShop.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Services
{
    public class ProductRepository : IProductRepository
    {
        private ProductContext context;

        public ProductRepository(ProductContext productContext)
        {
            this.context = productContext;
        }

        public void AddProduct(Product product)
        {
            context.Products.Add(product);
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.Products.OrderBy(p => p.Name);
        }

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
