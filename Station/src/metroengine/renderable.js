"use strict";

import glSys from "./core/gl.js";
import * as shaderResources from "./core/shader_resources.js";
import Transform from "./transform.js";

class Renderable {
    constructor() {
        this.mShader = shaderResources.getConstColorShader();
        this.mColor = [1, 1, 1, 1];
        this.mXform = new Transform();
    }

    getXform() {
        return this.mXform;
    }

    draw(camera) {
        let gl = glSys.get();
        this.mShader.activate(this.mColor, this.getXform().getTRSMatrix(), camera.getCameraMatrix());
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    setColor(color) {
        this.mColor = color;
    }

    getColor() {
        return this.mColor;
    }
}

export default Renderable;