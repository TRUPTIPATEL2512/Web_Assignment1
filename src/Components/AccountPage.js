import React, { useState } from 'react';

const AccountPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleEdit = () => {
    setShowPopup(false);
  };

  return (
    <div className="account-page container">
      <h2 className="my-4">Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
      
      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>User Information</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
