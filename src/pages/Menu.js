import Focacciapizza from "../assets/Pizza-Focaccia.jpg";
import funghi from "../assets/pizza-funghi.jpg";
import margherita from "../assets/pizza-margherita.jpg";
import prosciutto from "../assets/pizza-prosciutto.jpeg";
import salamino from "../assets/pizza-salamino.jpeg";
import spinaci from "../assets/pizza-spinaci.jpg";
import React, { useState } from "react";
import Pizzacount from "../components/Pizzacount";
import "../styles/menu.css";
// import { Button } from "react";

const pizzaData = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: Focacciapizza,
    soldout: false,
    small: 70,
    medium: 100,
    large: 130,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldout: false,
    small: 80,
    medium: 110,
    large: 140,
  },
  {
    name: "Pizza spinaci",
    ingredients: "Tomato, mozerilla, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldout: false,
    small: 65,
    medium: 90,
    large: 125,
  },
  {
    name: "Pizza funghi",
    ingredients: "Tomato, mozerilla, mushrooms, and onion, cheese",
    price: 12,
    photoName: funghi,
    soldout: false,
    small: 110,
    medium: 150,
    large: 180,
  },
  {
    name: "Pizza salamino",
    ingredients: "Tomato, mozerilla, pepperoni",
    price: 15,
    photoName: salamino,
    soldout: true,
    small: 80,
    medium: 120,
    large: 150,
  },
  {
    name: "Pizza prosciutto",
    ingredients: "Tomato, mozerilla, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldout: false,
    small: 60,
    medium: 90,
    large: 120,
  },
];

function App() {
  console.log(pizzaData.length);
  return (
    <div className="container">
      <div className="innercontainer">
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="headerr">Fast React Pizza co.</h1>;
}

function Menu() {
  const pizzdata = pizzaData;
  console.log(pizzdata);
  const numPizza = pizzdata.length;
  console.log(numPizza);
  return (
    <>
      <h2 className="ourMenu">Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p className="paraclass">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from <br></br> our stone oven, all organic, all delicious
          </p>
          <div className="pizzasss">
            {pizzaData.map((pizz) => (
              <Pizzaa pizzaObj={pizz} key={pizz.name} />
            ))}
          </div>
        </>
      ) : (
        <p>We are still working on our menu.</p>
      )}
    </>
  );
}

function Pizzaa(props) {
  // console.log("inside pizzaaaaaaaaa");
  // console.log(props.pizzaObj.name);

  const [prize, setPrize] = useState(0);

  function Small(smallprize) {
    setPrize(smallprize);
  }
  function medium(mediumprize) {
    setPrize(mediumprize);
  }
  function large(largeprize) {
    setPrize(largeprize);
  }

  return (
    <div className="pizza">
      {/* <img src={props.pizzaObj.photoName} alt="focaccia-pizza"/>
    <div className='flextype'>
      <h2 className='h2class'>{props.pizzaObj.name}</h2>
      <p className='paraa'>Bread with italian olive oil and rosemary</p> */}
      {props.pizzaObj.soldout ? (
        <>
          <img
            src={props.pizzaObj.photoName}
            style={{ opacity: 0.3 }}
            alt="focaccia-pizza"
          />
          <div className="flextype ">
            <h2 className="h2class" style={{ color: "grey" }}>
              {props.pizzaObj.name}
            </h2>
            <p className="paraa soldout">
              Bread with italian olive oil and rosemary
            </p>
            <p className="soldout priceclass">Sold Out</p>
          </div>
        </>
      ) : (
        <>
          <img src={props.pizzaObj.photoName} alt="focaccia-pizza" />
          <div className="flextype">
            <h2 className="h2class">{props.pizzaObj.name}</h2>
            <p className="paraa">Bread with italian olive oil and rosemary</p>
            <div className="sizePrize">
              <div className="pizzasizesdiv">
                <button
                  className="pizzasize"
                  onClick={() => Small(props.pizzaObj.small)}
                >
                  small
                </button>
                <button
                  className="pizzasize"
                  onClick={() => medium(props.pizzaObj.medium)}
                >
                  {" "}
                  medium{" "}
                </button>
                <button
                  className="pizzasize"
                  onClick={() => large(props.pizzaObj.large)}
                >
                  {" "}
                  large{" "}
                </button>
              </div>
              <div className="originalprize"> ₹ {prize}</div>
            </div>
            <div className="prizeflex">
              <Pizzacount className="count" />{" "}
              <p className="paraa priceclass">{props.pizzaObj.price} </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log("Hour", hour);
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="footer">
      {/* <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer> */}

      {isOpen ? (
        <Timings closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </div>
  );

  // return React.createElement("footer",null,"We're currently open!");
}

function Timings(props) {
  return (
    <div className="timings">
      <p>
        {" "}
        We are open until {props.closeHour}:00. come visit us or order online.
      </p>
      {/* <button className="buynow">Order now</button> */}
    </div>
  );
}

export default App;
