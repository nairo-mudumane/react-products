import { IconButton } from "@mui/material";
import { styled as MuiStyled } from "@mui/material/styles";
import { THEME } from "../../global";

export const StyledIconButton = MuiStyled(IconButton)`
border: 1px solid transparent;
font-size: inherit;

background: white;
color: ${THEME.colors.primary};

&:hover {
  border-color: white;
  color: white;
}
`;
