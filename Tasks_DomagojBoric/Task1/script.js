        // Custom Element Definition
        class RevealWrapper extends HTMLElement {
            constructor() {
                super();
                
                // Toggle function for expandable content
                this.toggleContent = () => {
                    const button = this.querySelector('.text-section__button');
                    const expandable = this.querySelector('.image-text__expandable');
                    
                    if (expandable.classList.contains('image-text__expandable--open')) {
                        expandable.classList.remove('image-text__expandable--open');
                        button.textContent = 'Learn More';
                    } else {
                        expandable.classList.add('image-text__expandable--open');
                        button.textContent = 'View Less';
                    }
                };

                // Intersection Observer setup
                this.observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            const section = this.querySelector('.reveal-section');
                            if (entry.isIntersecting) {
                                section.classList.add('reveal-section--visible');
                            } else {
                                section.classList.remove('reveal-section--visible');
                            }
                        });
                    },
                    {
                        threshold: 0.2
                    }
                );
            }

            connectedCallback() {
                // Add click event listener
                const button = this.querySelector('.text-section__button');
                button.addEventListener('click', this.toggleContent);

                // Start observing the section
                this.observer.observe(this);
            }

            disconnectedCallback() {
                // Clean up
                const button = this.querySelector('.text-section__button');
                button.removeEventListener('click', this.toggleContent);
                this.observer.disconnect();
            }
        }

        // Register custom element
        customElements.define('reveal-wrapper', RevealWrapper);
  