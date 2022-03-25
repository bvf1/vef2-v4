import React from 'react'
import classNames from 'classnames';
import propTypes from 'prop-types';
import s from './Field.module.scss'

function Field({what, type, text}) {
  return (
    <div className={classNames(s.field)}>
        <label className="field__label" for={what}>{text}</label>
        <input className="field__input" type={type} name={what} id={what} />    
    </div>
  )
}

export default Field

Field.propTypes = {
  what: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}