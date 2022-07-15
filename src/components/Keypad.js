// Code Keypad Component Here
import React from "react";

const Keypad = () => {

	function handleChange(event) {
		console.log('Entering password...')
	}
	return ( 
		<div>
			<input onChange={handleChange} type="password" name="Password" placeholder="Enter your password" />
		</div>
	 );
}

export default Keypad;