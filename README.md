# 🛍️ E-Commerce Theme Developer Task

A modern, responsive Flask-based e-commerce PDP application featuring a complete product detail page with advanced UI components and interactive features.

## 🚀 Quick Start

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
   git clone https://github.com/omar1taha/theme-development-jinja.git
   cd theme-development-jinja
   ```

2. **(Optional) Create virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate        # On Windows: venv\Scripts\activate, On macOS and Linux, use python3 and pip3 instead of python and pip if Python 3 is installed under that name.
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

## Screenshots

<img width="1440" height="717" alt="Screenshot 2025-10-05 at 11 40 18 AM" src="https://github.com/user-attachments/assets/5fb19751-b029-4546-8836-83423b8023bc" />
<img width="1440" height="717" alt="Screenshot 2025-10-05 at 10 32 08 AM" src="https://github.com/user-attachments/assets/f9af52e6-2fb1-4a1e-b65d-e98e7779d477" />
<img width="535" height="803" alt="Screenshot 2025-10-05 at 11 09 55 AM" src="https://github.com/user-attachments/assets/cb3da281-8e52-4365-b6d2-d124fa50d1f9" />
<img width="501" height="722" alt="Screenshot 2025-10-05 at 11 36 40 AM" src="https://github.com/user-attachments/assets/1f6f57db-6456-4e9b-8394-13b9d931e511" />
<img width="500" height="720" alt="Screenshot 2025-10-05 at 11 36 51 AM" src="https://github.com/user-attachments/assets/bd6c1b8f-983f-40d1-b2f0-9e17a569ea20" />


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
