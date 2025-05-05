import React from 'react';
import { Link } from '@inertiajs/react';

export default function MainLayout({ children, title }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <img 
                                        src="/images/logo-horizontal.png" 
                                        alt="PT. Indo Web Solution" 
                                        className="h-10"
                                    />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link 
                                    href="/" 
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/services" 
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    Services
                                </Link>
                                <Link 
                                    href="/about" 
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    About Us
                                </Link>
                                <Link 
                                    href="/portfolio" 
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    Portfolio
                                </Link>
                                <Link 
                                    href="/blog" 
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    Blog
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                                Get a Quote
                            </button>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                </div>
            </header>

            <main>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        {children}
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <img 
                                src="/images/logo-square.png" 
                                alt="PT. Indo Web Solution" 
                                className="h-16 mb-4"
                            />
                            <p className="text-gray-300">Realize Your Digital Vision with Our Solutions</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                            <ul className="space-y-2">
                                <li><Link href="/services/web-development" className="text-gray-300 hover:text-white">Web Development</Link></li>
                                <li><Link href="/services/seo" className="text-gray-300 hover:text-white">SEO Services</Link></li>
                                <li><Link href="/services/web-design" className="text-gray-300 hover:text-white">Web Design</Link></li>
                                <li><Link href="/services/digital-marketing" className="text-gray-300 hover:text-white">Digital Marketing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-gray-300 mb-2">Email: info@indowebsolution.com</p>
                            <p className="text-gray-300 mb-2">Phone: +62 123 456 7890</p>
                            <p className="text-gray-300">Address: Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-300">&copy; {new Date().getFullYear()} PT. Indo Web Solution. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
