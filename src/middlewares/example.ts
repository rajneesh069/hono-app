import { Context, Next } from "hono";

export async function middleware(c: Context, next: Next) {
  if (c.req.header("Authorization")) {
    //do some check
    await next(); //not necessary to await it until you want to perform something after the next function
  } else {
    return c.text("Hey, you're not allowed");
  }
}
