const workerContacts = new Worker("./src/helpers/worker.js");
               workerContacts.onmessage = (event) => {
                  workerContacts.terminate();
               };
               workerContacts.onerror = (error) => {
                 console.log(`onerror: ${JSON.stringify(error)}`);
                 workerContacts.terminate();
               };
                workerContacts.postMessage(['697644414','0033648138928','#155#','+4917674614474','669341994']);