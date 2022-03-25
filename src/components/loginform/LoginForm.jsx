import { Back } from '../back/Back';
import { Button } from '../button/Button';
import s from './LoginForm.module.scss';


export function LoginForm() {
  return (
    <>
      <form className="form" method="post" action="/login" autocomplete="off">
        <div className="field">
          <label for="username">Notendanafn</label>
          <input type="text" name="username" id="username"/>
        </div>

        <div className="field">
          <label for="password">Lykilorð</label>
          <input type="password" name="password" id="password"/>
        </div>

        <Button size="large">Innskrá</Button>
      </form>
      <Back goTo="/" />
    </>
  )
}