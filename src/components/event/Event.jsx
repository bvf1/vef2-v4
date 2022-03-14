import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import s from './Event.module.scss'

export function Event({children, event}) {

    useEffect(() => {
        console.log("loaded event take place", event );
    })
    let params = useParams();
    
    return (
        <h2>Event: {params.eventSlug}</h2>
                     
    )



    
}