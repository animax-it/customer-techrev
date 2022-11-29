import React, {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import customers from '../customers.json'


const CustomerList = (props) => {

  const handleChange = (customer_id) =>{
    props.func(customer_id);
  }
  return (
    
    <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto',
    maxHeight: 500 }}>
  {customers && customers.customers.map((customer) => {
      

    return <div>
    <ListItem alignItems="flex-start" onClick={() => handleChange(customer.id)}>
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText 
      primary={customer.firstName + " " + customer.lastName}
      secondary={
        <React.Fragment>
          
          {customer.email}
        </React.Fragment>
      }
    />
  </ListItem>
  <Divider variant="inset" component="li" />
  </div>
  })}         
   
        </List>
  )
}

export default CustomerList