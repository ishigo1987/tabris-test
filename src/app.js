
const{permission, contentView, Button, fs} = require("tabris");
permission.requestAuthorization('storage')
    .then(status => {
        if (status != 'granted'){
            console.error('No permissions!')
        }
        else {
            new Button({centerX:0, centerY:0, text:"Take an image",background:"blue"})
            .onTap(()=>{
              window.plugins.intentShim.startActivityForResult({ action: window.plugins.intentShim.ACTION_GET_CONTENT, type: "image/*", extras:{ "android.intent.extra.ALLOW_MULTIPLE": false }},
                (intent)=>{
                    console.log(intent)
                },
                (error)=>{
                    console.log(error)
                }
                );

            }).appendTo(contentView);
        }
    });