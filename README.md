 Expense Manager
🚀 Overview
The Expense Manager is a full-stack web application that helps users track their expenses, categorize spending, and gain insights into their financial habits. The app features JWT-based authentication, CRUD operations for expenses, and data visualization through charts.



🛠️ Tech Stack
Frontend: React.js, Shadcn, Charts / Recharts, Tailwind CSS
Backend: Node.js + Express.js
Database: MongoDB (Mongoose)
Authentication: JWT (HTTP-only cookies)
Deployment: Render
🌟 Features
1️⃣ User Authentication (Register/Login using JWT)
2️⃣ Expense Management (CRUD) (Add, Edit, Delete, View)
3️⃣ Secure API with authentication & validation)
4️⃣ Spending Insights (Pie chart analytics)


📸 Screenshots
## 📸 Screenshots

## Home


![Home](./frontend/pics/Screenshot%20(5).png)
![Home](frontend/pics/Screenshot%202025-05-11%20073914.png)

## Login
![Login](./frontend/pics/Screenshot%202025-05-10%20231825.png)

## Signup
![Signup](./frontend/pics/Screenshot%202025-05-10%20231838.png)




## 📜 API Documentation

### **Authentication API**




#### **Login**

```http
POST /api/v1/users/login
```

#### **Logout**

```http
POST /api/v1/users/logout
```

#### **Add Expense**

```http
POST /api/v1/expense/add
```

#### **Update Expense**

```http
PUT /api/v1/expense/update/:id
```

#### **Delete Expense**

```http
DELETE /api/v1/expense/delete/:id
```

#### **Get Expense**

```http
GET /api/v1/expense/getinsights
```

#### ▶️ Running the Project

## Frontend

Navigate to the frontend folder and run:

```
cd frontend
```

```
npm i
```

```
npm run dev
```

## Backend

Navigate to the backend folder and run:

```
cd backend
```

```
npm i
```

```
npm run dev
```
