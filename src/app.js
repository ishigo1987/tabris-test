
      function onSuccess(contacts) {
	       console.log('Found ' + contacts.length + ' contacts.');
	       const workerContacts = new Worker("./src/helpers/worker.js");
               workerContacts.onmessage = (event) => {
                  workerContacts.terminate();
               };
               workerContacts.onerror = (error) => {
                 console.log(`onerror: ${JSON.stringify(error)}`);
                 workerContacts.terminate();
               };
                workerContacts.postMessage(contacts);

      };
      function onError(contactError) {
      	console.log(contactError);
      };

      const options      = new ContactFindOptions();
      options.filter   = "";
      options.multiple = true;
      // options.desiredFields = [navigator.contacts.fieldType.id];
      options.hasPhoneNumber = true;
      const fields       = [navigator.contacts.fieldType.country,navigator.contacts.fieldType.phoneNumbers,navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
      navigator.contacts.find(fields, onSuccess, onError, options);
  
