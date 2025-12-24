// Contact Form Handling

function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = form.querySelector('.btn-submit');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate email sending (since this is a static site)
    setTimeout(() => {
        // Create mailto link (alternative for static sites)
        const mailtoLink = `mailto:info@lithanyamedicals.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n\n` +
            `Message:\n${formData.message}`
        )}`;
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p><strong>Thank you for contacting us!</strong></p>
            <p>We have received your message and will get back to you soon.</p>
            <p>Alternatively, you can directly email us at: <a href="${mailtoLink}">info@lithanyamedicals.com</a></p>
        `;
        formMessage.style.display = 'block';
        
        // Reset form
        form.reset();
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide message after 10 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 10000);
        
    }, 1000);
    
    return false;
}

// Form validation feedback
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        input.addEventListener('input', () => {
            input.classList.remove('error');
        });
    });
});
