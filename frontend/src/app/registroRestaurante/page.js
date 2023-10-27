'use client'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography, styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import Image from 'next/image';
import ImagenRestaurante from './imagen/page'
import IconoResturante from './icono/page'
import ImagenPlatillo from './imagenPlatillo/page'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function page(props) {
    const {openPopup, setOpenPopup} = props
    const [visibiltyRes, setVisibilityRes] = useState('visible')
    const [openFood, setOpenFood] = useState(false)

    const [category, setCategory] = React.useState('');
    const [newCategory, setNewCategory] = React.useState('hidden')

    const handleChange = (event) => {
      setCategory(event.target.value);
    };

  return (
    <div>
        <Dialog id='restaurante' open={openPopup} sx={{visibility: visibiltyRes}}>
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
          
          <DialogTitle sx={{backgroundColor:'#FBB500'}}>
            <Grid container spacing={2} alignItems='center' justifyContent='center'>
              <Grid item>
                <Image
                  src="/Images/logo.png"
                  width={60}
                  height={52}
                />
              </Grid>
              
              <Grid item>
                <Typography 
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  alignItems='center' 
                  justifyContent='center'
                  color='white'
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

            <DialogActions>
              <Button 
                onClick={()=>{setOpenFood(true); setVisibilityRes('hidden')}}
                sx={{'&:hover': {backgroundColor:'#FFFAEE'},
                color:'#FBB500'}}  
              >
                Siguiente
              </Button>
            </DialogActions>
            
            
          </DialogContent>
          
        </Dialog>

        <Dialog open={openFood}>
          <IconButton
            aria-label="close"
            onClick={()=>{setOpenFood(false); setOpenPopup(false); setVisibilityRes('visible')}}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon/>
          </IconButton>
          <DialogTitle sx={{backgroundColor:'#FBB500'}}>
          <Grid container spacing={2} alignItems='center' justifyContent='center'>
              <Grid item>
                <Image
                  src="/Images/logo.png"
                  width={60}
                  height={52}
                />
              </Grid>
              
              <Grid item>
                <Typography 
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  alignItems='center' 
                  justifyContent='center'
                  color='white'
                >
                  Agrega tus platillos
                </Typography>
              </Grid>
              
            </Grid>

            
            </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={1}>

              <Grid item xs={6}>
                <Typography fontWeight='bold' paddingBottom={1}>
                  Ingresa el nombre del platillo:
                </Typography>
                <TextField
                  id="nombrePlatillo"
                  label="Nombre"
                  variant="outlined"  
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight='bold' paddingBottom={1}>
                  Ingresa la descripción del platillo:
                </Typography>
                <TextField
                  id="descripcionPlatillo"
                  label="Descripcion"
                  multiline
                  variant="outlined"  
                />
              </Grid>

              <Grid item xs={5} direction='column'>

                <Typography component='div'> Selecciona una categoría:</Typography>
                
                <FormControl component='div' fullWidth sx={{paddingBottom:1}}>
                  <InputLabel>Categoría</InputLabel>
                  <Select
                    value={category}
                    label="Categoría"
                    onChange={handleChange}
                  >
                    <MenuItem value={'bebida'}>Bebidas</MenuItem>
                    <MenuItem value={'platosFuertes'}>Platos fuertes</MenuItem>
                  </Select>
                </FormControl>

                <Button sx={{textTransform:'none', '&:hover': {backgroundColor:'#FFFAEE'},
                  color:'#FBB500'}} onClick={()=>{setNewCategory('visible')}}>
                  Crear una categoría nueva
                </Button>   
                
              </Grid>

              <Grid item xs={6} direction='column'>
                <Box 
                height= { newCategory === 'visible' ? 'auto' : '0' }
                visibility={newCategory} 
                paddingBottom={1}>
                  <Typography fontWeight='bold'>
                    Ingresa la categoría del platillo:
                  </Typography>
                  <Stack direction='row'>
                    <TextField
                      id="categoríaPlatillo"
                      label="Categoría"
                      variant="outlined"  
                    />
                    <Box paddingLeft={2} sx={{display:'flex', justifyContent:'center'}}>
                      <Button 
                        onClick={()=>{setNewCategory('hidden')}}
                        sx={{textTransform:'none', '&:hover': {backgroundColor:'#FFFAEE'}, color:'#FBB500'}}
                      >
                        Agregar
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} sx={{paddingBottom: 2}}>
                <Stack direction='column' justifyContent='center' alignItems='center'>
                  <Typography fontWeight='bold'>
                    Selecciona una imagen de tu platillo:
                  </Typography>
                  <ImagenPlatillo/>
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Box
                  sx={{
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center',
                    paddingTop:2,
                    paddingBottom:2
                  }}
                >
                  <Button 
                    sx={{
                      '&:hover': {borderColor:'#FBB500',backgroundColor:'#FFFAEE'},
                      color:'#FBB500',
                      borderColor:'#F9E7B8',
                      textTransform:'none'
                    }}
                    variant='outlined'
                  >
                    Guardar platillo
                  </Button>
                </Box>
              </Grid>
              

            </Grid>   
          </DialogContent>
          <DialogActions>
            <Stack direction='row' paddingTop={1}>
              <Button 
                sx={{
                  display:'flex', 
                  alignItems:'center', 
                  justifyContent:'initial',
                  '&:hover': {backgroundColor:'#FFFAEE'},
                  color:'#FBB500',
                }} 
                onClick={()=>{setOpenFood(false); setVisibilityRes('visible')} }
              >
                Atrás
              </Button>

              <Box flexGrow={1}/>

              <Button 
                onClick={()=>{setOpenFood(false)}} 
                sx={{
                  display:'flex', 
                  '&:hover': {backgroundColor:'#FFFAEE'},
                  color:'#FBB500'
                }}
              >
                Terminar
              </Button>
            </Stack>
          </DialogActions>
        
        </Dialog>
        
    </div>
  )
}

export default page