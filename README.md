# TutorLink Backend

Welcome to the **TutorLink Backend** repository! This is the backend for the TutorLink platform, built using the **MERN stack** with **TypeScript**. It provides RESTful APIs for user authentication, tutor-student interactions, course management, bookings, and payments.

## 🚀 Features

- **User Authentication** (JWT-based authentication & role-based access control)
- **Tutor & Student Management**
- **Course Management** (Create, update, enroll in courses)
- **Booking System** (Schedule tutor sessions)
- **Review & Rating System**
- **Payment Integration** (SurjoPay)
- **Admin Dashboard** (Manage users, tutors, and courses)
- **Fully Typed with TypeScript**

---

## 📂 Folder Structure

```
📦 tutorlink-backend
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 modules
 ┃ ┃ ┃ ┣ 📂 auth
 ┃ ┃ ┃ ┣ 📂 user
 ┃ ┃ ┃ ┣ 📂 tutor
 ┃ ┃ ┃ ┣ 📂 student
 ┃ ┃ ┃ ┣ 📂 course
 ┃ ┃ ┃ ┣ 📂 booking
 ┃ ┃ ┃ ┣ 📂 review
 ┃ ┃ ┃ ┣ 📂 payment
 ┃ ┃ ┃ ┣ 📂 admin
 ┃ ┃ ┃ ┗ 📂 notification
 ┃ ┣ 📂 config
 ┃ ┣ 📂 utils
 ┃ ┣ 📂 middlewares
 ┃ ┣ 📂 errors
 ┃ ┗ 📂 routes
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 README.md
 ┗ 📜 server.ts
```

---

## 🛠️ Tech Stack

- **Backend Framework:** Node.js (Express.js)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **ORM:** Mongoose
- **Validation:** Zod
- **Payment Gateway:** SurjoPay
- **Language:** TypeScript

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/sakhawat71/tutorlink-backend.git
cd tutorlink-backend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
ACCESS_TOKEN_EXPIRY=1h
SURJOPAY_API_KEY=your_surjopay_key
```

### 4️⃣ Start the Development Server

```sh
npm run dev
```

### 5️⃣ Build for Production

```sh
npm run build
```

---

## 🔗 API Endpoints

### **Authentication**

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login and get a JWT token

### **User**

- `GET /api/v1/users/profile` - Get logged-in user profile
- `PUT /api/v1/users/update` - Update user details

### **Tutor**

- `GET /api/v1/tutors` - Get all tutors
- `POST /api/v1/tutors` - Register as a tutor

### **Student**

- `GET /api/v1/students` - Get all students
- `POST /api/v1/students/enroll` - Enroll in a course

### **Courses**

- `GET /api/v1/courses` - Get all courses
- `POST /api/v1/courses` - Create a new course (Admin)

### **Booking**

- `POST /api/v1/bookings` - Book a tutor session

### **Reviews & Ratings**

- `POST /api/v1/reviews` - Submit a review for a tutor/course

### **Payments**

- `POST /api/v1/payments` - Process a payment using SurjoPay

---

## 🛡️ Security & Best Practices

- **JWT Authentication** for secure access
- **Role-based access control** for different user types
- **Data validation** using Zod
- **Hashed passwords** with bcrypt

---

## 🤝 Contributing

Feel free to submit issues and pull requests. Let's build this together! 🚀

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🌟 Acknowledgments

Thanks to the **Apollo-Level2-Web-Dev** community for providing this project challenge!

---

## 📞 Contact

For queries, reach out at:

- **GitHub:** [your-github-profile](https://github.com/yourusername)
- **Portfolio:** [your-portfolio-link](https://your-portfolio.com)
- **Email:** [your-email@example.com](mailto\:your-email@example.com)

