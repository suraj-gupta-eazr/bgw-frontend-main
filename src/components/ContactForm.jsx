import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { MdCall , MdEmail} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Container sx={{ backgroundColor: 'white' }} >
      <Typography variant="h3" alignContent='center' className='text-center py-6 font-extrabold' gutterBottom>
        Contact Us
      </Typography>
      <Grid container className='justify-center items-center' spacing={2}>
        <Grid item xs={11} sm={6} >
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-2xl flex gap-6 sm:text-xl items-center font-semibold py-1'><MdCall size={28}/>+91 1234567890</h1>
          <h1 className='md:text-2xl flex gap-6 sm:text-xl items-center font-semibold py-1'><MdEmail size={28}/> example@gmail.com</h1>
          <h1 className='md:text-2xl flex gap-6 sm:text-xl font-semibold py-1'> <FaLocationDot className='mt-2' size={30} />shop no 2 example building <br/>  
          gandhi road borivali west <br/>  mumbai - 400001
          </h1> 
         </div> 
        </Grid>
        <Grid item xs={11} sm={6}>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>  
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>           
    </Container>
  );
};

export default ContactForm;
