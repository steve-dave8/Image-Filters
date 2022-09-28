const pixelate = (imgData, sample_size = 10) => {
    const { width, height } = imgData;
    let r, g, b;

    // Sample size must be an even number to work:
    if (sample_size % 2 !== 0) sample_size += 1;

    // Loop through the rows from top to bottom:
    for (let y = 0; y < height; y+= sample_size) { 
        // Loop through all the columns from left to right:
        for (let x = 0; x < width; x+= sample_size) { 
            // Get rgb values at center of sample block: 
            let midX = x + (sample_size/2);
            let midY = y + (sample_size/2);
            let midPos = (midX + (midY*width))*4;
            if (imgData.data[midPos] !== undefined) {
                r = imgData.data[midPos];
                g = imgData.data[midPos + 1];
                b = imgData.data[midPos + 2];
            }

            let endX = x + sample_size;
            let endY = y + sample_size;

            // Fill in sample block with selected colour:
            // (note: the breaks below prevent the pixels changes from wrapping around the image)
            for (let sy = y; sy < endY; sy++) {
                if (sy > height) break;
                for (let sx = x; sx < endX; sx++) {
                    if (sx > width) break;
                    let pos = (sx + (sy*width))*4;
                    imgData.data[pos] = r;
                    imgData.data[pos + 1] = g;
                    imgData.data[pos + 2] = b;
                }
            }
        }
    };

    return imgData;
};

export { pixelate }