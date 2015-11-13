import React from 'react';

var AppComponent = React.createClass({
	render: function () {
		return (
			<div>
				React root
			</div>
		);
	}
});

React.render(
	<AppComponent />,
	document.getElementById('react-root')
);

module.exports = AppComponent;