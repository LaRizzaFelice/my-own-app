import "./App.css";
import { MainButtons } from "./components/Mainbuttons";
import MiddleDividers from "./components/Divider";
import StandardImageList from "./components/ImageList";
import { Box } from "@mui/material";
import { InputItem } from "./components/InputItem";
import { useState } from "react";

const homeButtons = ["Home", "Links", "Favorites", "History"];

function App() {
  const [input, setText] = useState("");
  const [updated, setUpdated] = useState(input);
  return (
    <div>
      <Box>
        {homeButtons.map((label) => {
          return <MainButtons label={label} />;
        })}
      </Box>
      <Box>
        <InputItem setText={setText} setUpdated={setUpdated} input={input} />
      </Box>
      <MiddleDividers text={updated} />
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <StandardImageList />
      </Box>
    </div>
  );
}

export default App;
