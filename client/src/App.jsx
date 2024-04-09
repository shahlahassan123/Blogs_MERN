import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Register from './components/Register/Register'
import AuthProvider from './Context/AuthProvider'
import Protected from './Context/Protected'
import CreateBlog from './components/CreateBlog/CreateBlog'


function App() {


  return (
    <>
      <Router>
        <AuthProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/:id" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Protected />}>
              <Route path="/create-blog" element={<CreateBlog />} />

            </Route>
          </Routes>

        </AuthProvider>

      </Router>
    </>
  )
}

export default App


// Filename: App.jsx

// import React from 'react';
// import TestCors from './components/TestCors'

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Welcome to the CORS Test</h1>
//       <TestCors /> {/* Use the TestCors component */}
//     </div>
//   );
// };

// export default App;
