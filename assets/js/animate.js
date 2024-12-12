document.addEventListener('DOMContentLoaded', () => {
    const animatedBlocks = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });
    animatedBlocks.forEach(block => observer.observe(block));
});
