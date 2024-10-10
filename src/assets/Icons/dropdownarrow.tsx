import React from "react";

interface DropDownArrowProps {
    fillColor?: string;
    style?: React.CSSProperties; 
}

function DropDownArrow({ fillColor = "#333333", style = {} }: DropDownArrowProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
            <mask id="mask0_283_18061" style={{ maskType: "alpha" }}  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_283_18061)">
                <path d="M6.79241 9.17948C6.90832 9.06357 7.04628 9.00561 7.20631 9.00561C7.36634 9.00561 7.5043 9.06357 7.62021 9.17948L12.005 13.5642L16.4043 9.1649C16.5143 9.05497 16.6489 9 16.8081 9C16.9674 9 17.1069 9.05983 17.2265 9.17948C17.3424 9.29539 17.4004 9.43335 17.4004 9.59338C17.4004 9.75341 17.3424 9.89137 17.2265 10.0073L12.374 14.8508C12.3194 14.9054 12.2618 14.9439 12.2013 14.9664C12.1407 14.9888 12.0753 15 12.005 15C11.9347 15 11.8693 14.9888 11.8087 14.9664C11.7481 14.9439 11.6905 14.9054 11.636 14.8508L6.77783 9.9927C6.6679 9.88278 6.61293 9.74967 6.61293 9.59338C6.61293 9.43709 6.67276 9.29912 6.79241 9.17948Z" fill={fillColor} />
            </g>
        </svg>
    );
}

export default DropDownArrow;
