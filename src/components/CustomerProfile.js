import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Grid, Container,Typography, Divider} from "@mui/material";
import Box from '@mui/material/Box';

import customers from '../customers.json'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const CustomerProfile = ({customerData}) => {
  const [customer, setCustomer] = useState({})

  useEffect(()=>{
    setCustomer(customerData)
  })

  return (
   <Grid container >
      <Grid item xs={2.5} sm={2.5}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sx={{ width: 120 , height: 120 , margin: 4}} />
        </ListItemAvatar>
      </Grid>
      <Grid item xs={9.5} sm={9.5}>
        <Grid item sx={{ align: 'left', mt: 6}}>
          <Typography variant="h4" gutterBottom>
            {customerData.firstName + " " + customer.lastName }
          </Typography>
        </Grid>
        <Grid container xs={12} sm={12}>
          <Grid item xs={0.5} sm={0.5} sx={{mt: '5px'}}>
            <PersonIcon />
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography variant="h6" >
              {customerData.userId }
            </Typography>
          </Grid>
          <Grid item xs={0.5} sm={0.5} sx={{mt: '5px'}}>
            <MailIcon />
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" >
            {customerData.email }
            </Typography>
          </Grid>
          <Grid item xs={0.5} sm={0.5} sx={{mt: '5px'}}>
            <CallIcon />
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography variant="h6" >
            {customerData.phone }
            </Typography>
          </Grid>
          </Grid>

        <Grid container mt={4}>
          <Grid item xs={2} sm={2}>
             <Button variant="outlined">
              <EditIcon /> 
              <Typography variant="body1" >
                 Edit
              </Typography></Button>
          </Grid>
          <Grid item xs={4} sm={4}>
          <Button color="error" variant="outlined">
              <DeleteIcon /> 
              <Typography variant="body1" >
                 Delete Customer
              </Typography>
              
          </Button>
            </Grid>
        </Grid>


        </Grid>

      <Grid item mt={4} xs={12} sm={12}>
        <Divider />
      </Grid>   

      <Grid container xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h5" gutterBottom>
          <strong> Personal Details</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={1}>
              <Grid item xs={2.5} sm={2.5}>
                <Box>
                <Typography variant="body1" gutterBottom>
                  First Name
                </Typography>
                <Typography variant="body1" gutterBottom>
                <strong>{customerData.firstName}</strong>
                </Typography>
                </Box>
              </Grid>
             
              <Grid item xs={2.5} sm={2.5}>
                <Box>
                <Typography variant="body1" gutterBottom>
                  Last Name
                </Typography>
                <Typography variant="body1" gutterBottom>
                <strong>{customerData.lastName  }</strong>
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={2.5} sm={2.5}>
                <Box>
                <Typography variant="body1" gutterBottom>
                  Gender
                </Typography>
                <Typography variant="body1" gutterBottom>
                <strong>{customerData.gender }</strong>
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={2.5} sm={2.5}>
                <Box>
                <Typography variant="body1" gutterBottom>
                  Date of Birth
                </Typography>
                <Typography variant="body1" gutterBottom>
                <strong>{customerData.dob}</strong>
                </Typography>
                </Box>
              </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h5" gutterBottom>
          <strong>Address</strong>
          </Typography>
        </Grid>
          <Grid container xs={6} sm={6}>
              
              <Grid item  xs={12} sm={12}>
                <Grid container xs={8} sm={8}>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='left'>Address Line 1</Typography>
                    </Grid>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='right'>{customerData.address}</Typography>
                    </Grid>
                </Grid>
              </Grid>

              <Grid item  xs={12} sm={12} >
                <Grid container xs={8} sm={8}>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='left'>Landmark</Typography>
                    </Grid>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='right'>{customerData.landmark}</Typography>
                    </Grid>
                </Grid>
              </Grid>

              <Grid item  xs={12} sm={12}>
                <Grid container xs={8} sm={8}>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='left'>City</Typography>
                    </Grid>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='right'>{customerData.city}</Typography>
                    </Grid>
                </Grid>
              </Grid>

              <Grid item  xs={12} sm={12}>
                <Grid container xs={8} sm={8}>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='left'>State</Typography>
                    </Grid>
                    <Grid item  xs={6} sm={6}>
                        <Typography align='right'>{customerData.state}</Typography>
                    </Grid>
                </Grid>
              </Grid>

              
          </Grid>
        </Grid>

   </Grid>
  )
}

export default CustomerProfile