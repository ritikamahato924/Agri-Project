

import React, { useState } from "react";
import "./index"; 

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    primaryPhone: "",
    alternatePhone: "",
    email: "",
    addressType: "Home",
    flat: "",
    floor: "",
    house: "",
    street: "",
    landmark: "",
    intersection: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="user-form">

        {/* Full Name */}
        <div className="form-group">
          <label>Full Name:</label>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="middleName"
              placeholder="Middle"
              value={formData.middleName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Phones */}
        <div className="form-group form-collapse">
          <label>Contact Phone (primary):</label>
          <input
            type="tel"
            name="primaryPhone"
            placeholder="+91 98765 43210"
            value={formData.primaryPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group form-collapse">
          <label>Alternate phone (optional) :</label>
          <input
            type="tel"
            name="alternatePhone"
            placeholder="+91 98765 00000"
            value={formData.alternatePhone}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Address Type */}
        <div className="form-group">
          <label>Type of address:</label>
          <select
            name="addressType"
            value={formData.addressType}
            onChange={handleChange}
          >
            <option>Home</option>
            <option>Office</option>
            <option>Other</option>
          </select>
        </div>

        {/* Address Details */}
        <div className="form-group form-collapse"><label>Flat / Apartment / Building name / Unit no.</label>
          <input type="text" name="flat" value={formData.flat} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>Floor / Wing (if applicable)</label>
          <input type="text" name="floor" value={formData.floor} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>House / Plot / Door no.</label>
          <input type="text" name="house" value={formData.house} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>Street / Road / Sector / Locality</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>Landmark</label>
          <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>Nearest major intersection / Road</label>
          <input type="text" name="intersection" value={formData.intersection} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>City / Town / District</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>State / Province / Region</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div className="form-group form-collapse"><label>Postal / ZIP / PIN code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        </div>
        <div className="form-group"><label>Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label>Select Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Preview */}
        {formData.imagePreview && (
          <div className="image-preview">
            <img
              src={formData.imagePreview}
              alt="Preview"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        <button type="submit" className="upload-btn">Upload</button>
      </form>
    </div>
  );
}

export default FormPage;

