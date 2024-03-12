"use strict";

let mGL = null;

function get() {
    return mGL;
}

function init(canvasId) {
    let canvas = document.getElementById(canvasId);
    mGL = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2");
    console.log(mGL);

    if (mGL === null) {
        console.log("Failed to get the rendering context for WebGL");
        return;
    }
}


export {get, init};