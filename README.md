## Usage

Run the transfer script using `esrun` and provide the recipient's public address as an argument:
# Solana Transfer Lab

This project demonstrates how to transfer SOL tokens between wallets on the Solana blockchain.

## Overview

The lab focuses on creating a simple script to transfer SOL from a sender's wallet to a recipient's wallet. It uses the Solana Web3.js library to interact with the blockchain.

## Prerequisites

- Node.js installed on your system.
- A Solana wallet with sufficient SOL for transactions.
- Access to the Solana Devnet or Mainnet.

## Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd transfer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure the environment:
    - Create a `.env` file in the root directory.
    - Add the sender's wallet secret key to the `.env` file as `SECRET_KEY`.

4. Update the recipient's wallet address in the script.

## Usage

Run the transfer script:
```bash
npx esrun transfer.ts <recipient pubkey>
```

## Notes

- Ensure the sender's wallet has enough SOL to cover the transfer amount and transaction fees.
- Use caution when handling private keys. Never expose them publicly.

## Resources

- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [Solana Official Website](https://solana.com/)

## License

This project is Unlicensed.  