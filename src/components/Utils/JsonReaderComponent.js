import React, { useState, useEffect } from 'react';
import AboutMe from '../../assets/aboutMe/AboutMe.json'

const JsonReaderComponent = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(AboutMe); // Replace with the actual path
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Text from JSON:</h2>
      {jsonData && <p>{jsonData.text}</p>}
    </div>
  );
};

export default JsonReaderComponent;