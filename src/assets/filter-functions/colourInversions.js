const neue = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
};

const lix_conv = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
    }
    return imgData;
};

const ryo_conv = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
};

const solange = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
    }
    return imgData;
};

const cool_twilight = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
    }
    return imgData;
};

const mellow = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 120 - imgData.data[i + 2];
    }
    return imgData;
};

const eon_imgdata = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 120 - imgData.data[i + 1];
        imgData.data[i + 2] = 100 - imgData.data[i + 2];
    }
    return imgData;
};

const aeon_imgdata = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 60 - imgData.data[i + 1];
        imgData.data[i + 2] = 100 - imgData.data[i + 2];
    }
    return imgData;
};

export {
    neue,
    lix_conv,
    ryo_conv,
    solange,
    cool_twilight,
    mellow,
    eon_imgdata,
    aeon_imgdata
}