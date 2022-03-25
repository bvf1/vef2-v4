import { Link } from "react-router-dom";
import propTypes from 'prop-types';


export function Back({goTo}) {
    console.log(goTo);
    return (
        <Link className="back" to={goTo}>
            Til Baka
        </Link>
    )
}

Back.propTypes = {
    goTo: propTypes.string.isRequired
}