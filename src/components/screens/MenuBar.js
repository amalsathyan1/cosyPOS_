import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
              <Menu>
                <Link to="/Menu">
                  <LinkItems> Menu</LinkItems>
                </Link>
              </Menu>
              <Menu>
                <Link to="/Reservation">
                  <LinkItems> Reservation</LinkItems>
                </Link>
              </Menu>
              <Menu>
                <Link to="/TableServices">
                  <LinkItems> Table Services</LinkItems>
                </Link>
              </Menu>
              <Menu>
                <Link to="/Delivery">
                  <LinkItems> Delivery</LinkItems>
                </Link>
              </Menu>
              <Menu>
                <Link to="/Accounting">
                  <LinkItems> Accounting</LinkItems>
                </Link>
              </Menu>
            </MenuListContainer>
          </Top>
          <Bottom>
            <Peoples>
              <People>
                <Alpha>L</Alpha>
                <Name>Lesliya k</Name>
              </People>
              <People>
                <Alpha>C</Alpha>
                <Name>Camaron W.</Name>
              </People>
              <People>
                <Alpha>J</Alpha>
                <Name>Jacob j.</Name>
              </People>
            </Peoples>
            <Copy>
              <CopyLetter>C</CopyLetter>
              <Year>2022 CosyPOS App</Year>
            </Copy>
          </Bottom>
        </ListContainer>
      </Wrapper>
    </MenuBarContainer>
  );
}

export default MenuBar;

const MenuBarContainer = styled.aside`
  width: 18%;
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
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li`
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
  :hover {
    transition: 500ms linear;
    transform: scale(1.1);
  }
  :hover::before {
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
  }
`;
const LinkItems = styled.span`
  color: #a6a6a6;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
`;

const Bottom = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;
const Peoples = styled.ul`
  height: 50%;
  margin: auto 0;
  margin-right: 45px;
  margin-top: 200px;
`;
const People = styled.li`
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 6px;
  border: 1px solid #a6a6a6;
  cursor: pointer;
  &:hover {
    background: #fac2d9;
    transition: 500ms linear;
    transform: scale(1.1);
  }
`;
const Alpha = styled.span`
  padding: 3px 8px;
  border-radius: 50%;
  background: #2d2d2d;
  color: #000;
  font-weight: 500;
  margin-right: 12px;
`;
const Name = styled.span`
  font-size: 14px;
`;

const Copy = styled.div`
  margin-top: 30px;
`;
const CopyLetter = styled.span`
  font-size: 10px;
  font-weight: 800;
  background: #c6b1e1;
  color: #000;
  border-radius: 25px;
  padding: 3px 8px;
`;
const Year = styled.span`
  margin-left: 10px;
  color: #a6a6a6;
  font-size: 12px;
`;
