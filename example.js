var React = require('react');
var ReactDOM = require('react-dom');
var ReactLoadingSimple = require('./src/react-loading-simple.js');

var DemoLoading = React.createClass({

	getInitialState: function() {
		return {loading: true};
	},

	render: function() {
		return (
			<div>
				<ReactLoadingSimple loading={this.state.loading} type='balls' />
				<ReactLoadingSimple loading={this.state.loading} type='bars'/>
				<ReactLoadingSimple loading={this.state.loading} type='blank'/>
				<ReactLoadingSimple loading={this.state.loading} type='bubbles'/>
				<ReactLoadingSimple loading={this.state.loading} type='cubes'/>
				<ReactLoadingSimple loading={this.state.loading} type='cylon'/>
				<ReactLoadingSimple loading={this.state.loading} type='spin'/>
				<ReactLoadingSimple loading={this.state.loading} type='spinningBubbles'/>
				<ReactLoadingSimple loading={this.state.loading} type='spokes'/>
			</div>
		);
	}
});
ReactDOM.render(React.createElement(DemoLoading), document.getElementById('main'));
