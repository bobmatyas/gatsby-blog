import React from "react";
export function onRenderBody( { setPostBodyComponents } ) {
    setPostBodyComponents([
        <script 
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon="{'token': '9c46957e3f89451a8c879dc672753cfa'}"
        defer 
        ></script>,
    ]);
}