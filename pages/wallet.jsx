import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import WalletComponent from '../components/Wallet.component';

const Wallet = ({ connectToWeb3, account, connected, nftContract }) => {

	const [nftArray, setNftArray] = useState([]);
	const [loadingNFTs, setLoadingNFTs] = useState(false);

	useEffect(() => {
		if (connected) {
			loadUserNFTS()
		}
	}, []);

	useEffect(() => {
		if (connected) {
			loadUserNFTS()
		}
	}, [nftContract]);

	const loadUserNFTS = async () => {
		setLoadingNFTs(true);
		const nftId = await nftContract.methods.walletOfOwner(account).call();
		let imageArray = [];
		for (let i = 0; i < nftId.length; i++) {
			let id = nftId[i];
			let nftURI = await nftContract.methods.tokenURI(id).call();

			await fetch(`https://gateway.pinata.cloud/ipfs/${nftURI.substr(7)}`)
				.then((res) => res.json())
				.then((json) => {
					imageArray.push(json.image)
				});
		}
		setNftArray(imageArray);
		setLoadingNFTs(false);

	}


	return (
		<div>
			<main style={{ minHeight: 'calc(100vh - 144px)' }}>
				<WalletComponent connected={connected} loadingNFTs={loadingNFTs} nftArray={nftArray} />
			</main>
			<Footer />
		</div>
	);
};

export default Wallet;
