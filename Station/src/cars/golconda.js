"use strict";

import engine from "../metroengine/index.js";
import Renderable from "../metroengine/renderable.js";

class Golconda {
    constructor(canvasId) {
        engine.init(canvasId);

        // white Square
        this.mWhiteSq = new Renderable();
        this.mWhiteSq.getXform().setHeight(0.5);
        this.mWhiteSq.getXform().setWidth(1.5);
        this.mWhiteSq.getXform().setX(-0.65);
        this.mWhiteSq.getXform().setY(0.25);
        this.mWhiteSq.getXform().setRotationInDegrees(67);
        this.mWhiteSq.setColor([1, 1, 1, 1]);

        // red Square
        this.mRedSq = new Renderable();
        this.mRedSq.setColor([1, 0, 0, 1]);

        engine.clearCanvas([0, 0.8, 0, 1]);

        this.mWhiteSq.draw();
        this.mRedSq.draw();
    }
}

window.onload = () => 
                new Golconda("canvas");