import React from 'react';
import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function About() {
    const team = [
        {
            name: 'John Doe',
            position: 'CEO & Founder',
            bio: 'John has over 15 years of experience in web development and digital marketing.',
            image: '/images/team/john-doe.jpg'
        },
        {
            name: 'Jane Smith',
            position: 'Lead Developer',
            bio: 'Jane is an expert in modern web technologies and leads our development team.',
            image: '/images/team/jane-smith.jpg'
        },
        {
            name: 'Michael Johnson',
            position: 'SEO Specialist',
            bio: 'Michael has helped numerous businesses improve their search engine rankings.',
            image: '/images/team/michael-johnson.jpg'
        },
        {
            name: 'Sarah Williams',
            position: 'UI/UX Designer',
            bio: 'Sarah creates beautiful and user-friendly interfaces for our clients.',
            image: '/images/team/sarah-williams.jpg'
        }
    ];

    return (
        <MainLayout title="About Us">
            <Head>
                <title>About Us - PT. Indo Web Solution</title>
                <meta name="description" content="Learn about PT. Indo Web Solution, our mission, vision, and the team behind our success." />
            </Head>

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                {/* Company Overview */}
                <div className="px-4 py-8 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                                <p className="text-gray-600 mb-4">
                                    PT. Indo Web Solution was founded in 2015 with a mission to help businesses succeed in the digital world. What started as a small team of passionate web developers has grown into a full-service digital agency serving clients across Indonesia and beyond.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Our journey has been driven by a commitment to excellence, innovation, and client satisfaction. We believe in building long-term relationships with our clients by delivering exceptional results and providing ongoing support.
                                </p>
                                <p className="text-gray-600">
                                    Today, we are proud to be recognized as a leading provider of web development and SEO services, helping businesses of all sizes realize their digital vision.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img src="/images/about-company.jpg" alt="PT. Indo Web Solution Office" className="rounded-lg shadow-lg max-w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600">
                                    To empower businesses with innovative digital solutions that drive growth, enhance online presence, and deliver measurable results. We are committed to providing exceptional service, fostering long-term partnerships, and staying at the forefront of technological advancements.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600">
                                    To be the leading digital solutions provider in Indonesia, recognized for our expertise, innovation, and commitment to client success. We aspire to create a digital ecosystem where businesses can thrive, connect with their audience, and achieve their full potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="px-4 py-12 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
                            <p className="mt-4 text-lg text-gray-500">The principles that guide everything we do</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                                <p className="text-gray-600">
                                    We strive for excellence in everything we do, from the quality of our code to the level of service we provide.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                                <p className="text-gray-600">
                                    We embrace new technologies and approaches to deliver innovative solutions that keep our clients ahead of the curve.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
                                <p className="text-gray-600">
                                    We believe in working closely with our clients and team members to achieve the best possible outcomes.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                                <p className="text-gray-600">
                                    We conduct our business with honesty, transparency, and a strong ethical foundation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
                            <p className="mt-4 text-lg text-gray-500">The talented people behind our success</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="h-64 bg-gray-200">
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/300x400?text=Team+Member';
                                            }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-red-600 font-medium mb-3">{member.position}</p>
                                        <p className="text-gray-600">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-red-600 text-white">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold mb-4">
                                Want to Join Our Team?
                            </h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto">
                                We're always looking for talented individuals to join our growing team. Check out our current openings or send us your resume.
                            </p>
                            <Link href="/careers" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100">
                                View Careers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
