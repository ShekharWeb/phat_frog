import '../styles/globals.css';
import Header from '../components/Header';
import Web3 from 'web3';
import { useState } from 'react';
import NftContractAbi from './abis/nftAbi.json'

function MyApp({ Component, pageProps }) {

	const [connected, setConnected] = useState(false);
	const [account, setAccount] = useState(null);
	const [nftContract, setNftContract] = useState(null);

	const connectToWeb3 = async () => {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			loadBlockchainData()
		} else {
			setConnected(false);
		}

	}

	const loadBlockchainData = async () => {
		const web3 = new Web3(window.ethereum);

		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		const account = accounts[0];
		web3.eth.defaultAccount = account;
		setAccount(account);
		
		const networkId = await web3.eth.net.getId()

		if (networkId == 43114 || networkId == 43113 || networkId==1) {
			const contractAddress = "0x6132f3Fb7D02167D9F86219FAE0fDCa673792fc0";
			const nftContract0 = new web3.eth.Contract(NftContractAbi.abi, contractAddress);
			setConnected(true);
			setNftContract(nftContract0);
		} else {
			switchToAvalaceTestNet();
		}
	}

	const switchToAvalaceTestNet = async () => {
		try {
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0xA869" }],
			});
			loadBlockChatData();
		} catch (error) {
			if (error.code === 4902) {
				try {
					await window.ethereum.request({
						method: "wallet_addEthereumChain",
						params: [
							{
								chainId: "0xA869",
								chainName: "Avalanche FUJI C-Chain",
								rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
								nativeCurrency: {
									name: "Avalanche",
									symbol: "AVAX",
									decimals: 18,
								},
								blockExplorerUrls: ["https://testnet.snowtrace.io/"],
							},
						],
					});
					loadBlockChatData();

				} catch (error) {
					console.log(error.message);
				}
			}
		}
	}

	const switchToAvalaceMainnet = async () => {
		try {
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0xA86A" }],
			});
			loadBlockChatData();
		} catch (error) {
			if (error.code === 4902) {
				try {
					await window.ethereum.request({
						method: "wallet_addEthereumChain",
						params: [
							{
								chainId: "0xA86A",
								chainName: "Avalanche Mainnet C-Chain",
								rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
								nativeCurrency: {
									name: "Avalanche",
									symbol: "AVAX",
									decimals: 18,
								},
								blockExplorerUrls: ["https://snowtrace.io/"],
							},
						],
					});
					loadBlockChatData();

				} catch (error) {
					console.log(error.message);
				}
			}
		}
	}

	return (
		<>
			<div className="h-24">
				<Header connectToWeb3={connectToWeb3} account={account} connected={connected} nftContract={nftContract} />
			</div>
			<Component {...pageProps} connectToWeb3={connectToWeb3} account={account} connected={connected} nftContract={nftContract} />

		</>
	);
}

export default MyApp;
