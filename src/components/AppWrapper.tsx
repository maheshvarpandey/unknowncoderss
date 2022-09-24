/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const AppWrapper = ({ children }: any) => {
    return (
        <div>
            <div>
                <nav className="sticky top-0 w-full px-6 my-4 bg-white border-gray-200 shadow-md navbar">
                    <div className="px-0 container-lg">
                        <div className="flex items-center w-full">
                            <a className="ml-0 mr-auto text-xl nav-brand logoText" href="#">Unknown Coderss</a>
                            <button navbar-trigger className="mb-0 ml-auto mr-0 navbar-trigger lg:hidden xl:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-trigger-icon">
                                    <span className="mt-1 navbar-trigger-bar"><span className="hidden origin-[10%_10%] rotate-45" /></span>
                                    <span className="mt-2 bar2 navbar-trigger-bar" />
                                    <span className="mt-2 bar3 navbar-trigger-bar"><span className="mt-mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45" /></span>
                                </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" navbar-menu>
                            <ul className="navbar-nav">
                                <li>
                                    <a className="nav-link" aria-current="page" href="#">
                                        <i className="mr-2 text-base material-icons opacity-60">article</i>
                                        <span>Chat</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">
                                        <i className="mr-2 text-base material-icons opacity-60">apps</i>
                                        <span>About</span>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a className="nav-link" href="#">
                                        <i className="mr-2 text-base material-icons opacity-60">view_carousel</i>
                                        <span>Contact Us</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">
                                        {/* <i className="mr-2 text-base fa-brands fa-instagram opacity-60" /> */}
                                        <i className="mr-2 text-base fa-brands fa-instagram opacity-60" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <header className="sticky top-0 text-gray-700 bg-white border-b border-gray-200 shadow-md body-font">
                    <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0" href="" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="ml-3 text-xl">Unknown Coderss</span>
                        </a>
                        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                            <a className="mr-5 hover:text-gray-900">First Link</a>
                            <a className="mr-5 hover:text-gray-900">Second Link</a>
                            <a className="mr-5 hover:text-gray-900">Third Link</a>
                            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                        </nav>
                        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">Button
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </header> */}
                <div>
                    {children}
                </div>

                <footer className="text-gray-700 body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="-mx-4 -mb-10 text-center ">
                            <div className="pt-6 mt-6 border-t sm:flex sm:flex-wrap sm:-mx-4 sm:mt-12 sm:pt-12">
                                <div className="px-4 text-xl sm:w-full md:w-1/6">
                                    <strong>Unknown Coderss</strong>
                                </div>
                                <div className="px-4 mt-4 sm:w-1/2 md:w-1/4 md:mt-0">
                                    <h6 className="mb-2 font-bold">Address</h6>
                                    <address className="mb-4 text-sm not-italic">
                                        Babhni, Shivtari, Nautanwa Maharajganj.<br />
                                        Uttar-Pradesh, INDIA 273305
                                    </address>
                                </div>
                                <div className="px-4 mt-4 sm:w-1/2 md:w-1/4 md:mt-0">
                                    <h6 className="mb-2 font-bold">Free Resources</h6>
                                    <p className="mb-4 text-sm">All our content is free <strong>FREE</strong>.<br />
                                        <em>You can donate if you think it's worthy</em></p>
                                </div>
                                <div className="px-4 mt-6 md:w-1/4 md:ml-auto sm:mt-4 md:mt-0">
                                    <button className="px-4 py-2 text-white bg-purple-800 rounded hover:bg-purple-900">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="container flex flex-wrap items-center px-5 py-8 mx-auto">
                            <div className="flex flex-wrap justify-center md:flex-no-wrap md:justify-start">
                                <input className="w-40 px-4 py-2 mr-2 text-base bg-gray-100 border border-gray-400 rounded sm:w-64 sm:mr-4 focus:outline-none focus:border-indigo-500" placeholder="Enter your email" type="text" />
                                <button className="inline-flex px-6 py-2 text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Submit</button>
                                {/* <p className="mt-2 text-sm text-center text-gray-500 md:ml-6 md:mt-0 sm:text-left">Bitters chicharrones fanny pack
                                    <br className="hidden lg:block" />waistcoat green juice
                                </p> */}
                            </div>
                            <span className="inline-flex justify-center w-full mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto">
                                {/* <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a> */}
                                <a href='https://instagram.com/unknowncoderss' target="_blank" className="ml-3 text-gray-500" rel="noreferrer">
                                    <div className='flex'>
                                        <div>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                            </svg>
                                        </div>
                                        <div className='pl-2 -mt-1'>/UnknownCoderss
                                        </div>

                                    </div>
                                </a>
                                {/* <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                        <circle cx={4} cy={4} r={2} stroke="none" />
                                    </svg>
                                </a> */}
                            </span>
                        </div>
                    </div>
                    <div className="bg-gray-200">
                        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
                            <p className="text-sm text-center text-gray-500 sm:text-left">© 2020 Unknown Coderss —
                                <a href="https://maheshvarpa.web.app" className="ml-1 text-gray-600" target="_blank" rel="noopener noreferrer">@maheshvarpandey</a>
                            </p>
                            {/* <span className="w-full mt-2 text-sm text-center text-gray-500 sm:ml-auto sm:mt-0 sm:w-auto sm:text-left">Enamel pin tousled raclette tacos irony</span> */}
                        </div>
                    </div>
                </footer>
                {/* <a href="https://github.com/mertJF/tailblocks" className="fixed bottom-0 right-0 flex items-center justify-center w-12 h-12 mb-8 mr-8 text-gray-800 bg-gray-100 border border-gray-300 rounded-full shadow-sm" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg></a> */}
            </div>

        </div>
    )
}

export default AppWrapper