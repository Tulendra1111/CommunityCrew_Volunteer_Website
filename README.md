# 🌟 CommunityCrew - MERN Stack Volunteer Platform

A modern, full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) for managing volunteer communities and donations. CommunityCrew provides a platform for volunteers to connect, donate, and make a positive impact in their communities.

## 🚀 Features

### 🔐 Authentication & User Management
- **User Registration & Login** - Secure JWT-based authentication
- **Protected Routes** - Role-based access control
- **Persistent Sessions** - Stay logged in across browser refreshes
- **User Profiles** - Manage personal information

### 💰 Donation System
- **Multiple Payment Methods** - Support for various payment options
  - Cryptocurrency (Bitcoin, Ethereum)
  - Credit/Debit Cards
  - PayPal
  - Stripe
  - Apple Pay
  - Google Pay
- **Secure Checkout** - Integrated payment processing
- **Donation Tracking** - Monitor contribution history

### 📧 Communication
- **Contact Form** - Direct communication with the team
- **Email Notifications** - Automated email responses
- **Real-time Feedback** - Toast notifications for user actions

### 🎨 Modern UI/UX
- **Dark Theme** - Sleek, modern dark interface
- **Responsive Design** - Mobile-first approach
- **Glass Morphism** - Modern visual effects
- **Smooth Animations** - Enhanced user experience
- **Accessibility** - User-friendly navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **React Icons** - Beautiful icon library
- **React Toastify** - Notification system
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Nodemon** - Development server auto-restart
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
MERN-STACK-VOLUNTEER WebSite/
├── backend/
│   ├── controllers/          # Route controllers
│   │   ├── authController.js
│   │   ├── checkout.js
│   │   └── messageController.js
│   ├── database/
│   │   └── dbConnection.js   # MongoDB connection
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/              # Database models
│   │   ├── communityCrew.js
│   │   ├── message.js
│   │   └── user.js
│   ├── router/              # API routes
│   │   ├── authRouter.js
│   │   ├── checkoutRouter.js
│   │   └── messageRouter.js
│   ├── utils/
│   │   └── emailService.js  # Email configuration
│   ├── .env                 # Environment variables
│   ├── index.js            # Express app configuration
│   ├── package.json
│   └── server.js           # Server entry point
├── frontend/
│   ├── public/             # Static assets
│   │   ├── hero.png
│   │   ├── about.png
│   │   └── ...
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Donate.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Authentication context
│   │   ├── miniComponents/  # Smaller components
│   │   │   ├── Hero.jsx
│   │   │   ├── Members.jsx
│   │   │   └── Qualities.jsx
│   │   ├── App.css         # Global styles
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MERN-STACK-VOLUNTEER WebSite
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://127.0.0.1:27017`

2. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on `http://localhost:4000`

3. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173`

## 🔧 Configuration

### Database Configuration
- **MongoDB Connection**: Update `MONGO_URI` in `.env`
- **Database Name**: `CommunityCrew_Project`

### Email Configuration
- **Gmail Setup**: Enable 2-Factor Authentication
- **App Password**: Generate an app password for Gmail
- **SMTP Settings**: Configure in `.env` file

### Payment Integration
- **Cryptomus API**: Add your API key and merchant ID
- **Payment Methods**: Configure supported payment options

## 📱 Pages & Features

### 🏠 Home Page
- Hero section with call-to-action
- Community information
- Navigation to other sections

### 🔐 Login/Register
- User authentication
- Form validation
- Secure password handling

### 💰 Donate Page
- Multiple payment method selection
- Payment form with validation
- Secure checkout process

### 📞 Contact Page
- Contact form with validation
- Email notifications
- Contact information display

### ℹ️ About Page
- Community story and mission
- Team information
- Values and goals

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - Bcrypt for password security
- **CORS Protection** - Cross-origin request security
- **Input Validation** - Server-side validation
- **Environment Variables** - Sensitive data protection

## 🎨 UI/UX Features

- **Dark Theme** - Modern dark interface
- **Responsive Design** - Mobile-friendly layout
- **Glass Morphism** - Modern visual effects
- **Smooth Animations** - Enhanced interactions
- **Loading States** - User feedback during operations
- **Toast Notifications** - Real-time user feedback

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service

### Backend Deployment (Railway/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update frontend API URLs to production

### Database Deployment
- Use MongoDB Atlas for cloud database
- Update `MONGO_URI` in production environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- React community for excellent documentation
- MongoDB for robust database solutions
- Express.js for the powerful backend framework
- All contributors and volunteers who make this project possible

---

*Building communities, one volunteer at a time.*
