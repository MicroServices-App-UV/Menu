'use client'

import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import React from 'react'
import Popup from '../registroRestaurante/page'
import Image from 'next/image';

const page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)

  const drawer = (
    <div>
      

      <ListItem disablePadding>
        <ListItemButton onClick={() => window.location.href = 'http://20.83.137.142/'}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize='large'/>
          </ListItemIcon>
          <ListItemText>
            <Typography variant='h6'>
                Cristian Montaño
            </Typography>
            <Typography fontSize={13} color='#8F8F8F'>
                Gestionar usuario
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <Divider variant='middle'/>

      <List>
        {['Historial de pedidos', 'Métodos de pago', 'Direcciones registradas'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index==0 ? <RestoreOutlinedIcon/> : index==1 ? <CreditCardOutlinedIcon/> : <MapOutlinedIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider variant='middle'/>
      <List>
        {['Registrar restaurante', 'Quiero ser domiciliario', 'Condiciones de uso'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={index==0 ? ()=>setOpenPopup(true) : ()=>setOpenPopup(false)}
            >
              <ListItemIcon>
              {index==0 ? <AddBusinessOutlinedIcon/> : index==1 ? <TwoWheelerOutlinedIcon/> : <HelpOutlineOutlinedIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  
  return (
    <div>
      

      {/* Ícono del menú hamburugesa */}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setDrawerOpen(true)}
        sx={{ mr: 2}}
      >
          <MenuIcon />
      </IconButton>

      {/* Panel lateral del menú */}
      <Drawer 
        anchor='left' 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)}
      > 

       
       <Toolbar sx={{backgroundColor:'#FBB500'}}>
         <IconButton
           size="large"
           edge="start"
           color="inherit"
           onClick={() => setDrawerOpen(false)}
           sx={{ mr: 2, color:'white'}}
         >
             <MenuIcon />
         </IconButton>

         
          <Image
              src="/Images/logo.png"
              width={60}
              height={52}
            />
          <Typography 
            variant='h6' 
            component='div' 
            noWrap
            fontWeight="bold"
            sx={{ display: { xs: 'none', sm: 'block' }, color:'white' }}
          >
            Thunder Foods
          </Typography>

        
       </Toolbar>
        

        {drawer}

        <List></List>
      </Drawer>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>Hola</Popup>
    </div>
  )
}

export default page