InventX – Inventory Management System (MERN Stack)

InventX is a full-stack inventory management web application that helps users track products, monitor stock, and manage inventory in real time. The application supports secure authentication, product management, cloud-based image uploads, and a responsive analytics dashboard, following scalable and modular design principles.

🛠️ Tech Stack
🔹 Backend

Node.js, Express.js

MongoDB with Mongoose

JWT Authentication, Bcrypt

HttpOnly Cookies for secure sessions

Cloudinary for image hosting

Zod for schema validation

Nodemailer for email workflows

🔹 Frontend

React.js with Hooks

Redux Toolkit for state management

React Router for routing

React Quill for rich text descriptions

React Toastify for notifications

SCSS Modules for styling

Zod for client-side validation

✨ Features
🔐 Authentication

Secure user registration and login

JWT-based authentication with HttpOnly cookies

Password hashing using bcrypt

Forgot and reset password functionality

Protected routes for authenticated users

📦 Product Management

Add, edit, delete, and view products

Upload product images using Cloudinary

Rich text product descriptions

Automatic SKU generation

Product filtering and search functionality

📊 Dashboard Analytics

Total inventory value calculation

Out-of-stock alerts

Category-wise product distribution

Responsive analytics cards

📧 Contact Form

Contact admin via email using Nodemailer

📁 Project Structure
INVENTORY/
├── README.md
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── controllers/
│   ├── middleWare/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── uploads/
└── frontend/
    ├── package.json
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        ├── redux/
        ├── schemas/
        └── services/

🔐 Environment Variables
Backend (/backend/.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
EMAIL_HOST=smtp.gmail.com
FRONTEND_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Frontend (/frontend/.env)
REACT_APP_BACKEND_URL=http://localhost:5000

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/varshithsunny2005/INVENTORY.git
cd INVENTORY

2️⃣ Install Dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

3️⃣ Run the Application
# Start backend
cd backend
npm start

# Start frontend (new terminal)
cd ../frontend
npm start


Open:

http://localhost:3000

🧠 Key Highlights

Secure authentication using JWT and cookie

Centralized state management with Redux Toolkit

Cloud-based image uploads using Cloudinary

Robust validation using Zod (frontend & backend)

Modular and scalable MERN architecture

🔮 Future Enhancements

Role-based access control

Bulk product import/export

Automated testing

Docker containerization

Report generation

Advanced search integration

👤 Author

Pogula Varshith Goud
Final Year B.Tech (CSE), IIIT Jabalpur

GitHub: https://github.com/varshithsunny2005

LinkedIn: https://www.linkedin.com/in/varshith-goud-43968b317