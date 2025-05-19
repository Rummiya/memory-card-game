import "./gameInfo.scss"

const GameInfo = ({ matchedCards, onBtnClick}) => {
    return (  
        <div className="game-info">
            <p>Matched Pairs: {matchedCards.length / 2}</p>
            <button onClick={() => onBtnClick()}>Restart</button>
        </div>
    );
}
 
export default GameInfo;