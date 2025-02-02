import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/Note.css";
import LoadingIndicator from "./LoadingIndicator";

function Note() {
  const { id } = useParams();
  const [note, setNote] = useState(null); // State to store the fetched note data
  const [isEditing, setIsEditing] = useState(false); // State for edit mode
  const [editedNote, setEditedNote] = useState(null); // State for edited data
  const [backLoading, setBackLoading] = useState(false); // Loading state for Back button
  const navigate = useNavigate();

  const handleBack = () => {
    setBackLoading(true);
    setTimeout(() => {
      navigate(-1);
      setBackLoading(false);
    }, 1000);
  };

  useEffect(() => {
    api
      .get(`/api/notes/${id}/`)
      .then((res) => {
        setNote(res.data);
        setEditedNote(res.data); // Initialize editedNote with fetched data
      })
      .catch((err) => {
        console.error("Failed to fetch note details:", err);
      });
  }, [id]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      await api.put(`/api/notes/executive/${id}`, editedNote);
      setNote(editedNote);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save changes:", error);
    }
  };

  if (!note) return <div className="loading-message">Loading...</div>;

  return (
    <div className="note-container" id="note">
      <div className="note-lists">
        <h2 className="note-title">Note Details</h2>

        {isEditing ? (
          <>
            <p>
              <strong>Full Name:</strong>
              <input
                type="text"
                name="fullName"
                value={editedNote.fullName}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <strong>Grade & Section:</strong>
              <input
                type="text"
                name="gradeSection"
                value={editedNote.gradeSection}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <strong>Damaged Property:</strong>
              <input
                type="text"
                name="damagedProperty"
                value={editedNote.damagedProperty}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <strong>Comment:</strong>
              <textarea
                name="comment"
                value={editedNote.comment}
                onChange={handleInputChange}
              />
            </p>
          </>
        ) : (
          <>
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
              <strong>Completed:</strong>{" "}
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
          </>
        )}

        <div className="note-buttons">
          <button onClick={handleBack} className="btn">
            Back
            {backLoading && <LoadingIndicator />}
          </button>
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-btn">
                Save Changes
              </button>
            </>
          ) : (
            <button onClick={handleEditToggle} className="edit-btn">
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Note;
