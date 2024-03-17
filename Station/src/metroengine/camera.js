import glSys from "../metroengine/core/gl.js";

class Camera {
    constructor(wcCenter, wcWidth, viewportArray) {
        this.mWCCenter = wcCenter;
        this.mWCWidth = wcWidth;
        this.mViewportArray = viewportArray;

        this.mCameraMatrix = glMatrix.mat4.create();
        this.mBGColor = [0.8, 0.8, 0.8, 1];
    }

    getWCHeight() {
        let ratio = this.mViewportArray[eViewport.eHeight] / this.mViewportArray[eViewport.eWidth];
        console.log("Ratio : " + ratio);
        return this.getWCWidth() * ratio;
    }

    setWCCenter(xPos, yPos) {
        this.mWCCenter[0] = xPos;
        this.mWCCenter[1] = yPos;
    }

    getWCCenter() {
        return this.mWCCenter;
    }

    setWCWidth(width) {
        this.mWCWidth = width;
    }

    getWCWidth() {
        return this.mWCWidth;
    }

    setViewport(viewportArray) {
        this.mViewportArray = viewportArray;
    }

    getViewport() {
        return this.mViewportArray;
    }

    setBackgroundColor(newColor) {
        this.mBGColor = newColor;
    }

    getBackgroundColor() {
        return this.mBGColor;
    }   

    setViewAndCameraMatrix() {
        let gl = glSys.get();

        gl.viewport(this.mViewportArray[0], this.mViewportArray[1],
             this.mViewportArray[2], this.mViewportArray[3]);
        gl.scissor(this.mViewportArray[0], this.mViewportArray[1],
             this.mViewportArray[2], this.mViewportArray[3]);

        gl.clearColor(this.mBGColor[0], this.mBGColor[1], this.mBGColor[2], this.mBGColor[3]);

        gl.enable(gl.SCISSOR_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.disable(gl.SCISSOR_TEST);

        let center = this.getWCCenter();
        glMatrix.mat4.scale(this.mCameraMatrix, glMatrix.mat4.create(),
            glMatrix.vec3.fromValues(2.0/this.getWCWidth(), 2.0/this.getWCHeight(), 1.0));

        glMatrix.mat4.translate(this.mCameraMatrix, this.mCameraMatrix, 
            glMatrix.vec3.fromValues(-center[0], -center[1], 0));
    }

    getCameraMatrix() {
        console.log("Camera : " + this.mCameraMatrix);
        return this.mCameraMatrix;
    }
}

const eViewport = Object.freeze({
    eOrgX: 0,
    eOrgY: 1,
    eWidth: 2,
    eHeight: 3
});

export default Camera;