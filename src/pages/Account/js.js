import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from "./navigation";
import { Button, Container, TextField, Typography } from '@mui/material';

export const AddUser = (props) => {
  const initialUser = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: 'CLIENT',
  };
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
     try {
       const response = await fetch('http://localhost:8080/client/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
        },
         body: JSON.stringify(user)
       });

       if (response.ok) {
         setUser(initialUser);
         navigate('/users');
       } else {
         console.error('Error:', response.statusText);
       }
     } catch (error) {
       console.error('Error:', error);
     }
  };

  return (
    <div>
      {/* <Navigation /> */}
      <Container maxWidth="sm" style={{marginTop:'100px'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            id="nom"
            name="nom"
            label="Nom"
            value={user.nom}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="prenom"
            name="prenom"
            label="Prenom"
            value={user.prenom}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            label="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="login"
            name="login"
            label="Login"
            value={user.login}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>Save</Button>
          <Button component={Link} to="/users" variant="outlined" color="secondary">Cancel</Button>
        </form>
      </Container>
    </div>
  );
};
