import React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography }from '@mui/material'
import NoFoodTwoToneIcon from '@mui/icons-material/NoFoodTwoTone';
import {NavLink} from 'react-router-dom'
import  '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const Header1 = () => {
  const [mobileOpen,setMobileOpen]= useState(false)
  //hndle menu click
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onCick={handleDrawerToggle} sx= {{textAlign:'center'}}>
 <Typography 
      color={"goldenrod"}
      variant='h6'
      component='div'
      sx={{flexGrow:1, my:2}}
      
      
      ><NoFoodTwoToneIcon/>
       My Restaurant
       </Typography>
       <Divider/>
      
        <ul className="mobile-navigation">
          <li>
        <NavLink activeClassName='active' to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        
        </ul>
       
    </Box>
  )
  return (
    <>
   <Box>
    <AppBar component={'nav'}sx={{bgcolor:"black"}}>
      <Toolbar>
<IconButton 
color='inherit'
aria-label='open drawer' 
edge='start'
sx={{
  mr:2,
  display: {sm:"none"},
  }}
  onClick={handleDrawerToggle}
  >
  <MenuIcon/>

</IconButton>
      <Typography 
      color={"goldenrod"}
      variant='h6'
      component='div'
      sx={{flexGrow:1}}
      
      
      ><NoFoodTwoToneIcon/>
       My Restaurant
       </Typography>
       
       <Box sx={{display: {xs:"none",sm:"block"}}}>
        <ul className="navigation-menu">
          <li>
            <NavLink activeClassName='active' to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        
        </ul>
       </Box>
      
      </Toolbar>
    </AppBar>
    <Box component='nav'>
      <Drawer variant='temporary' open= {mobileOpen} 
      onClose={handleDrawerToggle}
      sx={{display:{xs:'block',sm:'none'},
       "& .MuiDrawer-paper": {
        boxSizing: 'border-box',
        width:'240px',
       },
       }}>
        {drawer}
      </Drawer>
      <Box>
        <Toolbar/>
      </Box>
      
    </Box>
   </Box>

       
    </>
  )
}

export default Header1