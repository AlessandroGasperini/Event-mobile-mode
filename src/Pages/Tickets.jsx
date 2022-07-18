import { CartContext } from "../App.js";
import { useState, useContext } from 'react';
import styles from "./Tickets.module.css"

export default function Tickets() {

    const [cart] = useContext(CartContext);
    // State som styr vilket biljettindex som visas
    const [ticketIndex, setTicketIndex] = useState(0)
    // Variabel för hur många biljetter som finns i cart  
    const ticketAmount = cart.length
    //console.log(cart);

    // Hanterar om frammåtknappen ska synas eller inte genom att ändra klassnamn
    let btnClassName = `${styles.showBtn}`
        if (ticketIndex >= 0 && ticketAmount >=2) {
            btnClassName = `${styles.showBtn}`
        } else if (ticketAmount ===1) {
            btnClassName = `${styles.hideBtn}`
        } 
        if (ticketIndex + 1 === ticketAmount) {
        btnClassName = `${styles.hideBtn}`
    }
    
    // Funktioner som ändrar statet för vilket ticketindex som ska visas
    function nextTicket(){
        setTicketIndex(index => index + 1);
    }

    function previousTicket(){
        setTicketIndex(index => index - 1);
    }

    return(
        <section className={styles.container}>
        <section className={styles.ticketContainer}>
            <article className={styles.what}>
                <span>WHAT</span>
                <h2>{cart[ticketIndex].name}</h2>
            </article>

            <article className={styles.where}>
                <span>WHERE</span>
                <p>{cart[ticketIndex].where}</p>            
            </article>

            <article className={styles.details}>

                <article>

                    <span>WHEN</span>
                    <p>{cart[ticketIndex].when.date}</p>
                </article>


                <article className={styles.from}>

                    <span>FROM</span>
                    <p>{cart[ticketIndex].when.from}</p>
                </article>


                <article className={styles.to}>

                    <span>TO</span>
                    <p>{cart[ticketIndex].when.to}</p>
                </article>   
            </article>

            <article className={styles.info}>
                <span>INFO</span>
                <p className={styles.seat}>Section C - seat 233, bring umbrella</p>
                <p>{cart[ticketIndex].amount} st</p>
            </article>
          

            <article className={styles.barcode}>
                <svg width="161" height="88" viewBox="0 0 161 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="60" x2="2" stroke="black" stroke-width="3"/>
                    <line x1="8" y1="60" x2="8" stroke="black" stroke-width="3"/>
                    <line x1="117.5" y1="60" x2="117.5" stroke="black" stroke-width="3"/>
                    <line x1="59.5" y1="60" x2="59.5" stroke="black" stroke-width="3"/>
                    <line x1="65.5" y1="60" x2="65.5" stroke="black" stroke-width="3"/>
                    <line x1="20" y1="60" x2="20" stroke="black" stroke-width="6"/>
                    <line x1="78" y1="60" x2="78" stroke="black" stroke-width="6"/>
                    <line x1="85.5" y1="60" x2="85.5" stroke="black" stroke-width="3"/>
                    <line x1="105" x2="105" y2="60" stroke="black" stroke-width="6"/>
                    <line x1="97.5" x2="97.5" y2="60" stroke="black" stroke-width="3"/>
                    <line x1="34" y1="60" x2="34" stroke="black" stroke-width="6"/>
                    <line x1="47" y1="60" x2="47" stroke="black" stroke-width="10"/>
                    <line x1="131" y1="60" x2="131" stroke="black" stroke-width="10"/>
                    <line x1="156" y1="60" x2="156" stroke="black" stroke-width="10"/>
                    <line x1="143" y1="60" x2="143" stroke="black" stroke-width="6"/>
                    <path d="M58.2196 72.72H57.3796L57.0796 75.024H57.7756V76.284H56.9116L56.6836 78H55.1116L55.3396 76.284H54.1396L53.9116 78H52.3396L52.5676 76.284H51.8956V75.024H52.7356L53.0356 72.72H52.3396V71.46H53.2036L53.4076 69.888H54.9796L54.7756 71.46H55.9756L56.1796 69.888H57.7516L57.5476 71.46H58.2196V72.72ZM55.5076 75.024L55.8076 72.72H54.6076L54.3076 75.024H55.5076ZM67.0381 78L66.6061 76.212H64.1821L63.7621 78H61.7221L64.2301 69.684H66.6181L69.1261 78H67.0381ZM64.5181 74.784H66.2701L65.3941 71.112L64.5181 74.784ZM75.5294 69.72C76.1134 69.72 76.6134 69.824 77.0294 70.032C77.4534 70.24 77.7734 70.52 77.9894 70.872C78.2134 71.224 78.3254 71.612 78.3254 72.036C78.3254 72.468 78.2374 72.88 78.0614 73.272C77.8854 73.664 77.5734 74.116 77.1254 74.628C76.6774 75.132 76.0254 75.772 75.1694 76.548H78.4934L78.3014 78H73.0214V76.656C74.0054 75.688 74.7214 74.96 75.1694 74.472C75.6174 73.976 75.9294 73.564 76.1054 73.236C76.2894 72.908 76.3814 72.572 76.3814 72.228C76.3814 71.9 76.2854 71.644 76.0934 71.46C75.9094 71.268 75.6574 71.172 75.3374 71.172C75.0494 71.172 74.7934 71.24 74.5694 71.376C74.3454 71.504 74.1094 71.716 73.8614 72.012L72.7454 71.124C73.0814 70.684 73.4814 70.34 73.9454 70.092C74.4174 69.844 74.9454 69.72 75.5294 69.72ZM88.3527 69.684L88.1487 71.088H85.2207V73.08H87.7767V74.46H85.2207V76.584H88.3527V78H83.2527V69.684H88.3527ZM95.4851 69.684C96.7891 69.684 97.8331 69.98 98.6171 70.572C99.4091 71.156 99.8051 72.232 99.8051 73.8C99.8051 75.344 99.4211 76.432 98.6531 77.064C97.8851 77.688 96.8891 78 95.6651 78H93.1691V69.684H95.4851ZM95.1371 71.112V76.572H95.7851C96.4331 76.572 96.9251 76.372 97.2611 75.972C97.5971 75.564 97.7651 74.84 97.7651 73.8C97.7651 73.088 97.6811 72.536 97.5131 72.144C97.3451 71.752 97.1171 71.484 96.8291 71.34C96.5411 71.188 96.1851 71.112 95.7611 71.112H95.1371ZM108.971 69.888V71.172L105.995 78.192L104.279 77.616L107.003 71.316H103.727V69.888H108.971Z" fill="black" fill-opacity="0.4"/>
                </svg>
            </article>
            </section>

             {/* Hanterar om bakåtknappen ska synas eller inte genom att ändra klassnamn */}
            <article className={styles.buttons}>

              
                <button className={(ticketIndex === 0 ) ? `${styles.hideBtn}` : `${styles.showBtn}`}  onClick={() => previousTicket()} >&#8592;</button>

                <button className={btnClassName} onClick={() => nextTicket()} >&#8594;</button>
            </article>
        </section>
    )
}
