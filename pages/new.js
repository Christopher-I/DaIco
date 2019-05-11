import React from "react";
import factory from "../ethereum/factory";
import ERC20 from "../ethereum/getERC20Details";
import Layout from "../components/layout";

//import DaIco from "../ethereum/getDaIcoDetails";
import Head from "next/head";
import { Link, Router } from "../routes";
import {
    Form,
    Label,
    Button,
    Checkbox,
    TextArea,
    Input,
    Message
} from "semantic-ui-react";
import web3 from "../ethereum/web3";

class DacIcoDisplay extends React.Component {
    state = {
        loading: "",
        name: "",
        symbol: "",
        tokenPrice: "",
        totalSupply: "",
        allocation: "",
        minimumContribution: "",
        maximumContribution: "",
        softCap: "",
        hardCap: "",
        votePeriodInterval: "",
        tapRate: "",
        icoStartDay: "",
        icoStartMonth: "",
        icoStartYear: "",
        icoStartDate: "",
        icoEndDay: "",
        icoEndMonth: "",
        icoEndYear: "",
        icoEndDate: ""
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

        return { daIco };
    }

    onSubmit = async () => {
        this.setState({
            loading: true
        });
        const accounts = await web3.eth.getAccounts();

        const startDate =
            new Date(
                this.state.icoStartYear,
                this.state.icoStartMonth - 1,
                this.state.icoStartDay
            ).getTime() / 1000;

        const endDate =
            new Date(
                this.state.icoEndYear,
                this.state.icoEndMonth - 1,
                this.state.icoEndDay
            ).getTime() / 1000;

        console.log(startDate);
        console.log(endDate);

        const response = await factory.methods
            .createDAICOCampaign(
                this.state.name,
                this.state.symbol,
                this.state.minimumContribution,
                this.state.maximumContribution,
                this.state.softCap,
                this.state.hardCap,
                startDate,
                endDate,
                this.state.votePeriodInterval,
                this.state.tapRate,
                this.state.totalSupply,
                this.state.allocation,
                this.state.tokenPrice
            )

            .send({
                from: accounts[0]
            });
        Router.pushRoute("/"); //redirect user back to Open Bids page(index)
        this.setState({
            loading: false
        });
    };

    render() {
        const { Input, Group, Field } = Form;
        return (
            <Layout>
                <div>
                    <Head>
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
                        />
                    </Head>
                </div>

                <Form
                    onSubmit={this.onSubmit}
                    error={!!this.state.errorMessage}
                >
                    <h4 class="ui dividing header">Create DaIco</h4>
                    <Group widths="equal">
                        <Input
                            fluid
                            label="Token Name"
                            placeholder="name..."
                            value={this.state.name}
                            onChange={event =>
                                this.setState({
                                    name: event.target.value
                                })
                            }
                        />
                        <Input
                            fluid
                            label="Token Symbol"
                            placeholder="symbol..."
                            value={this.state.symbol}
                            onChange={event =>
                                this.setState({
                                    symbol: event.target.value
                                })
                            }
                        />
                        <Input
                            fluid
                            label="Token Price"
                            placeholder="20..."
                            value={this.state.tokenPrice}
                            onChange={event =>
                                this.setState({
                                    tokenPrice: event.target.value
                                })
                            }
                        />
                        <Input
                            fluid
                            label="Total Supply"
                            placeholder="2000..."
                            value={this.state.totalSupply}
                            onChange={event =>
                                this.setState({
                                    totalSupply: event.target.value
                                })
                            }
                        />
                        <Input
                            fluid
                            label="DaIco Allocation"
                            placeholder="200..."
                            value={this.state.allocation}
                            onChange={event =>
                                this.setState({
                                    allocation: event.target.value
                                })
                            }
                        />
                    </Group>
                    <Group widths="equal">
                        <Input
                            fluid
                            label="Minimum Contribution"
                            placeholder="50..."
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({
                                    minimumContribution: event.target.value
                                })
                            }
                        />
                        <Input
                            fluid
                            label="Maximum Contribution"
                            placeholder="500..."
                            value={this.state.maximumContribution}
                            onChange={event =>
                                this.setState({
                                    maximumContribution: event.target.value
                                })
                            }
                        />
                        <Input
                            fluid
                            label="Soft Cap"
                            placeholder="2000..."
                            value={this.state.softCap}
                            onChange={event =>
                                this.setState({
                                    softCap: event.target.value
                                })
                            }
                        />
                        <Input
                            fluid
                            label="Hard Cap"
                            placeholder="20000..."
                            value={this.state.hardCap}
                            onChange={event =>
                                this.setState({
                                    hardCap: event.target.value
                                })
                            }
                        />
                    </Group>
                    <Group>
                        <Input
                            fluid
                            style={{ width: "200px" }}
                            label="Tap Rate"
                            placeholder="50..."
                            value={this.state.tapRate}
                            onChange={event =>
                                this.setState({
                                    tapRate: event.target.value
                                })
                            }
                        />
                        <Input
                            style={{ width: "100px" }}
                            label="Vote Period Interval"
                            placeholder="500..."
                            value={this.state.votePeriodInterval}
                            onChange={event =>
                                this.setState({
                                    votePeriodInterval: event.target.value
                                })
                            }
                        />

                        <Input
                            style={{ width: "100px" }}
                            label="Fund Raise Start Date"
                            placeholder="01"
                            value={this.state.icoStartDay}
                            onChange={event =>
                                this.setState({
                                    icoStartDay: event.target.value
                                })
                            }
                        />

                        <Input
                            style={{ width: "60px" }}
                            label="Month"
                            placeholder="01"
                            value={this.state.icoStartMonth}
                            onChange={event =>
                                this.setState({
                                    icoStartMonth: event.target.value
                                })
                            }
                        />
                        <Input
                            style={{ width: "60px" }}
                            label="Year"
                            placeholder="2019"
                            value={this.state.icoStartYear}
                            onChange={event =>
                                this.setState({
                                    icoStartYear: event.target.value
                                })
                            }
                        />
                        <Input
                            style={{ width: "100px" }}
                            label="Fund Raise End Date"
                            placeholder="01"
                            value={this.state.icoEndDay}
                            onChange={event =>
                                this.setState({
                                    icoEndDay: event.target.value
                                })
                            }
                        />

                        <Input
                            style={{ width: "60px" }}
                            label="Month"
                            placeholder="01"
                            value={this.state.icoEndMonth}
                            onChange={event =>
                                this.setState({
                                    icoEndMonth: event.target.value
                                })
                            }
                        />
                        <Input
                            style={{ width: "60px" }}
                            label="Year"
                            placeholder="01"
                            value={this.state.icoEndyear}
                            onChange={event =>
                                this.setState({
                                    icoEndYear: event.target.value
                                })
                            }
                        />
                    </Group>
                    <Button type="submit" loading={this.state.loading}>
                        Create
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default DacIcoDisplay;
