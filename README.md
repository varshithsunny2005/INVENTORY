#  InventX – Inventory Management System (MERN Stack)

[![Frontend – Vercel](https://vercelbadge.vercel.app/api/bhargavzz/InventX)](https://inventx-alpha.vercel.app)
[![Backend – Render](https://img.shields.io/badge/Backend-Live-green?style=flat&logo=render)](https://inventx-backend-g2tg.onrender.com/api/health)
[![Backend Deployment Status](https://github.com/Bhargavzz/InventX/actions/workflows/deploy-backend.yml/badge.svg)](https://github.com/Bhargavzz/InventX/actions/workflows/deploy-backend.yml)



**InventX** is a full-stack inventory management web application that helps users track products, monitor stock, and manage warehouses in real-time. It supports role-based access, secure authentication, and cloud image uploads — designed with scalability, validation, and modular architecture in mind.

---

##  Tech Stack

###  Backend
- **Node.js**, **Express.js**
- **MongoDB** with Mongoose
- **JWT Auth**, **Bcrypt**, **Cookie-based Sessions**
- **Cloudinary** for image hosting
- **Zod** for schema validation
- **Nodemailer** for contact/reset email flows

###  Frontend
- **React.js** with Hooks
- **Redux Toolkit** for state management
- **React Router** for routing
- **React Quill** for rich product descriptions
- **React Toastify** for notifications
- **SCSS Modules** for scoped styling
- **Zod** client-side validation

---

##  Features

###  Authentication
- Secure Register/Login/Logout
- JWT + HttpOnly cookie-based auth
- Password hashing (bcrypt)
- Forgot/reset password (with email token)
- Protected routes with `HiddenLink` component

###  Product Management
- Add/edit/delete/view products
- Product image upload via Cloudinary
- Rich text descriptions (React Quill)
- SKU auto-generation (timestamp-based)
- View product details with created/updated timestamps
- Product filtering and search

###  Dashboard Analytics
- Total inventory value calculation
- Out-of-stock product alerts
- Category distribution tracking
- Responsive product summary cards

###  Contact Form
- Send messages to admin (Nodemailer-powered)

---

## 📁 Clean Project Structure

```
Bhargavzz-InventX/
├── 📄 README.md
├── 📄 .gitattributes
├── 📂 backend/
│   ├── 📄 package.json
│   ├── 📄 server.js
│   ├── 📄 .gitignore
│   ├── 📂 controllers/
│   │   ├── contactController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── 📂 middleWare/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── 📂 models/
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── 📂 routes/
│   │   ├── contactRoute.js
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   ├── 📂 uploads/
│   │   └── .gitkeep
│   └── 📂 utils/
│       ├── fileUpload.js    # Cloudinary integration
│       └── sendEmail.js     # Nodemailer configuration
└── 📂 frontend/
    ├── 📄 package.json
    ├── 📄 .gitignore
    ├── 📂 public/
    │   ├── index.html
    │   └── manifest.json
    └── 📂 src/
        ├── App.js
        ├── index.js
        ├── 📂 components/
        │   ├── card/                # Reusable card
        │   ├── changePassword/      # Password update
        │   ├── footer/              # App footer
        │   ├── header/              # Navigation
        │   ├── infoBox/             # Dashboard metrics
        │   ├── layout/              # Layout wrapper
        │   ├── loader/              # Loading indicators
        │   ├── product/             # Product components
        │   ├── protect/             # Auth protection
        │   ├── search/              # Search
        │   └── sidebar/             # Navigation
        ├── 📂 customHook/
        │   └── useRedirectLoggedOutUser.js
        ├── 📂 data/
        │   └── sidebar.js
        ├── 📂 pages/
        │   ├── addProduct/          # Add product
        │   ├── auth/                # Auth pages
        │   ├── contact/             # Contact
        │   ├── dashboard/           # Dashboard
        │   ├── editProduct/         # Edit product
        │   ├── Home/                # Home
        │   └── profile/             # Profile
        ├── 📂 redux/
        │   ├── store.js
        │   └── features/            # Redux slices
        ├── 📂 schemas/              # Validation
        └── 📂 services/             # API services
```

### Key Component Details
- **Product Components**: 
  - `productDetail/` - Single product view
  - `productForm/` - Add/edit form
  - `productList/` - Listing table
  - `productSummary/` - Inventory cards
  
- **Redux Structure**:
  - `auth/` - Authentication slice
  - `product/` - Product state + filters

---

##  Environment Variables

### Backend `.env` (create in `/backend`)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
EMAIL_HOST=smtp_provider_host
FRONTEND_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend `.env` (create in `/frontend`)
```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

## 🛠️ Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/Bhargavzz/InventX.git
cd Bhargavzz-InventX
```

### 2. Install Dependencies
```bash
# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```

### 3. Start Development Servers
```bash
# Run backend
cd backend && npm run dev

# Run frontend
cd ../frontend && npm start
```
Access application at: `http://localhost:3000`

---

##  Key Implementation Highlights

1. **Security**:
   - HttpOnly cookies for JWT storage
   - Password hashing with bcrypt
   - Protected routes with auth middleware

2. **Data Flow**:
   - Redux Toolkit for state management
   - React hooks for component logic
   - Custom hooks like `useRedirectLoggedOutUser`

3. **Validation**:
   - Zod schemas on both client and server
   - Consistent validation rules across layers

4. **Integrations**:
   - Cloudinary for image uploads
   - Nodemailer for email notifications
   - React Quill for rich text editing

---

##  Future Improvements
- Role-based access control
- Bulk CSV import/export
- Unit/Integration testing
- Docker containerization
- PDF report generation
- ElasticSearch integration

---

##  Author
**Sitra Vishnu Bhargav**  
Final-year CSE, IIIT Jabalpur  
[GitHub](https://github.com/varshithsunny2005/INVENTORY) • [LinkedIn](https://www.linkedin.com/in/varshith-goud-43968b317)

---

