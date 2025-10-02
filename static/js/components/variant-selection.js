class VariantSelection {
  constructor() {
    this.selectedVariants = {};
    this.initVariantButtons();
  }

  initVariantButtons() {
    const variantButtons = document.querySelectorAll('.variant-option');
    
    variantButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.disabled) return;
        
        const variantType = e.target.dataset.variant;
        const variantValue = e.target.dataset.value;
        
        // Clear other selections in same variant group
        const groupButtons = document.querySelectorAll(`[data-variant="${variantType}"]`);
        groupButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Select current option
        e.target.classList.add('selected');
        this.selectedVariants[variantType] = variantValue;
        
        this.onVariantChange();
      });
    });
  }

  onVariantChange() {
    console.log('Selected variants:', this.selectedVariants);
    // Update pricing, availability, etc.
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new VariantSelection();
});