import { Badge } from "@mui/material";
import { styled as MuiStyled } from "@mui/material/styles";
import { THEME } from "../../global";

export const StyledBadge = MuiStyled(Badge)`
.MuiBadge-badge {
  background: white;
  color: ${THEME.colors.primary};
  font-weight: 700;
}
`;
