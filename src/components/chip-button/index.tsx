import { Button } from "@mui/material";
import { IChipButtonProps } from "./@types";
import { StyledContainedButton, StyledOutlinedButton } from "./styles";

export function ChipButton({
  text,
  active = false,
  ...props
}: IChipButtonProps) {
  if (active)
    return (
      <Button {...props} variant="outlined">
        {text}
      </Button>
    );

  return (
    <Button {...props} variant="contained">
      {text}
    </Button>
  );
}
