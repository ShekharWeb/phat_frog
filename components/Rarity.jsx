const Rarity = () => {
	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8 border-b-4 rounded-sm border-gray-700">
				<h3 className="text-3xl font-bold">Rarity?</h3>
				<div className="space-y-4 max-w-3xl">
					<p className="text-xl text-gray-500">
						Our generative algorithm will render&nbsp;
						<span className="font-semibold">6666</span>
						&nbsp;Tiny Bones. Here is the attributes drop rate.
					</p>
					<div className="text-2xl">
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
					</div>
					<p className="text-xl text-gray-500">
						Each Tiny Bones has his own attributes, play and test
						any patterns with our lab!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Rarity;
