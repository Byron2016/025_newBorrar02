"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var helmet_1 = require("helmet"); // Security
var PORT = process.env.PORT || 4000;
// create express app
var app = express();
// Middlewares
app.use(cors());
app.use((0, helmet_1.default)());
app.use(express.json());
// Routes
app.get("/", function (req, res) {
    res.send("P001_pagina inicio");
});
app.get("/test", function (_req, res) {
    return res.send("NewBorrar_01 Express Typescript on Vercel");
});
app.get("/ping", function (_req, res) {
    return res.send("MNewBorrar_01 pong.. --> 🏓");
});
// start express server
app.listen(PORT, function () {
    console.log("Express server has started on port ".concat(PORT, ". Open http://localhost:").concat(PORT, "/users to see results"));
});
/*
import * as express from "express";
import { Request, Response } from "express";

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("pagina inicio");
});

app.get("/test", (_req: Request, res: Response) => {
  return res.send("NewBorrar_01 Express Typescript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("NewBorrar_01 pong.. --> 🏓");
});

app.listen(PORT, () => {
  console.log(
    `Express server has started on port ${PORT}. Open http://localhost:${PORT}/users to see results`
  );
});
*/
//# sourceMappingURL=index.js.map