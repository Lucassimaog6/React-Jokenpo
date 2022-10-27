import "./Game.css"
import Choice from "../Choice/Choice.jsx";
import {useEffect, useState} from "react";
import {Pedra, Papel, Tesoura, Thinking} from "../Images.jsx";

function Game() {
    const [imgChoice, setImgChoice] = useState()
    const [computerImgChoice, setComputerImgChoice] = useState(Thinking)
    const [result, setResult] = useState()
    const handleChoice = img => {
        setImgChoice(img);
        switch(Math.floor(Math.random() * 3) + 1){
            case 1:
                setComputerImgChoice(Pedra); break;
            case 2:
                setComputerImgChoice(Papel); break;
            case 3:
                setComputerImgChoice(Tesoura); break;
        }
    }
    useEffect(()=>{
        if (imgChoice === computerImgChoice) {
            setResult("Empate")
        }
        if (imgChoice === Pedra && computerImgChoice === Tesoura) {
            setResult("Vitória")
        }
        if (imgChoice === Tesoura && computerImgChoice === Papel) {
            setResult("Vitória")
        }
        if (imgChoice === Papel && computerImgChoice === Pedra) {
            setResult("Vitória")
        }
        if (imgChoice === Tesoura && computerImgChoice === Pedra) {
            setResult("Derrota")
        }
        if (imgChoice === Papel && computerImgChoice === Tesoura) {
            setResult("Derrota")
        }
        if (imgChoice === Pedra && computerImgChoice === Papel) {
            setResult("Derrota")
        }
    },[imgChoice,computerImgChoice])
    return (
        <main>
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