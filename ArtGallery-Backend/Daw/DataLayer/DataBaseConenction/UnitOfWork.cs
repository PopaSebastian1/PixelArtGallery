using Daw.DataLayer.Repositories;

namespace Daw.DataLayer.DataBaseConenction
{
    public class UnitOfWork
    {
        private readonly AppDbContext _appContext;
        public UnitOfWork(AppDbContext appContext,
            ArtworkRepository artworkRepository, UserRepository userRepository)
        {
            _appContext = appContext;
            ArtworkRepository = artworkRepository;
            UserRepository = userRepository;
        }

        public ArtworkRepository ArtworkRepository { get; }
        public UserRepository UserRepository { get; }
        public async Task SaveChangesAsync()
        {
            try
            {
                await _appContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                var errorMessage = "Error when saving to the database: "
                                   + $"{ex.Message}\n\n"
                                   + $"{ex.InnerException}\n\n"
                                   + $"{ex.StackTrace}\n\n";

                Console.WriteLine(errorMessage);
            }
        }
    }
}
