/**
 * ⚙️ WEBSITE CONFIGURATION
 * 
 * Edit this file to customize your pharmacy website.
 * After making changes, save and refresh your browser.
 */

const SITE_CONFIG = {
    
    // =============================================
    // 🏥 PHARMACY INFORMATION
    // =============================================
    pharmacy: {
        name: "Lithanya Medicals",
        tagline: "Your Health, Our Priority",
        description: "Quality medicines and healthcare services at your doorstep",
        established: "2010",
        
        // Contact Details
        contact: {
            phone: "+1 (555) 123-4567",
            phoneToll: "+1 (555) 123-4568",
            email: "info@healthcarepharmacy.com",
            supportEmail: "support@healthcarepharmacy.com",
            address: "123 Health Street, Medical District",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "USA"
        },
        
        // Operating Hours
        hours: {
            weekdays: {
                label: "Monday - Saturday",
                open: "8:00 AM",
                close: "10:00 PM"
            },
            weekend: {
                label: "Sunday",
                open: "9:00 AM",
                close: "6:00 PM"
            },
            delivery: {
                label: "Delivery Hours",
                days: "Monday - Saturday",
                open: "9:00 AM",
                close: "8:00 PM"
            }
        },
        
        // Social Media
        social: {
            facebook: "https://facebook.com/healthcarepharmacy",
            twitter: "https://twitter.com/healthcarepharmacy",
            instagram: "https://instagram.com/healthcarepharmacy",
            linkedin: "https://linkedin.com/company/healthcarepharmacy",
            youtube: "https://youtube.com/@healthcarepharmacy"
        }
    },
    
    // =============================================
    // 🚚 DELIVERY INFORMATION
    // =============================================
    delivery: {
        enabled: true,
        radius: "10 miles",
        standardFee: 5.00,
        freeDeliveryMinimum: 50.00,
        sameDayAvailable: true,
        estimatedTime: "1-2 hours"
    },
    
    // =============================================
    // 🎨 THEME COLORS
    // =============================================
    theme: {
        primaryColor: "#00a86b",      // Main green
        secondaryColor: "#2c7fb8",    // Blue
        accentColor: "#ffa500",       // Orange
        
        // Optional: Change these if you want different colors
        // primaryDark: "#008555",
        // primaryLight: "#33ba88",
    },
    
    // =============================================
    // 🤖 CHATBOT SETTINGS
    // =============================================
    chatbot: {
        enabled: true,
        name: "Pharmacy Assistant",
        greeting: "Hello! I'm your pharmacy assistant. How can I help you today?",
        
        // AI Provider: "rule-based" or "openai"
        aiProvider: "rule-based",
        
        // OpenAI Settings (if using OpenAI)
        openai: {
            apiKey: "",  // Add your OpenAI API key here
            model: "gpt-3.5-turbo",
            maxTokens: 200,
            temperature: 0.7
        },
        
        // Features
        features: {
            typingIndicator: true,
            emojis: true,
            quickReplies: false
        }
    },
    
    // =============================================
    // 💊 MEDICINE CATALOG SETTINGS
    // =============================================
    medicines: {
        itemsPerPage: 24,
        enableSearch: true,
        enableFilter: true,
        categories: [
            "Tablet",
            "Syrup",
            "Injection",
            "Capsule",
            "Ointment"
        ],
        showFeaturedOnly: false,
        featuredCount: 6
    },
    
    // =============================================
    // 📧 CONTACT FORM SETTINGS
    // =============================================
    contactForm: {
        enabled: true,
        method: "mailto",  // Options: "mailto", "custom"
        
        // Required Fields
        requiredFields: ["name", "email", "subject", "message"],
        
        // Optional Fields
        optionalFields: ["phone"],
        
        // Success Message
        successMessage: "Thank you for contacting us! We'll get back to you soon.",
        
        // Error Message
        errorMessage: "Please fill in all required fields."
    },
    
    // =============================================
    // 🗺️ GOOGLE MAPS
    // =============================================
    googleMaps: {
        enabled: true,
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174435788584!2d-73.98784968459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
        
        // To get your own embed URL:
        // 1. Go to Google Maps
        // 2. Search for your pharmacy location
        // 3. Click "Share" > "Embed a map"
        // 4. Copy the src URL from the iframe
        // 5. Paste it above
    },
    
    // =============================================
    // 🎯 SPECIAL OFFERS
    // =============================================
    offers: [
        {
            title: "Vitamins & Supplements",
            discount: "20% OFF",
            description: "Get flat 20% discount on all vitamin and supplement products"
        },
        {
            title: "Pain Relief",
            discount: "15% OFF",
            description: "Save 15% on pain management medications"
        },
        {
            title: "Home Delivery",
            discount: "FREE",
            description: "Free delivery on orders above $50"
        }
    ],
    
    // =============================================
    // 👥 TEAM MEMBERS
    // =============================================
    team: [
        {
            name: "Dr. Sarah Johnson",
            role: "Chief Pharmacist",
            experience: "15+ years of experience in pharmaceutical care",
            icon: "user-md"
        },
        {
            name: "Michael Chen",
            role: "Senior Pharmacist",
            experience: "Specialist in medication therapy management",
            icon: "user-nurse"
        },
        {
            name: "Dr. Emily Rodriguez",
            role: "Clinical Pharmacist",
            experience: "Expert in chronic disease management",
            icon: "user-md"
        },
        {
            name: "David Thompson",
            role: "Pharmacy Manager",
            experience: "Ensures quality service delivery",
            icon: "user-tie"
        }
    ],
    
    // =============================================
    // 📊 STATISTICS
    // =============================================
    stats: {
        customers: "50,000+",
        experience: "15+",
        medicines: "10,000+",
        satisfaction: "99%"
    },
    
    // =============================================
    // 🔔 NOTIFICATIONS
    // =============================================
    notifications: {
        showWelcomeMessage: true,
        welcomeMessage: "Welcome to HealthCare Pharmacy!",
        showCookieNotice: false
    },
    
    // =============================================
    // 🔐 FEATURES
    // =============================================
    features: {
        chatbot: true,
        contactForm: true,
        newsletter: false,
        testimonials: false,
        blog: false,
        appointments: false
    },
    
    // =============================================
    // 📱 SEO & METADATA
    // =============================================
    seo: {
        siteName: "HealthCare Pharmacy",
        siteDescription: "Quality medicines and healthcare services. Licensed pharmacy with home delivery.",
        keywords: "pharmacy, medicines, healthcare, delivery, prescriptions",
        author: "HealthCare Pharmacy Team",
        
        // Open Graph (for social media sharing)
        ogImage: "",  // URL to your logo/image
        twitterHandle: "@healthcarepharmacy"
    },
    
    // =============================================
    // 🌐 MULTI-LANGUAGE (Future)
    // =============================================
    language: {
        default: "en",
        supported: ["en"]  // Add more: ["en", "es", "fr"]
    },
    
    // =============================================
    // ⚙️ ADVANCED SETTINGS
    // =============================================
    advanced: {
        smoothScrolling: true,
        animationsEnabled: true,
        lazyLoadImages: false,
        offlineMode: false,
        
        // Performance
        cacheTimeout: 3600,  // seconds
        
        // Analytics
        googleAnalyticsId: "",  // Add your GA4 ID: "G-XXXXXXXXXX"
        
        // Security
        enableCSP: false,  // Content Security Policy
        
        // Accessibility
        highContrastMode: false,
        largeTextMode: false
    }
};

