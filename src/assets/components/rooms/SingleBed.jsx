import React, { useEffect, useState } from "react";
import "./SingleBed.css";

const SingleBed = () => {
  const [singlebed, setSinglebed] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [newRoom, setNewRoom] = useState({
    roomType: "",
    roomPhoto: null,
    roomPrice: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/rooms/getallrooms")
      .then((res) => res.json())
      .then((data) => setSinglebed(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleRemove = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/rooms/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete item");

      setSinglebed(singlebed.filter((room) => room.roomId !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("roomPhoto", newRoom.roomPhoto);
    formData.append("roomType", newRoom.roomType);
    formData.append("roomPrice", newRoom.roomPrice);

    try {
      const response = await fetch("http://localhost:8080/api/rooms", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to add room");

      setShowForm(false);
      setNewRoom({ roomType: "", roomPhoto: null, roomPrice: "" });

      fetch("http://localhost:8080/api/rooms/getallrooms")
        .then((res) => res.json())
        .then((data) => setSinglebed(data));
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  const handleEditRoom = async (e, roomId) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("roomPhoto", newRoom.roomPhoto);
    formData.append("roomType", newRoom.roomType);
    formData.append("roomPrice", newRoom.roomPrice);

    try {
      const response = await fetch(`http://localhost:8080/api/rooms/replaceroom/${roomId}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to update room");

      setShowForm(false);
      setEditingRoomId(null);
      setNewRoom({ roomType: "", roomPhoto: null, roomPrice: "" });

      fetch("http://localhost:8080/api/rooms/getallrooms")
        .then((res) => res.json())
        .then((data) => setSinglebed(data));
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  return (
    <div className="single-bed-container">


    

      <h1>Bed Rooms</h1>
      <ul className="room-list">
        {singlebed.length > 0 ? (
          singlebed.map((room) => (
            <li key={room.roomId} className="room-card">
              <img
                src={room.roomPhoto ? `data:image/jpeg;base64,${room.roomPhoto}` : "default-image.jpg"}
                alt="Room"
                className="room-image"
              />

              <div className="room-info">
                <p><strong>Type:</strong> {room.roomType}</p>
                <p><strong>Price:</strong> ${room.roomPrice}</p>
              </div>

              <div className="button-group">
                <button className="edit-btn"
                  onClick={() => {
                    setShowForm(true);
                    setEditingRoomId(room.roomId);
                    setNewRoom({
                      roomType: room.roomType,
                      roomPrice: room.roomPrice,
                      roomPhoto: null,
                    });
                  }}>
                  Edit
                </button>

                <button className="remove-btn" onClick={() => handleRemove(room.roomId)}>
                  Remove
                </button>
              </div>

              {showForm && editingRoomId === room.roomId && (
                <RoomForm
                  newRoom={newRoom}
                  setNewRoom={setNewRoom}
                  handleSubmit={(e) => handleEditRoom(e, room.roomId)}
                  setShowForm={setShowForm}
                />
              )}
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <button className="add-room-btn" onClick={() => { setShowForm(true); setEditingRoomId(null); }}>
        ADD NEW ROOM
      </button>
      {showForm && editingRoomId === null && (
        <RoomForm
          newRoom={newRoom}
          setNewRoom={setNewRoom}
          handleSubmit={handleAddRoom}
          setShowForm={setShowForm}
        />
      )}
    </div>
    
  );
};

const RoomForm = ({ newRoom, setNewRoom, handleSubmit, setShowForm }) => (
  <form className="room-form" onSubmit={handleSubmit}>
    <label>Room Type:</label>
    <input
      type="text"
      value={newRoom.roomType}
      onChange={(e) => setNewRoom({ ...newRoom, roomType: e.target.value })}
      required
    />

    <label>Room Price:</label>
    <input
      type="number"
      value={newRoom.roomPrice}
      onChange={(e) => setNewRoom({ ...newRoom, roomPrice: e.target.value })}
      required
    />

    <label>Room Photo:</label>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setNewRoom({ ...newRoom, roomPhoto: e.target.files[0] })}
      required
    />

    <button type="submit" className="submit-btn">Submit</button>
    <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
  </form>
);

export default SingleBed;
