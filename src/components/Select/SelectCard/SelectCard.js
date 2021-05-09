import "./style.css"

const SelectCard = ({ title, callBack, isActive }) => {
    return (
        <div className={`card ${isActive ? 'card__active' : ''}`} onClick={() => callBack(title)}>
            {title}
        </div>
    )
}

export default SelectCard;