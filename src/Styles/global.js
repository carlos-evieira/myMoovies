import { createGlobalStyle} from "styled-components"

export default createGlobalStyle`

:root{
  font-size: 62.5%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
body, input, button , textarea {
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  outline: none;
  -webkit-font-smoothing: antialiased;

}
body{
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
  color: ${({theme})=> theme.COLORS.WHITE};
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: 0.3s;
}

button:hover, a:hover {
  filter: brightness(0.85);
}
`