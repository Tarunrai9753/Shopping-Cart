import React, { useState, useRef } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [address, setAddress] = useState(
    "123 Shipping St Shipping City, ST 12345"
  );

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEdit = () => {
    fullNameRef.current.focus();
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row justify-content-center">
        <div className="text-center">
          <button
            className="btn btn-success float-end"
            onClick={isEditing ? handleSave : handleEdit}
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>
        <div className="col-md-8">
          <div className="card mt-2">
            <div className="card-header">User Profile</div>
            <div className="card-body">
              <h5 className="card-title">Personal Information</h5>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  ref={fullNameRef}
                  type="text"
                  className="form-control"
                  id="fullName"
                  value={fullName}
                  // readOnly={!isEditing}
                  onChange={handleFullNameChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <hr />
              <h5 className="card-title">Shipping Address</h5>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  ref={addressRef}
                  className="form-control"
                  id="address"
                  rows="3"
                  value={address}
                  onChange={handleAddressChange}
                ></textarea>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
