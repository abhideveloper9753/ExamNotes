# 📚 ExamNotes AI

An AI-powered web application that helps students generate smart exam notes, summaries, and topic explanations using Artificial Intelligence.

---

## 🚀 Live Demo

🌐 Live Website: https://examnotesclient1.onrender.com/  
💻 GitHub Repository: I  https://github.com/abhideveloper9753/ExamNotes/edit/main/README.md

---

## 📖 Project Overview

**ExamNotes AI** is a full-stack web application designed to help students prepare efficiently for exams.  
It uses AI to generate structured, exam-focused notes instantly.

This project demonstrates:

- Full-stack development
- REST API creation
- Authentication system
- AI API integration
- Secure backend architecture
- Deployment on cloud platform

---

## 🛠 Tech Stack

### 🌐 Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap

### ⚙️ Backend
- Node.js
- Express.js

### 🗄 Database
- MongoDB (Mongoose)

### 🤖 AI Integration
- OpenAI API

### 🚀 Deployment
- Render

---

## ✨ Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication
- 🌐 Google OAuth Login
- 📝 AI-based Notes Generation
- 💾 Save Notes to Database
- 📚 View & Delete Notes
- 📱 Fully Responsive UI
- 🔒 Secure Environment Variables

---

## 📂 Project Structure

```
ExamNotesAI/
│
├── client/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── css/
│   └── js/
│
├── server/
│   ├── models/
│   │     ├── User.js
│   │     └── Note.js
│   │
│   ├── routes/
│   │     ├── authRoutes.js
│   │     └── noteRoutes.js
│   │
│   ├── middleware/
│   │     └── authMiddleware.js
│   │
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ExamNotesAI.git
cd ExamNotesAI
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

### 4️⃣ Run the Application

For production:

```bash
npm start
```

For development (if using nodemon):

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔑 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/google | Google OAuth login |

---

### 📝 Notes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/notes/generate | Generate AI Notes |
| GET | /api/notes | Get user notes |
| DELETE | /api/notes/:id | Delete note |

---

## 🤖 How AI Works

1. User enters a topic.
2. Backend sends a structured prompt to OpenAI API.
3. AI generates exam-ready notes.
4. Notes are saved in MongoDB.
5. User can view, manage, and delete notes anytime.

---

## 🔒 Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Secure environment variables
- Input validation

---

## 📸 Screenshots

Add screenshots inside a folder named `screenshots` and include them like this:

```markdown
![Home Page](screenshots/home.png)
![Dashboard](screenshots/dashboard.png)
```

---

## 📈 Future Improvements

- 📊 Admin Dashboard
- 📄 PDF Export Option
- 📱 Mobile Application Version
- 🧠 Personalized AI Recommendations
- 📚 MCQ Generator
- 🌍 Multi-language Support

---

## 👨‍💻 Author

**Abhi Gautam**  
Full Stack Developer | MCA Aspirant  

GitHub: https://github.com/your-username  
LinkedIn: https://linkedin.com/in/your-profile  

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ For Interview Explanation

You can explain this project as:

> ExamNotes AI is a full-stack AI-powered web application where I implemented user authentication, REST APIs, MongoDB integration, and OpenAI API for generating structured exam notes. The project is deployed on Render and follows secure backend practices.

---

⭐ If you found this project helpful, give it a star on GitHub!
