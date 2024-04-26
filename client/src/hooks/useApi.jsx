import { useState } from 'react';

// we exported in diffrent name
import API from '../services/api';

const useApi = (urlObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    const call = async (payload, type = '') => {
        setResponse(null);
        setIsLoading(true);
        setError("");
        
        try {
            let res = await API(urlObject, payload, type);
            setResponse(res.data); // THIS IS WHERE WE GET THE RESPONSE
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { call, response, error, isLoading };
}

export default useApi;