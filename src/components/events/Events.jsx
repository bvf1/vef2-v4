import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Event } from '../event/Event';
import s from './Events.module.scss'


export function Events({children, events}) {

    useEffect(() => {
        console.log("in events");
    })
    return (
        
        <div>
            <h2>Viðburðir á næstunni</h2> 
            {events !== 0 && (events.map((event) => (
                <div key={event.id}>
                    
                    <Link
                        className={s.events__link}
                        to={`/events/${event.slug}`}
                    >
                        {event.name}
                        {/*children*/}
                        {/*<Event event={event}></Event>*/}
                    </Link>
                    <p className={s.events__description}>{event.description}</p>
                </div>
            )))}
            <Outlet />
        </div>
    )
}/*
events.map((event) => (
    <Link
      to={`/events/${event.id}`}
      key={event.id}
    >
      {event.name}
    </Link>
  ))}*/