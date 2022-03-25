import { useParams } from 'react-router-dom';
import { Register } from './Register';
import s from './Event.module.scss'


export function Registration({children, data, isLoggedIn}) {
    console.log("data", data);
    let {slugId} = useParams();

    const registrations = data || [];

    if (registrations === []) return (
      <p className={s.event__empty}>Engin hefur skráð sig á þettan viðburð</p>
    )
    return (
      <div className={s.event__registered}>
        <ul className={s.event__registeredList}>
          {registrations.length > 0 && registrations.map((registration) => {
            const {
              id, username, comment,
            } = registration;

            return (
              <li 
                className={s.event__registeredItem}
                key={id}>
                <span className={s.event__registeredName}> {username}</span>
                <span className={s.event__registeredComment}>{comment}</span>
              </li>
            )
          })}
        </ul>
        <section className={s.event__register}>
          <Register isLoggedIn={isLoggedIn} eventId={slugId}/>
        </section>
      </div>
    )
}