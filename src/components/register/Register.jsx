import { useState } from "react";
import { Button } from "../button/Button";
import { Form } from "../form/Form";

export function Register({children, isLoggedIn}) {
    const [registered, setRegistered] = useState(false);
    if (registered) return (
        <p>Þú hefur skráð þig á þennan viðburð</p>
    )
    if (isLoggedIn) return (
        <Form>
            <div>
                <label for="comment">Athugasemd:</label>
                <input type="text" name="comment" id="comment"/>
            </div>
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