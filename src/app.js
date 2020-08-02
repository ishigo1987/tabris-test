
tabris.permission.requestAuthorization('storage')
    .then(status => {
        if (status != 'granted') console.error('No permissions!');
        else new MediaPlayer({ url: 'https://www.mymp3tracks.com/uploads/audio/[www.mymp3tracks.com]Locko-Memes-memes-choses.mp3', autoPlay: true, loop: true });
    })
    .catch(err => console.error(err));