"use strict";

import * as core from "./gl.js";

let mVertexBuffer = null;

function getVB() {
    return mVertexBuffer;
}

// square vertices
let mVertices = [
    0.5, 0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
]

function init() {
    let gl = core.get();
    mVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, mVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVertices), gl.STATIC_DRAW);
}

export {getVB, init};