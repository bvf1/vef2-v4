import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { Back } from '../back/Back';
import s from './Event.module.scss'
import { Registration } from './Registration';


export function Event() {
  const isLoggedIn = useOutletContext();

  let {slugId} = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      const url = `https://vef2-20222-v3-synilausn.herokuapp.com/events/${slugId}`;

      try {
        const result = await fetch(url);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, [slugId]);

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  const event = data || [];

  console.log("event", event);

  if (event === []) return (
    <p class={s.event__empty}>Engin hefur skráð sig á þennan viðburð</p>
  )
    
  return (
    <section className={s.event}>
      <div className={s.event__info}>
        <h2 className={s.event__title}>{event.name}</h2>
        <p>{event.description}</p>
      </div>
      <Registration
        data={event.registrations} 
        isLoggedIn={isLoggedIn}
        eventId={event.id}
      />
    <Back goTo="/" />
    </section>

  )
}
