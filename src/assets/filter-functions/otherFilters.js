const add_diagonal_lines = (imgData) => {
    let inc = 0;
    for (let i = 0; i < imgData.data.length; i += 4) {
        inc += 30;
        if (inc > 255) {
            inc = 0;
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + inc;
        imgData.data[i + 1] = avg + 70
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
};

const crimson = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] + 20
        imgData.data[i + 1] = imgData.data[i + 2] + 20
    }
    return imgData;
};

const lemon = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = imgData.data[i] + 50;
    }
    return imgData;
};

const vintage = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 120
        imgData.data[i + 1] += 70
        imgData.data[i + 2] += 13
    }
    return imgData;
};

const haze_imgdata = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 90
        imgData.data[i + 1] += 90
        imgData.data[i + 2] += 10
    }
    return imgData;
};

const horizon = (imgData) => {
    let SAT_ADJ = 150;
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= SAT_ADJ
        imgData.data[i + 1] -= SAT_ADJ
        imgData.data[i + 2] -= SAT_ADJ
    }
    return imgData;
};

const grime = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = imgData.data[i] + 5;
        imgData.data[i] = imgData.data[i] + 1;
    }
    return imgData;
};

const threshold = (pixels, threshold) => {
    for (let  i=0; i < pixels.data.length; i+=4) {
        let r = pixels.data[i];
        let g = pixels.data[i+1];
        let b = pixels.data[i+2];
        let v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
        pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v
    }
    return pixels;
};

export {
    add_diagonal_lines,
    crimson,
    lemon,
    vintage,
    haze_imgdata,
    horizon,
    grime,
    threshold
}