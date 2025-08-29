# 🚀 Dashboard

A modern **role-based dashboard application** built with React, Redux Toolkit, TailwindCSS, and Material UI.  
The project includes authentication and dashboards for **Admin, Merchant, and Members** with different access levels.

---

## 📦 Tech Stack

- ⚛️ **React 18** – Component-based UI
- 🎨 **TailwindCSS + Material UI (MUI)** – Styling & responsive design
- 🎬 **Framer Motion** – Smooth animations
- 📊 **ApexCharts + Circular Progressbar** – Interactive charts & data visualization
- 🔗 **React Router v7** – Role-based routing
- 🗂️ **Redux Toolkit** – State management
- ✅ **AJV** – JSON schema validation

---

## 🔧 Getting Started

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/mdmahfuzrp/auth-log-fn.git

# 2️⃣ Move into project directory
cd auth-log-fn

# 3️⃣ Install dependencies
npm install
# or (if you face peer dependency issues)
npm install --legacy-peer-deps

# 4️⃣ Start the development server
npm start
```

---

---

## 🔑 Demo Credentials

You can log in using the following test accounts:

### 👨‍💼 Admin

Email: admin@finobytes.com
Password: admin123

### 🏪 Merchant

Email: store@finobytes.com
Password: merchant123

### 👤 Member

Email: member1@finobytes.com
Password: member123

---

---

## 📂 Project Structure

```bash
├── public/ # Static assets
├── src/ # Source code
│ ├── assets/ # Images, icons, etc.
│ ├── components/ # Reusable UI components
│ ├── features/ # Redux slices / feature modules
│ ├── pages/ # Page components
│ ├── hooks/ # Custom hooks
│ ├── utils/ # Helper functions
│ ├── App.js # Root app component
│ ├── main.js # App entry point
├── .gitignore
├── package.json
├── README.md
```

### 📜 Summary

This project is built using React 18 with Redux Toolkit for state management and React Router v7 for navigation.
The UI is powered by Material UI and TailwindCSS, with ApexCharts and Circular Progressbar for analytics.
Animations are integrated using Framer Motion, while AJV ensures schema validation.

It demonstrates a role-based dashboard system with different access levels for:

### Admin → Manage users & system logs

### Merchant → Manage orders, customers, and notifications

### Member → Track points, rewards, and transactions
