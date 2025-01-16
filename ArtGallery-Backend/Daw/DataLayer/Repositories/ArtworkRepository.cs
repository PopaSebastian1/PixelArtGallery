using Daw.DataLayer.DataBaseConenction;
using Daw.DataLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace Daw.DataLayer.Repositories
{
    public class ArtworkRepository : BaseRepository<Artwork>
    {
        public ArtworkRepository(AppDbContext appDbContext) : base(appDbContext)
        {
        }
        public async Task<Artwork?> GetArtworkByNameAsync(string name)
        {
            if(_dbSet is null)
            {
                return null;
            }
            return await _dbSet.AsQueryable().FirstOrDefaultAsync(us => us.Name == name);

        }
        public async void DeleteArtworkByNameAsync(string name)
        {
            var product = await GetArtworkByNameAsync(name);
            if (product is null) return;
            _dbSet.Remove(product);
            await _appContext.SaveChangesAsync();
        }
        public async Task<Artwork?> UpdateArtworktByNameAsync(string productName, Artwork product)
        {
            var productToUpdate = await GetArtworkByNameAsync(productName);
            if (productToUpdate is null) return null;
            productToUpdate.Name = product.Name;
            //productToUpdate.CreationDate = product.CreationDate;
            productToUpdate.Description = product.Description;
            productToUpdate.ImagePath = product.ImagePath;
            productToUpdate.Author = product.Author;
            productToUpdate.Category = product.Category;
            _dbSet.Update(productToUpdate);
            await _appContext.SaveChangesAsync();
            return productToUpdate;
        }
        public async Task<Artwork?> AddArtworkAsync(Artwork product)
        {
            if (_dbSet is null) return null;
            await _dbSet.AddAsync(product);
            await _appContext.SaveChangesAsync();
            return product;
        }
        public async Task<List<Artwork>> GetAllArtworksAsync()
        {
            if (_dbSet is null) return null;
            return await _dbSet.AsQueryable().ToListAsync();
        }
        public async Task<List<Artwork?>> GetAllArtowrksByCategoryAsync(string category)
        {
            if (_dbSet is null) return null;
            if(category is null)
            {
                return await _dbSet.AsQueryable().ToListAsync();
            }
            return await _dbSet.AsQueryable().Where(art => art.Category == category).ToListAsync();
        }
    }
}
