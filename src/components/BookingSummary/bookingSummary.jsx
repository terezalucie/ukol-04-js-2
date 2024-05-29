import './bookingSummary.css'
import { Head } from '../Head/head'
import { Reservation } from '../Reservation/reservation'
import { Servises } from '../Servises/servises'
import { Cancel } from '../Cancel/cancel'


const booking = {
    head: {
        photo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960",
        name: "Hotel Lesní Zátiší",
        address: "Malohradské skály 347/21",
        city: "Malohradská ves",
        rating: "4.65",
        room: "Pokoj 2",
        roomType: "Dvoulůžkový s dětskou přistýlkou",
        roomPrice: "1 800 Kč / noc",
    },
    reservation: {
      titleReservation: "Detail rezervace",
      summeryNumber: "459787-745",
      dates: "13.6.2023 - 17.6.2026",
      guests: "2 dospělí, 1 dítě",
      food: "žádné",
      cost: "7 200",
      checkIn: "13.6.2023 do 18:00",
      checkOut: "17.6.2026 do 10:00",
    },
    servises: {
      titleServices: "Doplňkové služby",
      parking: "200 Kč / noc",
      breakfast: "150 Kč / noc",
      wellness: "Zdarma",
      wifi: "Zdarma na všech pokojích",
    },
    cancel: {
      titleCancel: "Storno podmínky",
      cancelText14: " Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka.",
      cancelText0: "Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu.",
    },
}

const {head, reservation, servises, cancel} = booking

const {photo, name, address, city, rating, room, roomType, roomPrice} = head
const {titleReservation, summeryNumber, dates, guests, food, cost, checkIn, checkOut} = reservation
const {titleServices, parking, breakfast, wellness, wifi} = servises
const { titleCancel, cancelText14, cancelText0 } = cancel

export const BookingSummary = () => {
    return(
    <div className="summary">
      <h2>Booking Summary</h2>

        <Head img={photo} 
              name={name} 
              adress={address} 
              city={city} 
              rating={rating} 
              room={room} 
              roomType={roomType} 
              price={roomPrice} />

        <Reservation  titleReservation={titleReservation} 
                      summeryNumber={summeryNumber} 
                      dates={dates} 
                      guests={guests} 
                      food={food} 
                      cost={cost} 
                      checkIn={checkIn} 
                      checkOut={checkOut}/>

        <Servises titleServices={titleServices} 
                  parking={parking} 
                  breakfast={breakfast} 
                  wellness={wellness} 
                  wifi={wifi} />

        <Cancel titleCancel={titleCancel} 
                cancelText0={cancelText0} 
                cancelText14={cancelText14}/>
                
      </div>
    )
}