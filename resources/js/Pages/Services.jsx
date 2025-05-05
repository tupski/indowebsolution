import React from 'react';
import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Services() {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'We build custom websites and web applications using the latest technologies to meet your specific business needs. Our development process ensures high-quality, scalable, and maintainable solutions.',
            features: [
                'Custom website development',
                'E-commerce solutions',
                'Content management systems',
                'Web application development',
                'API development and integration',
                'Database design and optimization'
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: '/services/web-development'
        },
        {
            id: 2,
            title: 'SEO Services',
            description: 'Our comprehensive SEO strategies help improve your website\'s visibility in search engines, driving organic traffic and increasing conversions. We use data-driven approaches to achieve sustainable results.',
            features: [
                'Keyword research and analysis',
                'On-page SEO optimization',
                'Off-page SEO strategies',
                'Technical SEO audits',
                'Local SEO optimization',
                'SEO performance reporting'
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            link: '/services/seo'
        },
        {
            id: 3,
            title: 'Web Design',
            description: 'We create beautiful, responsive designs that provide an exceptional user experience across all devices. Our design process focuses on usability, aesthetics, and conversion optimization.',
            features: [
                'Responsive web design',
                'UI/UX design',
                'Brand identity design',
                'Wireframing and prototyping',
                'Landing page design',
                'Design system creation'
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
            link: '/services/web-design'
        },
        {
            id: 4,
            title: 'Digital Marketing',
            description: 'Our digital marketing services help you reach your target audience, build brand awareness, and drive conversions. We develop tailored strategies to achieve your business goals.',
            features: [
                'Social media marketing',
                'Content marketing',
                'Email marketing',
                'PPC advertising',
                'Conversion rate optimization',
                'Analytics and reporting'
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            link: '/services/digital-marketing'
        }
    ];

    return (
        <MainLayout title="Our Services">
            <Head>
                <title>Our Services - PT. Indo Web Solution</title>
                <meta name="description" content="Explore our comprehensive web development and SEO services designed to help your business succeed online." />
            </Head>

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                {/* Services Introduction */}
                <div className="px-4 py-8 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="mt-2 text-lg text-gray-600">
                            At PT. Indo Web Solution, we offer a comprehensive range of digital services to help your business thrive in the online world. Our team of experts is dedicated to delivering high-quality solutions tailored to your specific needs.
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="space-y-16">
                            {services.map((service, index) => (
                                <div key={service.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="w-full lg:w-1/3 flex justify-center">
                                        <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-2/3">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Link href={service.link} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Our Process
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                                How we work with you to deliver exceptional results
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Step 1 */}
                            <div className="relative">
                                <div className="absolute top-0 left-0 -ml-4 mt-2 hidden lg:block">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold">1</span>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
                                    <p className="text-gray-600">
                                        We start by understanding your business, goals, and requirements through in-depth consultations.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative">
                                <div className="absolute top-0 left-0 -ml-4 mt-2 hidden lg:block">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold">2</span>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
                                    <p className="text-gray-600">
                                        We develop a detailed project plan, including timelines, deliverables, and milestones.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative">
                                <div className="absolute top-0 left-0 -ml-4 mt-2 hidden lg:block">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold">3</span>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
                                    <p className="text-gray-600">
                                        Our team works diligently to implement the solution, with regular updates and feedback sessions.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative">
                                <div className="absolute top-0 left-0 -ml-4 mt-2 hidden lg:block">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold">4</span>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery & Support</h3>
                                    <p className="text-gray-600">
                                        We deliver the final product and provide ongoing support and maintenance as needed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-red-600 text-white">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto">
                                Contact us today to discuss your project requirements and get a free quote.
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
