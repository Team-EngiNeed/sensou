import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Researchers from "./components/Researchers";
import About from "./components/About";
import Contact from "./components/Contact";
import Title from "./components/Title";
import Orders from "./pages/Orders";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Note from "./components/Note";
import Noted from "./components/Noted";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterandLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter basename="/sensou">
      <Routes>
        <Route
          path="/executive"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <div className="container">
                <Title
                  subTitle="The Researchers"
                  title="Developers and Designers"
                />
                <Researchers />
                <About />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/executive-orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Dashboard />
              <Transaction />
            </ProtectedRoute>
          }
        />
        <Route
          path="/engineer"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <div className="container">
                <Title
                  subTitle="The Researchers"
                  title="Developers and Designers"
                />
                <Researchers />
                <About />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/engineer-orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/utility"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <div className="container">
                <Title
                  subTitle="The Researchers"
                  title="Developers and Designers"
                />
                <Researchers />
                <About />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/utility-orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adviser"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <div className="container">
                <Title
                  subTitle="The Researchers"
                  title="Developers and Designers"
                />
                <Researchers />
                <About />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/adviser-orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/labtech"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <div className="container">
                <Title
                  subTitle="The Researchers"
                  title="Developers and Designers"
                />
                <Researchers />
                <About />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/labtech-orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Dashboard />
              <Transaction />
            </ProtectedRoute>
          }
        />
        <Route
          path="/librarian"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <div className="container">
                <Title
                  subTitle="The Researchers"
                  title="Developers and Designers"
                />
                <Researchers />
                <About />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/librarian-orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Dashboard />
              <Transaction />
            </ProtectedRoute>
          }
        />
        <Route
          path="/nurse"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <div className="container">
                <Title
                  subTitle="The Researchers"
                  title="Developers and Designers"
                />
                <Researchers />
                <About />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/nurse-orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Dashboard />
              <Transaction />
            </ProtectedRoute>
          }
        />
        {/* Other routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/note/executive/:id" element={<Note />} />
        <Route path="/note/nurse/:id" element={<Note />} />
        <Route path="/note/labtech/:id" element={<Note />} />
        <Route path="/note/librarian/:id" element={<Note />} />
        <Route path="/note/engineer/:id" element={<Noted />} />
        <Route path="/note/adviser/:id" element={<Noted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/registerandlogout" element={<RegisterandLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
