# Portfolio Fullstack

A modern, fullstack portfolio and admin dashboard built with React, Node.js, Express, and Prisma/PostgreSQL. This project showcases your work, skills, education, certifications, and more, with a beautiful UI and a robust admin dashboard.

---

## 🚀 Live Demo & Repository

- **Live Site:** [portfolio-fullstack-llfu.onrender.com](https://portfolio-fullstack-llfu.onrender.com)
- **GitHub Repo:** [github.com/Ahedabushahen/portfolio-fullstack](https://github.com/Ahedabushahen/portfolio-fullstack)

---

## 🖼️ Preview

![Portfolio Homepage](client/src/assets/portfolio-homepage.png)

---

## 📁 Project Structure

```
portfolio-fullstack/
├── client/   # React frontend (Create React App)
├── server/   # Node.js backend (Express + Prisma)
```

## 🗄️ Database Tables Overview

| Table         | Fields                                                                 |
|---------------|------------------------------------------------------------------------|
| **About**     | id, info                                                               |
| **User**      | id, fullName, email                                                    |
| **Project**   | id, title, description, tech_stack, github_url, live_url, created_at   |
| **Skill**     | id, name, level                                                        |
| **Experience**| id, company, role, start_date, end_date, description                   |
| **Education** | id, institution, degree, field_of_study, start_year, end_year          |
| **Certification** | id, title, issuer, issue_date, credential_url                      |
| **Contact**   | id, name, email, subject, message, reply                               |
| **Blog**      | id, title, content, author                                             |


## 🔧 Deployment & Render Setup

**Platform:** Render.com (Fullstack Hosting)

- **Build Command:**
  ```sh
  npm install && npm run install-all && npm run generate && npm run build
  ```
- **Start Command:**
  ```sh
  npm start
  ```
- **Environment Variables:**
  ```env
  DATABASE_URL="postgresql://portfolio_db_s5sw_user:CGRcOciiTqHKvbfOE3xhGRrFj9l7QOft@dpg-d17agd7diees73e06530-a.frankfurt-postgres.render.com/portfolio_db_s5sw"
  PORT=5000
  JWT_SECRET=myportfoliosecret
  ```
- **Prisma:**
  - Use `prisma generate` to regenerate Prisma client after schema changes
  - Use `npx prisma db push` to sync schema (or use migrations)
- **Database:** Hosted as a Render PostgreSQL add-on
- **Frontend:**
  - Serve via Express backend, or
  - Deploy separately as a Render Static Site (from `/client/build`)

---

## 🔑 Admin Login

- **Email:** `admin@gmail.com`
- **Password:** `123`

---

## 📝 Notes

- The original repository and Render project are preserved for assignment history.
- The new version features improved style and a more powerful Admin Dashboard.
- Auto deploy can be enabled/disabled as needed.

---

## 🙏 Credits

Created by **Ahed Abu Shahen**

---

