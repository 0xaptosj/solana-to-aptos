import { client } from "./utils";

const run = async () => {
  const messageObjAddr =
    "0x535a99e8ebf445dbc5da319cf6e400d79cda9d32bf65eff018e3de5173258efc";
  client.view
    .get_message_struct({
      typeArguments: [],
      functionArguments: [messageObjAddr],
    })
    .then(console.log);
};

run();
