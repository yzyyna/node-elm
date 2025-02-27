"use strict";

import v1 from "./v1";
import v2 from "./v2";
import v3 from "./v3";
import v4 from "./v4";
import vTest from "./vTest";
import ugc from "./ugc";
import bos from "./bos";
import eus from "./eus";
import admin from "./admin";
import payapi from "./payapi";
import statis from "./statis";
import member from "./member";
import shopping from "./shopping";
import promotion from "./promotion";

export default (app) => {
  // app.get('/', (req, res, next) => {
  // 	res.redirect('/');
  // });
  console.log(`Devil server proxy config(express.use())...`);
  app.use("/v1", v1);
  app.use("/v2", v2);
  app.use("/v3", v3);
  app.use("/v4", v4);
  app.use("/vtest", vTest);
  app.use("/ugc", ugc);
  app.use("/bos", bos);
  app.use("/eus", eus);
  app.use("/admin", admin);
  app.use("/payapi", payapi);
  app.use("/member", member);
  app.use("/statis", statis);
  app.use("/shopping", shopping);
  app.use("/promotion", promotion);
};
