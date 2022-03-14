import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import s from './Login.module.scss';

export function Login({children}) {
    return (
        <div className={s.login}>
            <Link to="/innskraning">nnskránining</Link>
            <Button size="small">Nýskráning</Button>
            {children}
        </div>
    )

}