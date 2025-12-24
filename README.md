# 🏥 HealthCare Pharmacy - Modern Static Website

A modern, user-friendly pharmacy website with AI-powered chatbot support. Built with pure HTML, CSS, and JavaScript - no frameworks or databases required.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [AI Chatbot Configuration](#ai-chatbot-configuration)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

HealthCare Pharmacy is a static website designed to provide an online presence for pharmacy businesses. It features a modern UI, responsive design, and an AI-powered chatbot for customer support - all without requiring a backend or database.

## ✨ Features

### 📄 Pages

- **Home** - Hero section, featured medicines, special offers, and key features
- **Medicines** - Comprehensive medicine catalog with search and filter functionality
- **Services** - Detailed information about pharmacy services
- **About Us** - Company information, mission, vision, team, and certifications
- **Contact** - Contact form, location map, and contact details

### 🤖 AI Chatbot

- Floating chatbot icon on all pages
- Rule-based intelligent responses
- Handles common pharmacy queries:
  - Medicine information and pricing
  - Store timings
  - Delivery information
  - Dosage guidance
  - Health tips
- Optional OpenAI API integration for advanced AI responses

### 🎨 Design Features

- Modern, clean interface with pharmacy-themed colors (Green/Blue)
- Smooth animations and hover effects
- Fully responsive (Mobile, Tablet, Desktop)
- Accessibility-friendly
- Fast loading times
- Modern typography (Poppins font)
- Sticky navigation bar
- Medical disclaimer section

### 🔧 Technical Features

- **No Database** - All data in static JSON files
- **Client-side Search & Filter** - Fast, efficient medicine browsing
- **Email Integration** - Contact form with mailto functionality
- **Google Maps Integration** - Interactive location map
- **Icon Library** - Font Awesome icons
- **Modern CSS** - CSS Grid, Flexbox, CSS Variables
- **Vanilla JavaScript** - No dependencies required

## 💻 Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Google Fonts (Poppins)
- **Data Storage:** JSON files
- **Hosting:** Compatible with GitHub Pages, Netlify, Vercel, or any static host

## 📁 Project Structure

```
E-Pharmacy/
│
├── index.html              # Home page
├── medicines.html          # Medicines catalog page
├── services.html           # Services page
├── about.html             # About us page
├── contact.html           # Contact page
│
├── css/
│   └── style.css          # Main stylesheet (all styles)
│
├── js/
│   ├── main.js            # Core functionality
│   ├── medicines.js       # Medicine catalog logic
│   ├── contact.js         # Contact form handling
│   └── chatbot.js         # AI chatbot functionality
│
├── data/
│   └── medicines.json     # Medicine database
│
└── README.md             # Project documentation
```

## 🚀 Installation

### Option 1: Direct Use

1. **Download the project:**
   ```bash
   git clone <repository-url>
   cd E-Pharmacy
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended)

### Option 2: Using Local Server

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (http-server):
```bash
npx http-server -p 8000
```

#### Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

3. **Access the website:**
   - Open browser and navigate to `http://localhost:8000`

## 📖 Usage

### Browsing Medicines

1. Navigate to the **Medicines** page
2. Use the search box to find specific medicines
3. Filter by category (Tablets, Syrups, Injections, etc.)
4. Click on any medicine card for detailed information

### Using the Chatbot

1. Click the floating chat icon (bottom-right corner)
2. Type your question or query
3. The chatbot will provide instant responses
4. Examples of queries:
   - "What are your store timings?"
   - "Do you have home delivery?"
   - "I need medicine for fever"
   - "Tell me about paracetamol"

### Contact Form

1. Navigate to the **Contact** page
2. Fill in your details
3. Submit the form
4. The form will open your email client with pre-filled information

## 🎨 Customization

### Updating Medicines

Edit `data/medicines.json`:

```json
{
    "id": 1,
    "name": "Medicine Name",
    "category": "Tablet",
    "price": 9.99,
    "usage": "Usage instructions here",
    "image": "💊",
    "featured": true
}
```

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #00a86b;      /* Main green */
    --secondary-color: #2c7fb8;    /* Blue accent */
    --accent-color: #ffa500;       /* Orange */
}
```

### Updating Contact Information

Edit contact details in the footer section of all HTML files:

```html
<li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
<li><i class="fas fa-envelope"></i> info@healthcarepharmacy.com</li>
<li><i class="fas fa-map-marker-alt"></i> Your Address</li>
```

### Customizing Chatbot Responses

Edit `js/chatbot.js` to add or modify responses:

```javascript
const chatbotKnowledge = {
    responses: {
        customQuery: "Your custom response here",
        // Add more responses
    }
};
```

## 🤖 AI Chatbot Configuration

### Current Setup (Rule-Based)

The chatbot uses predefined responses based on keyword matching. No API key required.

### Optional: OpenAI Integration

To enable advanced AI responses:

1. **Get OpenAI API Key:**
   - Sign up at https://platform.openai.com/
   - Create an API key

2. **Update `js/chatbot.js`:**
   ```javascript
   // Uncomment the OpenAI section at the bottom
   const OPENAI_API_KEY = 'your-api-key-here';
   
   // Replace the generateResponse call in sendMessage with:
   const response = await generateAIResponse(message);
   ```

3. **Important:** Never commit API keys to version control. Use environment variables or secure key management.

## 🌐 Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://username.github.io/repository-name`

### Netlify

1. Sign up at https://www.netlify.com
2. Drag and drop your project folder
3. Site will be deployed instantly
4. Custom domain available

### Vercel

1. Sign up at https://vercel.com
2. Import your Git repository
3. Deploy with one click
4. Automatic HTTPS and custom domain support

### Traditional Hosting

Upload all files to your web server via FTP/SFTP. Ensure:
- All files maintain their directory structure
- `index.html` is in the root directory
- Server supports HTTPS (recommended)

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer 11 (limited support)

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 481px - 768px
- **Mobile:** ≤ 480px

## 🔒 Security & Privacy

- No user data collection
- No cookies used
- No backend database
- Contact form uses mailto (no data stored)
- HTTPS recommended for production

## ⚠️ Medical Disclaimer

This website is for informational purposes only. Always include the disclaimer:

> "The information provided on this website is for general guidance only and does not replace professional medical advice. Please consult a certified doctor before taking any medication."

## 🛠️ Troubleshooting

### Issue: Medicines not loading
**Solution:** Ensure `data/medicines.json` exists and is valid JSON.

### Issue: Chatbot not responding
**Solution:** Check browser console for JavaScript errors. Ensure all JS files are loaded.

### Issue: Styles not applying
**Solution:** Verify CSS file path and check for typos in `<link>` tag.

### Issue: Icons not showing
**Solution:** Check internet connection (Font Awesome loads from CDN).

## 📈 Future Enhancements (Optional)

- 🛒 Shopping cart functionality
- 👤 User authentication
- 💳 Payment gateway integration
- 📋 Prescription upload
- 🗣️ Voice-based chatbot
- 🌐 Multi-language support
- 📊 Analytics dashboard
- 📧 Email newsletter subscription

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2025 HealthCare Pharmacy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Developer

Created with ❤️ by HealthCare Pharmacy Team

## 📞 Support

For support, email: support@healthcarepharmacy.com

---

**⭐ If you find this project helpful, please consider giving it a star!**
