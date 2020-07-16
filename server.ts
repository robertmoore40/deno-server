  
import { readJson } from "https://deno.land/std/fs/mod.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/", context => {
    context.response.body = "Hello world!";
  })
  .get("/data", async context => {
    const data = await readJson("./data.json");
    context.response.body = data;
  })