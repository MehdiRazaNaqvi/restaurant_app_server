import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/actions/authActions'

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
const navigate = useNavigate();
const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);


  const handleLogOut = () =>{
    dispatch(signOut())
    navigate('/')
    }

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <span className="brand-name">
          
          Mooli
          
          </span>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="top-nav-link" to="/signup">
            Sign up
          </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link
          
          className="top-nav-link" to="/">
             Get The Mooli App
            
          </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="top-nav-link" to="/">
            Help
          </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link 
            onClick={()=>handleLogOut()}
            className="top-nav-link" to="/">
            Logout
          </Link>{" "}
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;