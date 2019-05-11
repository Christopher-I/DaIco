const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const compiledFactory = require("../ethereum/build/DaIcoFactory.json");
const compiledDaIco = require("../ethereum/build/DaIco.json");

let accounts;
let factory;
let daIcoAddress;
let daIco;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ from: accounts[0], gas: "3900000" });

	await factory.methods
		.createDaIco(
			"10",
			"100",
			"1000",
			"10000",
			"1557081200",
			"1557081320",
			"200",
			"100"
		)
		.send({
			from: accounts[0],
			gas: "2500000"
		});

	[daIcoAddress] = await factory.methods.getDeployedContracts().call();
	daIco = await new web3.eth.Contract(
		JSON.parse(compiledDaIco.interface),
		daIcoAddress
	);
});

describe("daIcos", () => {
	it("it deploys a factory and a DaIco", () => {
		assert.ok(factory.options.address);
		assert.ok(daIco.options.address);
	});
});
