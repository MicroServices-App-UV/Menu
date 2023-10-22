'use client'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Paper, TextField, Typography, styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import Image from 'next/image';
import ImagenRestaurante from './imagen/page'
import IconoResturante from './icono/page'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function page(props) {
    const {openPopup, setOpenPopup} = props
  return (
    <div>
        <Dialog open={openPopup}>
          <IconButton
            aria-label="close"
            onClick={()=>{setOpenPopup(false)}}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon/>
          </IconButton>
          <DialogTitle>
            <Grid container spacing={2} alignItems='center' justifyContent='center'>
              <Grid item xs={2}>
                <Image
                  src="/Images/logo.png"
                  width={60}
                  height={52}
                />
              </Grid>
              
              <Grid item xs={9}>
                <Typography 
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  alignItems='center' 
                  justifyContent='center'
                >
                  Registra tu restaurante
                </Typography>
              </Grid>
              
            </Grid>
            
              
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>
                    Ingresa el nombre del Restaurante en el siguiente campo:
                  </Typography>
                  <TextField
                    id="nombreRestaurante"
                    label="Nombre"
                    variant="outlined"  
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>
                    Ingresa la dirección donde está ubicada la sede de tu restaurante:
                  </Typography>
                  <TextField
                    id="direccionRestaurante"
                    label="Dirección"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography fontWeight='bold'>
                    Correo electrónico del responsable del restaurante:
                  </Typography>
                  <TextField
                    id="correoRestaurante"
                    label="Correo electrónico"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography fontWeight='bold'>
                    Numero telefónico de contacto del restaurante:
                  </Typography>
                  <TextField
                    id="numeroRestaurante"
                    label="Número"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography fontWeight='bold'>
                    Elige una imagen representativa de tu restaurante:
                  </Typography>
                  <ImagenRestaurante/>
                </Grid>

                <Grid item xs={6} sx={{paddingBottom: 2}}>
                  <Typography fontWeight='bold'>
                    Elige un logo representativo de tu restaurante:
                  </Typography>
                  <IconoResturante/>
                </Grid>
            </Grid>

            <Divider/>

            <DialogActions align="end">
              <Button>
                Siguiente
              </Button>
            </DialogActions>
            
            
          </DialogContent>
          
        </Dialog>
        
    </div>
  )
}

export default page