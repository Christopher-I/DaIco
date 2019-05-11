import React from "react";
import factory from "../ethereum/factory";
import ERC20 from "../ethereum/getERC20Details";
import Layout from "../components/layout";

import DaIco from "../ethereum/getDaIcoDetails";
import Head from "next/head";
import { Link, Router } from "../routes";
import { Button, Tag } from "antd";
import web3 from "../ethereum/web3";

class DacIcoDisplay extends React.Component {
    state = {
        loading: "",
        name: "",
        symbol: ""
    };

    static async getInitialProps(props) {
        const address = props.query.address;

        return { address };
    }

    endIco = async () => {
        this.setState({
            loading: true
        });
        const accounts = await web3.eth.getAccounts();
        const daIco = DaIco(this.props.address);
        const summary = await daIco.methods.endIco().send({
            from: accounts[0]
        });
        console.log(summary);

        // const response = await daIco.methods.endIco().send({
        //     from: accounts[0]
        // });

        Router.pushRoute("/"); //redirect user back to Open Bids page(index)
        this.setState({
            loading: false
        });
    };

    render() {
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
                <p>
                    <Button onClick={this.endIco} loading={this.state.loading}>
                        Close Fund Raising
                    </Button>
                </p>
                <p>
                    <Button>Join White List</Button>
                </p>
                <p>
                    <Button>Buy Tokens</Button>
                </p>
            </Layout>
        );
    }
}

export default DacIcoDisplay;
