import "./Score.css"

function Score() {
    return (
        <div className="scoreContainer">
            <div className="col">
                <p>Computador</p>
                <p id="scoreComputer">0</p>
            </div>
            <div className="col">
                <p>Empates</p>
                <p id="scoreTie">0</p>
            </div>
            <div className="col">
                <p>Usuário</p>
                <p id="scoreUser">0</p>
            </div>
        </div>
    )
}

export default Score;