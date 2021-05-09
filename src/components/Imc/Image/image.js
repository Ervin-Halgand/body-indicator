import "./style.css"

const Image = ({ image, alt, containerColor, desc, desc2, title, active }) => {
    return (
        <section className={`main__container ${active && "active"}`}>
            <div className="img__container">
                <img className="img__container__img" src={image} alt={alt} />
                <div className="img__container__info">
                    <div className="background" style={{ backgroundColor: containerColor }}></div>
                    <div className="img__container__info__title">{title}</div>
                    <div>
                        <div className="img__container__info__desc">{desc}</div>
                        {desc2?.length && <div className="img__container__info__desc line">{desc2}</div>}
                    </div>
                </div>
            </div >
        </section>
    )
}

export default Image;