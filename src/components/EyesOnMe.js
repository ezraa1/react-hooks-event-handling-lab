// Code EyesOnMe Component Here
import React from "react";


const EyesOnMe = () => {


	function handleEye(event) {

		console.log("Good!")
	}

	return ( 
		<div>
			<button onBlur={()=>(console.log('Hey! Eyes on me!'))} onFocus={handleEye}>Eyes on me</button>
		</div>
	 );
}

export default EyesOnMe;