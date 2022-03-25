import { Link } from "react-router-dom";

export function Back({children, goTo}) {
    console.log(goTo);
    return (
        <Link className="back" to={goTo}>
            Til Baka
        </Link>
    )
}