import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import helmet from "helmet"; // Security

const PORT = process.env.PORT || 4000;

// create express app
const app = express();
// Middlewares
app.use(cors());
app.use(helmet());

app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("P001_pagina inicio");
});

app.get("/test", (_req: Request, res: Response) => {
  return res.send("NewBorrar_01 Express Typescript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("MNewBorrar_01 pong.. --> 🏓");
});

// start express server
app.listen(PORT, () => {
  console.log(
    `Express server has started on port ${PORT}. Open http://localhost:${PORT}/users to see results`
  );
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
