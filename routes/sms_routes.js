
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
        {    ctx.status = 200;
            ctx.body = "message sent";
        }


    });

};

export default routes;
