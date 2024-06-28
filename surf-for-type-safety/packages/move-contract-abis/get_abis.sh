#! /bin/bash

NETWORK=testnet

CONTRACT_ADDRESS=$(cat ../../contracts/message-board/contract_address.txt)

MODULE_NAME=message_board

echo https://fullnode.$NETWORK.aptoslabs.com/v1/accounts/$CONTRACT_ADDRESS/module/$MODULE_NAME 

echo "export const ABI = $(curl https://fullnode.$NETWORK.aptoslabs.com/v1/accounts/$CONTRACT_ADDRESS/module/$MODULE_NAME | sed -n 's/.*"abi":\({.*}\).*}$/\1/p') as const" > src/${MODULE_NAME}_abi.ts
