import React, {useState} from 'react';
import RegisterForm from "./RegisterForm";
import PasswordReq from "./PasswordReq";
import RegisterTy from "./RegisterTy";


export default function Register() {

    const [didRegister, setDidRegister] = useState(false)

    function registerConditional() {
        if(didRegister !== true) {
            return(
                <div>
                    <RegisterForm setDidRegister={setDidRegister}/>
                    <PasswordReq />
                </div>
            )
        }
        else {
            return <RegisterTy/>
        }
    }

    return (
        <section>
            {registerConditional()}
        </section>
    )
}

