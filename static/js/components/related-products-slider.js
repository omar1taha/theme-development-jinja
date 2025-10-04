/**
 * Related Products Slider Component
 * Handles navigation for the "YOU MAY ALSO LIKE" product carousel
 */

class RelatedProductsSlider {
  constructor(container) {
    this.container = container;
    this.slider = container.querySelector("#related-products-slider");
    this.leftArrow = container.querySelector(".slider-arrow-left");
    this.rightArrow = container.querySelector(".slider-arrow-right");
    this.progressFill = container.querySelector(".progress-fill");
    this.currentSlide = 0;
    this.productsPerPage = 4; // Fixed: 4 products per page for desktop
    this.isTouch = "ontouchstart" in window;
    this.totalProducts = 0;
    this.totalSlides = 0;
    this.paginationDots = [];
    
    // Create pagination dots container if it doesn't exist
    this.createPaginationContainer();
    
    this.init();
  }

  init() {
    if (!this.slider) return;

    // Calculate initial values
    this.totalProducts = this.slider.querySelectorAll(".product-card").length;
    this.calculateSlides();
    
    // Initialize slider only if we have products that need pagination
    if (this.totalProducts > this.productsPerPage) {
      this.setupPagination();
      this.setupEventListeners();
      this.setupTouchEvents();
      this.updateSliderPosition(true); // Initial setup without animation
    } else {
      this.hideNavigation();
    }
  }

