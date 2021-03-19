import React from 'react';
import {useForm} from 'react-hook-form';
import '../css/theme.css';

export default function RegisterFormInputs(props) {

	///props
	const fieldLabel = props.fieldLabel;
	const inputName = props.inputName;
	const typeName = props.typeName;
	const {register, errors} = useForm();

	return(
		<div>
			<label
				htmlFor={inputName}
				className='formElementSpacing'>
				{fieldLabel}
			</label>
			<input
				ref={register({required: true})}
				className='formInputStyle'
				type={typeName}
				name={inputName}
				id={inputName}/>
			{errors.inputName && <p>This is required</p>}
		</div>
	);
}


