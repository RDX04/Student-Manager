import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function AddToTable() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState([]);

  const handleAdd = () => {
    // Check if name and age are not empty
    if (name.trim() !== '' && age.trim() !== '') {
      // Add new data to the existing data array
      setData([...data, { name, age }]);
      // Clear input fields
      setName('');
      setAge('');
    }
  };

  const handleEdit = (index) => {
    // Fetch the data of the selected row and populate the input fields for editing
    setName(data[index].name);
    setAge(data[index].age);
    // Remove the selected row from the data array
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleDelete = (index) => {
    // Remove the selected row from the data array
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleNameChange = (event) => {
    // Allow only alphabets in the name field
    const inputValue = event.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(inputValue) || inputValue === '') {
      setName(inputValue);
    }
  };

  const handleAgeChange = (event) => {
    // Allow only numbers in the age field
    const inputValue = event.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(inputValue) || inputValue === '') {
      setAge(inputValue);
    }
  };

  return (
    <div>
      <h2>Student Manager</h2>
      <h4>Total Count: {data.length}</h4>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <br />
      <div>
        <label>Age:</label>
        <input type="text" value={age} onChange={handleAgeChange} />
      </div>
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <br />
      <h4>All Student</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td><button onClick={() => handleEdit(index)}>Edit</button></td>
              <td><button onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
}

export default AddToTable;
