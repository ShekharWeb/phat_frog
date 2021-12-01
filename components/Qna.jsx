const Qna = () => {
	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8">
				<h3 className="text-3xl font-bold">Q&A.</h3>
				<ul className="space-y-6 max-w-3xl text-gray-600">
					<li className="space-y-2">
						<h6 className="text-2xl font-semibold text-gray-900">
							How much does it cost to mint?
						</h6>
						<div className="space-y-1 text-lg font-normal">
							<p>
								Each Tiny Bones will cost&nbsp;
								<span className="font-semibold">2 $AVAX</span>.
							</p>
							<p>
								You can mint 20 Tiny Bones max per transaction.
							</p>
							<p>No limit per address.</p>
						</div>
					</li>
					<li className="space-y-2">
						<h6 className="text-2xl font-semibold text-gray-900">
							What is the supply cap?
						</h6>
						<p className="text-lg font-normal">
							For the genesis collection, only&npsp;
							<span className="font-semibold">6666</span>
							&nbsp;Tiny Bones can be minted.
						</p>
					</li>
					<li className="space-y-2">
						<h6 className="text-2xl font-semibold text-gray-900">
							Who's the team behind the project?
						</h6>
						<div className="space-y-1 text-lg font-normal">
							<p>Two cryptoholic friends</p>
							<p>
								<span className="font-semibold">ABC</span>
								&nbsp;&&nbsp;
								<span className="font-semibold">XYZ</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Qna;
