'use client'

import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import React from 'react'

const page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const drawer = (
    <div>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton>
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

      <Divider />

      <List>
        {['Historial de pedidos', 'Métodos de pago', 'Direcciones registradas'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index==1 ? <LocalAtmOutlinedIcon/> : index==2 ? <MapOutlinedIcon/> : <RestoreOutlinedIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Registrar restaurante', 'Quiero ser domiciliario', 'Condiciones de uso'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {index==1 ? <TwoWheelerOutlinedIcon/> : index==2 ? <HelpOutlineOutlinedIcon/> : <RamenDiningOutlinedIcon/>}
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

       
       <Toolbar>
         <IconButton
           size="large"
           edge="start"
           color="inherit"
           onClick={() => setDrawerOpen(false)}
           sx={{ mr: 2}}
         >
             <MenuIcon />
         </IconButton>

         <Box width='200px' role='presentation'>
          <Typography variant='h6' component='div'>
            Thunder Foods
          </Typography>
        </Box>
        
       </Toolbar>
        

        {drawer}

        <List></List>
      </Drawer>
    </div>
  )
}

export default page