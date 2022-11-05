import React from 'react';
import Header from './Header';
import Newsletter from './Newsletter';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
	<>
		<Navbar />
		<Newsletter />
		<Header />
		{children}
		<Footer />
	</>
);

export default Layout;
