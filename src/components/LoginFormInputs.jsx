import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import ThemeContext from "./ThemeContext";

export default function LoginFormInput(props) {

    ///context theme
    const context = useContext(ThemeContext);
    const formElementSpacing = context.formElementSpacing;
    const formInputStyle = context.formInputStyle;

    ///props
    const fieldLabel = props.fieldLabel;
    const inputName = props.inputName;
    const typeName = props.type;
    const {register, errors} = useForm();

    return(
        <div>
            <label
                style={formElementSpacing}>
                {fieldLabel}
            </label>
            <input
                ref={register({required: true, minLength: 2})}
                style={formInputStyle}
                name={inputName}
                type={typeName}/>
            <br/>
            {errors.inputName && <p style={{color: "red"}}>This is required</p>}
        </div>
    )
}