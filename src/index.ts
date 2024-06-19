import { Hono } from "hono";
import { middleware } from "./middlewares/example";

const app = new Hono();

app.get("/", async (c) => {
  return c.text("Working");
});

app.post("/home", middleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.json({ message: "Hi there" });
});

export default app;
