import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Dashboard.css";
import { Link as RouterLink } from "react-router-dom";
import bgImage from "../assets/CANTEEN.jpg";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      let response;
      const path = window.location.hash.replace("#/", ""); // Ensure correct path extraction

      const endpointMap = {
        "executive-orders": "/api/notes/executive/",
        "engineer-orders": "/api/notes/engineer/",
        "adviser-orders": "/api/notes/adviser/",
        "nurse-orders": "/api/notes/nurse/",
        "librarian-orders": "/api/notes/librarian/",
        "labtech-orders": "/api/notes/labtech/",
        "utility-orders": "/api/notes/utility/",
      };

      if (endpointMap[path]) {
        response = await api.get(endpointMap[path]);
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

  useEffect(() => {
    fetchNotes();
    window.addEventListener("hashchange", fetchNotes);
    return () => {
      window.removeEventListener("hashchange", fetchNotes);
    };
  }, []);

  const renderDashboardContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div className="dashboard-list">
        {notes.map((note) => {
          const path = window.location.hash.replace("#/", ""); // Ensure correct hash path
          let baseRoute = path.replace("-orders", ""); // Extract base route

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

              {/* ✅ Fixed HashRouter Link */}
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
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="dashboard-title">DASHBOARD</h1>
        {renderDashboardContent()}
      </div>
    </div>
  );
}

export default Dashboard;
