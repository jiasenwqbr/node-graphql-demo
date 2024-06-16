import Koa from "koa";
import Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import { buildSchema, graphql } from "graphql";
import { nanoid } from "nanoid";

const app = new Koa();

const router = new Router();

const schema = buildSchema(`
    type User {
        id:ID!
        name:String
        age: Int
    }
    type Query{
        user:User,
        hello:String
    }
`);
const rootValue = {
  hello: () => `Hello world`,
  user: () => ({
    id: nanoid(),
    name: "Jason",
    age: 35,
  }),
};

router.all(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

router.get("/", async (ctx) => {
  ctx.body = "<h1>hello word</h1>";
});

app.use(router.routes(), router.allowedMethods());
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`sever started at ${PORT}`));
