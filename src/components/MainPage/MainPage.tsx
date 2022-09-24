/* eslint-disable jsx-a11y/anchor-is-valid */
import AppWrapper from '../AppWrapper'
import childImg from '../../assets/child.jpg'
import childImg1 from '../../assets/child1.jpg'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <AppWrapper>
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Let's build before it's too late
                                {/* <br className="hidden lg:inline-block" /> */}
                            </h1>
                            <p className="mb-8 leading-relaxed">We unknown coders provides free education for needy children guide them to each point of their future.</p>
                            <div className="flex justify-center">
                                <Link to={'/contact'}>
                                    <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Contact Me</button>
                                </Link>
                                <a href='tel:9814639815'>
                                    <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300">Call me</button>
                                </a>
                            </div>
                        </div>
                        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                            <img className="object-cover object-center rounded" alt="hero" src={childImg} />
                        </div>
                    </div>
                </section>
                <section className="text-gray-700 border-t border-gray-200 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col w-full mb-20 text-center">
                            <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">ROOF PARTY POLAROID</h2>
                            <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">Master Cleanse Reliac Heirloom</h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3">
                                <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg font-medium text-gray-900 title-font">Outdoor study</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-base leading-relaxed">Studying in open environment give you power to make your mind more stronger like our guru's are used to do.</p>
                                        <Link to={'/contact'}>
                                            <a className="inline-flex items-center mt-3 text-indigo-500">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg font-medium text-gray-900 title-font">Physically Strong</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-base leading-relaxed">If your body will be healthy then only your mind will be healthiest.</p>
                                        <Link to={'/contact'}>
                                            <a className="inline-flex items-center mt-3 text-indigo-500">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <circle cx={6} cy={6} r={3} />
                                                <circle cx={6} cy={18} r={3} />
                                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg font-medium text-gray-900 title-font">Gaming</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-base leading-relaxed">Learn from playing games like puzzle and many games which boosts the thinking power.</p>
                                        <Link to={'/contact'}>
                                            <a className="inline-flex items-center mt-3 text-indigo-500">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-700 border-t border-gray-200 body-font">
                    <div className="container flex flex-wrap px-5 py-24 mx-auto">
                        <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0">
                            <img alt="feature" className="object-cover object-center w-full h-full" src={childImg1} />
                        </div>
                        <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                            <div className="flex flex-col items-center mb-10 lg:items-start">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Book session</h2>
                                    <p className="text-base leading-relaxed">Book session for your child and let's build the strong mind set of your child.</p>
                                    <Link to={'/contact'}>
                                        <a className="inline-flex items-center mt-3 text-indigo-500">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mb-10 lg:items-start">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx={6} cy={6} r={3} />
                                        <circle cx={6} cy={18} r={3} />
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Take Demo</h2>
                                    <p className="text-base leading-relaxed">In demo class you and your children will get to know the power of best learning or learning with fun.</p>
                                    <Link to={'/contact'}>
                                        <a className="inline-flex items-center mt-3 text-indigo-500">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mb-10 lg:items-start">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">Pay now</h2>
                                    <p className="text-base leading-relaxed">Pay and see the changes in your children form the other child.</p>
                                    <Link to={'/contact'}>
                                        <a className="inline-flex items-center mt-3 text-indigo-500">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-700 border-t border-gray-200 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
                            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">What we do for the better mindset</h1>
                            <p className="w-full text-base leading-relaxed lg:w-1/2">First thing we do the re-search on the children what children love to do, they mostly love to play the games so we decided to give the education in that way.</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 xl:w-1/3 md:w-1/2">
                                <div className="p-6 border border-gray-300 rounded-lg">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                        </svg>
                                    </div>
                                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Game playing</h2>
                                    <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/3 md:w-1/2">
                                <div className="p-6 border border-gray-300 rounded-lg">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                            <circle cx={6} cy={6} r={3} />
                                            <circle cx={6} cy={18} r={3} />
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                        </svg>
                                    </div>
                                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Musical class</h2>
                                    <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/3 md:w-1/2">
                                <div className="p-6 border border-gray-300 rounded-lg">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                    </div>
                                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Yoga class</h2>
                                    <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/3 md:w-1/2">
                                <div className="p-6 border border-gray-300 rounded-lg">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                                        </svg>
                                    </div>
                                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Dance class</h2>
                                    <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/3 md:w-1/2">
                                <div className="p-6 border border-gray-300 rounded-lg">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                        </svg>
                                    </div>
                                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Home Work</h2>
                                    <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/3 md:w-1/2">
                                <div className="p-6 border border-gray-300 rounded-lg">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Analysis</h2>
                                    <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                        </div>
                        <Link to={'/contact'}>
                            <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Contact Us</button>
                        </Link>
                    </div>
                </section>
                {/* <section className="text-gray-700 border-t border-gray-200 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col w-full mb-20 text-center">
                            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Our Team</h1>
                            <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        </div>
                        <div className="flex flex-wrap -m-2">
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/80x80/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Holden Caulfield</h2>
                                        <p className="text-gray-500">UI Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/84x84/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Henry Letham</h2>
                                        <p className="text-gray-500">CTO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/88x88/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Oskar Blinde</h2>
                                        <p className="text-gray-500">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/90x90/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">John Doe</h2>
                                        <p className="text-gray-500">DevOps</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/94x94/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Martin Eden</h2>
                                        <p className="text-gray-500">Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/98x98/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Boris Kitua</h2>
                                        <p className="text-gray-500">UX Researcher</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/100x90/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Atticus Finch</h2>
                                        <p className="text-gray-500">QA Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/104x94/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Alper Kamu</h2>
                                        <p className="text-gray-500">System</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-2 lg:w-1/3 md:w-1/2">
                                <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                                    <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/108x98/edf2f7/a5afbd" />
                                    <div className="flex-grow">
                                        <h2 className="font-medium text-gray-900 title-font">Rodrigo Monchi</h2>
                                        <p className="text-gray-500">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="text-gray-700 border-t border-gray-200 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 mb-8 text-gray-400" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                            </svg>
                            <p className="text-lg leading-relaxed">If you feed the seed of poison and expect Custard apple it is not possible it's better to secure your children before it's too late.</p>
                            <span className="inline-block w-10 h-1 mt-8 mb-6 bg-indigo-500 rounded" />
                            <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                                <a href='https://maheshvarpa.web.app' target="_blank" rel="noreferrer">Maheshvar Pandey</a>
                            </h2>
                            <p className="text-gray-500">Senior Software Developer</p>
                        </div>
                    </div>
                </section>
                {/* <section className="relative text-gray-700 body-font">
                    <div className="absolute inset-0 bg-gray-300">
                        <iframe width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
                    </div>
                    <div className="container flex px-5 py-24 mx-auto">
                        <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
                            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
                            <p className="mb-5 leading-relaxed text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                            <input className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500" placeholder="Email" type="email" />
                            <textarea className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500" placeholder="Message" defaultValue={""} />
                            <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
                            <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                        </div>
                    </div>
                </section> */}
            </div>
        </AppWrapper>
    )
}

export default MainPage