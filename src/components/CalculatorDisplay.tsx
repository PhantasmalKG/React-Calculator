
type CalculatorDisplayProps = {
  value: number | string;
};

function CalculatorDisplay({value}: CalculatorDisplayProps) {
  return (
    <div>{value}</div>
  )
}

export default CalculatorDisplay