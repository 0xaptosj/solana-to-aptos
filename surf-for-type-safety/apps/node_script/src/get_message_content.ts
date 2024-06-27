import { client } from "./utils";

const run = async () => {
  const messageObjAddr =
    "0xd3d7eef905b8b3a5cf32fb5fc4711c5360ff12c1e775863b4a896c705c9cd5f7";
  client.view
    .get_message_content({
      typeArguments: [],
      functionArguments: [messageObjAddr],
    })
    .then(console.log);
};

run();
