"use strict";

import Camera from "./camera.js";
import Renderable from "./renderable.js";
import Transform from "./transform.js";

import glSys from "./core/gl.js";
import * as vertexBuffer from "./core/vertex_buffer.js";
import * as shaderResources from "./core/shader_resources.js";

function init(canvasId) {
    glSys.init(canvasId);
    vertexBuffer.init();
    shaderResources.init();
}

function clearCanvas(color) {
    let gl = glSys.get();
    gl.clearColor(color[0], color[1], color[2], color[3]);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

export default {
    Camera,
    Renderable, Transform,
    init, clearCanvas
};