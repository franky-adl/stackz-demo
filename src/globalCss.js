import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    font-family: "Bebas Neue", Helvetica, Arial, sans-serif;
  }
  .manrope {
    font-family: "Manrope", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  .scene-loader {
    width: 25px;
    aspect-ratio: 1;
    --c: no-repeat linear-gradient(#fff 0 0);
    background: 
      var(--c) 0%   100%,
      var(--c) 50%  100%,
      var(--c) 100% 100%;
    animation: l2 1s infinite linear;
  }
  @keyframes l2 {
    0%  {background-size: 20% 100%,20% 100%,20% 100%}
    20% {background-size: 20% 60% ,20% 100%,20% 100%}
    40% {background-size: 20% 80% ,20% 60% ,20% 100%}
    60% {background-size: 20% 100%,20% 80% ,20% 60% }
    80% {background-size: 20% 100%,20% 100%,20% 80% }
    100%{background-size: 20% 100%,20% 100%,20% 100%}
}
`;

export default GlobalStyle;
