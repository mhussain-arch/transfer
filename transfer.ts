const {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
    airdropIfRequired,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");
require("dotenv/config");
const { getKeypairFromEnvironment } = require("@solana-developers/node-helpers");

const suppliedToPubKey = process.argv[2] || null;

if (!suppliedToPubKey) {
    console.error("Please provide a public key to send to");
    process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`suppliedToPubKey: ${suppliedToPubKey}`);

const toPubkey = new PublicKey(suppliedToPubKey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log("Loaded our own keypair, the destinatiion public key, and connected to Solana",);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;
// console.log("Wallet pub key: ", senderKeypair.publicKey);
const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);
console.log("Transaction added!");
const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
]);

console.log(
    `💵 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}.`,
);
console.log(`Transaction signaure is ${signature}`);