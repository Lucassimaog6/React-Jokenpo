import "./Score.css"

function Score({score}) {
    return (
        <div className="scoreContainer">
            <div className="col">
                <p>Computador</p>
                <p id="scoreComputer">{score.derrotas}</p>
            </div>
            <div className="col">
                <p>Empates</p>
                <p id="scoreTie">{score.empates}</p>
            </div>
            <div className="col">
                <p>Usuário</p>
                <p id="scoreUser">{score.vitorias}</p>
            </div>
        </div>
    )
}

export default Score;