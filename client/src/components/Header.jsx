import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { InputBase, styled } from '@mui/material'; // this one for inline and inherit 
import { gmailLogo } from '../constants/Constants';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
//import TextField from '@mui/material/TextField';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AppBar1 = styled(AppBar)({

  background: '#F5F5F5',
  boxShadow: 'none',
  
})


const TextVar = styled(Box)({
  background: '#EAF1FB',
 
  marginLeft: 20,
  marginRight: 100,
  minWidth: 500,
  maxWidth:650,
  height:48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',

  '& > div':{
    width: '100%',
    padding: '0 10px'
  }
    
})
const IconBox = styled(Box)({
  width:'100%',
  display: 'flex',
  justifyContent: 'end',
  '& > svg':{
    marginLeft: 5
  }
})

export default function Header({toggleDrawer}) {
  return (
    <Box >
      <AppBar1 position="static">
        <Toolbar>
         
            <MenuIcon color= "action" onClick= {toggleDrawer} />
        
              <Box >
              <img src={gmailLogo} alt='gmaillog'/>
              </Box>

          <TextVar>
          <SearchIcon color='action'/>
          <InputBase placeholder='Search Here' />

          <TuneIcon color='action'/>
        
          </TextVar>
          <IconBox>
          <HelpOutlineIcon color='action'/>
          <SettingsIcon color='action'/>
          <AppsIcon color='action'/>
          <AccountCircleIcon color='action'/>

          
          </IconBox>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar1>
    </Box>
  );
}