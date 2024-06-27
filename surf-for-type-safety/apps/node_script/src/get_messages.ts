import { client } from "./utils";

const run = async () => {
  client.view
    .get_messages({
      typeArguments: [],
      functionArguments: [null, null],
    })
    .then(console.log);
};

run();
