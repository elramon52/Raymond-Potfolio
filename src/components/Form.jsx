import React, { useState } from 'react';
import axios from 'axios';
import { RiEdit2Line, RiDeleteBin2Line, RiSearchLine } from 'react-icons/ri';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [projectName, setProjectName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/users', {
        name,
        address,
        email,
        contactNumber,
        projectName,
      });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage('Failed to register user');
    }
  };

  const handleRetrieve = async () => {
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.get(`http://localhost:5000/users/${contactNumber}`);
      if (response.data) {
        setName(response.data.name);
        setAddress(response.data.address);
        setEmail(response.data.email);
        setProjectName(response.data.projectName);
      } else {
        setErrorMessage('User not found');
      }
    } catch (error) {
      setErrorMessage('Failed to retrieve user');
    }
  };

  const handleUpdate = async () => {
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.put(`http://localhost:5000/users/${contactNumber}`, {
        name,
        address,
        email,
        projectName,
      });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage('Failed to update user');
    }
  };

  const handleDelete = async () => {
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.delete(`http://localhost:5000/users/${contactNumber}`);
      setSuccessMessage(response.data.message);
      setName('');
      setAddress('');
      setEmail('');
      setContactNumber('');
      setProjectName('');
    } catch (error) {
      setErrorMessage('Failed to delete user');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register to be part of my project team</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <button type="submit" className="button">
          <span>Register</span>
          <RiEdit2Line className="icon" />
        </button>
      </form>

      {successMessage && <SuccessMessage message={successMessage} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      <div className="crud-container">
        <h2>CRUD Operations</h2>
        <input
          type="tel"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <button onClick={handleRetrieve} className="button">
          <span>Retrieve</span>
          <RiSearchLine className="icon" />
        </button>
        <button onClick={handleUpdate} className="button">
          <span>Update</span>
          <RiEdit2Line className="icon" />
        </button>
        <button onClick={handleDelete} className="button">
          <span>Delete</span>
          <RiDeleteBin2Line className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Form;
