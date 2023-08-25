import React, { useState } from 'react';
import './App.css';
import Input from './components/TextField';
import Button from './components/ButtonsCalcu';

function App() {

  const [num1, setNum1 ] = useState('');
  const [num2, setNum2 ] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setNum1(value);
  }
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setNum2(value);
    }
  };

  const handleOperation = (operation) => {
    switch (operation) {
      case 'add':
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case 'subtract':
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case 'multiply':
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case 'divide':
        setResult(parseFloat(num1) / parseFloat(num2));
        break;
      default:
        setResult('');
    }
  };

  return (
    <>
    <div className="App">
     
      <h1>Eduard Wilson P2</h1>
      <Input value={num1} onChange={handleNum1Change} placeholder="First number" />
      <Input value={num2} onChange={handleNum2Change} placeholder="Second number" />
      <div>
        <Button onClick={() => handleOperation('add')}>Add</Button>
        <Button onClick={() => handleOperation('subtract')}>Subtract</Button>
        <Button onClick={() => handleOperation('multiply')}>Multiply</Button>
        <Button onClick={() => handleOperation('divide')}>Divide</Button>

      </div>
      <h1>Answer: {result}</h1>
    </div>
    </>
  );
}

export default App;
