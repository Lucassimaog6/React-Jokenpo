import "./Game.css"
import Choice from "../Choice/Choice.jsx";
import Score from "../Score/Score.jsx";
import {useEffect, useState} from "react";
import {Papel, Pedra, Tesoura, Thinking} from "../Images.jsx";

function Game() {
    const [score, setScore] = useState({
        "vitorias": 0,
        "empates": 0,
        "derrotas": 0,
    })
    const [imgChoice, setImgChoice] = useState()
    const [computerImgChoice, setComputerImgChoice] = useState(Thinking)
    const [result, setResult] = useState()
    const handleChoice = img => {
        setImgChoice(img);
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                setComputerImgChoice(Pedra);
                break;
            case 2:
                setComputerImgChoice(Papel);
                break;
            case 3:
                setComputerImgChoice(Tesoura); break;
        }
    }
    useEffect(()=>{
        if (imgChoice === computerImgChoice) {
            setResult("Empate")
            setScore({...score, empates: score.empates + 1});
        }
        if (imgChoice === Pedra && computerImgChoice === Tesoura) {
            setResult("Vitória")
            setScore({...score, vitorias: score.vitorias + 1});
        }
        if (imgChoice === Tesoura && computerImgChoice === Papel) {
            setResult("Vitória")
            setScore({...score, vitorias: score.vitorias + 1});
        }
        if (imgChoice === Papel && computerImgChoice === Pedra) {
            setResult("Vitória")
            setScore({...score, vitorias: score.vitorias + 1});
        }
        if (imgChoice === Tesoura && computerImgChoice === Pedra) {
            setResult("Derrota")
            setScore({...score, derrotas: score.derrotas + 1});
        }
        if (imgChoice === Papel && computerImgChoice === Tesoura) {
            setResult("Derrota")
            setScore({...score, derrotas: score.derrotas + 1});
        }
        if (imgChoice === Pedra && computerImgChoice === Papel) {
            setResult("Derrota")
            setScore({...score, derrotas: score.derrotas + 1});
        }
    },[imgChoice,computerImgChoice])
    return (
        <main>
            <Score score={score}/>
            {result &&
                <h1 className="result">{result}</h1>
            }
            {imgChoice &&
                <div className="choices">
                    <img className="computerImage" src={computerImgChoice} alt="imagem do escolha do computador"/>
                    <img className="userImage" src={imgChoice} alt="imagem escolhida"/>
                </div>
            }
            <Choice handleChoice={handleChoice}/>
        </main>
    )
}

export default Game;