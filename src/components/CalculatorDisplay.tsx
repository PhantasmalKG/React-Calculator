
type CalculatorDisplayProps = {
  value: number | string;
};

function CalculatorDisplay({value}: CalculatorDisplayProps) {
  return (
    <div className="calculator-display">{value}</div>
  )
}

export default CalculatorDisplay