const theme = {
  colors: {
    dark: {
      bright: "#C4C4C4",
      medium: "#8E8E8E",
      main: "#0A0A0A",
    },
    light: {
      main: "#FAFAFA",
    },
  },
  font: "Poppins, sans-serif",
  rootFont: {
    sm: "14px",
    md: "16px",
    bg: "18px",
  },
  breakpoints: {
    sm: "375px",
    md: "750px",
    bg: "1175px",
  },
  maxWidth: "1175px",
};

//@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {} media example

export default theme;
