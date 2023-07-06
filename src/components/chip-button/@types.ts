import { ButtonProps } from "@mui/material";

export interface IChipButtonProps extends ButtonProps {
  text: React.ReactNode;
  active?: boolean;
}
