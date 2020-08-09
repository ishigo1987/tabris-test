let mediaPlayer = new MediaPlayer({url:'https://www.mymp3tracks.com/uploads/audio/[www.mymp3tracks.com]Locko-Memes-memes-choses.mp3', autoPlay:true});
            mediaPlayer.play()
    
            mediaPlayer.onReady(()=>{
                console.log("test")
            })
            mediaPlayer.onError((e)=>{
                console.log(e)
            })
global.onmessage = (e)=>{

  console.log(e)
}