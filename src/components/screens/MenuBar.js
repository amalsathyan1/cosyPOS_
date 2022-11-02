import React from "react";
import styled from "styled-components";

function MenuBar() {
  return (
    <MenuBarContainer>
      <Wrapper className="wrapper">
        <ListContainer>
          <Top>
            <Logo>
              <LogoContainer>
                <LogoImage
                  src={require("../assets/images/logo.png")}
                  alt="Cosypos Logo"
                />
              </LogoContainer>
            </Logo>
            <MenuListContainer>
              <MenuList>
                <ListItems> Reservation</ListItems>

                <ListItems> Table Services</ListItems>

                <ListItems> Menu</ListItems>

                <ListItems> Delivery</ListItems>

                <ListItems> Accounting</ListItems>
              </MenuList>
            </MenuListContainer>
          </Top>
          <Bottom>
            <Users>
              <User>
                <Letter>L</Letter>
                <Name>Lesliya k</Name>
              </User>
              <User>
                <Letter>C</Letter>
                <Name>Camaron W.</Name>
              </User>
              <User>
                <Letter>J</Letter>
                <Name>Jacob j.</Name>
              </User>
            </Users>
            <Year>
              <YearLetter>C</YearLetter>
              <AppYear>2022 CosyPOS App</AppYear>
            </Year>
          </Bottom>
        </ListContainer>
      </Wrapper>
    </MenuBarContainer>
  );
}

export default MenuBar;

const MenuBarContainer = styled.aside`
  width: 18%;
  background: #000;
`;
const Wrapper = styled.div``;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 750px;
`;
const Top = styled.div``;
const Logo = styled.h1`
  width: 70%;
  margin: 0 auto;
  padding-top: 15px;
  cursor: pointer;
`;
const LogoContainer = styled.a`
  display: inline-block;
`;
const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;

const MenuListContainer = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  align-items: center;
`;
const MenuList = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 73px;
  list-style: none;
  font-weight: 500;
  width: 82%;
  color: #a6a6a6;
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 6px;
    height: 40px;
    width: 170px;
    border-radius: 8px;
    background: #2d2d2d;
    opacity: 0;
    z-index: -1;
    cursor: pointer;
  }
  
  :hover::before {
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
  }
`;
const ListItems = styled.span`
  color: #a6a6a6;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 15px;
  padding: 10px;
  :hover {
    color: #fff;
    background: #2d2d2d;
    border-radius: 6px;
    
  }
`;

const Bottom = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;
const Users = styled.ul`
  height: 50%;
  margin-right: 45px;
  margin-top: 120px;
`;
const User = styled.li`
  margin-bottom: 15px;
  border-radius: 20px;
  color: #2d2d2d;
  list-style: none;
  padding: 10px;
  border: 1px solid #a6a6a6;
  cursor: pointer;
  &:hover {
    background: #FAC2D9;
    width: 100%;
  }
`;
const Letter = styled.span`
  padding: 6px 10px;
  border-radius: 50%;
  background: #CFDDDB;
  color: #000;
  font-weight: 500;
  margin-right: 12px;
`;
const Name = styled.span`
  font-size: 14px;
`;

const Year = styled.div``;
const YearLetter = styled.span`
  font-size: 10px;
  font-weight: 800;
  background: #c6b1e1;
  color: #000;
  border-radius: 25px;
  padding: 3px 8px;
`;
const AppYear = styled.span`
  margin-left: 10px;
  color: #a6a6a6;
  font-size: 12px;
`;
