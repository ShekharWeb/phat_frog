import Link from 'next/link';

const Footer = () => {
	return (
		<div className="w-full">
			<div className="bg-[#fbf3db] flex flex-row justify-between items-center px-6 max-w-7xl mx-auto sm:px-16">
				<div className="text-2xl font-semibold text-gray-800 cursor-pointer">
					<h1 className="md:hidden">
						P&nbsp;<span className="bold text-[#448361]">F</span>
					</h1>
					<h1 className="hidden md:inline-block">
						Phat&nbsp;<span className="text-[#448361]">Frogs</span>
					</h1>
				</div>
				<div className="flex py-2">
					<div className="flex space-x-6 ml-8">
						<Link href="http://www.twitter.com/phatfrogsnft">
							<a target="_blank">
								<img src="/tw.png" alt="" className="w-10" />
							</a>
						</Link>
						<Link href="http://www.discord.gg/76as72f">
							<a target="_blank">
								<img src="/disc.png" alt="" className="w-10" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
