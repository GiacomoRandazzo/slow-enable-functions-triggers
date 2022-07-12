import { withFunctionTriggersDisabled } from "@firebase/rules-unit-testing";
import debug from "debug";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const PROJECT_ID = "demo";
const log = debug(PROJECT_ID);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

log("outer: START");
await withFunctionTriggersDisabled(
  { host: "localhost", port: 4400 },
  async () => {
    log("inner: START");
    await new Promise((resolve) => setTimeout(resolve, 500));
    log("inner: STOP");
  }
);
log("outer: STOP");
