import React, {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import customers from '../customers.json'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TablePagination from '@mui/material/TablePagination';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { RadioButtonCheckedOutlined } from '@mui/icons-material';
import { Radio } from '@mui/material';

const settings = ['A --> Z', 'Z --> A'];

const CustomerList = (props) => {

  const handleChange = (customer_id) =>{
    props.func(customer_id);
  }

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    console.log(newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto',
    maxHeight: 500 }}>

            <Typography mr={2} textAlign="right">
           
              <SortByAlphaIcon /> Sort by
              <ArrowDropDownIcon onClick={handleOpenUserMenu}/>
              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Radio></Radio>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
              

            </Typography>
      
           

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
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
        </List>
  )
}

export default CustomerList