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


### 📱 **Fully Responsive Design**
- **Mobile-First Approach** - Optimized for all device sizes
- **Flexible Grid System** - Bootstrap-powered responsive layout

### 🛠️ **Advanced Functionality**
- **Variant Selection** - Color and size options with visual feedback, updates with each variant change 
- **Component-Based Architecture** - Modular Jinja2 templates
- **Reusable Macros** - Consistent pricing and rating components
- **Interactive Sliders** - JavaScript-powered navigation
- **Dynamic Content** - JSON-driven product data enhancements, added dummy sizes and hex colors for the arabic color names in starer json

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

## 🎯 Technical Highlights

### **Frontend Technologies**
- **Bootstrap 5.3.2** - Responsive framework
- **Jinja2** - Template engine with macros
- **Vanilla CSS/JavaScript** - Along with Bootstrao Interactive components 




## 🔧 Development

### **Adding New Sections**
1. Create section in `src/sections/`
2. Add corresponding CSS in `static/css/sections/`
3. Include in templates using `{% include %}`

### **Creating Macros**
1. Define macro in `src/macros/`
2. Import with `{% from "macros/filename.jinja" import macro_name %}`
3. Use with `{{ macro_name(parameters) }}`

