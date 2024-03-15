import React from 'react'
import Layout1 from '../components/Layout/Layout1'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/Data'

const Menu = () => {
  return (
    <Layout1>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>{
          MenuList.map(menu=>(
           <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
            <CardActionArea>
              <CardMedia
              sx={{minHeight:'400px'}}
              component={'img'}
              src={menu.image}
              alt={menu.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
                  </Typography>
                  <Typography variant='body2'>{menu.Description}</Typography>

              </CardContent>
              </CardActionArea>
           </Card> 
          ))}

        </Box>
        </Layout1>
  )
}

export default Menu