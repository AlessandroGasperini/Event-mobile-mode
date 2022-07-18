import { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard"
import { EventContext } from "../App.js";
import styles from "./Events.module.css"

export default function Events() {

   //Får tillgång till EventContext genom useContext
   const [events, setEvents] = useContext(EventContext);

   // State som håller vad som skrivs in i sökfältet
   const [searchValue, setSearchValue] = useState("");

   const url = "https://my-json-server.typicode.com/majazocom/events/events";

   //Fetchar API vid första renderingen. API sparas i statet events.
   useEffect(() => {
      fetch(url)
         .then(response => response.json())
         .then(data => setEvents(data))
         .catch((error) => {
            alert("Sorry something went wrong!", error);
         });
   }, []);


   return (
      <section className={styles.container}>
         <EventContext.Provider value={events}>
            <h1>Events</h1>
            <div>
               <svg width="30" height="30" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.0722 2.80556C10.2756 2.80446 11.4523 3.1603 12.4534 3.82808C13.4546 4.49586 14.2351 5.44556 14.6964 6.55705C15.1577 7.66853 15.279 8.89186 15.0449 10.0723C14.8108 11.2527 14.2318 12.3372 13.3813 13.1885C12.5307 14.0398 11.4468 14.6197 10.2666 14.8549C9.0864 15.0901 7.86296 14.97 6.75105 14.5097C5.63914 14.0494 4.68873 13.2697 4.02004 12.2692C3.35135 11.2687 2.99442 10.0923 2.99442 8.88889C3.00172 7.2787 3.64422 5.73645 4.78229 4.59734C5.92036 3.45823 7.46202 2.81432 9.0722 2.80556V2.80556ZM9.0722 1.66667C7.64378 1.66667 6.24744 2.09024 5.05975 2.88383C3.87206 3.67742 2.94637 4.80538 2.39974 6.12506C1.8531 7.44475 1.71008 8.8969 1.98875 10.2979C2.26742 11.6988 2.95527 12.9857 3.96532 13.9958C4.97536 15.0058 6.26224 15.6937 7.66322 15.9723C9.06419 16.251 10.5163 16.108 11.836 15.5614C13.1557 15.0147 14.2837 14.089 15.0773 12.9013C15.8708 11.7137 16.2944 10.3173 16.2944 8.88889C16.2944 6.97344 15.5335 5.13644 14.1791 3.78201C12.8247 2.42758 10.9877 1.66667 9.0722 1.66667Z" fill="#ffffff" />
                  <path d="M19.4444 18.4944L15.35 14.3722L14.5611 15.1556L18.6555 19.2778C18.707 19.3296 18.7681 19.3707 18.8354 19.3989C18.9028 19.4271 18.975 19.4417 19.048 19.442C19.121 19.4422 19.1933 19.4281 19.2609 19.4004C19.3284 19.3727 19.3899 19.332 19.4416 19.2806C19.4934 19.2291 19.5346 19.168 19.5628 19.1006C19.591 19.0333 19.6056 18.9611 19.6058 18.8881C19.6061 18.8151 19.592 18.7427 19.5643 18.6752C19.5366 18.6077 19.4959 18.5462 19.4444 18.4944Z" fill="#ffffff" />
               </svg>
               <input onChange={({ target: { value } }) => setSearchValue(value)} type="text" placeholder='' />
            </div>
            <section className={styles.productCards}>

               {/* Funktion som gör en array av antingen alla events (om man inte använt sökfunktionen) eller matchade sökträffar.  */}
               {events.filter((event) => {

                  if (searchValue === "") {
                     return event

                  } else if (event.name.toLowerCase().includes(searchValue.toLowerCase())) {
                     return event

                  }
               })
                  // Denna array mappas sedan ut i komponenten ProductCard. 
                  // Skickar med varje enskilt event som props.
                  .map((event, id) => (
                     <ProductCard event={event} key={id} />
                  ))}
            </section>
         </EventContext.Provider>
      </section>

   )
}