/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const AppWrapper = ({ children }: any) => {
    return (
        <div>
            <div>
                <nav className="navbar px-6 my-4 w-full bg-white sticky top-0 border-gray-200 shadow-md">
                    <div className="container-lg px-0">
                        <div className="flex w-full items-center">
                            <a className="nav-brand mr-auto ml-0 text-xl logoText" href="#">Unknown Coderss</a>
                            <button navbar-trigger className="navbar-trigger ml-auto mr-0 mb-0 lg:hidden xl:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-trigger-icon">
                                    <span className="navbar-trigger-bar mt-1"><span className="hidden origin-[10%_10%] rotate-45" /></span>
                                    <span className="bar2 navbar-trigger-bar mt-2" />
                                    <span className="bar3 navbar-trigger-bar mt-2"><span className="mt-mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45" /></span>
                                </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" navbar-menu>
                            <ul className="navbar-nav">
                                <li>
                                    <a className="nav-link" aria-current="page" href="#">
                                        <i className="material-icons mr-2 text-base opacity-60">article</i>
                                        <span>Chat</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">
                                        <i className="material-icons mr-2 text-base opacity-60">apps</i>
                                        <span>About</span>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a className="nav-link" href="#">
                                        <i className="material-icons mr-2 text-base opacity-60">view_carousel</i>
                                        <span>Contact Us</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">
                                        {/* <i className="fa-brands fa-instagram mr-2 text-base opacity-60" /> */}
                                        <i className="fa-brands fa-instagram mr-2 text-base opacity-60" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <header className="text-gray-700 sticky top-0 body-font border-b border-gray-200 bg-white shadow-md">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="ml-3 text-xl">Unknown Coderss</span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900">First Link</a>
                            <a className="mr-5 hover:text-gray-900">Second Link</a>
                            <a className="mr-5 hover:text-gray-900">Third Link</a>
                            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                        </nav>
                        <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
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
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            {/* <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div> */}
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                            <div className="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
                                <input className="sm:w-64 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4" placeholder="Enter your email" type="text" />
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
                                {/* <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                                    <br className="lg:block hidden" />waistcoat green juice
                                </p> */}
                            </div>
                            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
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
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                    </svg>
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
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Unknown Coderss —
                                <a href="https://maheshvarpa.web.app" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@maheshvarpandey</a>
                            </p>
                            {/* <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span> */}
                        </div>
                    </div>
                </footer>
                {/* <a href="https://github.com/mertJF/tailblocks" className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg></a> */}
            </div>

        </div>
    )
}

export default AppWrapper