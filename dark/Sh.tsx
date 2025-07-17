import React from "react";
 const Sh = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props }
 width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_158_1359)">
<g filter="url(#filter0_i_158_1359)">
<rect y="0.00195312" width="24" height="24" rx="8" fill="white"/>
<rect x="0.5" y="0.501953" width="23" height="23" rx="7.5" stroke="white"/>
<g clip-path="url(#clip1_158_1359)">
<path d="M5.75 15.3352H12.2016V22.002L5.75 15.3352Z" fill="black"/>
<path d="M5.75 8.66872H12.2016L18.6532 15.3355L5.75 15.3352V8.66872Z" fill="black"/>
<path d="M5.75 2.00195H18.6532V8.66872H12.2016L5.75 2.00195Z" fill="black"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_i_158_1359" x="0" y="0.00195312" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.8 0 0 0 0 0.8 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_158_1359"/>
</filter>
<clipPath id="clip0_158_1359">
<rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24.002)"/>
</clipPath>
<clipPath id="clip1_158_1359">
<rect width="20" height="20" fill="white" transform="translate(2 2.00195)"/>
</clipPath>
</defs>
</svg>

    );
};

export default Sh;