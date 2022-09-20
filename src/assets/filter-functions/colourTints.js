const redEffect = (pixels) => {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200;
        pixels.data[i + 1] = pixels.data[i + 1] - 50;
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    }
    return pixels;
};

const perfume = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 80
        imgData.data[i + 1] += 40
        imgData.data[i + 2] += 120
    }
    return imgData;
};

const serenity = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 10
        imgData.data[i + 1] += 40
        imgData.data[i + 2] += 90
    }
    return imgData;
};

const pink_aura = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 90
        imgData.data[i + 1] += 10
        imgData.data[i + 2] += 90
    }
    return imgData;
};

const radio_imgdata = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 5
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
};

export {
    redEffect,
    perfume,
    serenity,
    pink_aura,
    radio_imgdata
}