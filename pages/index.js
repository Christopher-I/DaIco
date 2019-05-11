import React from "react";
import factory from "../ethereum/factory";
//import daIco from "../ethereum/DaIco";
import ERC20 from "../ethereum/getERC20Details";
import Head from "next/head";
import Layout from "../components/layout";
import { Table, Divider, Button, Tag, Tabs } from "antd";
import DaIco from "../ethereum/getDaIcoDetails";
import { Link } from "../routes";
import columnsB from "./columnA";
import columnsA from "./columnB";
import columnsC from "./columnC";
import web3 from "../ethereum/web3";

const TabPane = Tabs.TabPane;

class DacIcoDisplay extends React.Component {
	state = {
		dataA: [],
		dataB: [],
		dataC: []
	};

	static async getInitialProps() {
		const listOfDaicos = await factory.methods.getDeployedDAICOs().call();
		const listOfERC20s = await factory.methods.getdeployedERC20s().call();

		let A = [];
		let B = [];
		let C = [];
		let daIco;
		let erc20;
		let erc20Details;
		let summary;
		let currentballot;

		for (var i = 0; i < listOfERC20s.length; i++) {
			erc20 = ERC20(listOfERC20s[i]);
			erc20Details = await erc20.methods.getSummary().call();
		}

		for (var i = 0; i < listOfDaicos.length; i++) {
			daIco = DaIco(listOfDaicos[i]);
			summary = await daIco.methods.getSummary().call();
			let _tapRate = await daIco.methods.tapRate().call();
			let approvalRating = await daIco.methods.approvalRating().call();
			currentballot = await daIco.methods.getCurrentBallot().call();
			let statusNumber = await daIco.methods.status().call();
			let _balance = await daIco.methods.getRaisUpAndBalance().call();

			let date = new Date(summary[6] * 1000);
			let icostart =
				date.getDate() +
				"-" +
				(date.getMonth() + 1) +
				"-" +
				date.getFullYear();
			let date2 = new Date(summary[7] * 1000);
			let icoEnd =
				date2.getDate() +
				"-" +
				(date2.getMonth() + 1) +
				"-" +
				date2.getFullYear();

			let status;

			if (statusNumber == 1) {
				status = "pre-Ico";
			} else if (statusNumber == 2) {
				status = "Ico";
			} else if (statusNumber == 3) {
				status = "post-Ico";
			}
			console.log("details are " + erc20Details[0]);

			C.push({
				tokenName: erc20Details[0],
				tokenSymbol: erc20Details[1],
				initSupply: erc20Details[2],
				allocation: erc20Details[3],
				manager: erc20Details[5],
				contractAddress: erc20Details[4]
			});

			A.push({
				address: listOfDaicos[i],
				name: summary[0],
				symbol: summary[1],
				balance: _balance[0],
				raiseUp: _balance[1],
				minimumContribution: summary[2],
				maximumContribution: summary[3],
				softCap: summary[4],
				hardCap: summary[5],
				icoStartDate: icostart,
				icoEndDate: icoEnd,
				status: status,
				tapRate: _tapRate + "ETH every " + summary[8] + " days",
				rating: approvalRating + " out of 5"
			});
		}
		return { A, B, C, listOfDaicos, erc20Details };
	}

	async componentDidMount() {
		console.log("details are " + this.props.erc20Details[0]);
		this.setState({
			dataA: this.props.A,
			dataB: this.props.B,
			dataC: this.props.C
		});
	}

	renderDaIco() {
		return this.props.DaIcos.map(address => {
			return (
				<Card
					title={address}
					extra={<a href="#">More</a>}
					style={{ width: 600 }}
				>
					<p>{address}</p>
				</Card>
			);
		});
	}

	callback(key) {
		console.log(key);
	}

	render() {
		return (
			<Layout>
				<Tabs defaultActiveKey="1" onChange={this.callback}>
					<TabPane tab="Active DaIcos" key="1">
						<Table
							columns={columnsA}
							dataSource={this.state.dataA}
						/>
					</TabPane>
					<TabPane tab="Pending DaIcos" key="2">
						<Table
							columns={columnsB}
							dataSource={this.state.dataA}
						/>
					</TabPane>
					<TabPane tab="Deployed ERC20 Tokens" key="3">
						<Table
							columns={columnsC}
							dataSource={this.state.dataC}
						/>
					</TabPane>
				</Tabs>
			</Layout>
		);
	}
}

export default DacIcoDisplay;
