"use strict";

import * as engine from "../metroengine/metro.js";

class Golconda {
    constructor(canvasId) {
        engine.init(canvasId);

        engine.clearCanvas([0, 0.8, 0, 1]);

        engine.drawSquare([1, 0, 0, 1]);
    }
}

window.onload = () => 
                new Golconda("canvas");