import {Pedra, Papel, Tesoura} from "../Images.jsx"
import "./Choice.css"

function Choice({handleChoice}) {
    return (
        <main className="choiceContainer">
            <figure onClick={() => handleChoice(Pedra)}>
                <img src={Pedra} alt="Pedra"/>
                <footer>Pedra</footer>
            </figure>
            <figure onClick={() => handleChoice(Papel)}>
                <img src={Papel} alt="Papel"/>
                <footer>Papel</footer>
            </figure>
            <figure onClick={() => handleChoice(Tesoura)}>
                <img src={Tesoura} alt="Tesoura"/>
                <footer>Tesoura</footer>
            </figure>
        </main>
    )
}
export default Choice;