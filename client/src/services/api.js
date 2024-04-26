import axios from 'axios';

// WE CALL THE FUNCTION  POST GET PUT DELETE
const API_URL= ''; // we dont need it because it will pick it up with the endpoint

const API_GMAIL= async(urlObject, payLoad, type)=>{
 return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}/${type}`, 
    data: payLoad 
  });


}
export default API_GMAIL;