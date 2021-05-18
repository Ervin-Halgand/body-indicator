import './style.css'
import Button from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import iconBiceps from '../../assets/images/icon-biceps.png'

const FFMI = () => {
    const barRef = useRef(null);
    const [size, setSize] = useState(0);
    const [weight, setWeight] = useState(0);
    const [fat, setFat] = useState(0);
    const [ffmi, setFfmi] = useState(0);

    const calculateFFMI = () => {
        if (size.length < 3 || weight < 10 || fat === 0)
            return;
        const freeMass = weight * (1 - (fat / 100));
        const FFMI = (freeMass / (Math.pow((size / 100), 2))).toFixed(2);
        const NormalizeFFMI = (parseFloat(FFMI) + (6.1 * (1.8 - (size / 100)))).toFixed(2);
        let newPos = (((NormalizeFFMI - 16) * 100) / 15);
        setFfmi(NormalizeFFMI);
        if (FFMI < 16)
            newPos = 0;
        if (FFMI > 30)
            newPos = 95;
        if (barRef.current)
            barRef.current.childNodes[0].style.left = `${newPos}%`;
    }
    useEffect(() => {
        calculateFFMI();
        // eslint-disable-next-line
    }, [size, weight, fat])
    return (
        <div className="main__container__page">
            <div className="navigation__title">
                <div className="imc__navigate__back">
                    <NavLink to="/">
                        <Button title="Home" />
                    </NavLink>
                </div>
                <div className="imc__title__container">
                    <h1 className="imc__title">FFMI</h1>
                </div>
            </div>
            <div className="ffmi">
                <div className="ffmi__input__container">
                    <div className="imc__input__container taille metabolisme__activity__container_info metabolisme__activity__container_info1">
                        <input onChange={(e) => { setSize(e.target.value); }} placeholder="Taille" className="imc__input" type="number" min="50" />
                    </div>
                    <div className="imc__input__container poid metabolisme__activity__container_info metabolisme__activity__container_info2">
                        <input onChange={(e) => { setWeight(e.target.value); }} placeholder="Poid" className="imc__input" type="number" min="10" />
                    </div>
                    <div className="imc__input__container fat metabolisme__activity__container_info ffmi__input__container__info3">
                        <input onChange={(e) => { setFat(e.target.value); }} placeholder="Gras" className="imc__input" type="number" min="0" max="100" />
                    </div>
                </div>
                <div ref={barRef} className="bar__main__container">
                    <div className="bar__container__indicator__container">
                        <span style={ffmi > 0 ? { opacity: 1 } : { opacity: 0 }}> {ffmi}</span>
                        <img src={iconBiceps} className="bar__container__indicator" alt="indicator" />
                    </div>
                    <div className="bar__container">
                        {(() => {
                            let barItem = []
                            for (let i = 16; i <= 30; i++) barItem.push(<div key={i} className="bar__item"><span>{i}</span></div>)
                            return barItem;
                        })()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFMI;