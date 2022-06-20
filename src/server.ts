import express, { json } from "express";
import connDb from "./database/db";
import { router } from "./routes";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await connDb.sync();
  console.log(`App RUNNING PERFECTLY!!!`);
});
