import { Button, Tag } from "antd";
import { Link } from "../routes";

const columnsB = [
	{
		title: "ICO Start Date",
		dataIndex: "icoStartDate",
		key: "icoStartDate"
	},
	{
		title: "ICO End Date",
		dataIndex: "icoEndDate",
		key: "icoEndDate"
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text, record) => (
			<Link route={`/DaIcos/${record.address}`}>{text}</Link>
		)
	},

	{
		title: "status",
		dataIndex: "status",
		key: "status"
	},

	{
		title: "Soft Cap(ETH)",
		dataIndex: "softCap",
		key: "softCap"
	},
	{
		title: "Hard Cap(ETH)",
		dataIndex: "hardCap",
		key: "hardCap"
	},
	{
		title: "Amount Raised(ETH)",
		dataIndex: "balance",
		key: "balance"
	},

	{
		title: "",
		key: "Info",
		dataIndex: "",
		render: (text, record) => (
			<Link route={`/PreDaIco/${record.address}`}>
				<Button
					style={{
						align: "right",
						color: "green"
					}}
				>
					More Details
				</Button>
			</Link>
		)
	}
];

export default columnsB;
