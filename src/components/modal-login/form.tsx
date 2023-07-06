import React from "react";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { IFormProps } from "./@types";
import { useAuth, useInputText } from "../../hooks";

export default function Form({ onClose }: IFormProps) {
  const { user, login } = useAuth();

  const initialValues = { name: user?.name ?? "", email: user?.email ?? "" };
  const input = useInputText(initialValues);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    login(input.name, input.email, { onLogin: onClose });
  }

  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-pr text-2xl">Welcome, enter your details</h3>

      <Alert
        severity="info"
        sx={{ bgcolor: "transparent", color: "white", p: 0, mt: 0.5, mb: 4 }}
      >
        <AlertTitle>
          Note: Enter your name and email regardless of whether you have an
          account or not.
        </AlertTitle>
      </Alert>

      <div className="grid gap-4">
        <TextField
          autoFocus
          required
          label="Email"
          type="email"
          name="email"
          value={input.email}
          onChange={input.onChange}
          onBlur={input.onBlur}
          error={input.errors.email ? true : false}
          helperText={input.errors.email}
        />

        <TextField
          required
          label="Name"
          type="text"
          name="name"
          value={input.name}
          onChange={input.onChange}
          onBlur={input.onBlur}
          error={input.errors.name ? true : false}
          helperText={input.errors.name}
        />

        <div className="w-max ml-auto flex gap-4">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
