
type ButtonDisplayProps = {
  value: string;
  onClick: (value: any) => any;
};


function ButtonDisplay({value, onClick}: ButtonDisplayProps) {
  return (
    <button onClick={() => onClick(value)}>
      {value}
    </button>
  )
}

export default ButtonDisplay
