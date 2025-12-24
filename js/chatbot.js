// AI Chatbot Functionality

// Chatbot knowledge base (rule-based responses)
const chatbotKnowledge = {
    greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    thanks: ['thank', 'thanks', 'appreciate'],
    
    responses: {
        greeting: "Hello! I'm your pharmacy assistant. I can help you with:\n• Medicine information\n• Store timings\n• Delivery details\n• Dosage guidance\n• General health queries\n\nHow can I assist you today?",
        
        thanks: "You're welcome! If you have any other questions, feel free to ask. Stay healthy! 😊",
        
        storeTiming: "📅 Our store timings:\n• Monday - Saturday: 8:00 AM - 10:00 PM\n• Sunday: 9:00 AM - 6:00 PM\n\nWe're here to serve you!",
        
        delivery: "🚚 Home Delivery Information:\n• Delivery within 10 miles radius\n• Standard delivery fee: $5\n• FREE delivery on orders over $50\n• Same-day delivery available\n• Delivery Hours: Mon-Sat, 9 AM - 8 PM\n\nWould you like to place an order?",
        
        paracetamol: "💊 Paracetamol (500mg):\n• Used for: Pain relief & fever\n• Dosage: 1-2 tablets every 4-6 hours\n• Maximum: 8 tablets per day\n• Price: $5.99\n\n⚠️ Note: Do not exceed recommended dose. Consult doctor if symptoms persist.",
        
        fever: "🌡️ For fever management:\n• Take Paracetamol or Ibuprofen\n• Stay hydrated (drink plenty of water)\n• Rest adequately\n• Use cold compress if needed\n\n⚠️ If fever exceeds 102°F or persists for more than 3 days, please consult a doctor immediately.",
        
        coldCough: "🤧 For cold and cough:\n• Cough Syrup (Dextromethorphan) - $9.99\n• Cetirizine for allergies - $8.99\n• Stay hydrated and get rest\n• Use steam inhalation\n\n⚠️ Consult doctor if symptoms worsen or persist beyond a week.",
        
        antibiotics: "💊 Antibiotics like Amoxicillin:\n⚠️ IMPORTANT: Antibiotics require a doctor's prescription\n• Used for bacterial infections only\n• Complete the full course as prescribed\n• Do not share antibiotics\n\nPlease consult a doctor for proper diagnosis and prescription.",
        
        vitamins: "🌟 Vitamin Supplements Available:\n• Vitamin D3 1000 IU - $15.99\n• Multivitamin Complex - $22.99\n• Calcium + Vitamin D - $16.99\n• Zinc Sulfate 50mg - $12.99\n• Omega-3 Fish Oil - $19.99\n\nThese support overall health and immunity!",
        
        allergy: "🤧 For allergies, we recommend:\n• Cetirizine 10mg - $8.99\n• Loratadine 10mg - $9.99\n• Levocetirizine 5mg - $10.99\n\nDosage: Usually 1 tablet daily\n⚠️ May cause drowsiness. Consult doctor for chronic allergies.",
        
        pain: "💊 Pain relief medications:\n• Paracetamol 500mg - $5.99\n• Ibuprofen 400mg - $7.99\n• Aspirin 75mg - $6.99\n\n⚠️ Always take with food and follow dosage instructions. Consult doctor for chronic pain.",
        
        prescription: "📋 Prescription Guidance:\n• Our pharmacists can help you understand your prescriptions\n• We provide dosage instructions\n• Drug interaction warnings\n• Generic alternatives\n\nVisit our Services page or contact us at +1 (555) 123-4567",
        
        contact: "📞 Contact Information:\n• Phone: +1 (555) 123-4567\n• Email: info@healthcarepharmacy.com\n• Address: 123 Health Street, Medical District\n\nFeel free to reach out anytime!",
        
        emergency: "🚨 EMERGENCY:\nFor medical emergencies, please call:\n• Emergency Hotline: +1 (555) 123-4567\n• Or dial 911 immediately\n\nDo not wait for online consultation in case of serious medical emergencies!",
        
        order: "🛒 To place an order:\n1. Browse our Medicines page\n2. Note down the medicine names\n3. Call us at +1 (555) 123-4567\n4. Or email: info@healthcarepharmacy.com\n\nWe'll arrange delivery for you! (Free delivery on orders over $50)",
        
        price: "💰 For medicine prices:\n• Check our Medicines page for complete pricing\n• We offer competitive prices\n• Special discounts available on bulk orders\n• Free delivery on orders over $50\n\nWould you like to know about a specific medicine?",
        
        default: "I'm here to help! I can assist you with:\n• Medicine information and prices\n• Store timings and location\n• Delivery information\n• Dosage guidance\n• Health tips\n\nPlease ask me anything about our pharmacy services!"
    }
};

