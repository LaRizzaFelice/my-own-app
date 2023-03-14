import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const InputItem = ({ setText, setUpdated, input }) => {
  const [inputValue, setInputValue] = useState("");

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
      <TextField type="text" onChange={handleInput} />

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
