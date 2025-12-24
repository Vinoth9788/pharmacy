// Main JavaScript functionality

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Load Featured Medicines on Home Page
async function loadFeaturedMedicines() {
    const container = document.getElementById('featuredMedicines');
    if (!container) return;

    try {
        const response = await fetch('data/medicines.json');
        const medicines = await response.json();
        
        // Filter featured medicines
        const featured = medicines.filter(med => med.featured).slice(0, 6);
        
        container.innerHTML = featured.map(medicine => `
            <div class="medicine-card">
                <div class="medicine-icon">${medicine.image}</div>
                <h3>${medicine.name}</h3>
                <p class="medicine-category">${medicine.category}</p>
                <p class="medicine-usage">${medicine.usage.substring(0, 60)}...</p>
                <div class="medicine-footer">
                    <span class="medicine-price">$${medicine.price}</span>
                    <button class="btn-info" onclick="showMedicineInfo(${medicine.id})">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading medicines:', error);
        container.innerHTML = '<p>Error loading medicines. Please try again later.</p>';
    }
}

// Show Medicine Info Modal
function showMedicineInfo(medicineId) {
    fetch('data/medicines.json')
        .then(response => response.json())
        .then(medicines => {
            const medicine = medicines.find(m => m.id === medicineId);
            if (medicine) {
                alert(`${medicine.name}\n\nCategory: ${medicine.category}\nPrice: $${medicine.price}\n\nUsage:\n${medicine.usage}\n\nNote: Please consult a doctor before taking any medication.`);
            }
        })
        .catch(error => console.error('Error:', error));
}

// Chatbot Toggle
function toggleChatbot() {
    const chatbot = document.getElementById('chatbotContainer');
    const button = document.getElementById('chatbotButton');
    
    if (chatbot.style.display === 'flex') {
        chatbot.style.display = 'none';
        button.style.display = 'flex';
    } else {
        chatbot.style.display = 'flex';
        button.style.display = 'none';
        // Focus on input
        setTimeout(() => {
            document.getElementById('chatInput').focus();
        }, 100);
    }
}

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .medicine-card, .offer-card, .service-card-large');
    animatedElements.forEach(el => observer.observe(el));
    
    // Load featured medicines if on home page
    loadFeaturedMedicines();
});

// Scroll to Top Button (Optional)
let scrollTopBtn;
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        if (!scrollTopBtn) {
            scrollTopBtn = document.createElement('button');
            scrollTopBtn.className = 'scroll-top';
            scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.appendChild(scrollTopBtn);
        }
        scrollTopBtn.style.display = 'flex';
    } else if (scrollTopBtn) {
        scrollTopBtn.style.display = 'none';
    }
});
