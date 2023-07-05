import { createGlobalStyle } from "styled-components";
import { THEME } from ".";

export const GlobalStyles = createGlobalStyle`
a {
  text-decoration-line: underline;
  text-underline-offset: 6px;
   width: max-content;

  &:hover {
    text-decoration-line: none;
  }
}

img,
svg {
  width: 100%;
  height: auto;
  object-fit: cover;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-button {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar:hover,
::-webkit-scrollbar-button:hover {
  width: 16px;
} 

::-webkit-scrollbar-thumb {
  background: ${THEME.colors.tertiary};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${THEME.colors.primary};
}

::-webkit-scrollbar-thumb:active {
  background: ${THEME.colors.primary};
}

::-webkit-scrollbar-track {
  background: #d4d4d4;
  border-radius: 10px;
}

::-webkit-scrollbar-track:hover {
  background: #d4d4d4;
}

::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
`;
