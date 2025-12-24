// Chatbot Configuration File
// Edit this file to customize chatbot behavior

const CHATBOT_CONFIG = {
    // Pharmacy Information
    pharmacyName: "HealthCare Pharmacy",
    pharmacyPhone: "+1 (555) 123-4567",
    pharmacyEmail: "info@healthcarepharmacy.com",
    pharmacyAddress: "123 Health Street, Medical District",
    
    // Operating Hours
    storeHours: {
        weekdays: "Monday - Saturday: 8:00 AM - 10:00 PM",
        weekend: "Sunday: 9:00 AM - 6:00 PM"
    },
    
    // Delivery Information
    delivery: {
        radius: "10 miles",
        fee: "$5",
        freeDeliveryThreshold: "$50",
        hours: "Monday - Saturday: 9:00 AM - 8:00 PM"
    },
    
    // Chatbot Personality
    personality: {
        name: "Pharmacy Assistant",
        greeting: "Hello! I'm your pharmacy assistant.",
        tone: "friendly and professional"
    },
    
    // Popular Medicines (Quick Reference)
    popularMedicines: [
        {
            name: "Paracetamol",
            price: 5.99,
            usage: "Pain relief and fever"
        },
        {
            name: "Ibuprofen",
            price: 7.99,
            usage: "Anti-inflammatory and pain relief"
        },
        {
            name: "Cetirizine",
            price: 8.99,
            usage: "Allergy relief"
        }
    ],
    
    // Emergency Contact
    emergencyHotline: "+1 (555) 123-4567",
    
    // Enable/Disable Features
    features: {
        enableOpenAI: false,  // Set to true to use OpenAI API
        enableTypingIndicator: true,
        enableQuickResponses: false,
        enableEmojis: true
    },
    
    // OpenAI Configuration (if enabled)
    openAI: {
        apiKey: "",  // Add your OpenAI API key here
        model: "gpt-3.5-turbo",
        maxTokens: 200,
        temperature: 0.7
    },
    
    // Custom Responses
    customResponses: {
        // Add your custom query-response pairs here
        // Example:
        // "custom query": "Custom response text"
    },
    
    // Keywords for Intent Detection
    keywords: {
        greeting: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
        thanks: ["thank", "thanks", "appreciate", "grateful"],
        timing: ["timing", "hours", "open", "close", "time", "schedule"],
        delivery: ["delivery", "deliver", "shipping", "ship"],
        price: ["price", "cost", "how much", "expensive", "cheap"],
        order: ["order", "buy", "purchase", "want to order"],
        emergency: ["emergency", "urgent", "serious", "critical"],
        fever: ["fever", "temperature", "hot", "pyrexia"],
        pain: ["pain", "ache", "hurt", "sore"],
        cold: ["cold", "cough", "flu", "sneeze"],
        allergy: ["allergy", "allergic", "allergies", "rash"]
    },
    
    // Disclaimer Text
    disclaimer: "⚠️ Important: The information provided is for general guidance only. Please consult a certified doctor before taking any medication."
};

// Export for use in chatbot.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHATBOT_CONFIG;
}
