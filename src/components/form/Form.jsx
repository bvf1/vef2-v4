import classNames from 'classnames';
import s from './Form.module.scss';


export function Form({children, action, autocomplete = "on"}) {
    console.log("Form children", children);
    return (
        <form 
            className={classNames(s.form)}
            method="post"
            action={action}
            autocomplete={autocomplete}
        >
            {children}{' '}
        </form>
    )
}