import "./style.css"

const Button = ({ callback, title }) => {
    return (
        <button className="btn" onClick={() => callback !== undefined && callback()}>
            {title}
        </button>
    )
}

export default Button;