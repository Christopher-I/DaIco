import React from "react";
import Layout from "../components/layout";
import DaIco from "../ethereum/getDaIcoDetails";
import web3 from "../ethereum/web3";
import {
	Card,
	Row,
	Col,
	Progress,
	Button,
	Rate,
	Radio,
	Spin,
	Input
} from "antd";

const RadioGroup = Radio.Group;

class daIcoDetails extends React.Component {
	state = {
		name: "",
		deposit: "",
		symbol: "",
		minimumContribution: "",
		maximumContribution: "",
		softCap: "",
		hardCap: "",
		icoStartDate: "",
		icoEndDate: "",
		votePeriodInterval: "",
		desc: ["terrible", "bad", "normal", "good", "wonderful"],
		value: "",
		tapRate: "",
		voteCount: "",
		ballotCreationDate: "",
		ballotExpiryDate: "",
		increaseVoteCount: "",
		unchangeVoteCount: "",
		decreaseVoteCount: "",
		selfDestructVoteCount: "",
		fundsLeft: "",
		approvalRating: "",
		loading2: ""
	};

	static async getInitialProps(props) {
		const address = props.query.address;
		const daIco = DaIco(props.query.address);
		const summary = await daIco.methods.getSummary().call();
		let approvalRating = await daIco.methods.approvalRating().call();
		const tapRate = await daIco.methods.tapRate().call();
		const currentballot = await daIco.methods.getCurrentBallot().call();
		let balance = await daIco.methods.getRaisUpAndBalance().call();
		// let utcSeconds = summary[6];
		// let utcSeconds2 = summary[7];
		// let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
		// d.setUTCSeconds(utcSeconds);
		// let icostart = d;
		// let d2 = new Date(0); // The 0 there is the key, which sets the date to the epoch
		// d2.setUTCSeconds(utcSeconds2);
		// let icoEnd = d2;

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

		return {
			summary,
			approvalRating,
			tapRate,
			currentballot,
			daIco,
			address,
			balance,
			icostart,
			icoEnd
		};
	}

	componentDidMount() {
		this.setState({
			name: this.props.summary[0],
			symbol: this.props.summary[1],
			balance: this.props.balance[0],
			raiseUp: this.props.balance[1],
			minimumContribution: this.props.summary[2],
			maximumContribution: this.props.summary[3],
			softCap: this.props.summary[4],
			hardCap: this.props.summary[5],
			icoStartDate: this.props.icostart,
			icoEndDate: this.props.icoEnd,
			votePeriodInterval: this.props.summary[8],
			tokenPrice: this.props.summary[9],
			erc20Address: this.props.summary[10],
			manager: this.props.summary[11],
			tapRate: this.props.tapRate,
			voteCount: this.props.currentballot[0],
			ballotCreationDate: this.props.currentballot[1],
			ballotExpiryDate: this.props.currentballot[2],
			increaseVoteCount: this.props.currentballot[3],
			unchangeVoteCount: this.props.currentballot[4],
			decreaseVoteCount: this.props.currentballot[5],
			selfDestructVoteCount: this.props.currentballot[6],
			fundsLeft: (this.props.balance[0] / this.props.balance[1]) * 100,
			dayLeft:
				(this.props.balance[0] / this.props.tapRate) *
				this.props.summary[8]
		});
	}
	handleChange = approvalRating => {
		console.log("approvalRating " + approvalRating);
		this.setState({ approvalRating });
	};
	submitRating = async () => {
		this.setState({
			loading3: true
		});
		const accounts = await web3.eth.getAccounts();
		const daIco2 = DaIco(this.props.address);
		const response = await daIco2.methods
			.rateManagment(this.state.approvalRating)
			.send({
				from: accounts[0]
			});
		Router.pushRoute("/"); //redirect user back to Open Bids page(index)
		this.setState({
			loading3: false
		});
		//Router.pushRoute("/"); //redirect user back to Open Bids page(index)
	};

	onChange = e => {
		this.setState({
			value: e.target.value
		});
	};

	payDeposit = async e => {
		this.setState({
			loading2: true
		});
		const accounts = await web3.eth.getAccounts();
		const daIco2 = DaIco(this.props.address);
		const response = await daIco2.methods.payDeposit(2777777).send({
			from: accounts[0],
			value: this.state.deposit * 100
		});
		Router.pushRoute("/"); //redirect user back to Open Bids page(index)
		this.setState({
			loading2: false
		});
	};

	Vote = async e => {
		this.setState({
			loading: true
		});
		const accounts = await web3.eth.getAccounts();
		const daIco2 = DaIco(this.props.address);
		console.log("I am here");
		const response = await daIco2.methods
			.voteForTapChange(this.state.value)
			.send({
				from: accounts[0]
			});
		Router.pushRoute("/"); //redirect user back to Open Bids page(index)
		this.setState({
			loading: false
		});
		//Router.pushRoute("/"); //redirect user back to Open Bids page(index)
	};

