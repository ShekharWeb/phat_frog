const Gravetown = () => {
	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8 border-b-4 rounded-sm border-gray-700">
				<h3 className="text-3xl font-bold">Welcome to GraveTown.</h3>
				<p className="text-xl max-w-3xl text-gray-500">
					The city where all the Tiny Bones reside, where you'll build
					a virtual world once you've minted one of our NFT.
				</p>
				<p className="text-xl max-w-3xl text-gray-500">
					GraveTown is full of life, day and night: from&nbsp;
					<span className="font-semibold text-gray-700">
						techno clubs
					</span>
					&nbsp;to&nbsp;
					<span className="font-semibold text-gray-700">
						trendy bars
					</span>
					&nbsp;, and of course&nbsp;
					<span className="font-semibold text-gray-700">
						illegal gambling dens
					</span>
					, there's always something to satisfy your thirst for
					action.
				</p>
				<p className="text-xl max-w-3xl text-gray-500">
					Every item in the game &#40;vehicles, furnitures,
					supplies...&#41; will be available to&nbsp;<span>sale</span>
					&nbsp;and&nbsp;
					<span className="font-semibold text-gray-700">trade</span>,
					in cryptocurrency.
				</p>
				<div className="flex flex-col space-y-4 max-w-full">
					<button className="text-gray-50 bg-gray-700 py-4 text-lg rounded-md">
						Explore the city
					</button>
					<button className="text-gray-50 bg-gray-700 py-4 text-lg rounded-md">
						Customize your hideout
					</button>
					<button className="text-gray-50 bg-gray-700 py-4 text-lg rounded-md">
						Meet new friends
					</button>
				</div>
			</div>
		</div>
	);
};

export default Gravetown;
