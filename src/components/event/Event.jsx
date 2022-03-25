import { PropTypes } from 'prop-types';

import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { Registration } from '../registration/Registration';
import s from './Event.module.scss'


export function Event() {

  let params = useParams();
  console.log("inevent");
  return <h2>Event: {params.slug}</h2>
}
/*
Event.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }
  export function Event({name = '', description = '', slug = ''}) {
    console.log({name, description, slug});
    return (
      <div>
        <section>
        <Link
          className={s.events__link}
          to={`/events/${slug}`}
        >
          {name}
        </Link>
        <p className={s.event__description}>{description}</p>
        </section>
      </div>
    )}*/
