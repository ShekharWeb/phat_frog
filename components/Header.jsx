// import { Link } from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Header = (props) => {
	const { connectToWeb3, connected, account } = props;
	const router = useRouter();

	useEffect(() => {}, []);

	return (
		<div className="w-full z-50 top-0 left-0 fixed bg-[#fbf3db] shadow-lg backdrop-blur-md bg-opacity-40">
			<nav className="flex items-center px-6 max-w-7xl mx-auto sm:px-16 py-4 justify-between">
				{/* Left */}

				<div
					className="text-2xl font-semibold text-gray-800 cursor-pointer"
					onClick={() => router.push('/')}
				>
					<h1 className="md:hidden">
						P&nbsp;<span className="bold text-[#448361]">F</span>
					</h1>
					<h1 className="hidden md:inline-block">
						Phat&nbsp;<span className="text-[#448361]">Frogs</span>
					</h1>
				</div>
				{/* Right */}
				<div className="text-xl font-normal">
					<ul className="flex items-center space-x-6">
						<li
							className="cursor-pointer text-gray-800"
							onClick={() => router.push('/wallet')}
						>
							Wallet
						</li>
						<li
							onClick={connectToWeb3}
							className="font-normal border-2 border-[#448361] px-6 cursor-pointer text-gray-50 bg-[#448361] md:hover:bg-gray-50 md:hover:text-[#448361] transition-all duration-200 ease-out rounded-md py-2"
						>
							{account
								? `${account.substring(
										0,
										3
								  )}...${account.substring(
										account.length - 4,
										account.length
								  )} `
								: 'Connect'}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
