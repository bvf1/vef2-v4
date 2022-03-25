import propTypes from 'prop-types';
import { Button } from "../button/Button";
import { Form } from "../form/Form";
import Field from '../form/Field';
import { useState } from 'react';

export function Register({isLoggedIn, eventId}) {
    const [registered, setRegistered] = useState(false);

    if (registered) return (
        <p>Þú hefur skráð þig á þennan viðburð</p>
    )
    if (isLoggedIn) return (
        <Form action={`/events/${eventId}`}>
            <Field
                what="comment"
                type="text"
                text="Athugasemd: "
            />

            <Button 
                onClick={(e) => {setRegistered(true)}} 
                size="large"
            >
                Skrá mig
            </Button>
        </Form>
    )
    return (
        <p>Skráðu þig inn til að skrá þig á viðburðinn</p>
    )
}

Register.propTypes = {
    isLoggedIn: propTypes.bool.isRequired,
    eventId: propTypes.number.isRequired,
}