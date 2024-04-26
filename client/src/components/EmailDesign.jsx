import React from 'react';
import { Box, ListItem, Typography, styled, Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
// this is the path for navigating to the 
import { routes } from '../constants/routes';
import { StarBorder, Star } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';

// Function to format the date
const formatDate = (dateString) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Styled ListItem component with flex display and padding
const MainBox = styled(ListItem)({
  display: 'flex',
  alignItems: 'center',
  padding: '0 0 0 10px',
  background: '#ddd',
  color: '#222',
  '& > div': {
    display: 'flex',
    width: '100%',
  },
  '& > div > p': {
    fontSize: '14px',
  }
});

export default function EmailDesign({ email, selectedEmails, setRefresh }) {

  const navigate = useNavigate();

  const handleBoxClick = (e) => {
    // Stop event propagation to prevent triggering parent Box's onClick
    e.stopPropagation();
    // Navigate to view path. also call it as a prop so i can pass it viewemail in details
    navigate(routes.view.path, {state: {email: email}});
  };

  // can we call the starred on Click function
  const starColor = email.starred ? 'yellow' : 'red';

  const StarredApi = useApi(API_URLS.toggleStarredMails);

  // 

  const StarredFunction  = ()=>{
    StarredApi.call({id : email._id, value: !email.starred}) // because the value and starred
    setRefresh(prevState => !prevState)


  }

  return (
    <MainBox>
      {/* Checkbox and Star icons */}
      <Checkbox  
        size="small"
        checked={selectedEmails.includes(email._id)}
      />
      {
        email.starred?
        <StarBorderIcon fontSize='small' style={{ marginRight: 10, color: 'yellow' }} onClick={() => StarredFunction()} /> :
        
        <StarBorderIcon color='red' />

      }
      
      <Box onClick={handleBoxClick}>
        {/* Email information */}
        <Typography sx={{ margin: '0 20px 0 5px', width: 200 }}>{email.from}</Typography>
        <Typography sx={{ margin: '0 10px' }}>Inbox</Typography>
        <Typography sx={{ margin: '0 20px' }}>{email.subject} {email.body && '_'} {email.body}</Typography>
        {/* Formatted date */}
        <Typography>Date: {formatDate(email.date)}</Typography>
      </Box>
    </MainBox>
  );
}
