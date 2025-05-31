document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations when elements come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.slide-up, .fade-in, .scale-up');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    animateOnScroll();
    
    // Re-run animations when navigating back to page
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            animateOnScroll();
        }
    });
});