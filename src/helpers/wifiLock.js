module.exports = ()=>{
    WiFiLock.acquire().then((response)=>{
        console.log(response);
    });
    // WiFiLock.release().then((response)=>{
    //   console.log(response);
    // });
    // WiFiLock.isHeld().then((response)=>{
    //     console.log(response)
    // })
};