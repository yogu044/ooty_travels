import React, { useState } from 'react';
import axios from 'axios';
import "../css/popup.css";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PopupForm() {
  const navigate = useNavigate();
  const [pop, setpop] = useState(true);
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    phone: '',
    
    checkin: null,
    checkout: null,
    adult: '1',
    child: '0'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        ...formdata,
        checkin: formdata.checkin ? formdata.checkin.toISOString() : '',
        checkout: formdata.checkout ? formdata.checkout.toISOString() : ''
      };

      const res = await axios.post("https://ootytravels.onrender.com/details/add", submitData);
      alert(res.data.message || "Details added successfully!");
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckinChange = (date) => {
    setformdata({
      ...formdata,
      checkin: date
    });
  };

  const handleCheckoutChange = (date) => {
    setformdata({
      ...formdata,
      checkout: date
    });
  };

  const handlex = () => {
    setpop(false);
    navigate('/home');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <span className="popup-icon">🌿</span>
          <h2 className="popup-title">Plan Your Ooty Adventure</h2>
          <button className="popup-close" onClick={handlex}>×</button>
        </div>

        <p className="popup-subtext">
          Share your travel preferences and let us create an unforgettable Ooty hill station experience for you.
        </p>

        <form onSubmit={handleSubmit} className="popup-form">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Enter your full name" value={formdata.name} onChange={handleChange} />

          <label>Email Address</label>
          <input type="email" name="email" placeholder="your@email.com" value={formdata.email} onChange={handleChange} />

          <label>Phone Number</label>
          <input type="text" name="phone" placeholder="+91 923xx 34xxx" value={formdata.phone} onChange={handleChange} />

          <label>Check-in Date</label>
          <DatePicker
          className="popup-form-input"
            selected={formdata.checkin}
            onChange={handleCheckinChange}
            minDate={new Date()}
            placeholderText="Select check-in"
            dateFormat="yyyy-MM-dd"
            name="checkin"
          />
          <br></br>

          <label>Check-out Date</label>
          <DatePicker
          className="popup-form-input"
            selected={formdata.checkout}
            onChange={handleCheckoutChange}
            minDate={formdata.checkin || new Date()}
            placeholderText="Select check-out"
            dateFormat="yyyy-MM-dd"
            name="checkout"
          />
          <br></br>

          <label>Adults</label>
          <select name="adult" value={formdata.adult} onChange={handleChange}>
            <option value="1">1 adult</option>
            <option value="2">2 adults</option>
            <option value="3">3 adults</option>
            <option value="4+">4+ adults</option>
          </select>

          <label>Children</label>
          <select name="child" value={formdata.child} onChange={handleChange}>
            <option value="0">0 children</option>
            <option value="1">1 child</option>
            <option value="2">2 children</option>
            <option value="3">3 children</option>
          </select>

          <button type="submit" className="popup-submit">Start My Eco Journey</button>
        </form>

        <p className="popup-footer">By submitting, you agree to our eco-friendly travel principles</p>
      </div>
    </div>
  );
}
