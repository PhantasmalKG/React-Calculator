import { useState } from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import ButtonDisplay from './ButtonDisplay'


function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [previousValue, setPreviousValue] = useState<number>(0);
  const [operation, setOperation] = useState<string | null>(null);
  const [secondOperandFlag, setSecondOperandFlag] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  

  function handleButtonClick(value: string): void {
    
    if (value === "C"){
        setDisplayValue("0");
        return;
    }
    
    if (displayValue === "0"){
        setDisplayValue(value);
    } else{
        setDisplayValue(displayValue + value);
    }
  }

  function numericButtonClick(numValue: string): void {
    if (secondOperandFlag) {
      setDisplayValue(numValue);
      setSecondOperandFlag(false);
      return;
    }

    if (displayValue === "0") {
      setDisplayValue(numValue);
    } else {
      setDisplayValue(displayValue + numValue);
    }
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
    "AC", "C", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=", "+/-"
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
        

        
      </div>
    </div>
     
    </>
  )
}

export default Calculator
