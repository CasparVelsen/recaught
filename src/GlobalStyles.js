import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }

  header {
  display: flex;  
  align-items: center;
  gap: 10px;
  height: 38px;
  border-bottom: 0.5px solid #a2c36c;
  padding: 0 10px;
  position: relative;
  }

  main {
    margin: 10px;
    padding-bottom: 68px;
    overflow-y: auto;
    position: relative;
  }

  body {
    display: grid;
    grid-template-rows: 38px auto 48px;
    height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 112.5%;
  }
  input, label, button, textarea {
    font-size: 1em;
  }
`;
