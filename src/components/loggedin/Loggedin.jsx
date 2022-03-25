import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import propTypes from 'prop-types';
import s from './Loggedin.module.scss';

export function Loggedin({children}) {
    return (
        <div className={s.login}>
            <Link to="/innskraning">Innskránining</Link>
            <Button size="small">Nýskráning</Button>
            {children}
        </div>
    )

}
Loggedin.propTypes = {
    children: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,
}