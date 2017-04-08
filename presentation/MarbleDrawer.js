import React, { Component } from "react";
import { Text } from "spectacle";

class MarbleDrawer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ""
		};
	}

	componentDidMount() {
		const text = this.props.text;
		const update = (i) => {
			this.setState({
				text: text.substr(0, i++)
			});

			if (i <= text.length) {
				setTimeout(update.bind(null, i), 250);
			}
		};

		update(1);
	}

	render() {
		return <Text textFont="monospace">{this.state.text}</Text>
	}
}

export default MarbleDrawer;