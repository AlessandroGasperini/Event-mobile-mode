import styles from "./ProductCard.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Tar emot aktuellt events som props
export default function ProductCard(props) {

    const event = props.event;

    return(
        // Skickar med eventet som state via hooken useLocation() till komponenten chosen-events
        <Link state={event}  to={"/chosen-event"}>
       
        <section className={styles.container}>
            <article className={styles.date}>
                <p>{event.when.date}</p>
            </article>

            <section className={styles.lineContainer}>
                <article className={styles.info}>                       
                    <h3>{event.name}</h3>
                    <span>{event.where}</span>
                    <p>{event.when.from} - {event.when.to}</p>
                </article>

                <article className={styles.price}>
                    <h4>{event.price} sek</h4>
                </article>
            </section>
        </section>
        </Link>
    )
}