import React, { useState, useEffect } from 'react';
import Button from '../../common/Button';
import FormImput from '../../common/FormInput';
import axios from 'axios';

const FilterSessionsByLibrary = () => {
  const [libId, setId] = useState(0);
  const [Sessions, setSessions] = useState([]);
  
  useEffect((libId)=>{
    fetchSessions(libId);
  },[]);

  const fetchSessions = id => {
   

  const handleSubmit = event => {
    event.preventDefault();
    
  
  };

  const handleChange = event => {
    setId(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <label>Library id</label>
       <FormImput
        type="text"
        name="libray_id"
        pattern="[0-9]*"
        onChange={handleChange}
      />
       <Button type="submit">Submit</Button>
       </form>
     </div>
  );
};

export default FilterSessionsByLibrary;