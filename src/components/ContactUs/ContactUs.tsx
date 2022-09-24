/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'
import AppWrapper from '../AppWrapper'

const ContactUs = () => {

    const [formWidth, setWidth] = useState(800)

    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    useEffect(() => {
        if (detectMob()) {
            setWidth(350)
        } else {
            setWidth(800)
        }
        console.log("::::", detectMob(), window.navigator.userAgent);
        // let windowType: any = window;

    }, [])
    return (
        <AppWrapper>
            <div className='flex justify-center'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6wmJqHdZNUj4D4enI-ajY4Hj86adqQZvkj_FOG4GN8DvA9Q/viewform?embedded=true" width={formWidth} height="1082" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>
        </AppWrapper>
    )
}

export default ContactUs