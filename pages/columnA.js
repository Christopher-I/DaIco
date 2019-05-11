import { Button, Tag } from "antd";
import { Link } from "../routes";

const columnsA = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text, record) => (
			<Link route={`/DaIcos/${record.address}`}>{text}</Link>
		)
	},
	{
		title: "symbol",
		dataIndex: "symbol",
		key: "symbol"
	},

	{
		title: "status",
		dataIndex: "status",
		key: "status"
	},

	{
		title: "Approval Rating",
		dataIndex: "rating",
		key: "rating"
	},
	{
		title: "Tap Rate",
		dataIndex: "tapRate",
		key: "tapRate"
	},
	{
		title: "Funding (ETH)",
		dataIndex: "balance",
		key: "balance"
	},
	{
		title: "",
		key: "View Details..",
		dataIndex: "View Details..",
		render: (text, record) => (
			<Link route={`/DaIcos/${record.address}`}>
				<Button
					style={{
						align: "right",
						color: "green"
					}}
				>
					View Details..
				</Button>
			</Link>
		)
	}
];

export default columnsA;


