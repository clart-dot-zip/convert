// downloadController.js

const fs = require('fs');
const ytdl = require('ytdl-core');

function handleDownloadRequest(req, res) {
    console.log(req.body.youtubeURL);
    const youtubeURL = req.body.youtubeURL;
    const video = ytdl(youtubeURL, { filter: format => format.container === 'mp4' });
    video.pipe(fs.createWriteStream('video.mp4'));
    res.send('Welcome!');
}

module.exports = handleDownloadRequest;
