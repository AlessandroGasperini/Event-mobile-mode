import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../App.js";
import ProductAmount from '../Components/ProductAmount.jsx';
import styles from "./Cart.module.css";

export default function Cart() {

const [cart] = useContext(CartContext);

// Variabler som hanterar det totala priset
let totalAmountCounter
let totalAmount = []
let sum = 0

// För varje event i cart multipliceras antal med pris och sparas i en variabel som sedan pushas till arrayen totalAmount
    cart.map((event) => (
        totalAmountCounter = event.amount * event.price,
        totalAmount.push(totalAmountCounter)
    ))

// Loopar igenom arrayen totalAmount och adderar alla totalsummor som sparas i variabeln sum
for (let i = 0; i < totalAmount.length; i++) {
    sum += totalAmount[i];

}

    return(
        <section className={styles.container}>
            <h1>Order</h1>

            <section className={styles.productCards}>

                {/* Mappar ut alla event i cart till <ProductAmount/> (där antalet ska kunna justeras). 
                Aktuellt event skickas med som props */}
                {cart.map((event, index) => (
                    <ProductAmount key={index} event={event} />
                ))}
            </section>

            {/* Om text eller summan visas avgör av om cart är tom eller inte*/}
            <h2 className={(cart <= 0) ? "cartEmpty" : "cartNotEmpty" }>Din varukorg är tom</h2>

            <article className={styles.cost}>
                <p className={(cart <= 0) ? "cartNotEmpty" : null } >Totalt värde på order</p>
                <h3 className={(cart <= 0) ? "cartNotEmpty" : null } >{sum} sek</h3>
            </article>

            <section className={styles.btnContainer}>
                <Link to="/tickets">
                    <button className={(cart <= 0) ? "cartNotEmpty" : null } >Skicka order</button>
                </Link>

                <Link to="/events">
                    <button >Tillbaka</button>

                </Link>
            </section>
        </section>
    )
}