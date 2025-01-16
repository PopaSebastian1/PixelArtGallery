namespace Daw.DataLayer.Models
{
    public class Artwork : BaseEntity
    {
        public string Name { get; set; }
        public string Author { get; set; }
        //public DateTime CreationDate { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public string Category { get; set; }
    }
}
