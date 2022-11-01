import React from "react";
import styled from "styled-components";
import MenuBar from "./components/screens/MenuBar";
import Menu from "./components/screens/Menu";

function App() {
  return (
    <>
      <MainContainer>
        <MenuBar />
        <Menu />
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
`