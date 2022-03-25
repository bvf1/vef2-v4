import { useEffect, useState} from 'react'
import { Link, Outlet} from 'react-router-dom'
import s from './Events.module.scss'



export function Events({children}) {
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
      // þar sem við notum báðar af þessum state breytum, þá eru þau dependecy fyrir þetta effect
      // ef annaðhvor breytist, þá keyrir effect aftur, annars ekki
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
      <div>
        <h2>Viðburðir á næstunni</h2>
        <ul>
          {events.length === 0 && (
            <li>Engir Atburðir!</li>
          )}
          {events.length > 0 && events.map((event) => {
            const {
              name, description, slug,
            } = event;
            return (
              <li key={event.id}>
                <Link
                  className={s.events__link}
                  to={`/events/${slug}`}
                  key={event.id}
                >
                  {name}
                </Link>
                <p className={s.event__description}>{description}</p>
              </li>
            )
          })}
        </ul>
        <Outlet />
      </div>
    )
  }

/*
export function Events({children, events}) {

    useEffect(() => {
        console.log("in events", events);
    })

    return (
        <div>
        <h2>Viðburðir á næstunni</h2> 
        {events !== 0 && (events.map((event) => {
            <div key={event.id}>
                <Link
                    className={s.events__link}
                    to={`/events/${event.slug}`}
                >
                    {event.name}
                </Link>
                <p className={s.events__description}>{event.description}</p>
                
            </div>
            return (
                <Event event={event}></Event>
            )
        }))}
        <Outlet />
    </div>
    )
}

return (
  <section >
    <h2>Viðburðir á næstunni</h2>
    <ul>
      {events.length === 0 && (
        <li>Engir Atburðir!</li>
      )}
      {events.length > 0 && events.map((event) => {
        const {
          id, name, description, slug,
        } = event;
        return (
          <Event
            key={id}
            name={name}
            description={description}
            slug={slug}
          />
        )
      })}
    </ul>
  </section>
)*/