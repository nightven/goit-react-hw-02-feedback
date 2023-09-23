const Buttons = ({ keys, onClickButton }) => {
  return (
    <div>
    {keys.map(key => (
    <button key={key} type="button" onClick={() => onClickButton(key)}>
      {key}
    </button>
  ))}
    </div>
  ) 
};

export default Buttons;
