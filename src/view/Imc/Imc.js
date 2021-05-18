import './style.css'
import { ImcDescriptionCard } from '../../helpers/Imc/data'
import Image from '../../components/Imc/Image/image'
import Button from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Imc = () => {
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [color, setColor] = useState("");
    const [activeCard, setActiveCard] = useState(undefined);
    const [IMC, setIMC] = useState(0);
    const ImcCalcul = () => {
        if (weight <= 10 || length <= 50) {
            setIMC('');
            return;
        }
        const ImcCalculation = (weight / (Math.pow((length / 100), 2))).toFixed(1);
        setIMC(ImcCalculation);
        if (ImcCalculation < 18.5) {
            setColor("#27ACE4");
            setActiveCard(0);
        }
        else if (ImcCalculation >= 18.5 && ImcCalculation < 25) {
            setColor("#c6d39c");
            setActiveCard(1);
        }
        else if (ImcCalculation >= 25 && ImcCalculation < 30) {
            setColor("#F1A91F");
            setActiveCard(2);
        }
        else if (ImcCalculation >= 30 && ImcCalculation < 35) {
            setColor("#E7752E");
            setActiveCard(3);
        }
        else if (ImcCalculation >= 35) {
            setColor("#DA1F26");
            setActiveCard(4);
        }
    }
    useEffect(() => {
        setActiveCard(undefined);
        ImcCalcul();
        // eslint-disable-next-line
    }, [weight, length])
    return (
        <div className="main__container__page">
            <div className="navigation__title">
                <div className="imc__navigate__back">
                    <NavLink to="/">
                        <Button title="Home" />
                    </NavLink>
                </div>
                <div className="imc__title__container">
                    <h1 className="imc__title">IMC</h1>
                </div>
            </div>
            <div className="imc">
                <div className="imc__info">
                    <div className={`imc__info__score ${IMC.length > 1 && 'imc__info__score__show'}`} style={{ color: color }} >{IMC}</div>
                    <div className="imc__input__container taille">
                        <input onChange={(e) => setLength(e.target.value)} placeholder="Taille" className="imc__input" type="number" min="100" max="250" />
                    </div>
                    <div className="imc__input__container poid">
                        <input onChange={(e) => setWeight(e.target.value)} placeholder="Poid" className="imc__input" type="number" min="30" />
                    </div>
                </div>
                <div className="imc__img">
                    {ImcDescriptionCard.map((card, i) => <Image key={i} image={card.image} alt={card.alt}
                        containerColor={card.containerColor} title={card.title} desc={card.desc} desc2={card?.desc2} active={activeCard === i} />)}
                </div>
            </div>
        </div>
    )
}

export default Imc;