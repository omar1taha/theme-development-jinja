class ProductGallery {
  constructor() {
    this.initThumbnails();
  }

  initThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', (e) => {
        const imageSrc = e.target.src;
        mainImage.src = imageSrc;
        
        thumbnails.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ProductGallery();
});