// =============================================
// 📝 QUICK CUSTOMIZATION GUIDE
// =============================================

/**
 * TO CHANGE YOUR PHARMACY NAME:
 * 1. Edit pharmacy.name above
 * 2. Search and replace "HealthCare Pharmacy" in all HTML files
 * 
 * TO CHANGE COLORS:
 * 1. Edit theme colors above
 * 2. Or edit CSS variables in css/style.css
 * 
 * TO UPDATE CONTACT INFO:
 * 1. Edit pharmacy.contact above
 * 2. Update in all HTML files (footer sections)
 * 
 * TO CUSTOMIZE CHATBOT:
 * 1. Edit chatbot settings above
 * 2. Modify responses in js/chatbot.js
 * 
 * TO ADD/REMOVE MEDICINES:
 * 1. Edit data/medicines.json
 * 
 * TO CHANGE GOOGLE MAPS LOCATION:
 * 1. Get your embed URL from Google Maps
 * 2. Update googleMaps.embedUrl above
 * 3. Update in contact.html
 */

// =============================================
// 🚀 DEPLOYMENT CHECKLIST
// =============================================

/**
 * BEFORE DEPLOYING:
 * ☐ Update pharmacy.name
 * ☐ Update pharmacy.contact (all fields)
 * ☐ Update pharmacy.hours
 * ☐ Update pharmacy.social links
 * ☐ Update googleMaps.embedUrl
 * ☐ Review medicines in data/medicines.json
 * ☐ Test all pages locally
 * ☐ Check chatbot responses
 * ☐ Verify contact form works
 * ☐ Test on mobile device
 * ☐ Add Google Analytics ID (optional)
 * ☐ Review SEO metadata
 */

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
