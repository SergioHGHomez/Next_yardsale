import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetContries = (API) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setCountries(response.data);
    }
    fetchData();
  }, [API]);

  return countries;
};

export default useGetContries;
