import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import Animation from './Animation';

const Main = ({ connectToWeb3, account, connected, nftContract }) => {
	const [number, setNumber] = useState(1);
	const [totalNfts, setTotalNfts] = useState(10000);
	const [mintedNfts, setMintedNfts] = useState(null);
	const [mintCost, setMintCost] = useState(10**17);
	const [mainLoading, setMainLoading] = useState(false);

	const incNumber = () => number > 19 ? setNumber(number) : setNumber(number + 1);
	const decNumber = () => number > 1 ? setNumber(number - 1) : setNumber(number);

	useEffect(() => {
		if (connected) {
			loadNFTData();
		}
	}, []);

	useEffect(() => {
		if (connected) {
			loadNFTData();
		}
	}, [nftContract]);

	const loadNFTData = async () => {
		if (connected) {
			setMainLoading(true)
			const totalNfts = await nftContract.methods.getMaxSupply().call();
			const mintedNFTs = await nftContract.methods.totalSupply().call();
			const _mintCost = await nftContract.methods.getMintCost().call();
			setMintedNfts(mintedNFTs);
			setTotalNfts(totalNfts);
			setMintCost(_mintCost);
			setMainLoading(false)
		}
	}

	const mintNFT = async () => {
		if (connected) {
			setMainLoading(true)
			await nftContract.methods.mint(number)
                .send({ from: account, value: mintCost*number })
                .on('confirmation', (confirmationNumber, receipt) => {
					console.log(receipt);
                    loadNFTData();
                })
                .on('error', function (error, receipt) {
					console.log(error);
                    loadNFTData();
                });
		}
	}


	return (
		<div className="-mt-4 relative overflow-hidden">
			<div className="flex max-w-7xl px-6 sm:px-16 mx-auto py-8 border-b-4 rounded-sm border-gray-700 z-40">
				{/* Left */}
				<div className="bg-red-400 opacity-95 max-w-md z-40 mt-6">
					<div className="flex space-y-6 text-gray-700 flex-col px-6 py-10">
						<h2 className="text-4xl font-bold">
							On-chain Graveyard
						</h2>
						<p className="text-2xl font-light text-gray-100">
							On-chain degenerative pixel art in game items
							collection
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
							<button disabled={mainLoading} onClick={mintNFT} className="w-full font-medium text-4xl py-2 bg-gray-700 md:hover:bg-gray-800 md:hover:text-red-400 transition-all duration-200 ease-out text-gray-50">
							{mainLoading
							?
							<div class="flex items-center justify-center">
								<div class="w-12 h-12 border-b-2 border-white-900 rounded-full animate-spin"></div>
							</div>
							:
							`Mint`
							}
							</button>
							{connected
								?
								<p>Connected, Ready to mint NFT</p>
								:
								<p>Please connect your wallet for mint NFT</p>
							}
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
