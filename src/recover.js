const algosdk = require('algosdk');

const port="";
const token={
    "x-api-key": process.env.API // create a .env file in the root folder and update your API key there
};

/*TestNet URL */
const Testserver="https://testnet-algorand.api.purestake.io/ps2"; 
let client = new algosdk.Algodv2(token,Testserver,port);

//function to authenticate address

auth = (mnemonic) =>{
    const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);
    
    try {
        const address = recoveredAccount.addr;
        console.log(address) 
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = auth 