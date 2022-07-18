import { useContext } from 'react';
import { CartContext } from "../App.js";
import styles from "./ProductAmount.module.css";

export default function ProductAmount(props) {

    const [cart, setCart] = useContext(CartContext);
    const event = props.event;

    function addTicket(event) {
        let newArr = [...cart];
        //Variabel som håller index för valt events index
        let index = cart.findIndex((x) => x.name === event.name);
        //I cart-kopian(newArr) ändras amount på eventet med rätt index
        newArr[index].amount++;
        //let updatedCart = [...newArr, event]
        setCart(newArr)
    }

    function removeTicket(event) {
        let newArr = [...cart];
        //Variabel som håller index för valt events index
        let index = cart.findIndex((x) => x.name === event.name);
        //I cart-kopian(newArr) ändras amount på eventet med rätt index
        newArr[index].amount--;
        // Lägger in newArr i cart 
        setCart(newArr)
        // Om amount === 0 så påkallas removeEvent() (som tar bort den från cart)
        if (event.amount ===  0) {
            removeEvent(event)
        }
    }

    //Funktion som returnerar alla objekt i cart förutom det objekt man klickat på
    function removeEvent(event) {
        let newArr = [...cart];
        newArr = cart.filter((x) => x !== event) 
        setCart(newArr);   
    }

    return(
        <section className={styles.container}>
            <article className={styles.info}>
                <h2>{event.name}</h2>
                <p>{event.when.date} kl {event.when.from} - {event.when.to}</p>
            </article>
            <article className={styles.adjustAmount}>

                <button onClick={()=> removeTicket(event) }>-</button>
                <p>{event.amount}</p>
                <button onClick={()=> addTicket(event) }>+</button>

            </article>
        </section>
    )
}