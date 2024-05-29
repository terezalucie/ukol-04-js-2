import './head.css'


export const Head = ({img, name, adress, city, rating, room, roomType, price}) => {
    return(
        <div className="summary__head">
            <img
            className="summary__photo"
            src={img}/>
            <div className="summary__head-property">
                <h3 className="summary__name">{name}</h3>
                <div className="summary__adress">{adress}</div>
                <div className="summary__city">{city}</div>
                <div className="summary__rating">Hodnocení: {rating}</div>
            </div>

            <div className="summary__head-room">
                <h3 className="summary__name">{room}</h3>
                    <div className="summary__room-type">
                        {roomType}
                    </div>
                <div className="summary__room-price">{price}</div>
            </div>
        </div>
    )
}