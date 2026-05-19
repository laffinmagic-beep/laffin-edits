// Laffin Edits - Main JavaScript
// Simple utilities for smooth scrolling and interactions

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Simple fade-in animation for sections on scroll
  const sections = document.querySelectorAll('.why-section, .services-section, .work-callout, .quote-section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  console.log('Laffin Edits - Ready for video magic');
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
