import './style.css'
import { ImcDescriptionCard } from '../../helpers/Imc/data'
import Image from '../../components/Imc/Image/image'
import Button from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


const Imc = () => {
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [hasChanged, setHasChanged] = useState(false);
    const [color, setColor] = useState("");
    const [activeCard, setActiveCard] = useState(undefined);
    const [oldIMC, setOldIMC] = useState(0);
    const ImcCalcul = () => {
        if (weight <= 10 || length <= 50)
            return oldIMC;
        const IMC = (weight / ((length / 100) ^ 2)).toFixed(1);
        if (hasChanged === false) {
            setHasChanged(true);
            setOldIMC(IMC);
            if (IMC < 18.5) {
                setColor("#27ACE4");
                setActiveCard(0);
            }
            else if (IMC >= 18.5 && IMC < 25) {
                setColor("#c6d39c");
                setActiveCard(1);
            }
            else if (IMC >= 25 && IMC < 30) {
                setColor("#F1A91F");
                setActiveCard(2);
            }
            else if (IMC >= 30 && IMC < 35) {
                setColor("#E7752E");
                setActiveCard(3);
            }
            else if (IMC >= 35) {
                setColor("#DA1F26");
                setActiveCard(4);
            }
        }
        return IMC;
    }
    return (
        <div className="imc">
            <div className="imc__navigate__back">
                <NavLink to="/">
                    <Button title="Home" />
                </NavLink>
            </div>
            <h1 className="imc__title">IMC</h1>
            <div className="imc__info">
                <div className={`imc__info__score ${hasChanged ? 'imc__info__score__show' : ''}`} style={{ color: color }} >{ImcCalcul()}</div>
                <div className="imc__input__container taille">
                    <input onChange={(e) => { setLength(e.target.value); setHasChanged(false); setActiveCard(undefined); }} placeholder="Taille" className="imc__input" type="number" min="50" />
                </div>
                <div className="imc__input__container poid">
                    <input onChange={(e) => { setWeight(e.target.value); setHasChanged(false); setActiveCard(undefined); }} placeholder="Poid" className="imc__input" type="number" min="10" />
                </div>
            </div>
            <div className="imc__img">
                {ImcDescriptionCard.map((card, i) => <Image image={card.image} alt={card.alt}
                    containerColor={card.containerColor} title={card.title} desc={card.desc} desc2={card?.desc2} active={activeCard === i} />)}
            </div>
        </div>
    )
}

export default Imc;