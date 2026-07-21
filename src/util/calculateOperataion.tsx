import React from 'react'

function calculateOperataion(firstValue: number, secondValue: number, operator: string): number {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    case '/':
      return firstValue / secondValue;
    default:
      return 0;
  }

}

export default calculateOperataion
