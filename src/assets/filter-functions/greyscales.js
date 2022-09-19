const purplescale = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 90
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 80
    }
    return imgData;
};

const twenties_imgdata = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 18
        imgData.data[i + 1] = avg + 12
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
};

const redgreyscale = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 100
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
};

const greengreyscale = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 20
        imgData.data[i + 1] = avg + 70
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
};

const blue_greyscale = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 20
        imgData.data[i + 1] = avg + 30
        imgData.data[i + 2] = avg + 60
    }
    return imgData;
};

export {
    purplescale, 
    twenties_imgdata, 
    redgreyscale,
    greengreyscale,
    blue_greyscale
}