require('dotenv').config()
const Web3 = require('web3');
const {assets} = require('../cjs');

const erc20abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

const web3 = new Web3(process.env.RPC);

(async () => {
  for (const asset of assets) {
    try {
      if (asset.symbol === 'ETH') continue;
      if (asset.symbol === 'MKR') continue; // MKR returns bytes for symbol
      if (asset.symbol === 'SAI') continue; // SAI returns bytes for symbol
      const contract = new web3.eth.Contract(erc20abi, asset.addresses[1]);
      const symbol = await contract.methods.symbol().call();
      const decimals = await contract.methods.decimals().call();
      if (asset.symbol !== symbol) {
        console.warn(`🚧 Different symbol for ${asset.symbol} -> ${symbol}`);
      }
      if (asset.decimals !== parseInt(decimals)) {
        console.error(`❌  Invalid decimals for ${asset.symbol}: ${asset.decimals} -> ${parseInt(decimals)}`);
      }
    } catch (err) {
      console.error(`🚧 Error getting data for ${asset.symbol}`);
      console.error(err);
    }
  }
})();
