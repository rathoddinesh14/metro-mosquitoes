attribute vec3 aPosition;
uniform mat4 uModelXformMatrix;

void main(void) {
    gl_Position = uModelXformMatrix * vec4(aPosition, 1.0);
}