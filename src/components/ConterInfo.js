import React from 'react';

//stateless component//

const CounterInfo = (props) => {
	return (
		<div>
			<h1>{props.counter}</h1>
		</div>
		);

}

export default CounterInfo;