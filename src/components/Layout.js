import { Grid, Typography} from "@mui/material";
import React, {useState} from "react";
import NavBar from "./NavBar";
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add';
import CustomerList from "./CustomerList";
import CustomerProfile from "./CustomerProfile";
import customers from '../customers.json'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


export const CustomerPage = () => {
      
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setOpen2(true);
    };
    const handleallclose = () => {
        setOpen(false);
        setOpen2(false);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
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
        
            <Grid container spacing = {0.5} style={{backgroundColor:"#BDD8FF"}}>
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
                            <Grid item xs={10.5} sm={10.5}>
                            <TextField
                                label="Search Customers"
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                        <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                    )
                                }}
                                />
                            </Grid>
                            <Grid item xs={1} sm={1} mt={1.5} mr={0.5}>
                            <AddIcon fontSize="large" onClick={handleClickOpen}/>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    sx={{maxWidth: "500px", margin: "auto"}}
                                >
                                    <DialogTitle >
                                    {"Add User | Login Details"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <Grid container item xs={12} sm={12}>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="User Name" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="First Name" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="Password" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth />
                                            </Grid>
                                            
                                    </Grid>
                                    </DialogContent >
                                    <DialogActions >
                                    <Button variant="outlined" onClick={handleallclose}>Cancel</Button>
                                    <Button variant="contained" onClick={handleClose} autoFocus>
                                        Proceed
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                                <Dialog
                                    open={open2}
                                    onClose={handleClose2}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    sx={{maxWidth: "500px", margin: "auto"}}
                                >
                                    <DialogTitle >
                                    {"Add User | Profile Details"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <Grid container item xs={12} sm={12}>
                                            <Grid item  xs={6} sm={6} m= "10px">
                                                <Typography variant="body1">Profile pic</Typography>
                                            </Grid>
                                            <Grid>
                                                <Button  variant="outlined"xs={6} sm={6}> Upload file</Button>
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="Address line 1" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="Country" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="State" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="City" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item  xs={12} sm={12} m= "10px">
                                            <TextField required id="outlined-basic" label="Zip code" variant="outlined" fullWidth />
                                            </Grid>
                                            
                                    </Grid>
                                    </DialogContent >
                                    <DialogActions >
                                    <Button variant="outlined" onClick={handleClickOpen}>Back</Button>
                                    <Button variant="contained" onClick={handleClose2} autoFocus>
                                        Save
                                    </Button>
                                    </DialogActions>
                                </Dialog>

                            </Grid>
                            </Grid>
   
                     </Box>
                     <CustomerList  func={pull_id} />

                </Grid>
                <Grid item xs={9} sm={9} >
                    < Grid container item xs={12} sm={12} >
                        <CustomerProfile key={customer} customerData={customer}/>
                        
                    </Grid>
                </Grid>
            
   
            </Grid>
        
    </>
    )
    
}


