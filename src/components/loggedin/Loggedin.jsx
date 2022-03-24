import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
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