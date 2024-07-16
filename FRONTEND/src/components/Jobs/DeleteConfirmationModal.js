import React from "react";
import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <div className="titleCloseBtn">
          <button className="closeButton" onClick={onCancel}>
            X
          </button>
        </div> */}
        <div className="title">
          <h1 className="text-black text-lg font-bold mt-2">Delete</h1>
        </div>
        <div className="body">
          <p className="text-gray-700 text-base">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </div>
        <div className="footer">
          <button onClick={onCancel} className="cancelButton">
            Cancel
          </button>
          <button onClick={onConfirm} className="deleteButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
