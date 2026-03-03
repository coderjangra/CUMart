# 🛒 CUMart

**CUMart** is a streamlined, React-powered shopping application tailored for campus ecosystems. This project demonstrates a hybrid state management strategy, utilizing **Redux Toolkit** for complex data flows and the **Context API** for lightweight user sessions.

---

## 🚀 Features

* **Dual-Layer State Management**: 
    * **Context API**: Orchestrates user authentication and session persistence (`AuthContext.js`).
    * **Redux Toolkit**: Manages the product catalog (`productsSlice.js`) and real-time cart logic (`cartSlice.js`).
* **Dynamic Cart**: Instant total calculations and quantity adjustments.
* **Product Gallery**: Clean, grid-based listing optimized for quick browsing.
* **Modern UI/UX**: Built with responsive, modular CSS tailored to each component.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Library** | React 18+ |
| **Global State** | Redux Toolkit (RTK) |
| **Session State** | React Context API |
| **Styling** | Vanilla CSS |

---

## 📂 Project Structure

```text
CUMart/
├── .github/
├── public/
├── src/
│   ├── App.js / App.test.js      # Main application component and tests
│   ├── AuthContext.js            # React Context for managing login state
│   ├── Cart.js / Cart.css        # Shopping cart UI and styling
│   ├── Login.js / Login.css      # User authentication UI and styling
│   ├── Products.js / Products.css# Product listing UI and styling
│   ├── cartSlice.js              # Redux logic for cart operations
│   ├── productsSlice.js          # Redux logic for product data
│   ├── store.js                  # Central Redux store configuration
│   └── index.js / index.css      # Application entry point and global styles
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
* **Node.js** (v16.0.0 or higher)
* **npm** or **yarn**

### Quick Start

Copy and paste the following commands into your terminal to get up and running:

```bash
# 1. Clone the repository
git clone [https://github.com/your-username/cumart.git](https://github.com/your-username/cumart.git)

# 2. Enter the project directory
cd cumart

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

*Open `http://localhost:3000` to view the application in your browser.*

---

## 💡 Architecture Note

This project was designed to showcase the practical differences between Context and Redux.

* **Context** is used for User Auth because it handles low-frequency updates (like logging in and out).
* **Redux Toolkit** is used for the Cart and Products because it efficiently handles high-frequency updates across multiple components without causing unnecessary re-renders.
