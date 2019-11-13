global.onmessage = (data)=>{
      console.log(JSON.parse(data.data))
      // global.postMessage("Moi le fort Stephane");
};