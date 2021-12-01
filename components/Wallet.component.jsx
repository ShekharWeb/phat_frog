import { useEffect } from "react";

const WalletComponent = ({ connected, loadingNFTs, nftArray }) => {

	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8">
				<h3 className="text-3xl font-bold">Wallet.</h3>
				<div className="space-y-4 max-w-3xl text-gray-700">
					<p className="text-xl">
						Check out all your tiny bones here. Including traits and
						rarity!
					</p>
					{connected
						?
						<h1 className="text-3xl font-bold">Here is All you Nfts ({nftArray.length}):</h1>
						:
						<h1 className="text-3xl font-bold">Please Connect for check your Nfts</h1>
					}
					<div className="flex flex-wrap gap-4">
						{loadingNFTs
							?
								<div class="w-24 h-24 border-b-8 border-black-900 rounded-full animate-spin"></div>
							:
							nftArray && nftArray.map((nft, key) => {
								return (
									// <p>{nft.substr(7)}</p>
									<div className="w-60">
										<img src={`https://gateway.pinata.cloud/ipfs/${nft.substr(7)}`} key={key} alt="" />
									</div>
								)
							})
						}
					</div>
					{/* <button className="bg-gray-700 text-gray-100 px-8 py-4 rounded-sm text-2xl">
						Claim Rewards
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default WalletComponent;
