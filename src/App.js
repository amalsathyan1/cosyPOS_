import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import MenuBar from "./components/screens/MenuBar";
import Menu from "./components/screens/Menu";
import Cart from "./components/screens/Cart";
import PageNotFound from "./components/screens/PageNotFound";
import food from "./components/JSON/food.json";
import Accounting from "./components/screens/comingsoonpages/Accounting";
import Delivery from "./components/screens/comingsoonpages/Delivery";
import Reservation from "./components/screens/comingsoonpages/Reservation";
import TableServices from "./components/screens/comingsoonpages/TableServices";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [buyItems, setBuyItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);
  const [quantity5, setQuantity5] = useState(0);
  const [quantity6, setQuantity6] = useState(0);
  const [quantity7, setQuantity7] = useState(0);
  const [quantity8, setQuantity8] = useState(0);

  const addFood = (id) => {
    let isCart = false;

    let item = food.find((food) => food.id === id);
   
    if (buyItems.length > 0) {
      isCart = buyItems.find((buyItem) => {
        if (buyItem.id === item.id) {
          buyItem.quantity += 1;
          buyItem.price += item.price;
          setBuyItems([...buyItems]);
          console.log(buyItems);
          setTotal(total + item.price);
          eval(`setQuantity${item.id}(quantity${item.id} +1)`);
          console.log(eval(`quantity${item.id}`));
          return true;
        }
        return false;
      });
    } else {
      let newItem = {
        id: item.id,
        number: buyItems.length + 1,
        title: item.title,
        price: item.price,
        quantity: 1,
      };

      setTotal(total + item.price);
      setBuyItems([...buyItems, newItem]);
      console.log(buyItems);
      eval(`setQuantity${item.id}(quantity${item.id} + 1)`);
      console.log(eval(`quantity${item.id}`));
    }

    buyItems.map(() => {
      if (Boolean(isCart) === false) {
        let newItem = {
          id: item.id,
          number: buyItems.length + 1,
          title: item.title,
          price: item.price,
          quantity: 1,
        };

        setBuyItems([...buyItems, newItem]);
        setTotal(total + item.price);
        console.log("i have entered map");
        eval(`setQuantity${item.id}(quantity${item.id} + 1)`);
        console.log(eval(`quantity${item.id}`));
      }
      return null;
    });
  };

  let removeFood = (id) => {
    let item = food.find((food) => food.id === id);
    buyItems.find((buyItem) => {
      if (buyItem.id === item.id) {
        if (buyItem.quantity === 1) {
          let newArr = buyItems.filter((i) => {
            return i.id !== buyItem.id;
          });
          setBuyItems(newArr);
          eval(`setQuantity${item.id}(0)`);
          setTotal(total - item.price);
        } else {
          buyItem.quantity -= 1;
          buyItem.price -= item.price;
          setBuyItems([...buyItems]);
          setTotal(total - item.price);
          eval(`setQuantity${item.id}(quantity${item.id} - 1)`);
          console.log(eval(`quantity${item.id}`));
        }
      }
      return null;
    });
  };

  return (
    <>
      <>
        <Helmet>
          <title>CosyPOS</title>
        </Helmet>
        <MainContainer>
          <Router>
            <Routes>
              <Route
                path={"/"}
                element={[
                  <MenuBar />,
                  <Menu
                    addFood={addFood}
                    removeFood={removeFood}
                    quantity1={quantity1}
                    quantity2={quantity2}
                    quantity3={quantity3}
                    quantity4={quantity4}
                    quantity5={quantity5}
                    quantity6={quantity6}
                    quantity7={quantity7}
                    quantity8={quantity8}
                  />,
                  <Cart buyItems={buyItems} total={total} />,
                ]}
              />
              <Route
                path={"/Menu"}
                element={[
                  <MenuBar />,
                  <Menu
                    addFood={addFood}
                    removeFood={removeFood}
                    quantity1={quantity1}
                    quantity2={quantity2}
                    quantity3={quantity3}
                    quantity4={quantity4}
                    quantity5={quantity5}
                    quantity6={quantity6}
                    quantity7={quantity7}
                    quantity8={quantity8}
                  />,
                  <Cart buyItems={buyItems} total={total} />,
                ]}
              />
              <Route
                path={"/Accounting"}
                element={[
                  <MenuBar />,
                  <Accounting />,
                  <Cart buyItems={buyItems} total={total} />,
                ]}
              />
              <Route
                path={"/Delivery"}
                element={[
                  <MenuBar />,
                  <Delivery />,
                  <Cart buyItems={buyItems} total={total} />,
                ]}
              />
              <Route
                path={"/Reservation"}
                element={[
                  <MenuBar />,
                  <Reservation />,
                  <Cart buyItems={buyItems} total={total} />,
                ]}
              />
              <Route
                path={"/TableServices"}
                element={[
                  <MenuBar />,
                  <TableServices />,
                  <Cart buyItems={buyItems} total={total} />,
                ]}
              />
              <Route path={"*"} element={<PageNotFound />} />
            </Routes>
          </Router>
        </MainContainer>
      </>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
`;
