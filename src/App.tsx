import { Button, Paper } from "@mui/material";

function App() {
  return (
    <div>
      <h1 className="font-bold underline mb-4">React App</h1>

      <div className="flex gap-4">
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
        <Paper>paper</Paper>
      </div>
    </div>
  );
}

export default App;
