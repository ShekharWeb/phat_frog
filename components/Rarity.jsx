import Image from 'next/image';

const Rarity = () => {
	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8 border-b-4 rounded-sm border-gray-700">
				<div className="flex md:flex-row-reverse flex-row md:items-center justify-end">
					<div className="md:ml-8">
						<h3 className="text-3xl font-bold">
							Mint your own King of the Frogs-inspired NFT!
						</h3>
						<div className="space-y-4 max-w-3xl">
							{/* <p className="text-xl text-gray-500">
						Our generative algorithm will render&nbsp;
						<span className="font-semibold">6666</span>
						&nbsp;Tiny Bones. Here is the attributes drop rate.
					</p> */}
							<p className="text-xl text-gray-500">
								Phat Frogs have 40 different trait combinations
								ranging from body colours, facial expressions,
								glasses, accessories and party hats!
							</p>
							{/* <div className="text-2xl">
								<span className="flex justify-between w-full">
									<span className="text-green-500">Rare</span>
									<span>33%</span>
								</span>
								<span className="flex justify-between w-full">
									<span className="text-blue-500">Epic</span>
									<span>12%</span>
								</span>
								<span className="flex justify-between w-full">
									<span className="text-red-500">Ionic</span>
									<span>6%</span>
								</span>
							</div> */}
							<p className="text-xl text-gray-500">
								There are no rarities though every 🐸 is unique.
							</p>
						</div>
					</div>
					<div className="hidden md:block">
						<Image src="/8307.png" height={200} width={200} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rarity;
