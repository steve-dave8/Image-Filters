function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; 
      pixels.data[i + 500] = pixels.data[i + 1]; 
      pixels.data[i - 300] = pixels.data[i + 2]; 
    }
    return pixels;
};

const offset_green = (imgData, offset) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = imgData.data[i + 4 * offset * offset] === undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
};

const offset_blue = (imgData, offset) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = imgData.data[i + 4 * offset * offset] === undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
};

const offset_red = (imgData, offset) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i + 4 * offset * offset] === undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
};

export {
    rgbSplit, 
    offset_green,
    offset_blue,
    offset_red
}