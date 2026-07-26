import { useState } from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import ButtonDisplay from './ButtonDisplay'


function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [previousValue, setPreviousValue] = useState<number>(0);
  const [operatoration, setOperatoration] = useState<string | null>(null);
  const [result, setResult] = useState<number>(0);
  

  function handleButtonClick(value: string) {
    setDisplayValue(value);
  }
  // const handleButtonClick = (value: string) => {
  //   if (value === 'C') {
  //     setDisplayValue('0');

  //   } else if (value === 'AC') {
  //     setDisplayValue('0');
  //     setResult(0);

  //   } else if (value === '=') {
  //     try {
  //       const evalResult = eval(displayValue);
  //       setDisplayValue(evalResult.toString());
  //       setResult(evalResult);

  //     } catch (error) {
  //       setDisplayValue('Error');

  //     }
  //   } else {
  //     setDisplayValue((prev) => (prev === '0' ? value : prev + value));
      
  //   }
  // };


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
        <CalculatorDisplay  value={displayValue}/>
        <div className="calculator-button-grid">
           {btns.map((btn) => (
            <ButtonDisplay key={btn} value={btn} onClick={handleButtonClick}/>
            ))}
        </div>
        <ButtonDisplay value={"7"} onClick={handleButtonClick}/>

        
      </div>
    </div>
     
    </>
  )
}

export default Calculator
