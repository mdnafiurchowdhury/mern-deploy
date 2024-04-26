import React, { useEffect, useState} from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { API_URLS } from '../services/api.url';
import useApi from '../hooks/useApi';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import EmailDesign from './EmailDesign';


// this is main function

export default function Email() {

  // here is selected emails
 


  const { Current } = useOutletContext(); 
  const { type } = useParams();

  // this is api inside this api there is get api

  const getEmailService = useApi(API_URLS.getEmailFromType);

  const anotherPostApi = useApi(API_URLS.moveEmailsToBin)

  // here we use this checked to delete the email

  const [selectedEmails, setSelctedEmails] = useState([]);
  // also refresh screen to go the prev state
  const [refreshScreen , setRefresh] = useState(false);

  const selectedAllEmailsfunction = (e)=>{
    if(e.target.checked){
     const emails= getEmailService?.response?.map(email => email._id);
     setSelctedEmails(emails);
    }
    else{
      setSelctedEmails([])
    }
    

  }
  // everytime we get 

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]); // Include getEmailService in the dependency array

  // here we have to check if the seelcted type paramenter is equal to biin then it will go to 
  const deletetoBinFunction = (e)=>{

    if(type === 'bin'){

    }else{

    anotherPostApi.call(selectedEmails)
    }
    setRefresh(prevState => !prevState)

  }

  return (
    <Box style={Current ? { marginLeft: 250, width: 'calc(100%-250px' } : { width: '100%' }}>
      <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
        <Checkbox onChange={(e)=> selectedAllEmailsfunction(e)} />
        <DeleteIcon onClick= {(e) => deletetoBinFunction(e)} />
      </Box>
      <Box>
        {getEmailService?.response?.map((email) => (
          <EmailDesign
          key={email._id}
          email={email}
          selectedEmails={selectedEmails}
          setRefresh={setRefresh}
           />
        ))}
      </Box>
    </Box>
  );
}
