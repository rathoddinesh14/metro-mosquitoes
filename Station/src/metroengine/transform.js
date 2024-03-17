class Transform {
    constructor() {
        this.mPosition = glMatrix.vec2.fromValues(0.0, 0.0);
        this.mScale = glMatrix.vec2.fromValues(1.0, 1.0);
        this.mRotationInRads = 0.0;
    }

    setX(xPos) {
        this.mPosition[0] = xPos;
    }

    setY(yPos) {
        this.mPosition[1] = yPos;
    }

    getX() {
        return this.mPosition[0];
    }

    getY() {
        return this.mPosition[1];
    }

    setPosition(xPos, yPos) {
        this.setX(xPos);
        this.setY(yPos);
    }

    getPosition() {
        return this.mPosition;
    }

    getSize() {
        return this.mScale;
    }

    setWidth(width) {
        this.mScale[0] = width;
    }

    getWidth() {
        return this.mScale[0];
    }

    setHeight(height) {
        this.mScale[1] = height;
    }

    getHeight() {
        return this.mScale[1];
    }

    setSize(width, height) {
        this.setWidth(width);
        this.setHeight(height);
    }

    setRotationInRads(rotationInRads) {
        this.mRotationInRads = rotationInRads;
        while (this.mRotationInRads > Math.PI) {
            this.mRotationInRads -= 2 * Math.PI;
        }
        while (this.mRotationInRads < -Math.PI) {
            this.mRotationInRads += 2 * Math.PI;
        }
    }

    setRotationInDegrees(rotationInDegrees) {
        this.setRotationInRads(rotationInDegrees * Math.PI / 180.0);
    }

    getRotationInDegrees() {
        return this.mRotationInRads * 180.0 / Math.PI;
    }

    getRotationInRads() {
        return this.mRotationInRads;
    }

    getTRSMatrix() {
        let trsMatrix = glMatrix.mat4.create();
    
        glMatrix.mat4.translate(trsMatrix, trsMatrix, glMatrix.vec3.fromValues(this.getX(), this.getY(), 0.0));
        glMatrix.mat4.rotateZ(trsMatrix, trsMatrix, this.getRotationInRads());
        glMatrix.mat4.scale(trsMatrix, trsMatrix, glMatrix.vec3.fromValues(this.getWidth(), this.getHeight(), 1.0));
    
        return trsMatrix;
    }
}

export default Transform;