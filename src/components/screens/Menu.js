import React from "react";
import styled from "styled-components";
import food from "../JSON/food.json"

function menu() {
  return (
    <MenuContainer>
      <Wrapper classname="wrapper">
        <Container>
          <Header>
            <Search>
              <SearchIcon
                src={require("../assets/images/search.svg").default}
              />
              <SearchInput placeholder="search" />
            </Search>
          </Header>
          <Category>
            <Items style={{backgroundColor:"#CFDDDB"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-1.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Break Fast</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
            <Items style={{backgroundColor:"#E4CDEE"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-2.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Soups</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
            <Items style={{backgroundColor:"#C2DBE9"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-3.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Pasta</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
            <Items style={{backgroundColor:"#C9CAEE"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-4.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Sushi</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
            <Items style={{backgroundColor:"#FAC2D9"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-5.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Main Course</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
            <Items style={{backgroundColor:"#E6DADE"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-6.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Desserts</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
            <Items style={{backgroundColor:"#F0C8CF"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-7.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Drinks</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
            <Items style={{backgroundColor:"#C3E9DE"}}>
              <ImgContainer>
                <ImgCategory
                  src={require("../assets/images/card-8.svg").default}
                />
              </ImgContainer>
              <ImgContent>
                <Heading>Alcohol</Heading>
                <ItemNUmber>13 Items</ItemNUmber>
              </ImgContent>
            </Items>
          </Category>
        </Container>
      </Wrapper>
      <Line />

      
    </MenuContainer>
  );
}

export default menu;

const MenuContainer = styled.section`
  width: 60%;
  background: #000;
`;
const Wrapper = styled.div``;
const Container = styled.div``;
const Header = styled.div`
  display: flex;
  height: 80px;
  margin-left: 40px;
`;
const Search = styled.div`
  width: 30%;
  margin: 19px 0px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: #2d2d2d;
`;
const SearchIcon = styled.img`
  height: 22px;
  width: 30px;
`;
const SearchInput = styled.input`
  width: 85%;
  height: 33px;
  margin: 19px 0px;
  background: #2d2d2d;
  border-style: none;
`;
const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Items = styled.li`
  height: 130px;
  width: 20%;
  border-radius: 10px;
  margin: 7px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #2d2d2d;
`;
const ImgContainer = styled.div`
  margin-left: 10px;
`;
const ImgCategory = styled.img``;
const ImgContent = styled.div`
  margin-left: 10px;
`;
const Heading = styled.h3`
  color: #000;
  font-weight: 600;
`;
const ItemNUmber = styled.h5`
  font-size: 14px;
  color: #8e8e8e;
`;
const Line = styled.hr`
  border-bottom: 1px solid #2d2d2d;
  width: 80%;
  margin-left: 45px;
`;
