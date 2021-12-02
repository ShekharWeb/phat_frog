const Roadmap = () => {
	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8 border-b-4 rounded-sm border-gray-700">
				<h3 className="text-3xl font-bold">Roadmap.</h3>
				<div className="flex space-x-6 max-w-3xl">
					<span className="w-1 bg-gray-700"></span>
					<ul className="space-y-6 text-gray-500">
						<li className="space-y-2 relative">
							<h4 className="text-2xl font-semibold text-gray-800">
								25% Minted
							</h4>
							<h5 className="text-xl font-medium text-blue-700">
								Sell all our frogs! 🐸
							</h5>
							<ul className="text-lg space-y-1 font-normal">
								<li>Hire a front-end ThreeJS developer.</li>
								<li>Hire a back-end</li>
								<li>Socket.io developer.</li>
								<li>Hire a level designer.</li>
								<li>Hire a pixel art artist.</li>
								<li>Hire a sprite animator.</li>
							</ul>
							<span className="w-3 h-3 bg-yellow-800 rounded-full absolute -top-4 -left-8"></span>
						</li>
						<li className="space-y-2 relative">
							<h4 className="text-2xl font-semibold text-gray-800">
								50% Minted
							</h4>
							<h5 className="text-xl font-medium text-green-700">
								Launch our liquidity pool owned Meme token
							</h5>
							<ul className="text-lg space-y-1 font-normal">
								<li>Hire a social media manager.</li>
								<li>Hire a marketing consultant.</li>
								<li>Gather advisors.</li>
								<li>Start a marketing campaign.</li>
							</ul>
							<span className="w-3 h-3 bg-yellow-800 rounded-full absolute -top-4 -left-8"></span>
						</li>
						<li className="space-y-2 relative">
							<h4 className="text-2xl font-semibold text-gray-800">
								75% Minted
							</h4>
							<h5 className="text-xl font-medium text-yellow-700">
								Decide as a community what to do with our
								treasury!
							</h5>
							<ul className="text-lg space-y-1 font-normal">
								<li>Hire a second front-end developer.</li>
								<li>Hire a second back-end developer.</li>
								<li>Hire a second pixel art artist.</li>
							</ul>
							<span className="w-3 h-3 bg-yellow-800 rounded-full absolute -top-4 -left-8"></span>
						</li>
						<li className="space-y-2 relative">
							<h4 className="text-2xl font-semibold text-gray-800">
								100% Minted
							</h4>
							<h5 className="text-xl font-medium text-indigo-700">
								The Crazies
							</h5>
							<ul className="text-lg space-y-1 font-normal">
								<li>We did it, you crazy f*king degens!</li>
								<li>Release gravetown project.</li>
							</ul>
							<span className="w-3 h-3 bg-yellow-800 rounded-full absolute -top-4 -left-8"></span>
						</li>
					</ul>
				</div>
				<div className="space-y-4">
					<p className="text-lg max-w-3xl text-gray-500">
						Do you want to be part of the Phat Frogs family?
					</p>
					<p className="text-lg max-w-3xl text-gray-500">
						As a community-led project, we want everyone to be
						involved and are looking for 🐸 in all areas
						(Developers, Social Media, Community, Meme Creators)
					</p>
					<p className="text-lg max-w-3xl text-gray-500">
						If you are interested and want to get involved, hop into
						our Discord and join our community today.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
