self.addEventListener("fetch", event => {
    //const offlineResp = new Response("no estas conectado a internet");
    const offlineResp = new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body class="container p-3">
        <h1> Se necesita Intenert (Estas en modo Offline)</h1>
    </body>
    </html>
    `,{
        headers: {
            "Content-Type":"text/html"
        }

    });
    const resp = fetch (event.request)
    .catch(() => {
        return offlineResp;
    });
    event.respondWith(resp);
});
