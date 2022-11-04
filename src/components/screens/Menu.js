import React, { useState } from "react";
import styled from "styled-components";
import food from "../JSON/food.json";

function menu({
  addFood,
  removeFood,
  quantity1,
  quantity2,
  quantity3,
  quantity4,
  quantity5,
  quantity6,
  quantity7,
  quantity8,
}) {
  let renderFood = () => {
    return food.map((food) => {
      return (
        <Food key={food.id}>
          <Head>
            <Tittle>Orders</Tittle>{" "}
            <ArrowDiv>
              <Arrow src={require("../assets/images/arrow.svg").default} />
            </ArrowDiv>
            <Tittle>C</Tittle>
          </Head>
          <FoodDetail>
            <Name>{food.title}</Name>
            <Price>${food.price}</Price>
          </FoodDetail>
          <BuyFood>
            <Substract
              onClick={() => {
                removeFood(food.id);
              }}
            >
              <SubImage src={require("../assets/images/minus.svg").default} />
            </Substract>
            <FoodAdded>{eval(`quantity${food.id}`)}</FoodAdded>
            <Addition
              onClick={() => {
                addFood(food.id);
              }}
            >
              <AddImage src={require("../assets/images/plus.svg").default} />
            </Addition>
          </BuyFood>
        </Food>
      );
    });
  };

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
            <Items style={{ backgroundColor: "#CFDDDB" }}>
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
            <Items style={{ backgroundColor: "#E4CDEE" }}>
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
            <Items style={{ backgroundColor: "#C2DBE9" }}>
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
            <Items style={{ backgroundColor: "#C9CAEE" }}>
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
            <Items style={{ backgroundColor: "#FAC2D9" }}>
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
            <Items style={{ backgroundColor: "#E6DADE" }}>
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
            <Items style={{ backgroundColor: "#F0C8CF" }}>
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
            <Items style={{ backgroundColor: "#C3E9DE" }}>
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

      <Foods>{renderFood()}</Foods>

      <Bottom>
        <Oders>
          <Order>
            <Alphabet style={{
                background: "#c6b1e1",
                color: "#fff",
              }}>T4</Alphabet>
            <Details>
              <CustomerName>Leslie K.</CustomerName>
              <CookFood>
                6 items{" "}
                <ArrowIcon
                  src={require("../assets/images/arrow.svg").default}
                />{" "}
                CookFood
              </CookFood>
            </Details>
            <Process style={{ display: "none" }}>In process</Process>
          </Order>
          <Order>
            <Alphabet
              style={{
                background: "#525151",
                color: "#fff",
              }}
            >
              T2
            </Alphabet>
            <Details>
              <CustomerName>Leslie K.</CustomerName>
              <CookFood>
                6 items{" "}
                <ArrowIcon
                  src={require("../assets/images/arrow.svg").default}
                />{" "}
                CookFood
              </CookFood>
            </Details>
            <Process>In process</Process>
          </Order>
          <Order>
            <Alphabet style={{ background: "#2d2d2d", color: "#fff" }}>T4</Alphabet>
            <Details>
              <CustomerName>Leslie K.</CustomerName>
              <CookFood>
                6 items{" "}
                <ArrowIcon
                  src={require("../assets/images/arrow.svg").default}
                />{" "}
                CookFood
              </CookFood>
            </Details>
            <Process>In process</Process>
          </Order>
        </Oders>
      </Bottom>
    </MenuContainer>
  );
}

export default menu;

const MenuContainer = styled.section`
  width: 62%;
  background: #000;
`;
const Wrapper = styled.div``;
const Container = styled.div``;
const Header = styled.div`
  height: 70px;
  display: flex;
 
`;
const Search = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  background: #2d2d2d;
  opacity: 0.7;
  margin: 14px 0px;
  border-radius: 5px;
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 20px;
`;
const SearchInput = styled.input`
  width: 85%;
  height: 33px;
  margin: 19px 0px;
  background: #2d2d2d;
  border: none;
  outline: none;
`;
const Category = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Items = styled.li`
  width: 24%;
  height: 140px;
  margin: 5px 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  border-bottom: 1.5px solid #2d2d2d;
  margin: 5px 0px;
`;
const Foods = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
`;
const Food = styled.li`
  width: 24%;
  height: 140px;
  margin: 5px 0px;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: #2d2d2d;
  border-left: 8px solid #FAC2D9;
  :hover{
    background: #FAC2D9;
    opacity: calc(1);
    color: #000;
    font-weight: 600;
  }
 
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
  padding-top: 5px;
  color: #8e8e8e;
  position: relative;
  z-index: 100;
`;
const ArrowDiv = styled.span`
  width: 20px;
  display: inline-block;
`;
const Arrow = styled.img`
  height: 100%;
  width: 100%;
`;
const Tittle = styled.span``;
const FoodDetail = styled.div`
  font-size: 15px;
  margin: 10px;
  position: relative;
  z-index: 100;
  padding-left: 5px;
`;
const Name = styled.h4``;
const Price = styled.span`
  color: #8e8e8e;
`;
const BuyFood = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
  position: relative;
  z-index: 100;
`;
const Substract = styled.span`
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-right: 10px;
  display: flex;
  width: 20px;
  padding: 2px;
  cursor: pointer;
`;
const SubImage = styled.img`
  width: 100%;
  height: 100%;
`;
const FoodAdded = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
const Addition = styled.span`
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 20px;
  padding: 2px;
  cursor: pointer;
`;
const AddImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Bottom = styled.div`
  margin-top: 20px;
`;
const Oders = styled.ul`
  display: flex;
  align-items: center;
  border-top: 1px solid #8e8e8e;
`;
const Order = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  border-right: 1px solid #8e8e8e;
  padding: 8px 5px;
  &:first-child {
    width: 30%;
  }
  &:last-child {
    border: none;
  }
  
`;
const Alphabet = styled.div`
  background: #525151;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 500;
`;
const Details = styled.div`
  height: 100%;
`;
const CustomerName = styled.h4`
  font-size: 14px;
  color: #fff;
  margin-left: 15px;
`;
const CookFood = styled.blockquote`
  font-size: 12px;
  color: #525151;
`;
const ArrowIcon = styled.img`
  width: 12px;
`;

const Process = styled.div`
  font-size: 7px;
  background: #84c27d;
  border-radius: 6px;
  padding: 2px 6px;
  margin-bottom: 20px;
  color: #000;
`;

