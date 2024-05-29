import '../BookingSummary/bookingSummary.css'

export const Reservation = ({titleReservation, summeryNumber, dates, guests, food,  cost, checkIn, checkOut}) => {
    return(
        <div className="summary__detail">
            <h3>{titleReservation}</h3>
            <div className="summary__number">Ćíslo: {summeryNumber}</div>
            <div className="summary__dates">Pobyt: {dates}</div>
            <div className="summary__guests">Hosté: {guests}</div>
            <div className="summary__services">Stravovávní: {food}</div>
            <div className="summary__room-total">Cena: {cost} Kč</div>
            <div className="summary__check-in">Check-in: {checkIn}</div>
            <div className="summary__check-out">Check-out: {checkOut}</div>
        </div>
    )
}