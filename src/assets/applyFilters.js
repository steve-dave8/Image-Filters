import {purplescale, twenties_imgdata, redgreyscale, greengreyscale, blue_greyscale} from "./filter-functions/greyscales";
import {specksredscale, eclectic, green_specks, red_casino, yellow_casino, matrix_imgdata, cosmic_imgdata, retroviolet, white_noise, confetti_imgdata} from "./filter-functions/noise&specks";
import {neue, lix_conv, ryo_conv, solange, cool_twilight, mellow, eon_imgdata, aeon_imgdata, invert_imgdata} from "./filter-functions/colourInversions";
import {redEffect, perfume, serenity, pink_aura, radio_imgdata} from "./filter-functions/colourTints";
import {add_diagonal_lines, crimson, lemon, vintage, haze_imgdata, horizon, grime, threshold} from "./filter-functions/otherFilters";
import {gamma, bluegreen_gamma, purple_gamma, yellow_gamma, bluered_gamma, green_gamma, red_gamma} from "./filter-functions/gamma";
import {rgbSplit, offset_green, offset_blue, offset_red} from "./filter-functions/offsets";
import {frontward} from "./filter-functions/frontward";

const applyFilters = (pixels, filters) => {
    Object.entries(filters).forEach(([key, value]) => {
        switch (key) {
            case "redEffect":
                if (value) pixels = redEffect(pixels);
                break;
            case "rgbSplit":
                if (value) pixels = rgbSplit(pixels);
                break;
            case "threshold":
                if (value) pixels = threshold(pixels, filters.thresholdVal);
                break;
            case "specksredscale":
                if (value) pixels = specksredscale(pixels);
                break;
            case "eclectic":
                if (value) pixels = eclectic(pixels);
                break;
            case "addDiagonalLines":
                if (value) pixels = add_diagonal_lines(pixels);
                break;
            case "greenSpecks":
                if (value) pixels = green_specks(pixels);
                break;
            case "redCasino":
                if (value) pixels = red_casino(pixels);
                break;
            case "yellowCasino":
                if (value) pixels = yellow_casino(pixels);
                break;
            case "neue":
                if (value) pixels = neue(pixels);
                break;
            case "lix":
                if (value) pixels = lix_conv(pixels);
                break;
            case "ryo":
                if (value) pixels = ryo_conv(pixels);
                break;
            case "solange":
                if (value) pixels = solange(pixels);
                break;
            case "crimson":
                if (value) pixels = crimson(pixels);
                break;
            case "lemon":
                if (value) pixels = lemon(pixels);
                break;
            case "frontward":
                if (value) pixels = frontward(pixels);
                break;
            case "vintage":
                if (value) pixels = vintage(pixels);
                break;
            case "perfume":
                if (value) pixels = perfume(pixels);
                break;
            case "serenity":
                if (value) pixels = serenity(pixels);
                break;
            case "pinkAura":
                if (value) pixels = pink_aura(pixels);
                break;
            case "haze":
                if (value) pixels = haze_imgdata(pixels);
                break;
            case "coolTwilight":
                if (value) pixels = cool_twilight(pixels);
                break;
            case "horizon":
                if (value) pixels = horizon(pixels);
                break;
            case "mellow":
                if (value) pixels = mellow(pixels);
                break;
            case "eon":
                if (value) pixels = eon_imgdata(pixels);
                break;
            case "aeon":
                if (value) pixels = aeon_imgdata(pixels);
                break;
            case "matrix":
                if (value) pixels = matrix_imgdata(pixels);
                break;
            case "cosmic":
                if (value) pixels = cosmic_imgdata(pixels);
                break;
            case "purplescale":
                if (value) pixels = purplescale(pixels);
                break;
            case "radio":
                if (value) pixels = radio_imgdata(pixels);
                break;
            case "twenties":
                if (value) pixels = twenties_imgdata(pixels);
                break;
            case "grime":
                if (value) pixels = grime(pixels);
                break;
            case "redGreyscale":
                if (value) pixels = redgreyscale(pixels);
                break;
            case "retroviolet":
                if (value) pixels = retroviolet(pixels);
                break;
            case "greenGreyscale":
                if (value) pixels = greengreyscale(pixels);
                break;
            case "blueGreyscale":
                if (value) pixels = blue_greyscale(pixels);
                break;
            case "whiteNoise":
                if (value) pixels = white_noise(pixels, filters.whiteNoiseVal);
                break;
            case "confetti":
                if (value) pixels = confetti_imgdata(pixels);
                break;
            case "gamma":
                if (value) pixels = gamma(pixels, filters.gammaVal);
                break;
            case "blueGreenGamma":
                if (value) pixels = bluegreen_gamma(pixels);
                break;
            case "purpleGamma":
                if (value) pixels = purple_gamma(pixels);
                break;
            case "yellowGamma":
                if (value) pixels = yellow_gamma(pixels);
                break;
            case "blueRedGamma":
                if (value) pixels = bluered_gamma(pixels);
                break;
            case "greenGamma":
                if (value) pixels = green_gamma(pixels);
                break;
            case "redGamma":
                if (value) pixels = red_gamma(pixels);
                break;
            case "offsetGreen":
                if (value) pixels = offset_green(pixels, filters.offsetGreenVal);
                break;
            case "offsetBlue":
                if (value) pixels = offset_blue(pixels, filters.offsetBlueVal);
                break;
            case "offsetRed":
                if (value) pixels = offset_red(pixels, filters.offsetRedVal);
                break;
            case "invert":
                if (value) pixels = invert_imgdata(pixels);
                break;
            default:
                //do nothing
        }
    });
};

const getCTXfilters = (filters) => {
    let filterString = [];
    Object.entries(filters).forEach(([key, value]) => {
        switch (key) {
            case "blur":
                if (value !== 0) filterString.push(`blur(${value}px)`);
                break;
            case "brightness":
                if (value !== 1) filterString.push(`brightness(${value})`);
                break;
            case "contrast":
                if (value !== 1) filterString.push(`contrast(${value})`);
                break;
            case "grayscale":
                if (value !== 0) filterString.push(`grayscale(${value})`);
                break;
            case "hueRotate":
                if (value !== 0 && value !== 360) filterString.push(`hue-rotate(${value}deg)`);
                break;
            case "opacity":
                if (value !== 1) filterString.push(`opacity(${value})`);
                break;
            case "saturate":
                if (value !== 1) filterString.push(`saturate(${value})`);
                break;
            case "sepia":
                if (value !== 0) filterString.push(`sepia(${value})`);
                break;
            case "bkgColor":
                if (value) filterString.push(`drop-shadow(0 0 ${filters.bkgColorVal})`);
            default:
                //do nothing
        }
    });
    const ctxFilter = filterString.length ? filterString.join(' ') : "none";
    return ctxFilter;
};

export { applyFilters, getCTXfilters }