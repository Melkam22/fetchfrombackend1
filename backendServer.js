//setting up server
"use strict";
const express = require("express");
const http = require("http");
const app = function() {};

//const server = http.createServer(app);
/* server.listen(undefined, function() {
  console.log(`Server is running`);
}); */
const hapi = require("hapi");
const server = hapi.server({
  host: "localhost",
  port: 8000,
  routes: {
    cors: true
  }
});

//add routes
server.route({
  method: "GET",
  path: "/resources",
  handler: function(request, h) {
    const response = [
      {
        name: "givenName",
        type: "text",
        id: 11234
      },
      {
        name: "givenName2",
        type: "text2",
        id: 11235
      }
    ];
    return response;
  }
});
//start the server
const start = async function() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("server running at :", server.url);
};
start();
