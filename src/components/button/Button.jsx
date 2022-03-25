
import classNames from 'classnames';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import s from './Button.module.scss';


export function Button({ children, onClick, size }) {
    console.log('s :>> ', s);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        console.log('button loaded');
    
        return () => {  
            console.log('button onloaded');
        }
      }, []);



    const localOnClick = (e) => {
        setToggled(!toggled);
        onClick(e);
    }

    return ( 
        <button 
            onClick={onClick}
            //onMouseOver={(e) => console.log('mús yfir')}
            //onMouseOut={(e) => console.log('mús af')}
            //className={classNames(s.button, size === 'large' && s.large, size=== 'small' && s.small)}
            className={classNames(s.button, toggled && s.toggled, size === 'large' && s.large, size=== 'small' && s.small)}

       >
            {children}{' '}
        </button>
    );
} 

Button.propTypes = {
    children: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,
    onClick: propTypes.func.isRequired,
    size: propTypes.oneOf(['small', 'large']),
}