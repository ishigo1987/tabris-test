require("./helpers/permissions.js")().then((responsePermission)=>{
  if(responsePermission.Message === "Permission granted"){

      navigator.contactsPhoneNumbers.list((contacts)=>{
      console.log(contacts.length + ' contacts found');
       const workerContacts = new Worker("./src/helpers/worker.js");
               workerContacts.onmessage = (event) => {
               	console.log(event)
                  workerContacts.terminate();
               };
               workerContacts.onerror = (error) => {
                 console.log(`onerror: ${JSON.stringify(error)}`);
                 workerContacts.terminate();
               };
                workerContacts.postMessage(contacts);
      
   	  },(error)=>{
         console.error(error);
   	 });
  	}
});
      
  
