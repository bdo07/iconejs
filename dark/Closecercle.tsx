import React from "react";
 const Closecercle = (props: React.SVGProps<SVGSVGElement>) => {
    return (
       <svg {...props }
 width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_158_1373)">
<g filter="url(#filter0_d_158_1373)">
<circle cx="12" cy="12" r="12" fill="white"/>
</g>
<path d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_158_1373" x="-30" y="-24" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_158_1373"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_158_1373" result="shape"/>
</filter>
<clipPath id="clip0_158_1373">
<rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
</clipPath>
</defs>
</svg>

    );
};

export default Closecercle;