import "./card.scss";

const Card = ({image, isFlipped, onCardClick, index}) => {
    return (  
        <div 
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => onCardClick(index)}
        >
            <div className="card-inner">
                <div className="card-front">
                    <img src={image} alt="card" />
                </div>
                <div className="card-back"></div>
            </div>
        </div>
    );
}
 
export default Card;