import { Button, TextField } from "@mui/material";

export const InputItem = ({ setText, setUpdated, input }) => {
  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setUpdated(input);
  };

  const handleEmptyInputOnClick = () => {
    setText("");
  };

  return (
    <div>
      <TextField type="text" onChange={handleInput} value={input} />

      <Button
        onClick={() => {
          handleClick();
          handleEmptyInputOnClick();
        }}
      >
        Confirm
      </Button>
    </div>
  );
};
