import { Grid, Container,Typography} from "@mui/material";
import React, {useState} from "react";
import NavBar from "./NavBar";
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add';
import CustomerList from "./CustomerList";
import CustomerProfile from "./CustomerProfile";
import customers from '../customers.json'

export const CustomerPage = () => {
      
  var customerId = 0
  var customerData = {
    "id": "4",
    "firstName": "Chris",
    "lastName": "Evans",
    "userId": "chr964",
    "phone": "4332559741",
    "gender": "male",
    "dob": "Aug-21-1975",
    "address": "221b Bakers street",
    "landmark": "shop21",
    "city": "Bangalore",
    "state": "Kanrataka",
    "email": "chris@gmail.com"
}
const [customer, setCustomer] = useState(customerData)

  const pull_id = (customer_id) => {
    customerId = customer_id
    customerData = customers.customers.find((element) => {
        return element.id === customerId;
    })
    setCustomer(customerData)
  }
    return (
        <>
        <NavBar />
        
            <Grid container spacing = {0.5} >
                <Grid item xs={3} sm={3}>
                    <Box sx={{
                    boxShadow: 1,
                    
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        textAlign: 'left',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        }}>
                            <Grid container xs={12} sm={12} >
                            <Grid item xs={8} sm={8}>
                                <Typography align = "left">
                                    Customers
                                    </Typography>  
                            </Grid>
                            <Grid item xs={2} sm={2}> 
                              <SearchIcon />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                            <AddIcon />

                            </Grid>
                            </Grid>
   
                     </Box>
                     <CustomerList  func={pull_id} />

                </Grid>
                <Grid item xs={9} sm={9}>
                    < Grid container item xs={12} sm={12} >
                        <CustomerProfile key={customer} customerData={customer}/>
                        
                    </Grid>
                </Grid>
            
   
            </Grid>
        
    </>
    )
    
}


