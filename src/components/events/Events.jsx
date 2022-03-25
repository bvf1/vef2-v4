import { useEffect, useState} from 'react'
import { Link, Outlet} from 'react-router-dom'
import s from './Events.module.scss'



export function Events() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        setError(null);
  
        let json;
  
        const url = 'https://vef2-20222-v3-synilausn.herokuapp.com/events';
  
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
    }, []);
  
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
      
    const events = (data && data.items) || [];
  
    console.log("events",events);
    console.log("data", data);
  
    return (
      <section className={s.events}>
        <h2 className={s.events__title}>Viðburðir á næstunni</h2>
        <ul className={s.events__list}>
          {events.length === 0 && (
            <li>Engir Atburðir!</li>
          )}
          {events.length > 0 && events.map((event) => {
            const {
              id, name, description,
            } = event;
            return (
              <li
                className={s.events__event}
                key={event.id}>
                <Link
                  className={s.events__eventLink}
                  to={`/events/${id}`}
                  key={event.id}
                >
                  {name}
                </Link>
                <p className={s.events__eventDescription}>{description}</p>
              </li>
            )
          })}
        </ul>
        <Outlet />
      </section>
    )
  }
