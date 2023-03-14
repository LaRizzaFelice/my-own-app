import { Button, ButtonGroup } from "@mui/material";

export const MainButtons = ({ label }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>{label}</Button>
    </ButtonGroup>
  );
};
