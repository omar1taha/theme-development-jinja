/**
 * VariantSelector Class - Handles synchronization between variant dropdown, color selection, and size selection
 */
class VariantSelector {
  constructor() {
    this.variantDropdown = document.getElementById("variant-dropdown");
    this.colorOptions = document.getElementById("color-options");
    this.sizeOptions = document.getElementById("size-options");

    // Create a mapping of available combinations
    this.availableCombinations = this.buildCombinationMap();

    this.init();
  }

  /**
   * Build a map of available color-size combinations from the dropdown options
   */
  buildCombinationMap() {
    const combinations = new Map();

    if (this.variantDropdown) {
      const options = this.variantDropdown.querySelectorAll("option[data-color][data-size]");
      options.forEach((option) => {
        const color = option.dataset.color;
        const size = option.dataset.size;
        const key = `${color}-${size}`;
        combinations.set(key, {
          color: color,
          size: size,
          value: option.value,
        });
      });
    }

    return combinations;
  }

  /**
   * Initialize event listeners and set initial state
   */
  init() {
    this.setupEventListeners();
    this.setInitialState();
    this.updateQuantityHandlers();
  }

  /**
   * Set up all event listeners
   */
  setupEventListeners() {
    // Variant dropdown change
    if (this.variantDropdown) {
      this.variantDropdown.addEventListener("change", (e) => {
        this.handleVariantDropdownChange(e.target.value);
      });
    }

    // Color selection change
    if (this.colorOptions) {
      const colorInputs = this.colorOptions.querySelectorAll('input[type="radio"]');
      colorInputs.forEach((input) => {
        input.addEventListener("change", (e) => {
          if (e.target.checked) {
            this.handleColorChange(e.target.dataset.color);
          }
        });
      });
    }

    // Size selection change
    if (this.sizeOptions) {
      const sizeInputs = this.sizeOptions.querySelectorAll('input[type="radio"]');
      sizeInputs.forEach((input) => {
        input.addEventListener("change", (e) => {
          if (e.target.checked) {
            this.handleSizeChange(e.target.dataset.size);
          }
        });
      });
    }
  }

  /**
   * Set initial state based on current selections
   */
  setInitialState() {
    const selectedColor = this.getSelectedColor();
    const selectedSize = this.getSelectedSize();

    if (selectedColor && selectedSize) {
      this.syncVariantDropdown(selectedColor, selectedSize);
    }
  }

  /**
   * Handle variant dropdown change
   */
  handleVariantDropdownChange(value) {
    if (!value) {
      this.clearAllSelections();
      return;
    }

    const option = this.variantDropdown.querySelector(`option[value="${value}"]`);
    if (option && option.dataset.color && option.dataset.size) {
      const color = option.dataset.color;
      const size = option.dataset.size;

      this.setColorSelection(color);
      this.setSizeSelection(size);
      this.updateAvailableOptions();
    }
  }

  /**
   * Handle color selection change
   */
  handleColorChange(color) {
    const selectedSize = this.getSelectedSize();

    if (selectedSize) {
      this.syncVariantDropdown(color, selectedSize);
    }

    this.updateAvailableOptions();
  }

  /**
   * Handle size selection change
   */
  handleSizeChange(size) {
    const selectedColor = this.getSelectedColor();

    if (selectedColor) {
      this.syncVariantDropdown(selectedColor, size);
    }

    this.updateAvailableOptions();
  }

  /**
   * Sync the variant dropdown based on color and size
   */
  syncVariantDropdown(color, size) {
    if (!this.variantDropdown || !color || !size) return;

    const key = `${color}-${size}`;
    const combination = this.availableCombinations.get(key);

    if (combination) {
      this.variantDropdown.value = combination.value;
    } else {
      // Combination doesn't exist, clear dropdown
      this.variantDropdown.value = "";
    }
  }

  /**
   * Set color selection
   */
  setColorSelection(color) {
    if (!this.colorOptions) return;

    const colorInput = this.colorOptions.querySelector(`input[data-color="${color}"]`);
    if (colorInput) {
      colorInput.checked = true;
    }
  }

  /**
   * Set size selection
   */
  setSizeSelection(size) {
    if (!this.sizeOptions) return;

    const sizeInput = this.sizeOptions.querySelector(`input[data-size="${size}"]`);
    if (sizeInput) {
      sizeInput.checked = true;
    }
  }

