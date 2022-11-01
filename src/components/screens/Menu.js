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


     

      <Food>
        <Head>
          <Tittle>Orders</Tittle>
          <ArrowDiv>
            <Arrow src={require("../assets/images/arrow.svg").default} />
          </ArrowDiv>
          <Tittle>Kitchen</Tittle>
        </Head>
        <foodDetail>
          <Name></Name>
          <Price></Price>
        </foodDetail>
        <BuyFood>
          <Minus>
            <MinusImage src={require("../assets/images/minus.svg").default} />
          </Minus>
          <foodAdded></foodAdded>
          <Plus>
            <PlusImage src={require("../assets/images/plus.svg").default}/>
          </Plus>
        </BuyFood>
      </Food>
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
  border: none;
  outline: none;
  
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
const Dishes = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Food = styled.li`
  width: 20%;
  height: 130px;
  margin: 5px 0px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    background-color: #2d2d2d;
    width: 95%;
    margin-left: 15%;
    border-radius: 10px;
    height: 100%;
    opacity: 1;
    z-index: 1;
  }
  &:hover::before {
    opacity: 1;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
  padding-top: 4px;
  margin-left: 50px;
  color: #8e8e8e;
  position: relative;
  z-index: 100;
`;
const ArrowDiv = styled.span`
  width: 20px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;
const Arrow = styled.img`
  height: 100%;
  width: 100%;
`;
const Tittle = styled.span`
 
`;
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
  position: relative;
  left: 95px;
  top: 40px;
  z-index: 100;
`;
const Minus = styled.span`
  border-radius: 4px;
  border: .5px solid #8e8e8e;
  margin-right: 10px;
  display: flex;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;
const MinusImage = styled.img`
  width: 100%;
  height: 100%;
`;
const DishAdded = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const Plus = styled.span`
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;
const PlusImage = styled.img`
  width: 100%;
  height: 100%;
`;
