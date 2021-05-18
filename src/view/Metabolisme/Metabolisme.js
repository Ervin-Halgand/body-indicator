import './style.css'

import { NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button'
import SelectCard from '../../components/Select/SelectCard/SelectCard'
import { useRef, useState, useEffect } from 'react'
import { metabolismeMenCalculation, metabolismeWomanCalculation, activities } from '../../helpers/Metabolisme/data'
import { updateCounter } from '../../helpers/Metabolisme/counterUpdate';
import CircleCard from '../../components/CircleCard/CircleCard'

const Metabolisme = () => {


    let refs = { metabolismeBase: useRef(null), physicalActivity: useRef(null), metabolismeTotal: useRef(null) };
    const [size, setSize] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [sexe, setSexe] = useState("");
    const [activity, setActivity] = useState("");
    const [activityDesc, setActivityDesc] = useState("");
    const [activityDescIsHover, setActivityDescIsHover] = useState(false);

    useEffect(() => {
        handleMetabolisme();
        // eslint-disable-next-line
    }, [size, weight, age, activity, sexe])

    const handleMetabolisme = () => {
        if (size === 0 || weight === 0 || age === 0 || activity.length < 1 || sexe.length < 1)
            return '';
        let mb;
        if (sexe === "Homme")
            mb = metabolismeMenCalculation(weight, size, age);
        else
            mb = metabolismeWomanCalculation(weight, size, age);
        const physicalActivity = mb * activities.find(value => value.text === activity).value - mb;
        updateCounter(refs.metabolismeBase, parseInt(mb.toFixed(0)));
        updateCounter(refs.metabolismeTotal, parseInt((mb + physicalActivity).toFixed(0)));
        updateCounter(refs.physicalActivity, physicalActivity);
    }

    return (
        <div className="main__container__page">
            <div className="navigation__title">
                <div className="imc__navigate__back">
                    <NavLink to="/">
                        <Button title="Home" />
                    </NavLink>
                </div>
                <div className="imc__title__container">
                    <h1 className="imc__title">Métabolisme</h1>
                </div>
            </div>
            <div className="metabolisme">
                <div className="metabolisme__container">
                    <div className="metabolisme__sexe">
                        <SelectCard title="Homme" callBack={setSexe} isActive={sexe === "Homme"} />
                        <SelectCard title="Femme" callBack={setSexe} isActive={sexe === "Femme"} />
                    </div>
                    <div className="imc__input__container taille metabolisme__activity__container_info metabolisme__activity__container_info1">
                        <input onChange={(e) => { setSize(e.target.value); }} placeholder="Taille" className="imc__input" type="number" min="50" />
                    </div>
                    <div className="imc__input__container poid metabolisme__activity__container_info metabolisme__activity__container_info2">
                        <input onChange={(e) => { setWeight(e.target.value); }} placeholder="Poid" className="imc__input" type="number" min="10" />
                    </div>
                    <div className="imc__input__container age metabolisme__activity__container_info metabolisme__activity__container_info3">
                        <input onChange={(e) => { setAge(e.target.value); }} placeholder="Age" className="imc__input" type="number" min="10" />
                    </div>
                    <div className="metabolisme__activity__container">
                        {activities.map((value, i) => <SelectCard key={i} onMouseLeave={setActivityDescIsHover} onMouseEnter={setActivityDesc}
                            desc={value.desc} title={value.text} callBack={setActivity} isActive={activity === value.text} />)}
                        <div className={`metabolisme__activity__container__desc ${activityDescIsHover && "opacity1"}`}>
                            {activityDesc}
                        </div>
                    </div>

                </div>
                <div className="metabolisme__result">
                    <CircleCard title="Besoin total" text={0} ref={refs.metabolismeTotal} />
                    <div className="metabolisme__result__section2">
                        <CircleCard title="metabolisme de base" text={0} ref={refs.metabolismeBase} />
                        <CircleCard title="Activité physique" text={0} ref={refs.physicalActivity} />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Metabolisme;