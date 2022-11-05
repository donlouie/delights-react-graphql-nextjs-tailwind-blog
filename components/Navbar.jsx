import React from 'react';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	return (
		<div>
			{/*  */}
			<Disclosure as="nav" className="bg-white shadow">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
							<div className="relative flex justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
										<span className="sr-only">
											Open main menu
										</span>
										{open ? (
											<XMarkIcon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										) : (
											<Bars3Icon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										)}
									</Disclosure.Button>
								</div>
								<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex-shrink-0 flex items-center">
										{/* <img
											className="block lg:hidden h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
											alt="Workflow"
										/>
										<img
											className="hidden lg:block h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
											alt="Workflow"
										/> */}
										<h1 className="text-2xl font-bold text-gray-800">
											Delights
										</h1>
									</div>
									<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
										{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
										<a
											href="/"
											className="border-yellow-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
										>
											Home
										</a>
										<a
											href="#"
											className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
										>
											About Us
										</a>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="pt-2 pb-4 space-y-1">
								{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
								<Disclosure.Button
									as="a"
									href="/"
									className="bg-indigo-50 border-yellow-500 text-yellow-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
								>
									Home
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
								>
									About Us
								</Disclosure.Button>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			{/*  */}
			{/*  */}
			<div className="relative bg-yellow-100">
				<div className="absolute inset-0">
					<img
						className="w-full h-full object-cover"
						src="/nav.jpg"
						alt=""
					/>
					<div
						className="absolute inset-0 bg-gray-600 mix-blend-multiply"
						aria-hidden="true"
					/>
				</div>
				<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Asian Inspirations
					</h1>
					<p className="mt-6 text-xl text-yellow-50 max-w-3xl">
						A family-friendly recipe blog with easy, healthy and
						delicious Asian, American, Thai, Japanese, Malaysian and
						Chinese recipes perfect for the entire family!
					</p>
				</div>
			</div>
			{/*  */}
		</div>
	);
};

export default Navbar;