	render() {
		return (
			<Layout>
				<div>
					<Row>
						<Col span={12}>
							<Card
								size="small"
								title="Details"
								extra={this.state.name}
								style={{ width: 500 }}
							>
								<div>
									<p>
										<b>Symbol: </b>
										{this.state.symbol}
									</p>
									<p>
										<b>Initial Capital: </b>
										<i style={{ color: "green" }}>
											{this.state.raiseUp} ETH
										</i>
									</p>

									<p>
										<b>Balance: </b>
										<i style={{ color: "green" }}>
											{this.state.balance} ETH
										</i>
									</p>
									<p>
										<b>Token Price: </b>1 ETH to{" "}
										{this.state.tokenPrice}{" "}
										{this.state.symbol}
									</p>
									<p>
										<b> Minimum Contribution: </b>
										{this.state.minimumContribution} ETH
									</p>
									<p>
										<b> Maximum Contribution: </b>
										{this.state.maximumContribution} ETH
									</p>
									<p>
										<b>Soft Cap: </b>
										{this.state.softCap} ETH
									</p>
									<p>
										<b> Hard Cap: </b>
										{this.state.hardCap} ETH
									</p>
									<p>
										<b> ICO Start Time: </b>
										{this.state.icoStartDate}
									</p>
									<p>
										<b> ICO End Time: </b>
										{this.state.icoEndDate}
									</p>

									<p>
										<b> Vote Period Interval : </b>
										{this.state.votePeriodInterval} days
									</p>
									<p>
										<b> ERC20 Address: </b>
										{this.state.erc20Address}
									</p>

									<p>
										<b> Managers Address: </b>
										{this.state.manager}
									</p>
								</div>
								<div>
									<Button
										onClick={this.payDeposit}
										loading={this.state.loading2}
									>
										Pay Deposit
									</Button>
									<Input
										style={{
											width: "120px",
											marginLeft: "30px"
										}}
										label={{ basic: true, content: "ETH" }}
										labelPosition="right"
										value={this.state.deposit}
										onChange={event =>
											this.setState({
												deposit: event.target.value
											})
										}
									/>
									<label>ETH</label>
								</div>
							</Card>
						</Col>
						<Col span={12}>
							<Card
								size="small"
								title="Tap"
								extra={this.state.balance}
								style={{ width: 500 }}
							>
								<div>
									<p>
										<b> Managment Team Proposal: </b>
										Increase Tap by 100X
										<a> View Reason</a>
									</p>
									<p>
										<b> No of Votes Cast: </b>
										{this.state.voteCount}
									</p>
									<p>
										<b> Current Tap Rate: </b>
										{this.state.tapRate} ETH every{" "}
										{this.state.votePeriodInterval} days
									</p>
									<p>
										<b> Funding : </b>
										<Progress
											type="circle"
											percent={this.state.fundsLeft}
											width={80}
										/>
										{this.state.dayLeft}
										days left till funds are depleted.
									</p>
									<RadioGroup
										style={{ width: 400 }}
										onChange={this.onChange}
										value={this.state.value}
									>
										<p>
											<Radio value={3}>
												Increase Tap rate 100%
											</Radio>
											<Progress
												percent={Math.round(
													(this.state
														.increaseVoteCount /
														this.state.voteCount) *
														100
												)}
											/>
										</p>
										<p>
											<Radio value={2}>
												I'm fine with the current Tap
											</Radio>
											<Progress
												percent={Math.round(
													(this.state
														.unchangeVoteCount /
														this.state.voteCount) *
														100
												)}
											/>
										</p>
										<p>
											<Radio value={1}>
												Decrease Tap rate 100%
											</Radio>
											<Progress
												percent={Math.round(
													(this.state
														.decreaseVoteCount /
														this.state.voteCount) *
														100
												)}
											/>
										</p>
										<p>
											<Radio value={0}>
												Terminate Contract
											</Radio>
											<Progress
												percent={Math.round(
													(this.state
														.selfDestructVoteCount /
														this.state.voteCount) *
														100
												)}
											/>
										</p>
									</RadioGroup>
									<p>
										<Button
											loading={this.state.loading}
											onClick={this.Vote}
										>
											Vote
										</Button>
									</p>
								</div>
							</Card>
							<br />
							<Card
								size="small"
								title="Rate Managment Team"
								extra={this.props.approvalRating + "/5"}
								style={{ width: 500 }}
							>
								<div>
									<span>
										<Rate
											tooltips={this.state.desc}
											onChange={this.handleChange}
											value={this.state.approvalRating}
										/>
										{this.state.approvalRating ? (
											<span className="ant-rate-text">
												{
													this.state.desc[
														this.state
															.approvalRating
													]
												}
											</span>
										) : (
											""
										)}
									</span>
									<p>
										<Button
											loading={this.state.loading3}
											onClick={this.submitRating}
										>
											Submit
										</Button>
									</p>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
			</Layout>
		);
	}
}

export default daIcoDetails;
