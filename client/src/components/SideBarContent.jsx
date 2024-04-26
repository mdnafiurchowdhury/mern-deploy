

import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CreateIcon from '@mui/icons-material/Create';
import { styled } from '@mui/material';
// here we control the name  and title phot
import { SIDEBAR_DATE } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
import { useParams, NavLink } from 'react-router-dom';
// here we control the path and element
import { routes } from '../constants/routes';

// here by touch of dialog we have to open it
const MainBox = styled(Box)({
  padding: '5 10',
  '& > ul':{
    padding: '10px 0 0 5px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    '& > a':{
      textDecoration: 'none',
      color: 'inherit'
    }

  }
})


const ComposeButton = styled(Button)({
  background: '#c2e7ff',
  color: '#001d35',
  padding: 15,
  borderRadius: 16,
  mindwidth: 140,
  textTransform: 'none'
})

export default function SideBarContent() {
  // to keep the state open and close
  const [openDialog , setOpenDialog]= useState(false);

  // open the varaible : type : id by the use of params
  const {type}= useParams();

  const ComposeFunction =()=>{
    setOpenDialog(true);

  }


 
  return ( 
    <MainBox>
      
      <Box>
      <ComposeButton onClick={()=> ComposeFunction()}> <CreateIcon/>Compose</ComposeButton>
      
      </Box>
      <List>
  {SIDEBAR_DATE.map((data, index) => (
    <NavLink key={data.name}
    to={`${routes.emails.path}/${data.name}`}
    >
    <ListItem key={index} style={type === data.name.toLowerCase()?{backgroundColor: '#d3e3fd'}:{}}> <data.icon />{data.title}</ListItem>
    </NavLink>
  ))}
</List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
      
    </MainBox>
  );
}
