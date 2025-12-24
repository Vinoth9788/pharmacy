# 🚀 Deployment Guide - HealthCare Pharmacy Website

Complete guide for deploying your pharmacy website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've customized:

- ✅ Contact information (phone, email, address)
- ✅ Google Maps embed location
- ✅ Pharmacy name and branding
- ✅ Medicine inventory (`data/medicines.json`)
- ✅ Color scheme (optional)
- ✅ Chatbot responses (optional)
- ✅ Social media links
- ✅ Store hours

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

**Pros:** Free, automatic HTTPS, easy updates  
**Cons:** Public repository (unless you have GitHub Pro)

#### Steps:

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create New Repository**
   ```
   - Click "+" icon → "New repository"
   - Name: healthcare-pharmacy (or any name)
   - Description: "Modern pharmacy website"
   - Public repository
   - Click "Create repository"
   ```

3. **Upload Your Files**
   
   **Option A: Using GitHub Website**
   ```
   - Click "uploading an existing file"
   - Drag and drop all your project files
   - Commit changes
   ```
   
   **Option B: Using Git Command Line**
   ```bash
   cd E-Pharmacy
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/healthcare-pharmacy.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   ```
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click "Save"
   ```

5. **Access Your Site**
   ```
   Your site will be live at:
   https://yourusername.github.io/healthcare-pharmacy
   
   (Wait 2-5 minutes for initial deployment)
   ```

6. **Custom Domain (Optional)**
   ```
   - Buy a domain (e.g., from Namecheap, GoDaddy)
   - In GitHub Pages settings, add custom domain
   - Update your domain's DNS records
   ```

---

### Option 2: Netlify (Easy & Fast)

**Pros:** Very easy, free SSL, drag-and-drop, custom domain  
**Cons:** None for small projects

#### Steps:

1. **Sign Up**
   - Go to https://www.netlify.com
   - Sign up (can use GitHub account)

2. **Deploy Site**
   
   **Method A: Drag & Drop**
   ```
   - Click "Add new site" → "Deploy manually"
   - Drag your entire E-Pharmacy folder
   - Wait for deployment
   - Site is live!
   ```
   
   **Method B: Connect to GitHub**
   ```
   - Click "Add new site" → "Import from Git"
   - Connect GitHub account
   - Select your repository
   - Click "Deploy site"
   ```

3. **Configure**
   ```
   - Site settings → Change site name
   - Domain settings → Add custom domain (optional)
   - SSL automatically enabled
   ```

4. **Your Site URL**
   ```
   https://your-site-name.netlify.app
   ```

---

### Option 3: Vercel

**Pros:** Fast CDN, automatic HTTPS, great performance  
**Cons:** Requires Git connection

#### Steps:

1. **Sign Up**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   ```
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: Other
   - Click "Deploy"
   ```

3. **Your Site URL**
   ```
   https://your-project.vercel.app
   ```

---

### Option 4: Traditional Web Hosting (cPanel/FTP)

**Pros:** Full control, use existing hosting  
**Cons:** Requires hosting account

#### Steps:

1. **Prepare Files**
   ```
   - Ensure index.html is in root
   - All paths are relative
   - Test locally first
   ```

2. **Upload via FTP**
   ```
   - Use FileZilla or similar FTP client
   - Connect to your hosting
   - Upload all files to public_html (or www)
   - Maintain folder structure
   ```

3. **Upload via cPanel File Manager**
   ```
   - Login to cPanel
   - Open File Manager
   - Navigate to public_html
   - Click "Upload"
   - Select all files
   - Extract if uploaded as zip
   ```

4. **Access Your Site**
   ```
   https://yourdomain.com
   ```

---

### Option 5: Firebase Hosting

**Pros:** Google infrastructure, free tier  
**Cons:** Requires Firebase CLI

#### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   cd E-Pharmacy
   firebase init hosting
   ```

3. **Configure**
   ```
   - Select or create project
   - Public directory: . (current directory)
   - Single-page app: No
   - Don't overwrite existing files
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Your Site URL**
   ```
   https://your-project.web.app
   ```

---

## 🔧 Post-Deployment Configuration

### 1. Test All Pages
```
✓ Home page loads correctly
✓ All navigation links work
✓ Medicines page displays products
✓ Search and filter functionality works
✓ Chatbot opens and responds
✓ Contact form works
✓ Google Maps displays
✓ All images/icons load
✓ Mobile responsive design
```

### 2. Update Contact Email

In all HTML files, update:
```html
<a href="mailto:info@healthcarepharmacy.com">
```
to your actual email address.

### 3. Google Maps Location

In `contact.html`, replace the Google Maps embed with your location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

To get your embed URL:
1. Go to Google Maps
2. Search your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code

### 4. Custom Domain Setup

#### For GitHub Pages:
```
1. Add CNAME file in root with your domain
2. In GitHub Settings → Pages → Custom domain
3. Update DNS records:
   - A records: 185.199.108.153, 185.199.109.153, 
                185.199.110.153, 185.199.111.153
   - Or CNAME: yourusername.github.io
```

#### For Netlify/Vercel:
```
1. Add domain in dashboard
2. Update DNS records as instructed
3. SSL automatically configured
```

### 5. Add Analytics (Optional)

Add Google Analytics to all HTML pages before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 6. Security Headers

For traditional hosting, create `.htaccess`:
```apache
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

---

## 🔄 Updating Your Site

### GitHub Pages:
```bash
# Make changes to files
git add .
git commit -m "Update content"
git push
# Wait 1-2 minutes for deployment
```

### Netlify:
```
- Drag new files to deploy manually, OR
- Push to GitHub (if connected)
- Automatic deployment
```

### Traditional Hosting:
```
- Upload changed files via FTP/cPanel
- Overwrite existing files
- Clear browser cache to see changes
```

---

## 🐛 Troubleshooting

### Issue: Site not loading
**Solution:** 
- Check if index.html is in correct directory
- Verify file names are lowercase
- Check browser console for errors

### Issue: CSS/JS not loading
**Solution:**
- Verify file paths are correct
- Check for typos in file names
- Ensure files were uploaded

### Issue: 404 errors
**Solution:**
- Check all links use relative paths
- Verify all referenced files exist
- Check file name capitalization

### Issue: Images not showing
**Solution:**
- For Font Awesome icons, check internet connection
- Verify CDN links are not blocked
- Check browser console for errors

---

## 📞 Support

If you encounter issues:
- Check the README.md for detailed documentation
- Review browser console for error messages
- Verify all files are uploaded correctly
- Test in different browsers

---

## ✅ Deployment Checklist

Print this checklist:

```
□ Files uploaded/pushed to hosting
□ All pages load correctly
□ Navigation works on all pages
□ Medicines search/filter working
□ Chatbot responds to queries
□ Contact form functional
□ Google Maps displays correctly
□ Mobile responsive verified
□ Contact info updated
□ Custom domain configured (if applicable)
□ SSL/HTTPS enabled
□ Analytics added (optional)
□ Social media links updated
□ 404 page tested
□ Cross-browser tested
□ Performance tested
```

---

## 🎉 Congratulations!

Your pharmacy website is now live! 

Share your URL:
- 📱 On social media
- 📧 In email signatures
- 🖨️ On business cards
- 🏪 In your physical store

**Need help?** Create an issue on GitHub or contact support.

---

**Made with ❤️ for better healthcare access**
