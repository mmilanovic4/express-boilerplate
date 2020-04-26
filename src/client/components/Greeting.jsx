import React from 'react';

export default (props) => {
	const { firstName, lastName } = props;

	return (
		<div>
			Hello!
			<br />
			My name is {firstName} {lastName}.
		</div>
	);
};
