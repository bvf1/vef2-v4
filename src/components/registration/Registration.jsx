import { useParams } from 'react-router-dom';
import { Form } from '../form/Form';
import { Register } from '../register/Register';
import s from './Registration.module.scss'


export function Registration({children, data, isLoggedIn}) {
    console.log("data", data);
    let {slugId} = useParams();

    const registrations = data || [];
    return (
      <section>
        <ul>
          {registrations.length === 0 && (
            <li>Engin hefur skráð sig á þettan viðburð</li>
          )}
          {registrations.length > 0 && registrations.map((registration) => {
            const {
              id, username, comment,
            } = registration;
            console.log("id", id)

            return (
              <li key={id}>
                <p> {username}</p>
                <p className={s.registration__description}>{comment}</p>
              </li>
            )
          })}
        </ul>
        <Register isLoggedIn={isLoggedIn}/>
      </section>
    )
}