using Daw.DataLayer.DataBaseConenction;
using Daw.DataLayer.Models;

namespace Daw.DataLayer.Services
{
    public class ArtworkService
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly AppDbContext _appContext;
        public ArtworkService(AppDbContext appContext, UnitOfWork unitOfWork)
        {
            _appContext = appContext;
            _unitOfWork = unitOfWork;
        }
        public async Task<Artwork?> GetArtworkByIdAsync(int id)
        {
            return await _unitOfWork.ArtworkRepository.GetByIdAsync(id);
        }
        public async Task<Artwork?> GetArtworkByNameAsync(string name) { return await _unitOfWork.ArtworkRepository.GetArtworkByNameAsync(name); }
        public async Task<List<Artwork>> GetAllArtworksAsync() { return await _unitOfWork.ArtworkRepository.GetAllAsync(); }
        public async Task AddArtworkAsync(Artwork product)
        {
            await _unitOfWork.ArtworkRepository.AddAsync(product);
            await _unitOfWork.SaveChangesAsync();
        }
        public async Task UpdateArtworkAsync(Artwork product)
        {
            await _unitOfWork.ArtworkRepository.UpdateAsync(product);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteArtworkAsync(int id)
        {
            await _unitOfWork.ArtworkRepository.DeleteAsync(id);
            await _unitOfWork.SaveChangesAsync();
        }
        public async Task<List<Artwork?>>GetAllArtworksByCategoryAsync(string category)
        {
            return await _unitOfWork.ArtworkRepository.GetAllArtowrksByCategoryAsync(category);
        }
    }
}
