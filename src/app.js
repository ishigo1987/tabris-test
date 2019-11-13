require("./helpers/permissions.js")().then((responsePermission)=>{
  if(responsePermission.Message === "Permission granted"){
     const workerContacts = new Worker("./src/helpers/worker.js");
               workerContacts.onmessage = (event) => {
               	console.log(event)
                  workerContacts.terminate();
               };
               workerContacts.onerror = (error) => {
                 console.log(`onerror: ${JSON.stringify(error)}`);
                 workerContacts.terminate();
               };
                workerContacts.postMessage('');
  }
});
      
  
