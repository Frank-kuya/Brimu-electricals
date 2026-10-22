# Brimu Electricals & Engineering Ltd

A responsive static website for **Brimu Electricals & Engineering Ltd** in Kakamega, Western Kenya. It presents electrical services, project references, and direct consultation options.

Saved as an independent, standalone project at:  
`C:\Users\frank\.gemini\antigravity\scratch\brimu-engineering-frontend\`

---

## Site Features

### 1. Zero Automated "Self-Quoting" (Human-Centered Engineering Consultation)
* In real-world electrical contracting, automated website calculators generate misleading costs because they cannot inspect wall masonry (quarry stone vs brick), earthing soil resistance, or transformer distances.
* Replaced automated self-quoting with an **Interactive Project Scope Builder**:
  * Clients select their Property Type, Power Phase (Single 240V vs Three-Phase 415V), Scope Requirements, and Western Kenya Location.
  * The tool formats a structured project brief.
  * Clicking **"Send Brief Directly to Brian (WhatsApp)"** opens a pre-filled WhatsApp chat with **Eng. Brian Murarai (+254 752 916 659)** so he can personally review blueprints and provide an authentic, binding Bill of Quantities (BQ).
  * A parallel **"Send via Email"** button allows clients to email blueprints and CAD drawings directly to `brianmurarai97@gmail.com`.

### 2. Visual Design and Accessibility
* Bright blue and green engineering palette with light surfaces and clear text contrast.
* Responsive desktop and mobile layouts, including keyboard-operable navigation and project galleries.
* Reduced-motion preference support, visible keyboard focus, semantic page landmarks, and accessible dialog states.
* Project photographs are illustrative references, not verified Brimu jobsite photographs.

### 3. Interactive Before & After Craftsmanship Comparison Slider
* Interactive split-slider widget letting property owners drag a divider handle to inspect the difference between rushed, tangled wiring and Brimu's neat, trunked, DIN-rail surge-protected switchboards.

### 4. Persistent Floating Engagement Dock
* Floating pill at the bottom-right featuring:
  * **WhatsApp Chat:** Glowing green WhatsApp button with live pulsing "Online in Kakamega" indicator.
  * **Email Blueprints:** Direct mailto action for sending floor plans and architectural diagrams.

---

## 📁 File Structure

```
C:\Users\frank\.gemini\antigravity\scratch\brimu-engineering-frontend\
├── css/
│   └── style.css            # Responsive blue-green design system
├── js/
│   ├── data.js              # Comprehensive Kakamega engineering data repository
│   └── app.js               # Scope builder, before/after slider & WhatsApp integration
├── index.html               # Main interactive application
├── start.bat                # One-click Windows browser launcher
└── README.md                # Project documentation
```

---

## 🚀 How to Open and Preview

1. **Option A (Instant double-click):**  
   Double-click `start.bat` in `C:\Users\frank\.gemini\antigravity\scratch\brimu-engineering-frontend\`. It opens immediately in your default web browser with zero server setup required!
   
2. **Option B (Direct file open):**  
   Open `C:\Users\frank\.gemini\antigravity\scratch\brimu-engineering-frontend\index.html` in Chrome, Edge, Firefox, or Safari.

## External Services

Google Fonts and Unsplash images require an internet connection. WhatsApp links open a chat with the business; email links use the visitor's configured mail application. The site has no server-side form processing or online quotation system.
