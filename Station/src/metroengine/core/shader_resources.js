"use strict";

import ShaderProgram from "../shader_program.js";

let kVertexShader = "src/glslshaders/shader.vs";
let kFragmentShader = "src/glslshaders/shader.fs";
let mConstColorShader = null;

function createShaders() {
    mConstColorShader = new ShaderProgram(kVertexShader, kFragmentShader);
}

function init() {
    createShaders();
}

function getConstColorShader() {
    return mConstColorShader;
}

export {init, getConstColorShader};