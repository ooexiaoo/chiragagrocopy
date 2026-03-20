// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Google Map
  const map = document.getElementById('map');
  map.innerHTML = '<iframe title="map" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.5250047856694!2d73.06963610000001!3d22.258094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb86bfde5d08d%3A0xb1ad47a816576045!2sUbhu%20Faliyu%2C%20115%2C%20near%20Ramji%20Mandir%2C%20Tajpura%2C%20Gujarat%20391440!5e0!3m2!1sen!2sin!4v1774019102405!5m2!1sen!2sin"></iframe>';
  
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
  // Sticky Navigation on Scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
/*   // Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demonstration, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been received. We'll contact you soon at ${email}.`);
      
      // Reset the form
      contactForm.reset();
    });
  } */
  
  // Testimonial Slider Animation
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    testimonialSlider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - testimonialSlider.offsetLeft;
      scrollLeft = testimonialSlider.scrollLeft;
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    
    testimonialSlider.addEventListener('mouseup', () => {
      isDown = false;
    });
    
    testimonialSlider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testimonialSlider.offsetLeft;
      const walk = (x - startX) * 2;
      testimonialSlider.scrollLeft = scrollLeft - walk;
    });
  }
});