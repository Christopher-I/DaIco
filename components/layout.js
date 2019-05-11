import { PageHeader, Layout, Menu, Icon, Button, Tabs } from "antd";
import { Link, Router } from "../routes";

import Head from "next/head";

// <Icon
// 	className="trigger"
// 	type={
// 		this.state.collapsed
// 			? "menu-unfold"
// 			: "menu-fold"
// 	}
// 	onClick={this.toggle}
// />

const { Header, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;

class Environment extends React.Component {
	state = {
		collapsed: false
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		return (
			<Layout>
				<div>
					<Head>
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.min.css"
						/>
					</Head>
				</div>
				<Sider
					style={{
						overflow: "auto",
						height: "100vh"
					}}
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={["1"]}
					>
						<Menu.Item key="1">
							<Icon type="ordered-list" />
							<Link route="/">
								<span>List of DaIcos</span>
							</Link>
						</Menu.Item>

						<Menu.Item key="3">
							<Icon type="check" />
							<span>Proposals</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<PageHeader
						title="A DaIco"
						extra={[
							<Link route="/new">
								<a>
									<Button
										float="right"
										type="primary"
										icon="plus-circle"
										style={{
											align: "right"
										}}
									>
										Create new DaIco
									</Button>
								</a>
							</Link>
						]}
					>
						<div className="wrap">
							<div
								className="content padding"
								style={{
									width: "127vh",
									color: "grey"
								}}
							>
								is an alternative fund raising model to ICOs. It
								provides consumer protection to shareholders by
								allowing them influence decisions on how their
								investment are used and the power to enforce a
								refund if neccesary.
							</div>
						</div>
					</PageHeader>

					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							background: "#fff",
							minHeight: 280
						}}
					>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Environment;
