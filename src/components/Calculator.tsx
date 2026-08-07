import { useState } from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import ButtonDisplay from './ButtonDisplay'
import "../index.css"


function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("0"); // State to hold the current value displayed on the calculator
  const [firstOperand, setFirstOperand] = useState<number | null>(null); // State to hold the first operand for calculations
  const [previousValue, setPreviousValue] = useState<number>(0); // State to hold the previous value for calculations
  const [operation, setOperation] = useState<string | null>(null); // State to hold the current operation (+, -, *, ÷)
  const [secondOperandFlag, setSecondOperandFlag] = useState<boolean>(false); // State to indicate if the next input is the second operand
  const [result, setResult] = useState<number>(0); // State to hold the result of the calculation
  

  function handleButtonClick(value: string): void {
    
    switch(value){
        case "C":
            setDisplayValue("0");
            setFirstOperand(null);
            setOperation(null);
            setSecondOperandFlag(false);
            return;
        
            case "+":
            case "-":
            case "*":
            case "÷":
                
    }


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

  function handleOperation(op: string): void {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(displayValue));
      setOperation(op);
      setSecondOperandFlag(true);
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
