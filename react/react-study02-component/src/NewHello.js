import React from 'react';

function NewHello(props) {
	return (
		<div className="hello">
			<h2>
				{props.name}
			</h2>
			<p>
				{props.msg}
			</p>
		</div>
	);
}

export default NewHello;
