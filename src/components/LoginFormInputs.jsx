import React from 'react';
import {useForm} from 'react-hook-form';
import '../css/theme.css';

export default function LoginFormInput(props) {

	///props
	const fieldLabel = props.fieldLabel;
	const inputName = props.inputName;
	const typeName = props.type;
	const {register, errors} = useForm();

	return(
		<div>
			<label
				className='formElementSpacing'>
				{fieldLabel}
			</label>
			<input
				ref={register({required: true, minLength: 2})}
				className='formInputStyle'
				name={inputName}
				type={typeName}/>
			<br/>
			{errors.inputName && <p className='incorrectColor'>This is required</p>}
		</div>
	);
}