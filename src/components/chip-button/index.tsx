import { Button } from "@mui/material";
import { IChipButtonProps } from "./@types";

export function ChipButton({
  text,
  active = false,
  ...props
}: IChipButtonProps) {
  return (
    <Button {...props} variant={active ? "outlined" : "contained"}>
      {text}
    </Button>
  );
}
