import { PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const Qna = () => {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);

	const openQnA1 = () => (!open1 ? setOpen1(true) : setOpen1(false));
	const openQnA2 = () => (!open2 ? setOpen2(true) : setOpen2(false));
	const openQnA3 = () => (!open3 ? setOpen3(true) : setOpen3(false));

	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8">
				<h3 className="text-3xl font-bold">Q&A.</h3>
				<ul className="space-y-6 max-w-3xl text-gray-600">
					<li className="space-y-2">
						<div className="flex justify-between items-center">
							<h6 className="text-2xl font-semibold text-gray-900">
								Will there be a Pre Sale?
							</h6>
							<PlusIcon
								onClick={openQnA1}
								className="w-10 cursor-pointer"
							/>
						</div>
						{open1 && (
							<div className="space-y-1 text-lg font-normal">
								<p>
									Yes! We are rewarding early backers of the
									project a&nbsp;
									<span className="font-semibold">
										50% discount{' '}
									</span>
									to public sale price. The pre sale will be 1
									AVAX.
								</p>
								{/* <p>
								to public sale price. The pre sale will be 1
								AVAX.
							</p>
							<p>No limit per address.</p> */}
							</div>
						)}
					</li>
					<li className="space-y-2">
						<div className="flex justify-between items-center">
							<h6 className="text-2xl font-semibold text-gray-900">
								What is the cost to mint at Public Sale?
							</h6>
							<PlusIcon
								onClick={openQnA2}
								className="w-10 cursor-pointer"
							/>
						</div>
						{open2 && (
							<p className="text-lg font-normal">
								1 Phat Frog = 2 AVAX
								{/* <span className="font-semibold">6666</span>
							&nbsp;Tiny Bones can be minted. */}
							</p>
						)}
					</li>
					<li className="space-y-2">
						<div className="flex justify-between items-center">
							<h6 className="text-2xl font-semibold text-gray-900">
								Why do the frogs have party hats?
							</h6>
							<PlusIcon
								onClick={openQnA3}
								className="w-10 cursor-pointer"
							/>
						</div>
						{open3 && (
							<div className="space-y-1 text-lg font-normal">
								<p>
									The frogs are inspired by Daniele Sesta,
									Wonderland and the Frog Nation movement. We
									believe in what DeFi and the Frog Nation
									stand for.
									<span className="font-semibold">
										#PeopleMaxi
									</span>
								</p>
								<p>
									Party hats (or Phat) are from many gamer's
									beloved game, Runescape - where party hats
									were the most expensive item in OSRS. They
									had no use or utility but they looked damn
									cool!
									{/* <span className="font-semibold">XYZ</span> */}
								</p>
							</div>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Qna;
