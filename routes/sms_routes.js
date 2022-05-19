const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



let routes = (router) => {
    router.post("/sms",(ctx) => {
        if(ctx.request.body.number===""||ctx.request.body.number=== undefined)
        {   ctx.status = 400;
            ctx.body = "No mobile number";
        }
        else if(ctx.request.body.name===""||ctx.request.body.name=== undefined)
        {
            ctx.status = 400;
            ctx.body = "No user name";
        }
        else
        {
            client.messages
                .create({
                    body: '',
                    from: '+15017122661',
                    to: ctx.request.body.number
                })
                .then(message => console.log(message.sid));
            ctx.status = 200;
            ctx.body = "message sent";
        }


    });

};

export default routes;