  /**
   * Get currently selected color
   */
  getSelectedColor() {
    if (!this.colorOptions) return null;

    const checkedInput = this.colorOptions.querySelector('input[type="radio"]:checked');
    return checkedInput ? checkedInput.dataset.color : null;
  }

  /**
   * Get currently selected size
   */
  getSelectedSize() {
    if (!this.sizeOptions) return null;

    const checkedInput = this.sizeOptions.querySelector('input[type="radio"]:checked');
    return checkedInput ? checkedInput.dataset.size : null;
  }

  /**
   * Clear all selections
   */
  clearAllSelections() {
    // Clear color selection
    if (this.colorOptions) {
      const colorInputs = this.colorOptions.querySelectorAll('input[type="radio"]');
      colorInputs.forEach((input) => (input.checked = false));
    }

    // Clear size selection
    if (this.sizeOptions) {
      const sizeInputs = this.sizeOptions.querySelectorAll('input[type="radio"]');
      sizeInputs.forEach((input) => (input.checked = false));
    }
  }

  /**
   * Update available options based on current selection
   */
  updateAvailableOptions() {
    const selectedColor = this.getSelectedColor();
    const selectedSize = this.getSelectedSize();

    // Update size options availability
    if (selectedColor && this.sizeOptions) {
      const sizeInputs = this.sizeOptions.querySelectorAll('input[type="radio"]');
      sizeInputs.forEach((input) => {
        const size = input.dataset.size;
        const combination = this.availableCombinations.get(`${selectedColor}-${size}`);
        const label = input.nextElementSibling;

        if (combination) {
          input.disabled = false;
          label.classList.remove("disabled");
        } else {
          input.disabled = true;
          label.classList.add("disabled");
          if (input.checked) {
            input.checked = false;
          }
        }
      });
    }

    // Update color options availability
    if (selectedSize && this.colorOptions) {
      const colorInputs = this.colorOptions.querySelectorAll('input[type="radio"]');
      colorInputs.forEach((input) => {
        const color = input.dataset.color;
        const combination = this.availableCombinations.get(`${color}-${selectedSize}`);
        const label = input.nextElementSibling;

        if (combination) {
          input.disabled = false;
          label.classList.remove("disabled");
        } else {
          input.disabled = true;
          label.classList.add("disabled");
          if (input.checked) {
            input.checked = false;
          }
        }
      });
    }

    // If no specific selection, enable all options
    if (!selectedColor && !selectedSize) {
      this.enableAllOptions();
    }
  }

  /**
   * Enable all options
   */
  enableAllOptions() {
    // Enable all size options
    if (this.sizeOptions) {
      const sizeInputs = this.sizeOptions.querySelectorAll('input[type="radio"]');
      sizeInputs.forEach((input) => {
        input.disabled = false;
        const label = input.nextElementSibling;
        if (label) label.classList.remove("disabled");
      });
    }

    // Enable all color options
    if (this.colorOptions) {
      const colorInputs = this.colorOptions.querySelectorAll('input[type="radio"]');
      colorInputs.forEach((input) => {
        input.disabled = false;
        const label = input.nextElementSibling;
        if (label) label.classList.remove("disabled");
      });
    }
  }

  /**
   * Update quantity handlers (for quantity selector functionality)
   */
  updateQuantityHandlers() {
    const quantityInput = document.querySelector(".quantity-input");
    const decreaseBtn = document.querySelector(".quantity-decrease");
    const increaseBtn = document.querySelector(".quantity-increase");

    if (quantityInput && decreaseBtn && increaseBtn) {
      decreaseBtn.addEventListener("click", () => {
        const currentValue = parseInt(quantityInput.value) || 1;
        const newValue = Math.max(1, currentValue - 1);
        quantityInput.value = newValue;
      });

      increaseBtn.addEventListener("click", () => {
        const currentValue = parseInt(quantityInput.value) || 1;
        const maxValue = parseInt(quantityInput.getAttribute("max")) || 99;
        const newValue = Math.min(maxValue, currentValue + 1);
        quantityInput.value = newValue;
      });

      quantityInput.addEventListener("input", (e) => {
        const value = parseInt(e.target.value);
        const min = parseInt(e.target.getAttribute("min")) || 1;
        const max = parseInt(e.target.getAttribute("max")) || 99;

        if (isNaN(value) || value < min) {
          e.target.value = min;
        } else if (value > max) {
          e.target.value = max;
        }
      });
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new VariantSelector();
});
