# 🎬 NOXE Movie App

A professional, responsive, and dynamic Movie Database application built with **React 19**. NOXE allows users to browse trending movies, TV shows, and celebrities, view detailed information, and manage their authentication.

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3?style=for-the-badge&logo=bootstrap)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

## ✨ Features

- **Trending Dashboard**: Get the latest trending movies, TV shows, and people.
- **Detailed Search**: Deep dive into item details including overview, ratings, and trailers.
- **User Authentication**: Secure Login and Registration system using JWT.
- **Media Context**: Advanced state management for media data across the app.
- **Responsive Design**: Fully optimized for all screen sizes using Bootstrap 5.
- **Smooth Navigation**: Client-side routing with `react-router-dom`.

## 🚀 Tech Stack

- **Frontend**: React.js 19
- **Styling**: Bootstrap 5, Bootstrap Icons, CSS3
- **Icons**: FontAwesome 7
- **Authentication**: JWT Decode, Joi (Validation)
- **Networking**: Axios (API Calls)
- **Deployment**: Vercel

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kerolosnagy66-droid/NOXE-Movie.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npm start
   ```

## 📁 Project Structure

```text
src/
├── About/           # About page components
├── Contact/         # Contact form and info
├── Footer/          # Shared footer component
├── Home/            # Main landing page
├── ItemDetails/     # Specific item details view
├── Login/           # Authentication modules
├── MediaContext/    # Context API for global state
├── MediaItem/       # Reusable media card component
├── Movies/          # Movie listing page
├── Navbar/          # Responsive navigation header
├── People/          # Celebrity listing page
├── Register/        # User signup logic
├── Tv/              # TV shows listing page
└── App.js           # Main routing and logic
```

## 🌐 API Reference

- **Movies/TV Data**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **Auth Simulation**: [ReqRes API](https://reqres.in/)

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Developed by [Kerolos Nagy](https://github.com/kerolosnagy66-droid) during the Route Academy Course.
