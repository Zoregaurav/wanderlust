# 🌍 Wanderlust

A full-stack hotel and property listing platform inspired by Airbnb and Booking.com. Wanderlust allows users to explore properties, read reviews, and manage listings seamlessly.

🔗 **Live Demo:** [https://wanderlust-9v7j.onrender.com](https://wanderlust-9v7j.onrender.com)

---

## 📋 Project Overview

Wanderlust is a modern web application built using the MVC architecture. It enables:

* Users to browse and review properties
* Property owners to manage listings
* Secure authentication and authorization
* Cloud-based image handling

---

## 🏗️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Passport.js (Authentication)
* Cloudinary (Image storage)

### Frontend

* EJS (Templating)
* CSS + JavaScript
* Responsive Design

### Deployment

* Render
* MongoDB Atlas

---

## 📁 Project Structure

```
wanderlust/
├── controllers/    # Business logic
├── models/         # Database schemas
├── routes/         # Express routes
├── views/          # EJS templates
├── public/         # Static assets
├── uploads/        # Temporary uploads
├── utils/          # Helper functions
├── init/           # Database seeding
├── middleware.js   # Custom middleware
├── schema.js       # Joi validation schemas
├── cloudConfig.js  # Cloudinary config
└── app.js          # Entry point
```

---

## ✨ Features

### 👤 Users

* Browse property listings
* View detailed property info
* Read and add reviews
* Wishlist/favorite listings
* Interactive maps

### 🏠 Property Owners

* Add new listings
* Edit listings
* Delete properties
* Upload/manage images
* Manage reviews

### 🔐 Authentication & Security

* User registration & login
* Session management
* Protected routes
* Joi validation
* Error handling

### 🎯 UX Enhancements

* Flash messages
* Responsive UI
* Form validation

---

## 📸 Screenshots

Add visuals of your project to make your repository more attractive and understandable.

### 🏠 Homepage

![Homepage](https://github.com/Zoregaurav/wanderlust/blob/a53186f64a4d85526586edcc1be8c2f8f619b1cf/img-1.png)
![Homepage](https://github.com/Zoregaurav/wanderlust/blob/a53186f64a4d85526586edcc1be8c2f8f619b1cf/img-2.png)

### 🔍 Listing Details Page

![Listing Details](https://github.com/Zoregaurav/wanderlust/blob/a53186f64a4d85526586edcc1be8c2f8f619b1cf/img-5.png)
![Listing Details](https://github.com/Zoregaurav/wanderlust/blob/a53186f64a4d85526586edcc1be8c2f8f619b1cf/img-4.png)

### ➕ Add New Property

![Add Property](https://github.com/Zoregaurav/wanderlust/blob/2d6703bc7b8cf9fa989d380c2e190528c02ab366/img-6.png)

### 🔐 Login / Register

![Auth]()

> 💡 Tip: Create a `screenshots/` folder in your project root and add these images. Use meaningful names for better organization.

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in root:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
DB_URL=your_mongodb_url
SESSION_SECRET=your_secret
```

### 4️⃣ Run the app

```bash
node app.js
```

App will run on:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔍 Improvements & Future Scope

* 🔎 Advanced search & filters
* 💳 Payment integration (Stripe/PayPal)
* 📊 User dashboard & analytics
* 📧 Email notifications
* 🌐 Multi-language support
* 🌙 Dark mode
* 📱 Mobile app / PWA
* ⚡ Real-time updates (WebSockets)

---

## 🔧 Technical Enhancements (Planned)

* Add testing (Jest + Supertest)
* Rate limiting (express-rate-limit)
* Monitoring (Sentry)
* Database indexing & pagination
* Security hardening (Helmet, CSRF, XSS protection)

---

<!-- License section optional: add if you plan to make this open-source with clear usage rights -->

---

## 🙌 Acknowledgements

* Inspired by Airbnb & Booking.com
* Built with modern web technologies

---

⭐ If you like this project, give it a star on GitHub!
