import { useState } from 'react'
import CalculatorDisplay from './components/CalculatorDisplay'


function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [result, setResult] = useState(0);
  
  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplayValue('0');

    } else if (value === 'AC') {
      setDisplayValue('0');
      setResult(0);

    } else if (value === '=') {
      try {
        const evalResult = eval(displayValue);
        setDisplayValue(evalResult.toString());
        setResult(evalResult);

      } catch (error) {
        setDisplayValue('Error');

      }
    } else {
      setDisplayValue((prev) => (prev === '0' ? value : prev + value));
      
    }
  };


  const btns =[
      '%', 
    '7', '8', '9', 'C', 'AC',
    '4', '5', '6', '*', '/',
    '1', '2', '3', '+', '-',
    '0', '.', '+/-', '='
  ]

  return (
    <>
    <div className="react-calulator-container">
      <div className="react-calculator">
        <CalculatorDisplay />
        <div className="btns">

        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