// Analyze user message and generate response
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Check for greetings
    if (chatbotKnowledge.greetings.some(greeting => message.includes(greeting))) {
        return chatbotKnowledge.responses.greeting;
    }
    
    // Check for thanks
    if (chatbotKnowledge.thanks.some(thank => message.includes(thank))) {
        return chatbotKnowledge.responses.thanks;
    }
    
    // Store timing queries
    if (message.includes('timing') || message.includes('hours') || message.includes('open') || 
        message.includes('close') || message.includes('time')) {
        return chatbotKnowledge.responses.storeTiming;
    }
    
    // Delivery queries
    if (message.includes('delivery') || message.includes('deliver') || message.includes('shipping')) {
        return chatbotKnowledge.responses.delivery;
    }
    
    // Specific medicines
    if (message.includes('paracetamol') || message.includes('acetaminophen')) {
        return chatbotKnowledge.responses.paracetamol;
    }
    
    // Health conditions
    if (message.includes('fever') || message.includes('temperature')) {
        return chatbotKnowledge.responses.fever;
    }
    
    if (message.includes('cold') || message.includes('cough') || message.includes('flu')) {
        return chatbotKnowledge.responses.coldCough;
    }
    
    if (message.includes('allergy') || message.includes('allergic') || message.includes('allergies')) {
        return chatbotKnowledge.responses.allergy;
    }
    
    if (message.includes('pain') || message.includes('ache') || message.includes('hurt')) {
        return chatbotKnowledge.responses.pain;
    }
    
    // Medication types
    if (message.includes('antibiotic') || message.includes('amoxicillin')) {
        return chatbotKnowledge.responses.antibiotics;
    }
    
    if (message.includes('vitamin') || message.includes('supplement')) {
        return chatbotKnowledge.responses.vitamins;
    }
    
    // Services
    if (message.includes('prescription')) {
        return chatbotKnowledge.responses.prescription;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('phone') || message.includes('address') || 
        message.includes('location')) {
        return chatbotKnowledge.responses.contact;
    }
    
    // Emergency
    if (message.includes('emergency') || message.includes('urgent') || message.includes('serious')) {
        return chatbotKnowledge.responses.emergency;
    }
    
    // Order
    if (message.includes('order') || message.includes('buy') || message.includes('purchase')) {
        return chatbotKnowledge.responses.order;
    }
    
    // Price
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
        return chatbotKnowledge.responses.price;
    }
    
    // Default response
    return chatbotKnowledge.responses.default;
}

// Send message function
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Display user message
    addMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate and display bot response after a delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Add message to chat
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    
    // Convert newlines to <br> and preserve formatting
    const formattedText = text.replace(/\n/g, '<br>');
    messageDiv.innerHTML = `<p>${formattedText}</p>`;
    
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbotMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Handle Enter key press
function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Quick response buttons (optional enhancement)
function addQuickResponses() {
    const responses = [
        "Store timings",
        "Delivery info",
        "Medicine for fever",
        "Contact details"
    ];
    
    // This can be implemented as clickable quick response buttons
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    // Add welcome message with delay
    setTimeout(() => {
        // Welcome message is already in HTML
    }, 500);
});

// Optional: OpenAI API Integration (requires API key)
// Uncomment and add your API key to use OpenAI instead of rule-based responses

/*
const OPENAI_API_KEY = 'your-api-key-here'; // Add your OpenAI API key

async function generateAIResponse(userMessage) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful pharmacy assistant. Provide information about medicines, health tips, and pharmacy services. Always include a medical disclaimer for medication advice.'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI API Error:', error);
        return generateResponse(userMessage); // Fallback to rule-based
    }
}

// Replace the setTimeout in sendMessage() with:
// const response = await generateAIResponse(message);
*/
