import React from 'react';

const Checkbox = (props) => {
	const { id, label, value, handleChange } = props;

	return (
		<React.Fragment>
			<label htmlFor={id} style={{ userSelect: 'none' }}>{label}</label>
			<input type="checkbox" id={id} value={value} onChange={handleChange} />
		</React.Fragment>
	);
};

const CheckboxMemo = React.memo(Checkbox)

export default () => {
	const [counter, setCounter] = React.useState(0);
	const [checked, toggleCheckbox] = React.useState(false);

	React.useEffect(() => {
		console.log(`Counter: ${counter}`);
	}, [counter]);

	const padded = {
		padding: '10px'
	};

	return (
		<React.Fragment>
			<div style={padded}>Counter: {counter}</div>
			<div style={padded}>Doubled: {counter * 2}</div>
			<div style={padded}>
				<button onClick={() => setCounter(counter + 1)}>Increment</button>
			</div>
			<div style={padded}>
				<CheckboxMemo id="cb" label="Toggle checkbox" value={checked} handleChange={() => toggleCheckbox(!checked)} />
			</div>
		</React.Fragment>
	);
};
