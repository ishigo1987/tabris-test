
tabris.permission.requestAuthorization('storage')
    .then(status => {
        if (status != 'granted'){
            console.error('No permissions!')
        }
        else {
            let mediaPlayer = new MediaPlayer({url:'https://www.mymp3tracks.com/uploads/audio/[www.mymp3tracks.com]Locko-Memes-memes-choses.mp3'});
            mediaPlayer.play()
    
            mediaPlayer.onReady(()=>{
                console.log("test")
            })
            mediaPlayer.onError((e)=>{
                console.log(e)
            })
        }
    })
    .catch(err => console.error(err));


    // const worker = new Worker("src/helpers/workerAudio.js");
    //   worker.onmessage = (event) => {

    //  };
    // worker.onerror = (error) => {
    //       console.log(`onerror: ${JSON.stringify(error)}`);
    // };
    // worker.postMessage("Nothing");