import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { emptyProfilePic } from '../constants/Constants';
import DeleteIcon from '@mui/icons-material/Delete';
import { API_URLS } from '../services/api.url'; // this is made of endpoint and method
import useApi from '../hooks/useApi'; // this is custom api

import { useOutletContext, useLocation } from 'react-router-dom';
import { routes } from '../constants/routes';

const IconWrapper = styled(Box)({
  padding: 15
});

const Subject = styled(Typography)({
  fontSize: 22,
  margin: '10px 0 20px 75px',
  display: 'flex'
});

const Indicator = styled(Box)`
  font-size: 12px !important;
  background: #ddd;
  color: #222;
  border-radius: 4px;
  margin-left: 6px;
  padding: 2px 4px;
  align-self: center;
`;

const Image = styled('img')({
  borderRadius: '50%',
  width: 40,
  height: 40,
  margin: '5px 10px 0 10px',
  backgroundColor: '#cccccc'
});

const Container = styled(Box)({
  marginLeft: 15,
  width: '100%',
  '& > div': {
    display: 'flex',
    '& > p > span': {
      fontSize: 12,
      color: '#5E5E5E'
    }
  }
});


export default function ViewEmails() {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const { Current } = useOutletContext();
  const { state } = useLocation();
  const { email } = state || {};
  const navigate = useNavigate();

  const moveBINEmailApi = useApi(API_URLS.moveEmailsToBin);

  const deleteEmailFunction = ()=>{
    moveBINEmailApi.call([email._id]);
    window.history.back();
  }

  return (
    <Box style={Current ? { marginLeft: 250, width: '100%' } : { width: '100%' }}>
      <IconWrapper>
        <ArrowBackIcon fontSize='small' color="action" onClick={() => window.history.back()} />
        <DeleteIcon fontSize='small' color="action" style={{ marginLeft: 40 }} onClick={() => deleteEmailFunction()} />
      </IconWrapper>

      <Subject>
        {email.subject} <Indicator component="span">Inbox</Indicator>
      </Subject>

      <Box style={{width: '100%'}}>
        <Image src={emptyProfilePic} alt="profile" />

        <Container>
          <Box>
            <Typography>
              {email.name.split('@')[0]} 
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Box>
            <Typography>Date: {formatDate(email.date)}</Typography>
            </Box>
          </Box>
          <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
        </Container>
      </Box>
    </Box>
  );
}
