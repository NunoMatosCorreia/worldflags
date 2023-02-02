import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios';


const FlagsContext = createContext();

export default FlagsContext;

export function FlagsContextProvider({ children}) {

    const [flags, setFlags] = useState([]);

    const getFlags = () => {
        axios
        .get("https://restcountries.com/v2/all")
        .then((response) => setFlags(response.data))
    };
    useEffect(() => {
        getFlags();
    }, []);


  return (
   <FlagsContext.Provider
   value = {{
    flags,
    setFlags,
   }}
   >
    {children}
   </FlagsContext.Provider>
  );
}

