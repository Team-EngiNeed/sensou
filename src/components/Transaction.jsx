import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Transaction.css";
import LoadingIndicator from "./LoadingIndicator";
import bgImage from "../assets/ATRIUM.jpg";

function Transaction() {
  const [notes, setNotes] = useState([]);
  const [comment, setcomment] = useState("");
  const [fullName, setfullName] = useState("");
  const [gradeSection, setgradeSection] = useState("");
  const [damagedProperty, setdamagedProperty] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Order deleted!");
          window.location.reload(); // Refresh the page after deletion
        } else {
          alert("Failed to the order note.");
        }
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    setLoading(true);
    e.preventDefault();
    api
      .post("/api/notes/", {
        fullName,
        comment,
        gradeSection,
        damagedProperty,
      })
      .then((res) => {
        console.log("Response data:", res.data); // Log the response
        if (res.status === 201) {
          alert("Order sent!");
          window.location.reload(); // Refresh the page after note creation
        } else {
          alert("Failed to make an Order.");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div
        className="Transaction-container"
        id="Transaction"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="Transaction-list">
          <h2>Send an Order</h2>
          <form onSubmit={createNote}>
            <label htmlFor="fullName">Full Name</label>
            <br />
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              onChange={(e) => setfullName(e.target.value)}
              value={fullName}
            />
            <br />

            <label htmlFor="gradeSection">Grade & Section or Role</label>
            <br />
            <input
              type="text"
              id="gradeSection"
              name="gradeSection"
              required
              onChange={(e) => setgradeSection(e.target.value)}
              value={gradeSection}
            />
            <br />

            <label htmlFor="damagedProperty">Damaged Property</label>
            <br />
            <select
              id="damagedProperty"
              name="damagedProperty"
              required
              onChange={(e) => setdamagedProperty(e.target.value)}
              value={damagedProperty}
            >
              <option value="" disabled>
                Select a damaged property
              </option>
              <option value="chair">Chair</option>
              <option value="table">Table</option>
              <option value="electricfan">Electric Fan</option>
              <option value="outlet">Outlet</option>
              <option value="television">Television</option>
              <option value="whiteboard">Whiteboard</option>
              <option value="tiles">Tiles</option>
              <option value="window">Window</option>
              <option value="other">Other</option>
            </select>
            <br />

            <label htmlFor="comment">Input necessary details here</label>
            <br />
            <textarea
              id="comment"
              name="comment"
              rows="4"
              required
              onChange={(e) => setcomment(e.target.value)}
              value={comment}
            />
            <br />

            <button type="submit" value="submit" className="btn">
              Submit
              {loading && <LoadingIndicator />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
