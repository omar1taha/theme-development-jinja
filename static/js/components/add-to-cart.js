class AddToCart {
  constructor() {
    this.addToCartBtn = document.getElementById('add-to-cart-btn');
    this.initButton();
  }

  initButton() {
    this.addToCartBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleAddToCart();
    });
  }

  handleAddToCart() {
    // Get product data
    const quantity = document.getElementById('quantity')?.value || 1;
    const selectedVariants = this.getSelectedVariants();
    
    // Simple toast notification
    this.showToast('Product added to cart!');
    
    console.log('Adding to cart:', {
      quantity,
      variants: selectedVariants
    });
  }

  getSelectedVariants() {
    const selectedButtons = document.querySelectorAll('.variant-option.selected');
    const variants = {};
    
    selectedButtons.forEach(button => {
      const variantType = button.dataset.variant;
      const variantValue = button.dataset.value;
      variants[variantType] = variantValue;
    });
    
    return variants;
  }

  showToast(message) {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 1rem;
      border-radius: 4px;
      z-index: 1000;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AddToCart();
});