require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain hole just kiwi supply seminar'; 
let testAccounts = [
"0x11dbb56f1ae1678ada3c6e90c0e30c844bfd2c4b17f8c47377c96b8638f2e9ff",
"0xd9eebb85533d43244fb4634e4b0677731261b4598ecc277e390c64043a6a6869",
"0x8fde444a26765ba4e29a088d0d8099dc02dfaa8cf54197b39b3dbd26b77df2d6",
"0x631f1ed17f4068374cbccab66567d3ab9ff099988081ad893002de5ea50f7f97",
"0xf837523379236066b6a292fddf0512be3a94f19764a0e7c77e06e94bae88d41f",
"0xfd79c14cf9bb38a93b85220989a4187ca8519823224dec6656e7349b03e0cdaf",
"0x549c83a6e7b9205991fc6570802824b5ad361d7367158decb3bbf103d40db822",
"0x6c020b588d643f7ea454069dc90ee336ea7450b328b861cb35d5f87416cb3217",
"0xcb6ba8f300936aedd7eceac03cc01a0963dc7dfe90d12cc99b7c0a0ddf74d307",
"0x117e1551c5d872bbac74dae3484af1bcd61e2c035fe1666717beae4c159de489"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


