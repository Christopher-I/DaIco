import React from "react";
import Layout from "./layout";
import web3 from "../";

class ListOfDaIcos extends React.component {
	static async getInitialProps() {
		const DaIcos = await factory.methods.getDeployedContracts().call();
		return { DaIcos };
	}

	renderDaIco() {
		const items = this.props.campaigns.map(address => {});
	}

	render() {
		<Layout>{DaIcos[0]}</Layout>;
	}
}
