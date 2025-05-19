import "./winMsg.scss"

const WinMsg = ({onBtnClick}) => {
    return (  
        <>
            <div className="overlay">
                <div className="win-msg">
                    <h3>You Win!</h3>
                    <button onClick={() => onBtnClick()}>Restart</button>
                </div>
            </div>
        </>
    );
}
 
export default WinMsg;