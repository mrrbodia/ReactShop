using ReactShop.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Services
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();

        void AddProduct(Product product);

        bool Save();
    }
}
