
type ButtonDisplayProps = {
  value: string;
  onClick: (value: string) => void;
};


function ButtonDisplay({value, onClick}: ButtonDisplayProps) {
  return (
    <button className="calculator-button" onClick={() => onClick(value)}>
      {value}
    </button>
  )
}

export default ButtonDisplay
