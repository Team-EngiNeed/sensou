import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />

        <Route
          path="/executive"
          element={
            <>
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
            </>
          }
        />
        <Route
          path="/executive-orders"
          element={
            <>
              <Navbar />
              <Orders />
              <Dashboard />
              <Transaction />
            </>
          }
        />
        {/* Repeat for each role */}
        <Route
          path="/engineer"
          element={
            <>
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
            </>
          }
        />
        <Route
          path="/engineer-orders"
          element={
            <>
              <Navbar />
              <Orders />
              <Dashboard />
            </>
          }
        />
        {/* Repeat for other roles like utility, adviser, labtech, etc. in the same pattern */}

        <Route path="/note/executive/:id" element={<Note />} />
        <Route path="/note/nurse/:id" element={<Note />} />
        <Route path="/note/labtech/:id" element={<Note />} />
        <Route path="/note/librarian/:id" element={<Note />} />
        <Route path="/note/engineer/:id" element={<Noted />} />
        <Route path="/note/utility/:id" element={<Noted />} />
        <Route path="/note/adviser/:id" element={<Noted />} />

        {/* Removed login, register, logout, etc. */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /*import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
    <Router>
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
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/note/executive/:id" element={<Note />} />
        <Route path="/note/nurse/:id" element={<Note />} />
        <Route path="/note/labtech/:id" element={<Note />} />
        <Route path="/note/librarian/:id" element={<Note />} />
        <Route path="/note/engineer/:id" element={<Noted />} />
        <Route path="/note/utility/:id" element={<Noted />} />
        <Route path="/note/adviser/:id" element={<Noted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/registerandlogout" element={<RegisterandLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
*/
}
