import React from 'react';
import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Home() {
    return (
        <MainLayout title="Welcome to PT. Indo Web Solution">
            <Head>
                <title>PT. Indo Web Solution - Realize Your Digital Vision with Our Solutions</title>
                <meta name="description" content="PT. Indo Web Solution provides professional web development and SEO services to help businesses grow online." />
            </Head>

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                {/* Hero Section */}
                <div className="relative bg-red-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                                    Realize Your Digital Vision with Our Solutions
                                </h2>
                                <p className="text-xl mb-8">
                                    We build stunning websites and implement effective SEO strategies to help your business thrive in the digital world.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100">
                                        Get Started
                                    </Link>
                                    <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-red-700">
                                        Our Services
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img src="/images/hero-image.svg" alt="Web Development" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Our Services
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                                Comprehensive digital solutions for your business needs
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                                <p className="text-gray-600 mb-4">
                                    Custom web applications and websites built with the latest technologies to meet your specific business requirements.
                                </p>
                                <Link href="/services/web-development" className="text-red-600 hover:text-red-700 font-medium">
                                    Learn more →
                                </Link>
                            </div>

                            {/* Service 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Services</h3>
                                <p className="text-gray-600 mb-4">
                                    Comprehensive search engine optimization strategies to improve your website's visibility and drive organic traffic.
                                </p>
                                <Link href="/services/seo" className="text-red-600 hover:text-red-700 font-medium">
                                    Learn more →
                                </Link>
                            </div>

                            {/* Service 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Design</h3>
                                <p className="text-gray-600 mb-4">
                                    Beautiful, responsive designs that provide an exceptional user experience across all devices and platforms.
                                </p>
                                <Link href="/services/web-design" className="text-red-600 hover:text-red-700 font-medium">
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Why Choose Us
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                                What sets PT. Indo Web Solution apart from the competition
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Reason 1 */}
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                                <p className="text-gray-600">
                                    We deliver projects on time without compromising quality.
                                </p>
                            </div>

                            {/* Reason 2 */}
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                                <p className="text-gray-600">
                                    We build secure websites with reliable hosting solutions.
                                </p>
                            </div>

                            {/* Reason 3 */}
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                                <p className="text-gray-600">
                                    Our team consists of experienced developers and SEO specialists.
                                </p>
                            </div>

                            {/* Reason 4 */}
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                                <p className="text-gray-600">
                                    We provide round-the-clock support for all our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-red-600 text-white">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold mb-4">
                                Ready to Start Your Digital Journey?
                            </h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto">
                                Contact us today to discuss your project and get a free quote. Let's turn your digital vision into reality.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100">
                                Contact Us Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
