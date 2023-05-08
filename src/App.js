import { useState } from "react";
// import ForgotPassword from "./Component/ForgotPassword";
import Header from "./Component/Header/Header";
import MenuList from "./Component/Layout/MenuList";
// import Login from "./Component/Login";
// import SignUp from "./Component/SignUp";
import Cart from "./Component/Cart";
import { Route, Routes } from "react-router-dom";

const Dummy_list = [
  {
    uuid: "c39ad4a1-929f-4ed1-9b43-8d77f895b102",
    name: "Vegetable Biryani",
    quantity: 0,
    description:
      "A fragrant and flavorful Indian rice dish with mixed vegetables, herbs, and spices.",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 4.3,
    cartQuantity: 0,
  },
  {
    uuid: "7aeb3383-4216-4d1e-bc22-75452b3d3c7e",
    name: "Spinach and Feta Stuffed Mushrooms",
    quantity: 0,
    description:
      "Mushroom caps filled with a delicious mixture of spinach, feta cheese, and herbs.",
    price: 699,
    imageUrl:
      "https://images.unsplash.com/photo-1662226708407-6ae3feaf1c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    rating: 4.1,
  },
  {
    uuid: "fc4a4bf4-408d-4d8d-99db-2e78b2993b11",
    name: "Vegetarian Pad Thai",
    quantity: 0,
    description:
      "A classic Thai dish made with rice noodles, vegetables, and peanuts in a sweet and tangy sauce.",
    price: 1099,
    imageUrl:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8VGhhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    cartQuantity: 0,
  },
  {
    uuid: "6cf5f6db-b7a9-4246-a13c-7876890a3073",
    name: "Caprese Salad",
    quantity: 0,
    description:
      "A fresh and simple Italian salad made with sliced tomatoes, fresh mozzarella, and basil leaves.",
    price: 799,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677619680472-3130a97bd5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    rating: 4.0,
    cartQuantity: 0,
  },
  {
    uuid: "c45578c1-1f28-447c-8a63-702f67aa9da2",
    name: "Roasted Vegetable Sandwich",
    quantity: 0,
    description:
      "A hearty sandwich with roasted bell peppers, zucchini, eggplant, and pesto mayo.",
    price: 549,
    imageUrl:
      "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8U2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.2,
    cartQuantity: 0,
  },
  {
    uuid: "6c8bb56b-747d-4c9b-9b8c-64a18452e5df",
    name: "Grilled Portobello Mushroom Burger",
    quantity: 0,
    description:
      "A meaty and satisfying vegetarian burger made with grilled portobello mushrooms, cheese, and veggies.",
    price: 799,
    imageUrl:
      "https://media.istockphoto.com/id/577948346/photo/homemade-grassfed-mushroom-and-swiss-cheese-hamburger.jpg?s=1024x1024&w=is&k=20&c=ZgOaZuzSG-SjtrPkj3Q0S_yvoT4VlZX0NgqtQxcGQk4=",
    rating: 4.4,
    cartQuantity: 0,
  },
];

function App() {
  const [menuList, setMenuList] = useState(Dummy_list);
  const [cartItems, setCartItems] = useState([]);

  const incrementOnMealsPage = (list) => {
    const mealsData = [...menuList];
    const ItemIdx = mealsData.findIndex((item) => item.uuid === list.uuid);
    mealsData[ItemIdx].quantity += 1;
    setMenuList(mealsData);
  };

  const decrementOnMealsPage = (list) => {
    const mealsData = [...menuList];
    const ItemIdx = mealsData.findIndex((item) => item.uuid === list.uuid);

    if (mealsData[ItemIdx].quantity < 1) {
      mealsData[ItemIdx].quantity = 0;
    } else {
      mealsData[ItemIdx].quantity -= 1;
    }
    setMenuList(mealsData);
  };
  const firstOrderInCart = (list) => {
    const myCart = [...cartItems];
    myCart.push({
      uuid: list.uuid,
      name: list.name,
      quantity: list.quanity,
      description: list.description,
      imageUrl: list.imageUrl,
      rating: list.rating,
      price: list.price,
      cartQuantity: 1,
    });
    setCartItems(myCart);
  };

  const addItemsToCart = (list) => {
    const mealsInCart = [...cartItems];
    const existingItem = mealsInCart.find((item) => item.uuid === list.uuid);
      existingItem.cartQuantity += 1;
    setCartItems(mealsInCart);
  };

  const removeItemsFromCart = (list) => {
    console.log(list)
    const mealsInCart = [...cartItems];
    const itemIdx = mealsInCart.findIndex((item) => item.uuid === list.uuid);
    if (mealsInCart[itemIdx].cartQuantity >=2) {
      mealsInCart[itemIdx].cartQuantity -= 1;
      console.log(mealsInCart)
      setCartItems(mealsInCart);
      console.log("inelse",mealsInCart);

      
    } else {
      const newCartArr = mealsInCart.filter((item) => item.uuid !== list.uuid);
      console.log("in if",newCartArr)
    
      setCartItems(newCartArr);
    }
  };

  return (
    <div>
      <Header cartItemsLength={cartItems} />
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAdd={addItemsToCart}
              onRemove={removeItemsFromCart}
              onQuantityAdd={incrementOnMealsPage}
              onQuantityRemove={decrementOnMealsPage}
            />
          }
        ></Route>
        <Route
          path="/meallist"
          element={
            <MenuList
              menu={menuList}
              onFirstCartItem = {firstOrderInCart}
              onCartAdd={addItemsToCart}
              onCartRemove={removeItemsFromCart}
              onQuantityAdd={incrementOnMealsPage}
              onQuantityRemove={decrementOnMealsPage}
            />
          }
        ></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
        {/* <Route path="/forgotpassword" element={<ForgotPassword />}></Route> */}
        {/* <Route path="/log" element={<Login />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
