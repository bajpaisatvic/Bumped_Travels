# 🌍 Bumped Travels — Travel Website

**Bumped Travels** is a full-stack travel website that allows users to explore tour packages, submit queries via a contact form, and gives admin users control over package management and review oversight. With responsive UI, dark mode support, and JWT-based authentication, it's ready for production.

---

## 🚀 Features

*  **Tour Packages**: View categorized packages with images, descriptions, and prices.
* 🔒 **Authentication**: JWT & cookie-based login/logout.
* ⚖️ **Admin Panel**:

  * Add, delete, view packages.
  * View all submitted reviews in tabular format.
* ✍️ **Contact Form**: Save user queries as reviews.
* 🌙 **Dark Mode**: Toggle theme preference with localStorage persistence.
* 📱 **Responsive Design**: Adapts to all screen sizes. Hamburger menu appears below 769px.

---

## 📊 Live Demo

[https://bumped-travels.vercel.app](https://travel-frontend-rouge.vercel.app/)

---

## 🏗️ Tech Stack

### Frontend:

* React.js
* Tailwind CSS
* React Router DOM
* Axios

### Backend:

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT + Cookies

---

## 📂 Folder Structure

```
root/
├── client/                # React Frontend
│   ├── components/        # Header, TourCard, etc.
│   ├── pages/             # Home, About, Contact, Admin, etc.
│   ├── contexts/          # AuthContext
│   └── main.jsx           # Entry point
├── server/                # Node + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── server.js
```

---

## 📁 Environment Variables

### For Backend (`.env`):

```env
MONGODB_URI=<your-mongo-uri>
ACCESS_TOKEN_SECRET=<access-secret>
REFRESH_TOKEN_SECRET=<refresh-secret>
CLOUDINARY_CLOUD_NAME=<cloud-name>
CLOUDINARY_API_KEY=<api-key>
CLOUDINARY_API_SECRET=<api-secret>
```

---

## 📅 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bumped-travels.git
cd bumped-travels
```

### 2. Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Run Dev Servers

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm run dev
```

---

## 🌐 Deployment

### Backend

* Hosted on Render
* Cookie-based auth (`secure: true`, `httpOnly: true`)

### Frontend

* Hosted on Vercel
* Axios calls use production backend URLs

---

## 🚫 Security Notes

* JWT with `httpOnly` cookies prevents XSS attacks
* Admin routes protected via middleware


