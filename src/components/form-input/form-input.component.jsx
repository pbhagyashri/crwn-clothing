import React from 'react';
import './form-input.styles.scss';

// eslint-disable-next-line react/prop-types
const FormInput = ({ label, inputOptions }) => {
	return (
		<div className='group'>
			<input className='form-input' {...inputOptions} />
			{label && (
				<label
					className={`${
						// eslint-disable-next-line react/prop-types
						inputOptions.value.length && 'shrink'
					} form-input-label`}>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
