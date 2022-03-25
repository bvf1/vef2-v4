import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import s from './Login.module.scss';

export function Login({setLoginState, isLoggedIn}) {

  if (!isLoggedIn) return (
    <div className={s.login}>
      <Link to="/login">Innskránining</Link>
      <Button 
        onClick={(e) => {setLoginState(true)}} 
        size="small"
      >
        Nýskráning
      </Button>
    </div>
  )
  return (
    <div className={s.login}>
      <p>Skráður inn sem <b>test</b></p>
      <Button 
        onClick={(e) => {setLoginState(false)}} 
        size="small"
      >
        Útskrá
      </Button>
    </div>
  )

}