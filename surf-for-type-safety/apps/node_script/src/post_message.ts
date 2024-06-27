import { client, account } from "./utils";

const run = async () => {
  client.entry
    .post_message({
      typeArguments: [],
      functionArguments: ["Hello, World!", 123, "0x123", null, null, null],
      account,
    })
    .then(console.log);
};

run();
