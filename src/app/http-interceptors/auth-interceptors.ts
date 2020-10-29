newReq = req.clone({ ... }); // body not mentioned => preserve original body
newReq = req.clone({ body: undefined }); // preserve original body
newReq = req.clone({ body: null }); // clear the body