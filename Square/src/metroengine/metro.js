"use strict";

import * as VertexBuffer from "./vertexbuffer.js";
import ShaderProgram from "./shaderprogram.js";

let mGL = null;
let mShader = null;

function createShader() {
    mShader = new ShaderProgram("src/glslshaders/shader.vs", "src/glslshaders/shader.fs");
}

function getGL() {
    return mGL;
}

function initGL(canvasId) {
    let canvas = document.getElementById(canvasId);
    mGL = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2");
    console.log(mGL);

    if (mGL === null) {
        console.log("Failed to get the rendering context for WebGL");
        return;
    }
}

function init(canvasId) {
    initGL(canvasId);
    VertexBuffer.init();
    createShader();
}

function clearCanvas(color) {
    mGL.clearColor(color[0], color[1], color[2], color[3]);
    mGL.clear(mGL.COLOR_BUFFER_BIT);
}

function drawSquare(color) {
    mShader.activate(color);
     mGL.drawArrays(mGL.TRIANGLE_STRIP, 0, 4);               
}

export {getGL, init, clearCanvas, drawSquare};