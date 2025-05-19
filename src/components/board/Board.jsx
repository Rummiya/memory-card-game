import Card from "../card/Card";
import "./board.scss"

const Board = ({cards, onCardClick}) => {
    return (  
        <div className="board">
            {cards.map((card, index) => (
                <Card 
                    key={card.id}
                    index={index}
                    onCardClick={onCardClick} 
                    {...card}
                />
            ))}
        </div>
    );
}
 
export default Board;