import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Dashboard.css";
import { Link as RouterLink } from "react-router-dom";
import bgImage from "../assets/CANTEEN.jpg";


function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        let response;

        // Get the current pathname
        const path = window.location.pathname;

        if (path === "/executive-orders") {
          response = await api.get("/api/notes/executive/");
        } else if (path === "/engineer-orders") {
          response = await api.get("/api/notes/engineer/");
        } else if (path === "/adviser-orders") {
          response = await api.get("/api/notes/adviser/");
        } else if (path === "/nurse-orders") {
          response = await api.get("/api/notes/nurse/");
        } else if (path === "/librarian-orders") {
          response = await api.get("/api/notes/librarian/");
        } else if (path === "/labtech-orders") {
          response = await api.get("/api/notes/labtech/");
        } else if (path === "/utility-orders") {
          response = await api.get("/api/notes/utility/");
        } else {
          throw new Error("Invalid path.");
        }

        setNotes(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const renderDashboardContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div className="dashboard-list">
        {notes.map((note) => {
          // Get the current pathname
          const path = window.location.pathname;

          // Determine the base route dynamically
          let baseRoute = "";
          if (path.includes("executive")) {
            baseRoute = "executive";
          } else if (path.includes("engineer")) {
            baseRoute = "engineer";
          } else if (path.includes("adviser")) {
            baseRoute = "adviser";
          } else if (path.includes("nurse")) {
            baseRoute = "nurse";
          } else if (path.includes("librarian")) {
            baseRoute = "librarian";
          } else if (path.includes("labtech")) {
            baseRoute = "labtech";
          }

          return (
            <div key={note.id} className="note">
              <h3>
                {note.damagedProperty.charAt(0).toUpperCase() +
                  note.damagedProperty.slice(1)}
              </h3>

              <p>Report: {note.comment}</p>
              <p>
                Details: {note.fullName} from {note.gradeSection}
              </p>
              <RouterLink
                to={`/note/${baseRoute}/${note.id}`}
                className="info-btn"
              >
                Click here for more Information!
              </RouterLink>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div
            className="dashboard-container"
            style={{
              backgroundImage: `url(${bgImage})`, 
            }}
          >
        <h1 className="dashboard-title">DASHBOARD</h1>
        {renderDashboardContent()}
      </div>
    </div>
  );
}

export default Dashboard;
