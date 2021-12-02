import Head from 'next/head';
import Footer from '../components/Footer';
import Gravetown from '../components/Gravetown';
import Main from '../components/Main';
import Qna from '../components/Qna';
import Rarity from '../components/Rarity';
import Roadmap from '../components/Roadmap';
import Tokenomics from '../components/Tokenomics';

export default function Home({
	connectToWeb3,
	account,
	connected,
	nftContract,
}) {
	return (
		<div className="overflow-x-hidden bg-[#edf3ec] ">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Main
					connectToWeb3={connectToWeb3}
					account={account}
					connected={connected}
					nftContract={nftContract}
				/>
				<Rarity />
				{/* <Gravetown /> */}
				{/* <Tokenomics /> */}
				<Roadmap />
				<Qna />
			</main>
			<Footer />
		</div>
	);
}
