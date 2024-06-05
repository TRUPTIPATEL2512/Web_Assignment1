import React, { useState } from 'react';

const AccountPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleEdit = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-fluid account-page" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6">
          <div className="card shadow-lg p-4" style={{ borderRadius: '20px' }}>
            <h2 className="text-center mb-4">Account</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-custom btn-lg">Save</button>
              </div>
            </form>

            {showPopup && (
              <div className="position-fixed top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 bg-dark bg-opacity-75">
                <div className="card p-4 text-center text-dark" style={{ maxWidth: '400px', borderRadius: '20px' }}>
                  <h3>User Information</h3>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <button className="btn btn-custom btn-lg" onClick={handleEdit}>Edit</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
