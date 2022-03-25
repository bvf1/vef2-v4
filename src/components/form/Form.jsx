import classNames from 'classnames';
import s from './Form.module.scss';


export function Form({children, action = null}) {
    return (
        <form 
            className={classNames(s.form)}
            method="post"
            action={action}
        >
            {children}{' '}
        </form>
    )
}