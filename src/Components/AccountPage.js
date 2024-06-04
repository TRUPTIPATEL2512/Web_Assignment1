import React, { useState } from 'react';

const AccountPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // Add logic to save form data (e.g., send to server)
    setShowMessage(true); // Set showMessage to true when form is submitted
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
      {showMessage && <p className="mt-3">Form data saved successfully!</p>} {/* Show message if showMessage is true */}
    </div>
  );
};

export default AccountPage;
