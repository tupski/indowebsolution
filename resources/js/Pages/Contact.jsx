import React from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <MainLayout title="Contact Us">
            <Head>
                <title>Contact Us - PT. Indo Web Solution</title>
                <meta name="description" content="Get in touch with PT. Indo Web Solution for your web development and SEO needs." />
            </Head>

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                {/* Contact Information */}
                <div className="px-4 py-8 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Contact Info Card 1 */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-600 mb-1">Sales: +62 123 456 7890</p>
                                <p className="text-gray-600 mb-1">Support: +62 123 456 7891</p>
                                <p className="text-gray-600">Office: +62 123 456 7892</p>
                            </div>

                            {/* Contact Info Card 2 */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-600 mb-1">Info: info@indowebsolution.com</p>
                                <p className="text-gray-600 mb-1">Sales: sales@indowebsolution.com</p>
                                <p className="text-gray-600">Support: support@indowebsolution.com</p>
                            </div>

                            {/* Contact Info Card 3 */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                                <p className="text-gray-600 mb-1">PT. Indo Web Solution</p>
                                <p className="text-gray-600 mb-1">Jl. Sudirman No. 123</p>
                                <p className="text-gray-600">Jakarta, Indonesia 12345</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form & Map */}
                <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                                            required
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                                            required
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                                        />
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={data.subject}
                                            onChange={e => setData('subject', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                                            required
                                        />
                                        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                                            required
                                        />
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                                        >
                                            {processing ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Map */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
                                <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                        <p className="text-gray-600">Map will be displayed here</p>
                                        {/* In a real implementation, you would include a Google Maps or other map service here */}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <p className="text-gray-600">Monday - Friday</p>
                                            <p className="text-gray-600">Saturday</p>
                                            <p className="text-gray-600">Sunday</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                                            <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                                            <p className="text-gray-600">Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="px-4 py-12 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                            <p className="mt-4 text-lg text-gray-500">Find answers to common questions about our services</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to build a website?</h3>
                                <p className="text-gray-600">
                                    The timeline for website development varies depending on the complexity of the project. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months or more.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does a website cost?</h3>
                                <p className="text-gray-600">
                                    Website costs vary based on your specific requirements. We provide customized quotes after understanding your needs. Contact us for a free consultation and quote.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide website maintenance services?</h3>
                                <p className="text-gray-600">
                                    Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, and technical support.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to see results from SEO?</h3>
                                <p className="text-gray-600">
                                    SEO is a long-term strategy. While some improvements may be visible within a few weeks, significant results typically take 3-6 months. We provide regular reports to track progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
