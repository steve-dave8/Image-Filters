const frontward = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i + 2];
        imgData.data[i + 2] = imgData.data[i + 1] + 50;
    }
    return imgData;
};

export { frontward }