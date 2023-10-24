import Image from 'next/image'
import styles from './page.module.css'
import Nav from './toolbar/page'
import { Box, Divider, div, Paper, Stack, Toolbar, Typography } from '@mui/material'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function Home() {
  const imageStyle = {
    borderRadius: '20px',
    border: '1px solid #fff',
  }

  const wrapper = {

  }

  return (
    <div className={styles.page}>
      <Nav/>
      <div>
        <Toolbar sx={{display:'flex', justifyContent:'center'}}>
        <PlaceOutlinedIcon sx={{color:'#FBB500', fontSize:'50px'}}/>
        <div>
          <Typography sx={{display: 'flex', justifyContent:'begin', fontWeight:'bold'}}>
            Tu dirección:
          </Typography>
          <Typography sx={{display: 'flex', justifyContent:'begin'}}>
            Calle 25 #75A-23, Cali, Valle del Cauca
          </Typography>
        </div>
        </Toolbar>
        <Divider sx={{paddingTop: 1}}/>
        <div>
          <Typography sx={{display: 'flex', justifyContent:'begin', fontWeight:'bold', paddingTop: 1, paddingBottom: 1, fontSize: '20px'}}>
            Restaurantes destacados
          </Typography>
          
          <Stack className={styles.muiStack} direction='row' spacing={2} sx={{overflow: 'auto'}}>
            <div>
              <Image 
                src="/Images/crepes.jpg" 
                style={imageStyle}
                width={368}
                height={216}
              />
              <Typography fontWeight='bold'>
                Crepes & Waffles
              </Typography>
            </div>
            <div>
              <Image 
                src="/Images/crepes.jpg" 
                style={imageStyle}
                width={368}
                height={216}
              />
              <Typography fontWeight='bold'>
                Crepes & Waffles
              </Typography>
            </div>
            <div>
              <Image 
                src="/Images/crepes.jpg" 
                style={imageStyle}
                width={368}
                height={216}
              />
              <Typography fontWeight='bold'>
                Crepes & Waffles
              </Typography>
            </div>
            <div>
              <Image 
                src="/Images/crepes.jpg" 
                style={imageStyle}
                width={368}
                height={216}
              />
              <Typography fontWeight='bold'>
                Crepes & Waffles
              </Typography>
            </div>

            <div>
              <Image 
                src="/Images/crepes.jpg" 
                style={imageStyle}
                width={368}
                height={216}
              />
              <Typography fontWeight='bold'>
                Crepes & Waffles
              </Typography>
            </div>
          </Stack>

          <Divider sx={{paddingTop: 1}}/>
            
        </div>
      </div>
    </div>  
  )
}
