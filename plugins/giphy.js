const got = require("got");

const GIPHY_API_KEY = 'nS0UAgP4KFxX68psrBZHaGOQl3njP13p';

async function getGiphyGif(searchTerm) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(searchTerm)}&limit=10&rating=pg-13`;

    try {
        const response = await got(url, { responseType: 'json' });
        const gifs = response.body.data;

        if (gifs.length > 0) {
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            return randomGif.images.original.url;
        } else {
            throw new Error("No GIFs found");
        }
    } catch (error) {
        console.error("Error fetching GIF from Giphy:", error);
        throw error;
    }
}

module.exports = { getGiphyGif };
