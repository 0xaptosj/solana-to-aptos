import {
  Account,
  Aptos,
  AptosConfig,
  Ed25519PrivateKey,
  Network,
} from "@aptos-labs/ts-sdk";
import { createSurfClient } from "@thalalabs/surf";
import { ABI } from "@repo/move-contract-abis/src/message_board_abi";

export const client = createSurfClient(
  new Aptos(
    new AptosConfig({
      network: Network.TESTNET,
    })
  )
).useABI(ABI);

export const account = Account.fromPrivateKey({
  privateKey: new Ed25519PrivateKey(
    "0xcb908e3373acfc7be558ca864b63e483da4e451629ed98695a8d1ad3e750fa29"
  ),
});
