# 🛍️ E-Commerce Theme Developer Task

A modern, responsive Flask-based e-commerce PDP application featuring a complete product detail page with advanced UI components and interactive features.


## 🚀 Quick Start

### 📋 Prerequisites

Ensure you have the following installed:
- **Python 3.8+** 
- **pip** (Python package manager)
- **(Optional)** `virtualenv` for isolated environments

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd theme-developer-task
   ```

2. **(Optional) Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate        # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the development server:**
   ```bash
   python app.py
   ```

5. **Open in browser:**
   ```
   👉 http://localhost:5002
   ```


## ✨ Features

### 🎨 **Modern UI Components**
- **Responsive Product Gallery** - Interactive media slider with zoom functionality
- **Dynamic Product Information** - Real-time pricing with discount badges
- **Variant Selection** - Color and size options with visual feedback
- **Customer Reviews** - Star ratings and review summaries
- **Related Products Slider** - Horizontal scrolling product recommendations

### 📱 **Fully Responsive Design**
- **Mobile-First Approach** - Optimized for all device sizes
- **Flexible Grid System** - Bootstrap-powered responsive layout
- **Touch-Friendly Navigation** - Swipe gestures and mobile-optimized controls
- **Adaptive Typography** - Scalable fonts and spacing

### 🛠️ **Advanced Functionality**
- **Component-Based Architecture** - Modular Jinja2 templates
- **Reusable Macros** - Consistent pricing and rating components
- **Interactive Sliders** - JavaScript-powered navigation
- **Dynamic Content** - JSON-driven product data

---

## 🚀 Quick Start

### 📋 Prerequisites

Ensure you have the following installed:
- **Python 3.8+** 
- **pip** (Python package manager)
- **(Optional)** `virtualenv` for isolated environments

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd theme-developer-task
   ```

2. **(Optional) Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate        # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the development server:**
   ```bash
   python app.py
   ```

5. **Open in browser:**
   ```
   👉 http://localhost:5002
   ```

---

## 🧩 Key Components

### 🖼️ **Media Gallery**
- Interactive image slider with thumbnails
- Zoom functionality for detailed product views
- Touch/swipe support for mobile devices

### 💰 **Pricing Component**
- Dynamic discount calculations
- Strike-through original pricing
- Percentage discount badges

### ⭐ **Rating System**
- Reusable star rating macro
- Configurable display options
- Bootstrap Icons and HTML star support

### 🛒 **Related Products**
- Horizontal scrolling product grid
- Touch-enabled navigation
- Progress bar and arrow controls

### 📱 **Responsive Footer**
- Multi-column layout on desktop
- Stacked mobile-friendly design
- Payment method icons
- Newsletter subscription

---

## 🎯 Technical Highlights

### **Frontend Technologies**
- **Bootstrap 5.3.2** - Responsive framework
- **Jinja2** - Template engine with macros
- **Vanilla JavaScript** - Interactive components
- **CSS Grid & Flexbox** - Modern layout techniques

### **Development Features**
- **Component-Based Architecture** - Modular and maintainable code
- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels and semantic HTML
- **Performance** - Optimized assets and lazy loading

### **Browser Support**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🔧 Development

### **Adding New Sections**
1. Create section in `src/sections/`
2. Add corresponding CSS in `static/css/sections/`
3. Include in templates using `{% include %}`

### **Creating Macros**
1. Define macro in `src/macros/`
2. Import with `{% from "macros/filename.jinja" import macro_name %}`
3. Use with `{{ macro_name(parameters) }}`

### **Responsive Development**
- Use Bootstrap grid classes
- Add custom CSS media queries for fine-tuning
- Test across multiple device sizes

---

## 📝 Development Notes

- **Product Data:** Loaded from `data/product.json`
- **Static Assets:** Served from `static/` directory
- **Templates:** Component-based architecture for reusability
- **Styling:** CSS organized by component structure
- **JavaScript:** Modular approach with event-driven components

---
