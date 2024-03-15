import React from 'react'
import Layout1 from '../components/Layout/Layout1'
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Layout1>
        <Box sx={{
          my:5,
          ml:5,
          '& h4':{
            fontweight:'bold',
            mb:'2'
          }}}>
            <Typography variant='h4'>Contact My Restaurant</Typography>
            <p>Why do we use ,It is a long established fact that a reader will be distracted </p>
          </Box>
          <Box sx={{
            m:3,
            width:'600px',
            ml:8,
            '@media (max-width:600px)':{
              width:'300px',
            }}}>
            <TableContainer component={Paper}>
              <Table aria-label='Contact table'>
                <TableHead>
                  <TableRow>
                    <TableCell
                    sx={{bgcolor:'black',color:'white'}}
                    align='center'
                    >Contact Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'navy',pt:1}}/> 1800-00-000(toll free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{color:'skyblue',pt:1}}/> help@myrest
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <PhoneIcon sx={{color:'blue',pt:1}}/> 1234567890
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </Box>
          </Layout1>
  )
}

export default Contact