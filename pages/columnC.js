import { Button, Tag } from "antd";
import { Link } from "../routes";

const columnsC = [
	{
		title: "Token Name",
		dataIndex: "tokenName",
		key: "tokenName"
	},

	{
		title: "Token Symbol",
		dataIndex: "tokenSymbol",
		key: "tokenSymbol"
	},

	{
		title: "Total Supply",
		dataIndex: "initSupply",
		key: "initSupply"
	},
	{
		title: "Token Sale Allocation",
		dataIndex: "allocation",
		key: "allocation"
	},

	{
		title: "Managers Address",
		dataIndex: "manager",
		key: "manger"
	}
];

export default columnsC;
