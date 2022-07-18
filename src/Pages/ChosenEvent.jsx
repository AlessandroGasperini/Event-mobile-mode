import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext, EventContext } from '../App.js';
import { useLocation } from 'react-router';
import styles from "./ChosenEvent.module.css";

export default function ChosenEvents() {

// HOOKS
// Använder oss av hooken useLocation() för att ta emot evetet från ProductCard
const location = useLocation()
// Hook för att dirigera till annan sida. Används i removeTicket() när amount == 0.
const navigate = useNavigate();
// Hämtar våra states från App.js
const [cart, setCart] = useContext(CartContext);

// State som ska hålla valt event så att vi kan ändra antal biljetter(amount)
const [tempObj, setTempObj] = useState({
    name: location.state.name,
    price: location.state.price,
    where: location.state.where,
    when: {date: location.state.when.date, from: location.state.when.from, to: location.state.when.to},
    amount: 1
})

// Variabel som håller det totala priset baserat på valt events pris * valt antal
let totalPrice = location.state.price * tempObj.amount;

// Funktion som ökar biljettantal i tempObj vid + klick
function addTicket(tempObj) {
    let newValue = tempObj.amount +1;
    setTempObj({...tempObj, amount: newValue})
}

    // Funktion som minskar biljettantal i tempObj vid - klick
function removeTicket(tempObj) {
    let newValue = tempObj.amount -1;

        setTempObj({...tempObj, amount: newValue})
        //Om amount blir 0 skickas man till events-sidan 
        if (newValue ===  0) {
            navigate('/events');
        }
    }

    // Uppdaterar Cart med valt event
    function updateState(tempObj, cart) {

        // Kollar om eventet redan finns i cart - returnerar en boolean
        let exists = cart.some(x=>x.name == tempObj.name)

        if(exists){
            // Skapar arr med alla objekt från cart förutom eventet vi justerar amount på
            const newArr = cart.filter((x) => x.name !== tempObj.name);      
            // Plockar ut objektet som vi vill korrigera amount på från cart
            const adjustMe = cart.filter((x) => x.name === tempObj.name);
            // Summerar amounts
            adjustMe[0].amount = tempObj.amount + adjustMe[0].amount;       
            // Uppdaterar cart med den nya arrayen och det justerade eventet
            let updatedCart = [...newArr, ...adjustMe]     
            setCart(updatedCart)
        }
        else{
            // Finns eventet inte i cart läggs det bara till
            let updatedCart = [...cart, tempObj];
            setCart(updatedCart);
        }
    }

    return(
        <section className={styles.container} >
            <h1>Event</h1>
            <p>You are about to score some tickets to</p>

            <article className={styles.info}>
                <h2>{tempObj.name}</h2>
                <h4>{tempObj.when.date} kl {tempObj.when.from} - {tempObj.when.to}</h4>
                <p>@ {tempObj.where}</p>
            </article>
             
            <article className={styles.amountContainer}>
              
                <h3>{totalPrice} sek</h3>
                <article className={styles.adjustAmount}>
                    <button onClick={()=> removeTicket(tempObj) }>-</button>
                    <p>{tempObj.amount}</p>
                    <button onClick={()=> addTicket(tempObj) }>+</button>

                </article>
            </article>

            <Link to="/cart">
                <button className={styles.btn} onClick={() => updateState(tempObj, cart)} >Lägg i varukorgen</button>
            </Link>
        </section>
    )
}