  setupEventListeners() {
    // Arrow buttons click handlers
    if (this.leftArrow) {
      this.leftArrow.addEventListener("click", (e) => {
        e.preventDefault();
        this.previousSlide();
      });
    }

    if (this.rightArrow) {
      this.rightArrow.addEventListener("click", (e) => {
        e.preventDefault();
        this.nextSlide();
      });
    }

    // Keyboard navigation
    this.container.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.previousSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.nextSlide();
      }
    });

    // Responsive behavior on window resize
    window.addEventListener("resize", () => {
      this.handleResize();
    });
  }

  setupTouchEvents() {
    if (!this.isTouch) return;

    let startX = 0;
    let startY = 0;
    let isDragging = false;

    this.slider.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
      },
      { passive: true }
    );

    this.slider.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = startX - currentX;
        const diffY = startY - currentY;

        // Prevent scrolling if horizontal swipe is more significant
        if (Math.abs(diffX) > Math.abs(diffY)) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    this.slider.addEventListener(
      "touchend",
      (e) => {
        if (!isDragging) return;

        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        const threshold = 50;

        if (Math.abs(diffX) > threshold) {
          if (diffX > 0) {
            this.nextSlide();
          } else {
            this.previousSlide();
          }
        }

        isDragging = false;
      },
      { passive: true }
    );
  }

  goToSlide(slideIndex, skipAnimation = false) {
    if (slideIndex < 0 || slideIndex >= this.totalSlides) return;

    this.currentSlide = slideIndex;
    this.updatePaginationDots();
    this.updateProgressBar();
    this.updateArrowStates();
    this.updateSliderPosition(skipAnimation);
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  updatePaginationDots() {
    this.paginationDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide);
      dot.setAttribute("aria-current", index === this.currentSlide ? "true" : "false");
    });
  }

  updateProgressBar() {
    // Update the progress bar in the slider navigation
    const progressFill = document.querySelector('.slider-navigation .progress-fill');
    if (!progressFill || this.totalSlides <= 1) return;

    const progressPercentage = ((this.currentSlide + 1) / this.totalSlides) * 100;
    progressFill.style.width = `${progressPercentage}%`;
  }

  updateArrowStates() {
    if (this.leftArrow) {
      this.leftArrow.disabled = this.currentSlide === 0;
      this.leftArrow.setAttribute('aria-disabled', this.currentSlide === 0);
    }

    if (this.rightArrow) {
      this.rightArrow.disabled = this.currentSlide === this.totalSlides - 1;
      this.rightArrow.setAttribute('aria-disabled', this.currentSlide === this.totalSlides - 1);
    }
  }

  calculateSlides() {
    this.productsPerPage = this.getVisibleProductsCount();
    this.totalSlides = Math.ceil(this.totalProducts / this.productsPerPage);
  }

  updateSliderPosition(skipAnimation = false) {
    const products = this.slider.querySelectorAll(".product-card");
    if (!products.length) return;

    // Calculate transform offset
    // Move by 100% for each slide (each slide shows productsPerPage products)
    const offset = -(this.currentSlide * 100);
    
    // Apply transform to move the slider
    const transition = skipAnimation ? 'none' : 'transform 0.3s ease-in-out';
    this.slider.style.transition = transition;
    this.slider.style.transform = `translateX(${offset}%)`;
    
    // Reset transition after animation
    if (skipAnimation) {
      requestAnimationFrame(() => {
        this.slider.style.transition = '';
      });
    }
  }

  handleResize() {
    const oldProductsPerPage = this.productsPerPage;
    this.calculateSlides();
    
    // If products per page changed, recalculate everything
    if (oldProductsPerPage !== this.productsPerPage) {
      // Adjust current slide to prevent going out of bounds
      if (this.currentSlide >= this.totalSlides) {
        this.currentSlide = Math.max(0, this.totalSlides - 1);
      }
      
      this.setupPagination();
      this.updateSliderPosition(true);
    }
    
    // Check if navigation should be shown/hidden
    if (this.totalProducts <= this.productsPerPage) {
      this.hideNavigation();
    } else {
      this.showNavigation();
    }
  }

  hideNavigation() {
    const navigation = this.container.querySelector(".slider-navigation");
    if (navigation) navigation.style.display = "none";
    
    // Reset slider position when navigation is hidden
    this.slider.style.transform = 'translateX(0%)';
  }

  showNavigation() {
    const navigation = this.container.querySelector(".slider-navigation");
    if (navigation) navigation.style.display = "flex";
  }

  getVisibleProductsCount() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) return 4;
    if (screenWidth >= 768) return 3;
    return 2;
  }

  createPaginationContainer() {
    // Check if pagination container already exists
    let dotsContainer = this.container.querySelector(".pagination-dots");
    if (!dotsContainer) {
      // Create pagination container and insert it before the navigation
      dotsContainer = document.createElement("div");
      dotsContainer.className = "pagination-dots";
      dotsContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin: 1rem 0;
      `;
      
      const navigation = this.container.querySelector(".slider-navigation");
      if (navigation) {
        navigation.parentNode.insertBefore(dotsContainer, navigation);
      }
    }
  }

  setupPagination() {
    const dotsContainer = this.container.querySelector(".pagination-dots");
    if (!dotsContainer) return;

    // Clear existing dots
    dotsContainer.innerHTML = "";

    // Only create dots if we have more than one slide
    if (this.totalSlides > 1) {
      for (let i = 0; i < this.totalSlides; i++) {
        const dot = document.createElement("button");
        dot.className = "pagination-dot";
        dot.setAttribute("data-slide", i);
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.style.cssText = `
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background-color: #e0e0e0;
          cursor: pointer;
          transition: background-color 0.2s ease;
        `;

        if (i === this.currentSlide) {
          dot.classList.add("active");
          dot.setAttribute("aria-current", "true");
          dot.style.backgroundColor = '#666';
        }

        dot.addEventListener("click", (e) => {
          e.preventDefault();
          this.goToSlide(i);
        });

        dotsContainer.appendChild(dot);
      }
      
      dotsContainer.style.display = 'flex';
    } else {
      dotsContainer.style.display = 'none';
    }

    // Update references
    this.paginationDots = dotsContainer.querySelectorAll(".pagination-dot");
    this.updateProgressBar();
    this.updateArrowStates();
  }

  // Method to add products dynamically (for future use)
  addProduct(productHTML) {
    this.slider.insertAdjacentHTML("beforeend", productHTML);
    this.updateVisibleProducts();
  }

  // Method to refresh the slider (useful after AJAX updates)
  refresh() {
    // Re-get elements in case they've been updated
    this.leftArrow = this.container.querySelector(".slider-arrow-left");
    this.rightArrow = this.container.querySelector(".slider-arrow-right");
    this.progressFill = this.container.querySelector(".progress-fill");
    
    // Recalculate products and slides
    this.totalProducts = this.slider.querySelectorAll(".product-card").length;
    this.calculateSlides();
    
    // Reset current slide if out of bounds
    if (this.currentSlide >= this.totalSlides) {
      this.currentSlide = 0;
    }
    
    // Reinitialize
    this.setupPagination();
    this.updateSliderPosition(true);
  }
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const relatedProductsContainer = document.querySelector(".related-products-section");

  if (relatedProductsContainer) {
    new RelatedProductsSlider(relatedProductsContainer);
  }
});

// Handle dynamic content loading (if needed)
document.addEventListener("htmx:afterSwap", function (evt) {
  const relatedProductsContainer = evt.detail.target.querySelector(".related-products-section");

  if (relatedProductsContainer) {
    new RelatedProductsSlider(relatedProductsContainer);
  }
});

// Export for module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = RelatedProductsSlider;
}
