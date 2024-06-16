import Koa from "koa";
import Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import schema from "./schema.js";
const app = new Koa();

const router = new Router();

router.all(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

router.get("/", async (ctx) => {
  ctx.body = "<h1>hello word</h1>";
});

app.use(router.routes(), router.allowedMethods());
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`sever started at ${PORT}`));
