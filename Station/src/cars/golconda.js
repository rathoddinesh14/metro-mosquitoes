"use strict";

import engine from "../metroengine/index.js";
import Renderable from "../metroengine/renderable.js";

class Golconda {
    constructor(canvasId) {
        engine.init(canvasId);

        this.mCamera = new engine.Camera(
            glMatrix.vec2.fromValues(20, 60),
            20,
            [20, 40, 600, 300]);

        // white Square
        this.mWhiteSq = new Renderable();
        this.mWhiteSq.getXform().setHeight(5);
        this.mWhiteSq.getXform().setWidth(5);
        this.mWhiteSq.getXform().setRotationInDegrees(67);
        this.mWhiteSq.setColor([1, 1, 1, 1]);

        // red Square
        this.mRedSq = new Renderable();
        this.mRedSq.setColor([1, 0, 0, 1]);

        this.mTLSq = new Renderable();
        this.mTLSq.setColor([0.9, 0.1, 0.1, 1]);
        this.mTRSq = new Renderable();
        this.mTRSq.setColor([0.1, 0.9, 0.1, 1]);
        this.mBLSq = new Renderable();
        this.mBLSq.setColor([0.1, 0.1, 0.9, 1]);
        this.mBRSq = new Renderable();
        this.mBRSq.setColor([0.1, 0.1, 0.1, 1]);

        engine.clearCanvas([0.9, 0.9, 0.9, 1]);
        this.mCamera.setViewAndCameraMatrix();

        this.mWhiteSq.getXform().setPosition(20, 60);
        this.mRedSq.getXform().setPosition(15, 60);
        this.mRedSq.getXform().setSize(3, 3);
        this.mTLSq.getXform().setPosition(10, 65);
        this.mTRSq.getXform().setPosition(30, 65);
        this.mBLSq.getXform().setPosition(10, 55);
        this.mBRSq.getXform().setPosition(30, 55);
        
        this.mWhiteSq.draw(this.mCamera);
        this.mRedSq.draw(this.mCamera);
        this.mTLSq.draw(this.mCamera);
        this.mTRSq.draw(this.mCamera);
        this.mBLSq.draw(this.mCamera);
        this.mBRSq.draw(this.mCamera);
    }
}

window.onload = () => 
                new Golconda("canvas");