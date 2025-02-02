import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/Noted.css";
import LoadingIndicator from "./LoadingIndicator";

function Note() {
  const { id } = useParams();
  const [note, setNote] = useState(null); // State to store the fetched note data
  const [backLoading, setBackLoading] = useState(false); // Loading state for Back button
  const [deleteLoading, setDeleteLoading] = useState(false); // Loading state for Delete button
  const [completed, setCompleted] = useState(false); // State for tracking if the order is completed
  const navigate = useNavigate();

  const handleBack = () => {
    setBackLoading(true); // Show the loading indicator for Back
    setTimeout(() => {
      navigate(-1); // Navigate back after a short delay
      setBackLoading(false); // Reset loading state for Back
    }, 1000); // Simulating a loading time (1 second)
  };

  const onDelete = (id) => {
    console.log("Deleting note with ID:", id); // Debugging

    setDeleteLoading(true); // Show loading indicator before making the request

    api
      .delete(`/api/notes/delete/${id}/`) // Correct API endpoint
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted!");
          navigate(-1); // Navigate back after deletion
        } else {
          alert("Failed to delete Order.");
        }
      })
      .catch((err) => {
        console.error("Error deleting order:", err.response || err.message);
        alert("An error occurred while deleting the Order.");
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  // Function to handle completion
  const handleComplete = async () => {
    try {
      const updatedNote = { ...note, completed: true }; // Ensure completed is set to true
      const response = await api.put(`/api/notes/${id}/`, updatedNote); // Send update request

      if (response.status === 200) {
        setNote(response.data); // Update React state with updated note
        alert("Order marked as Complete!");
        navigate(-1); // Navigate back
      } else {
        alert("Failed to update order status.");
      }
    } catch (error) {
      console.error("Failed to update completion status:", error);
      alert("An error occurred while marking the order as complete.");
    }
  };

  useEffect(() => {
    // Fetch the note using the 'id' from the URL
    api
      .get(`/api/notes/${id}/`) // Adjust the API endpoint according to your backend setup
      .then((res) => {
        setNote(res.data); // Set the fetched note data in the state
      })
      .catch((err) => {
        console.error("Failed to fetch note details:", err);
      });
  }, [id]); // Dependency array to refetch when 'id' changes

  // If the note is not yet loaded, show a loading message
  if (!note) return <div className="loading-message">Loading...</div>;

  return (
    <div className="note-container" id="note">
      <div className="note-lists">
        <h2 className="note-title">Note Details</h2>
        <p>
          <strong>Full Name:</strong> {note.fullName}
        </p>
        <p>
          <strong>Grade & Section:</strong> {note.gradeSection}
        </p>
        <p>
          <strong>Submitted on:</strong>{" "}
          {new Date(note.dateSubmitted).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
        <p>
          <strong>Damaged Property:</strong>{" "}
          {note.damagedProperty ? note.damagedProperty : "Not specified"}
        </p>
        <p>
          <strong>Comment:</strong> {note.comment}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {note.completed ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              Completed!
            </span>
          ) : (
            <span style={{ color: "red", fontWeight: "bold" }}>
              Not yet completed
            </span>
          )}
        </p>

        <div className="note-buttons">
          <button onClick={handleBack} className="btn">
            Back
            {backLoading && <LoadingIndicator />}
          </button>
          <button
            className="delete-btn"
            onClick={handleComplete}
            disabled={note.completed} // Disable if already completed
            style={{
              backgroundColor: note.completed ? "gray" : "green",
              cursor: note.completed ? "not-allowed" : "pointer",
            }}
          >
            {note.completed ? "Already Completed" : "Mark as Completed"}
            {deleteLoading && <LoadingIndicator />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
