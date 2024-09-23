const Asena = require("../events");
const { getGiphyGif } = require("./giphy"); // Importing from giphy.js in the same folder

Asena.addCommand(
    { pattern: "rkiss ?(.*)", fromMe: true, desc: "Send a random anime kiss GIF", usage: ".rkiss @mention" },
    async (message, match) => {
        if (message.mention !== false) {
            const mentionedUser = message.mention[0];
            try {
                const gifUrl = await getGiphyGif("anime kiss");
                await message.sendMessage(gifUrl, { caption: `${mentionedUser} received a kiss! (Reio wasta :3)` });
            } catch (error) {
                await message.sendMessage("Failed to fetch a kiss GIF but Reio doesnt apologies easily. Try later, or can you? :3");
            }
        } else {
            await message.sendMessage("Please mention a user to send a kiss GIF, Reio doesnt judge.");
        }
    }
);
