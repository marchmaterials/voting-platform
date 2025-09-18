"use client"

import Script from "next/script";

export default function PinterestTag() {
    return (
        <>
            {/* <!-- Pinterest Tag --> */}
            <Script id="pinterest-snippet" strategy="afterInteractive">{`!function(e){if(!window.pintrk){window.pintrk = function () { window.pintrk.queue.push(Array.prototype.slice.call(arguments)) };var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0]; r.parentNode.insertBefore(t,r)}}("[https://s.pinimg.com/ct/core.js](https://s.pinimg.com/ct/core.js)"); pintrk('load', '2613094170806', {em: '<user_email_address>'}); pintrk('page');`}</Script>
            <noscript>
                <img height="1" width="1" style={{ "display": "none" }} alt="" src="[https://ct.pinterest.com/v3/?event=init&tid=2613094170806&pd[em]=](https://ct.pinterest.com/v3/?event=init&tid=2613094170806&pd%5Bem%5D=)<hashed_email_address>&noscript=1" />
            </noscript>
            {/* <!-- end Pinterest Tag --> */}
        </>
    );
};