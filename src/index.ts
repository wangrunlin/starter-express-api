import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
  console.log("home log");
  ctx.body = "Hello World!";
});

router.get("/test", async (ctx) => (ctx.body = "test"));

app.use(router.routes());
app.use(router.allowedMethods());

// app.all("/", (_, res) => {
//   console.log("Just got a request!");
//   res.send("Yo!");
// });

// app.get("/test", (_, res) => res.send("This is a test!"));

app.listen(process.env.PORT || 3000);
