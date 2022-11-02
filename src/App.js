import React, { useState } from "react";
import styled from "styled-components";
import MenuBar from "./components/screens/MenuBar";
import Menu from "./components/screens/Menu";
import Cart from "./components/screens/Cart";
import food from "./components/JSON/food.json";

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
      isCart = buyItems.find((buyItems) => {
        if (buyItems.id === item.id) {
          buyItems.quantity += 1;
          buyItems.price += item.price;
          setBuyItems([...buyItems]);
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
      setBuyItems([...setBuyItems, newItem]);
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
    buyItems.find((buyItems) => {
      if (buyItems.id === item.id) {
        if (buyItems.qty === 1) {
          let newArr = buyItems.filter((i) => {
            return i.id !== buyItems.id;
          });
          console.log(newArr);
          setBuyItems(newArr);
          eval(`setQty${item.id}(0)`);
          setTotal(total - item.price);
        } else {
          buyItems.qty -= 1;
          buyItems.price -= item.price;
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
      <MainContainer>
        <MenuBar />
        <Menu />
        <Cart />,
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
`;
