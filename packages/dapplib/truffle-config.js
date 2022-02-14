require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift rifle magnet coin hunt kite tail slogan'; 
let testAccounts = [
"0xc2a95c50f7ac666bf0dc9995deb6b843e73c59dd37fd1d2aa2d4e3afb3a1f4f0",
"0x5f8e5498a48314a4ce0c40d5d57b1b170b500b3db25327eb25b7c769af49c1a5",
"0xe95d3c5774f4532214c40402550a3a7b2b92b0eb87fd827bb17f240e81197a2c",
"0x1f9363b472ef24383db8d636c9e1c52d44ac27bdf4284c5b8562c2d4b62ee0c1",
"0x8c8ae69ef476d8fd73cb6f1fe1b9425f2d062c3ea996d5238dbb088d0cdd6665",
"0x2490391d305b02e4c77af8d1e2fc3536076a8a4e24178c79fa6c9a2dcb3bbb1a",
"0xb2360fdb6e28bc73dc62334b6761bec32879e94f1f848cb5afb2b51792f6e26f",
"0xe9ba9871d49e8eb3d8cddc259b8e2f214699fbee97ba9feaec3cb08704ed25af",
"0x84be0bc1de346e40fdb89db93231ebf041d284c627006c2165f4abc1a8199ec0",
"0x68e181362ae6af7b6931c8e4724e78a12063e5a2eb822673c889ceb8f88933d7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

