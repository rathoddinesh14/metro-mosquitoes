"use strict";

import core from "./core/gl.js";
import * as vertexBuffer from "./core/vertex_buffer.js";

class ShaderProgram {

    mCompiledShader = null;
    mVertexPosRef = null;
    mModelMatrixRef = null;
    mPixelColorRef = null;
    mCameraMatrixRef = null;

    constructor(vShaderPath, fShaderPath) {
        let gl = core.get();
    
        let vs = loadAndCompileShader(vShaderPath, gl.VERTEX_SHADER);
        let fs = loadAndCompileShader(fShaderPath, gl.FRAGMENT_SHADER);
    
        this.mCompiledShader = gl.createProgram();
        gl.attachShader(this.mCompiledShader, vs);
        gl.attachShader(this.mCompiledShader, fs);
        gl.linkProgram(this.mCompiledShader);
    
        if (!gl.getProgramParameter(this.mCompiledShader, gl.LINK_STATUS)) {
            console.log(gl.getProgramInfoLog(this.mCompiledShader));
            return null;
        }
    
        this.mVertexPosRef = gl.getAttribLocation(this.mCompiledShader, "aPosition");
        this.mPixelColorRef = gl.getUniformLocation(this.mCompiledShader, "uPixelColor");
        this.mModelMatrixRef = gl.getUniformLocation(this.mCompiledShader, "uModelXformMatrix");
        this.mCameraMatrixRef = gl.getUniformLocation(this.mCompiledShader, "uCameraXformMatrix");
    }

    activate(pixelColor, trsMatrix, cameraMatrix) {
        let gl = core.get();
    
        gl.useProgram(this.mCompiledShader);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer.getVB());
        gl.vertexAttribPointer(this.mVertexPosRef, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.mVertexPosRef);

        gl.uniform4fv(this.mPixelColorRef, pixelColor);
        gl.uniformMatrix4fv(this.mModelMatrixRef, false, trsMatrix);
        gl.uniformMatrix4fv(this.mCameraMatrixRef, false, cameraMatrix);
    }
}

function loadAndCompileShader(filePath, shaderType) {
    let xmlReq, shaderSrc = null, compiledShader = null;

    let gl = core.get();

    xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", filePath, false);

    try {
        xmlReq.send();
    } catch(error) {
        console.log("Check web server : Failed to load shader: " + filePath);
        return null;
    }

    shaderSrc = xmlReq.responseText;

    if (shaderSrc === null) {
        console.log("Failed to load shader: " + filePath);
        return null;
    }

    compiledShader = gl.createShader(shaderType);
    gl.shaderSource(compiledShader, shaderSrc);
    gl.compileShader(compiledShader);

    if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(compiledShader));
    }

    return compiledShader;
}

export default ShaderProgram;