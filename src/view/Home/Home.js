import './style.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (

        <div className="home">
            <NavLink to="/imc">
                <div className="home__link">imc</div>
            </NavLink>
            <NavLink to="/metabolisme">
                <div className="home__link">Metabolisme</div>
            </NavLink>
            <NavLink to="/ffmi">
                <div className="home__link">ffmi</div>
            </NavLink>
        </div>
    )
}

export default Home;