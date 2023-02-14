const {

    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Connection
} = require("@solana/web3.js");

// generating the public key and private key for the 

const newPair = new Keypair();
const publickey_ns = new PublicKey(newPair._keypair.publicKey);
const publickey = new PublicKey(newPair._keypair.publicKey).toString();
const argument = process.argv;
const address  =  argument[2];
console.log(publickey);
const privatekey =  newPair._keypair.secretKey ; 
console.log(privatekey);
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const getBalance  = async() =>{
   
    const mywallet =  await Keypair.fromSecretKey(privatekey);
    const walletBalance = await   connection.getBalance(new PublicKey(address));
    console.log(`${parseInt(walletBalance)/LAMPORTS_PER_SOL}SQL`);
}
const airsol = async () =>{
    const mywallet =  await Keypair.fromSecretKey(privatekey);
    const signature = await connection.requestAirdrop(new PublicKey(address), 2* LAMPORTS_PER_SOL); // also make from the wallet 
    await connection.confirmTransaction(signature);
}
const main = async ()=>{
   await  getBalance();
   await  airsol();
   await  getBalance();
}
main();

// address =  AvbLXro89ebZ31iocdGByWms3d2R5aRn2dme2JfW6Ao7
