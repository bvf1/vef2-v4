import React from 'react'
import classNames from 'classnames';

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