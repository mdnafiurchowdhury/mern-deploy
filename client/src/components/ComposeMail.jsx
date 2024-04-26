import React from 'react';
import { useState } from 'react';
import { Dialog, Box, Typography, styled, InputBase, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
// this custom method for responses
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url.js';
// this is custom method for endpoins and methods

// Styling for the dialog
const dialogstyle = {
  height: '90%',
  width: '80%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  borderRadius: '10px 10px 0 0'
};

// Styled components for different parts of the dialog
const FirstPart = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 10px',
  background: '#f2f6fc',
  '& > p': {
    fontWeight: 800,
    fontSize: 14
  }
});

const SecondPart = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 15px',
  '& > div': {
    fontSize: 14,
    borderBottom: '1px solid #F5F5F5',
    marginTop: 10
  }
});

const LastCom = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const InitialValue={
  to: '', 
  subject: '',
  body: ''
}
export default function ComposeMail({ openDialog, setOpenDialog }) {

  // now we want to save to value to database based on 
  const [Data, setData]= useState(InitialValue);
  // and inialiaze the custom hook for the hook
  const sentEmailService = useApi(API_URLS.saveSentEmails);
  const saveDraftvar = useApi(API_URLS.saveDraftEmails);

  // Config for email
  const config = {
    Host: 'smtp.elasticemail.com',
    Username: "david@yopmail.com", 
    Password: "ACE7AECDFD280E12989EDE25E5B3C3A69A0A",
    Port: 2525
  };

  const onValueChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  
  

  // here we can also save the draft
  const handleClose = (e) => { 
    e.preventDefault();
    const payLoad={
      to: Data.to,
      from: 'hasan64dhl@gmai.com',
      subject: Data.subject,
      body: Data.body,
      date: new Date(),
      image: '',
      name: 'John Cena',
      starred: 'false',
      type: 'draft'


    }
    saveDraftvar.call(payLoad);
    if(!saveDraftvar.error){
      setOpenDialog(false);
      setData({});
    }else{

    }
    setOpenDialog(false);
  };

  // Sending email function
  const SendMailFunction = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: Data.to, // Use the value stored in Data.to
        From: 'hasan64dhl@gmail.com',
        Subject: Data.subject, // Use the value stored in Data.subject
        Body: Data.body // Use the value stored in Data.body
      }).then(
        (message) => alert(message)
      );
    }
    const payLoad={
      to: Data.to,
      from: 'hasan64dhl@gmai.com',
      subject: Data.subject,
      body: Data.body,
      date: new Date(),
      image: '',
      name: 'John Cena',
      starred: 'false',
      type: 'sent'


    }
    sentEmailService.call(payLoad);
    if(!sentEmailService.error){
      setOpenDialog(false);
      setData({});
    }else{

    }
    setOpenDialog(false);
  };
  

  const DeleteMailFunction = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };
  

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogstyle }}>
      <FirstPart>
        <Typography>New Message</Typography>
        <CloseIcon onClick={(e) => handleClose(e)} />
      </FirstPart>

      <SecondPart>
      <InputBase placeholder="To" name='to' onChange={(e) => onValueChange(e)}/>
      <InputBase placeholder="Subject" name='subject' onChange={(e) => onValueChange(e)}/>
      </SecondPart>

      <TextField
        multiline
        rows={18}
        sx={{ '& .MuiFormControl-root-MuiTextField-root': { border: 'none' } }}
        name='body'
        onChange={(e) => onValueChange(e)}
      />

      <LastCom>
        <Button
          style={{ background: '#0B57D0', color: '#fff', borderRadius: 18 }}
          onClick={(e) => SendMailFunction(e)}
        >
          Send Mail
        </Button>

        <DeleteIcon onClick={(e) => DeleteMailFunction(e)} />
      </LastCom>
    </Dialog>
  );
}
