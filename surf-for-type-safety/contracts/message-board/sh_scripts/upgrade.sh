#!/bin/sh

set -e

echo "##### Upgrade module #####"

# Profile is the account you used to execute transaction
# Run "aptos init" to create the profile, then get the profile name from .aptos/config.yaml
PUBLISHER_PROFILE=testnet-profile-1

CONTRACT_ADDRESS=$(cat contract_address.txt)

aptos move upgrade-object-package \
  --object-address $CONTRACT_ADDRESS \
  --named-addresses message_board_addr=$CONTRACT_ADDRESS \
  --profile $PUBLISHER_PROFILE \
  --assume-yes
