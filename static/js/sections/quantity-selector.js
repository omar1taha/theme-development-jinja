class QuantitySelector {
  constructor() {
    this.quantityInput = document.getElementById('quantity');
    this.decreaseBtn = document.querySelector('.qty-decrease');
    this.increaseBtn = document.querySelector('.qty-increase');
    
    this.initControls();
  }

  initControls() {
    this.decreaseBtn?.addEventListener('click', () => {
      const currentValue = parseInt(this.quantityInput.value);
      const minValue = parseInt(this.quantityInput.min) || 1;
      
      if (currentValue > minValue) {
        this.quantityInput.value = currentValue - 1;
        this.onQuantityChange();
      }
    });

    this.increaseBtn?.addEventListener('click', () => {
      const currentValue = parseInt(this.quantityInput.value);
      const maxValue = parseInt(this.quantityInput.max) || 999;
      
      if (currentValue < maxValue) {
        this.quantityInput.value = currentValue + 1;
        this.onQuantityChange();
      }
    });

    this.quantityInput?.addEventListener('change', () => {
      this.onQuantityChange();
    });
  }

  onQuantityChange() {
    console.log('Quantity changed:', this.quantityInput.value);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new QuantitySelector();
});