
const{permission, contentView, Button, fs} = require("tabris");
permission.requestAuthorization('storage')
    .then(status => {
        if (status != 'granted'){
            console.error('No permissions!')
        }
        else {
            new Button({centerX:0, centerY:0, text:"Take an image",background:"blue"})
            .onTap(()=>{
              fs.openFile({type:"image/*"}).then((response)=>{
                 console.log(response);
              });
            }).appendTo(contentView);
        }
    });