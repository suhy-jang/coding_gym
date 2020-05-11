/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const allowedField = function(point, changeable, toChange) {
    return point === changeable && point !== toChange;
}

const floodFill = function(image, sr, sc, newColor) {
    const q = [[sr, sc]];
    const initColor = image[sr][sc];
    while(q.length > 0) {
        const [r, c] = q.shift();
        image[r][c] = newColor;
        if (r - 1 >= 0 && allowedField(image[r-1][c], initColor, newColor)) {
            q.push([r-1, c]);
        }
        if (r + 1 < image.length && allowedField(image[r+1][c], initColor, newColor)) {
            q.push([r+1, c]);
        }
        if (c - 1 >= 0 && allowedField(image[r][c-1], initColor, newColor)) {
            q.push([r, c-1]);
        }
        if (c + 1 < image[0].length && allowedField(image[r][c+1], initColor, newColor)) {
            q.push([r, c+1]);
        }
    }
    return image;
};
