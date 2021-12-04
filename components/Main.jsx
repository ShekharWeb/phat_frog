import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import Animation from './Animation';

const Main = ({ connectToWeb3, account, connected, nftContract }) => {
	const [number, setNumber] = useState(1);
	const [totalNfts, setTotalNfts] = useState(10000);
	const [mintedNfts, setMintedNfts] = useState(null);
	const [mainLoading, setMainLoading] = useState(false);

	const [messageFor, setMessageFor] = useState('Please connect your wallet to mint NFT');

	const incNumber = () =>
		number > 19 ? setNumber(number) : setNumber(number + 1);
	const decNumber = () =>
		number > 1 ? setNumber(number - 1) : setNumber(number);

	useEffect(() => {
		if (connected) {
			setMessageFor('Connecting...');
			loadNFTData();
		} else {
			setMessageFor('Please connect your wallet to mint NFT')
		}
	}, []);

	useEffect(() => {
		if (connected) {
			setMessageFor('Connecting...')
			loadNFTData();
		} else {
			setMessageFor('Please connect your wallet to mint NFT')
		}
	}, [nftContract]);

	const loadNFTData = async () => {
		if (connected) {
			setMainLoading(true);
			const totalNfts = await nftContract.methods.getMaxSupply().call();
			const mintedNFTs = await nftContract.methods.totalSupply().call();
			setMintedNfts(mintedNFTs);
			setTotalNfts(totalNfts);
			setMainLoading(false);
			setMessageFor('Connected, Ready to mint NFT');
		}
	};

	const mintNFT = async () => {
		if (connected) {
			setMainLoading(true);

			var _mintCostNow;
			// const isPublicSale = await nftContract.methods.isPublicSaleOn().call();
			const isPublicSale = false;
			var isPresale = false;
			if (!isPublicSale) {
				isPresale = await nftContract.methods.isPresaleOn().call();
			}
			if (isPublicSale) {
				const _publicCost = await nftContract.methods.getMintCost().call();
				_mintCostNow = _publicCost.toString();
			} else if (isPresale) {
				const isWhitelistMember = await nftContract.methods.isWhitelisted(account).call();
				if (isWhitelistMember) {
					const _preSaleCost = await nftContract.methods.getMintCostForWhitelist().call();
					_mintCostNow = _preSaleCost.toString();
				} else {
					setMessageFor('Presale is going on. Your not a whitelist member. So, please mint in Public Sale.');
					setMainLoading(false);
					return
				}

			} else {
				setMessageFor('Nft minting not started yet. Please Mint after public sale start');
				setMainLoading(false);
				return
			}

			await nftContract.methods
				.mint(number)
				.send({ from: account, value: _mintCostNow * number })
				.on('confirmation', (confirmationNumber, receipt) => {
					console.log(receipt);
					loadNFTData();
				})
				.on('error', function (error, receipt) {
					console.log(error);
					setMessageFor(error.message);
					loadNFTData();
				});
		}
	};

	return (
		<div className="-mt-4 relative overflow-hidden">
			<div className="flex max-w-7xl px-6 sm:px-16 mx-auto py-8 border-b-4 rounded-sm border-gray-700 z-40">
				{/* Left */}
				<div className="bg-red-400 opacity-95 max-w-md z-40 mt-6 ml-auto mr-auto">
					<div className="flex space-y-4 text-gray-700 flex-col px-6 py-10">
						<h2 className="text-4xl font-bold">
							10,000 multi-coloured
						</h2>
						<p className="text-2xl font-light text-gray-200 text-center">
							<span className="text-gray-500">degen</span>erative
							frogs
						</p>
						<p className="text-2xl font-light text-gray-100 text-center">
							made for the frog nation army
						</p>
						<p className="mx-auto text-center w-full text-3xl border-t-2 border-b-2 border-gray-600 py-2 font-semibold">
							{connected ? mintedNfts : `?`}/{totalNfts}
						</p>
						<div className="flex items-center justify-between">
							<button
								onClick={decNumber}
								className="px-4 py-1 text-5xl font-bold bg-gray-50 hover:bg-gray-100 transition-all duration-150 ease-out"
							>
								<MinusSmIcon className="w-12" />
							</button>
							<div className="flex-1 font-bold border-2 border-gray-600 mx-4 py-1 text-4xl text-center">
								{number}
							</div>
							<button
								onClick={incNumber}
								className="px-4 py-1 text-5xl bg-gray-50 hover:bg-gray-100 transition-all duration-150 ease-out"
							>
								<PlusSmIcon className="w-12" />
							</button>
						</div>
						<div className="text-center">
							<button
								disabled={mainLoading}
								onClick={mintNFT}
								className="w-full font-medium text-4xl py-2 bg-gray-700 md:hover:bg-gray-800 md:hover:text-red-400 transition-all duration-200 ease-out text-gray-50"
							>
								{mainLoading ? (
									<div class="flex items-center justify-center">
										<div class="w-12 h-12 border-b-2 border-white-900 rounded-full animate-spin"></div>
									</div>
								) : (
									`Mint`
								)}
							</button>
							<p>{messageFor}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute -top-28 left-0 w-screen">
				<Animation />
			</div>
		</div>
	);
};

export default Main;
