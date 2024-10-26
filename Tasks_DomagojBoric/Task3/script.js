
  // JavaScript - Custom Swiper Class
class CustomSwiper {
    constructor() {
        this.swiper = null;
        this.isInitialized = false;
        this.init();
        this.setupEventListeners();
    }

    init() {
        this.swiper = new Swiper('.swiper-container', {
            // Swiper options
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // Mobile
                375: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // Desktop
                1440: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });

        // Add slide change event listener
        this.swiper.on('slideChange', () => {
            console.log('Active slide index:', this.swiper.activeIndex);
        });

        this.isInitialized = true;
    }

    setupEventListeners() {
        const toggleButton = document.querySelector('.swiper-toggle');
        toggleButton.addEventListener('click', () => this.toggleSwiper());
    }

    toggleSwiper() {
        if (this.isInitialized) {
            this.swiper.destroy(true, true);
            this.isInitialized = false;
            console.log('Swiper destroyed');
        } else {
            this.init();
            console.log('Swiper initialized');
        }
    }
}

// Initialize the custom swiper
document.addEventListener('DOMContentLoaded', () => {
    const customSwiper = new CustomSwiper();
});
