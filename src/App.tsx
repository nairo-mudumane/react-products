import { Button, Paper, TextField } from "@mui/material";

function App() {
  return (
    <div className="grid gap-6">
      <h1 className="font-bold underline mb-4">React App</h1>

      <div className="flex gap-4">
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
        <Paper>paper</Paper>
      </div>

      <div className="flex gap-4">
        <TextField variant="filled" label="filled" />
        <TextField variant="outlined" label="outlined" />
        <TextField variant="standard" label="standard" />
      </div>
    </div>
  );
}

export default App;
