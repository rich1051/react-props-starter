import { useState } from "react";
import axios from "axios";

function CreatureForm(props) {

    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    // Function to add a new creature to the database
    const handleSubmit = (event) => {
        event.preventDefault();

    axios({
      method: 'POST',
      url: '/creature',
      data: {
        name: newCreatureName,
        origin: newCreatureOrigin
      }
    })
      .then( (response) => {
        console.log('Response:', response);
        props.fetchCreatures();
        //Clear Inputs & State
        setNewCreatureName('');
        setNewCreatureOrigin('')
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
    }
  
    return (
        <>
        <h2>Add Creature</h2>
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          onChange={ (event) => setNewCreatureName(event.target.value) } 
          value={newCreatureName}
          />
        <label>Origin:</label>
        <input 
          onChange={ (event) => setNewCreatureOrigin(event.target.value) } 
          value={newCreatureOrigin}/>
        <button type="submit">Add New Creature</button>
      </form>
      </>
    )
}

export default CreatureForm