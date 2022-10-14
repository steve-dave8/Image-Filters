import { getRandomNumber } from "../getRandomNumber"

const specksredscale = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let randomNumber = getRandomNumber(0, 100);
        if (randomNumber > 10 && randomNumber < 15) {
            imgData.data[i] = 120
            imgData.data[i + 1] = 120
            imgData.data[i + 2] = 120
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 100
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
};

const eclectic = (imgData) => {
    let randomNumber = 0;
    let addition2;

    for (let i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        let addition = 0;
        if (randomNumber > 0 && randomNumber < 50) {
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition2 = 90;
        }
        else {
            addition2 = 10;
        }

        if (imgData.data[i] + addition > 255) {
            imgData.data[i] -= addition
        }
        else {
            imgData.data[i] += addition
        }

        if (imgData.data[i + 1] + addition > 255) {
            imgData.data[i + 1] -= addition2;
        } else {
            imgData.data[i] += addition2;
        }
    }
    return imgData;
};

const green_specks = (imgData) => {
    let randomNumber;
    let addition1, addition2;
    for (let i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 20;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 10;
            addition2 = 90;
        }
        else {
            addition1 = 30;
            addition2 = 10;
        }
        imgData.data[i] += addition1;
        imgData.data[i + 1] += addition2;
        imgData.data[i + 2] += addition1;
    }
    return imgData;
};

const red_casino = (imgData) => { 
    let inc = 0;
    for (let i = 0; i < imgData.data.length; i += 4) {
        inc = getRandomNumber(0, 255);
        if (inc > 255) {
            inc = 0;
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + inc;
        imgData.data[i + 1] = avg + 2;
        imgData.data[i + 2] = avg + 5;
    }
    return imgData;
};

const yellow_casino = (imgData) => {
    let inc = 0;
    let inc2 = 0;
    for (let i = 0; i < imgData.data.length; i += 4) {
        inc = getRandomNumber(0, 255);
        inc2 = getRandomNumber(0, 255);
        if (inc > 255) {
            inc = 0;
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + inc;
        imgData.data[i + 1] = avg + inc2;
        imgData.data[i + 2] = avg + 5;
    }
    return imgData;
};

const matrix_imgdata = (imgData) => {
    let randomNumber;
    let addition2;
    for (let i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        let addition;
        if (randomNumber > 0 && randomNumber < 50) {
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition2 = 90;
        }
        else {
            addition2 = 10;
        }
        imgData.data[i] += addition
        imgData.data[i + 1] += addition2;
    }
    return imgData;
};

const cosmic_imgdata = (imgData) => {
    let randomNumber = 0;
    let addition2;
    for (let i = 0; i < imgData.data.length; i += 4) {
        let addition;
        randomNumber = getRandomNumber(0, 200);
        if (randomNumber > 0 && randomNumber < 50) {
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition2 = 90;
        }
        else {
            addition2 = 10;
        }

        imgData.data[i] += addition
        imgData.data[i + 2] += addition2;
    }
    return imgData;
};

const retroviolet = (imgData) => {
    let randomNumber = 0;
    for (let i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        let addition1 = 0;
        let addition2 = 0;
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 20;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 20;
            addition2 = 90;
        }
        else {
            addition1 = 10;
            addition2 = 50;
        }

        if (imgData.data[i] - addition1 > 255) {
            imgData.data[i] -= addition1
        }
        else {
            imgData.data[i] += addition1
        }

        if (imgData.data[i + 2] + addition2 > 255) {
            imgData.data[i + 2] -= addition2;
        } else {
            imgData.data[i + 2] += addition2;
        }
    }
    return imgData;
};

/**
 * @param {(string|Object)} color - string representing hexadecimal color value OR object containing RGB color values in the format {R: number; G: number; B: number}
 * @param {number} max - influences frequency that colored specks will appear; minimum value of 12
 */
const custom_noise = (imgData, color, max) => {
    let R, G, B;
    if (typeof color === "object") {
        if (color.hasOwnProperty("R") && color.hasOwnProperty("G") && color.hasOwnProperty("B")) {
            R = color.R;
            G = color.G;
            B = color.B;
        }
    } else if (typeof color === "string") {
        // Convert hexadecimal color code to rgb values:
        let hdColor = color.replace("#", "").trim();
        if (hdColor.length === 3) {
            const shorthandRegex = /([a-f\d])([a-f\d])([a-f\d])$/i;
            hdColor = hdColor.replace(shorthandRegex, function(m, r, g, b) {
                return r + r + g + g + b + b;
            });
        }
        if (hdColor.length === 6) {
            const rgbResult = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hdColor);
            if (rgbResult) {
                R = parseInt(rgbResult[1], 16);
                G = parseInt(rgbResult[2], 16);
                B = parseInt(rgbResult[3], 16);
            }
        }
    }

    if (R === undefined || G === undefined || B === undefined) return;

    for (let i = 0; i < imgData.data.length; i += 4) {
        let randomNumber = getRandomNumber(0, 100);
        if (randomNumber > 10 && randomNumber < max) {
            imgData.data[i] = R;
            imgData.data[i + 1] = G;
            imgData.data[i + 2] = B;
        }
    }
    return imgData;
};

const black_noise = (imgData, max) => {
    const black = {R: 0, G: 0, B: 0};
    return custom_noise(imgData, black, max);
};

const white_noise = (imgData, max) => {
    const white = {R: 255, G: 255, B: 255};
    return custom_noise(imgData, white, max);
};

const confetti_imgdata = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let randomNumber = getRandomNumber(0, 200);
        if (randomNumber > 0 && randomNumber < 10) {
            imgData.data[i] = getRandomNumber(10, 255);
            imgData.data[i + 1] = getRandomNumber(10, 255);
            imgData.data[i + 2] = getRandomNumber(10, 255);
        }
        else {
            imgData.data[i] -= 10 ;
            imgData.data[i + 1] -= 10 ;
            imgData.data[i + 2] -= 10 ;
        }
    }
    return imgData;
};

export {
    specksredscale,
    eclectic,
    green_specks,
    red_casino,
    yellow_casino,
    matrix_imgdata,
    cosmic_imgdata,
    retroviolet,
    white_noise,
    confetti_imgdata,
    black_noise,
    custom_noise
}