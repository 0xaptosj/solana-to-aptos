#!/bin/sh

set -e

echo "##### Creating a new Aptos account #####"

aptos init \
  --network testnet \
  --profile testnet-profile-1
