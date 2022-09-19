const gamma = (imgData, adj) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = Math.pow(imgData.data[i] / 255, adj) * 255;
        imgData.data[i + 1] = Math.pow(imgData.data[i + 1] / 255, adj) * 255;
        imgData.data[i + 2] = Math.pow(imgData.data[i + 2] / 255, adj) * 255;
    }
    return imgData;
};

const bluegreen_gamma = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = Math.pow(imgData.data[i] / 255, 5) * 255;
    }
    return imgData;
};

const purple_gamma = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = Math.pow(imgData.data[i + 1] / 255, 5) * 255;
    }
    return imgData;
};

const yellow_gamma = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = Math.pow(imgData.data[i + 2] / 255, 5) * 255;
    }
    return imgData;
};

const bluered_gamma = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = Math.pow(imgData.data[i] / 255, 5) * 255;
        imgData.data[i + 1] = Math.pow(imgData.data[i + 1] / 255, 5) * 255;
    }
    return imgData;
};

const green_gamma = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = Math.pow(imgData.data[i] / 255, 5) * 255;
        imgData.data[i + 2] = Math.pow(imgData.data[i + 2] / 255, 5) * 255;
    }
    return imgData;
};

const red_gamma = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = Math.pow(imgData.data[i + 1] / 255, 5) * 255;
        imgData.data[i + 2] = Math.pow(imgData.data[i + 2] / 255, 5) * 255;
    }
    return imgData;
};

export {
    gamma, 
    bluegreen_gamma,
    purple_gamma,
    yellow_gamma,
    bluered_gamma,
    green_gamma,
    red_gamma
}