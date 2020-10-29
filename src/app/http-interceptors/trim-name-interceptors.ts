// copy the body and trim whitespace from the name property
const newBody = { ...body, name: body.name.trim() };
// clone request and set its body
const newReq = req.clone({ body: newBody });
// send the cloned request to the next handler.
return next.handle(newReq);
