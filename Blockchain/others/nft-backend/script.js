const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('./build/contracts/MyContract.json');
// const address = '0xAD8eD8FBA46BA6bE9120d0aEc43109A0543b69d3';
// const privateKey = 'd448c9224e0bcf3a6475fb54a34056fb02ef469d1f5f8520bc0f6e443bde68c4';
// const infuraUrl = 'https://goerli.infura.io/v3/6d52ff7feeac467f8843d6051453c1c7'; 

const address = '0x4cf2980c87FFe9C5a3970Ee26C9fF449CbF24252';
const privateKey = 'f59908e3799bce3904aa960bd673fd61cf91f053deae70645262fd749fb0761c';
const infuraUrl='HTTP://127.0.0.1:8545'

//Hard way (web3#signTransaction() + web3#sendSignedTransaction())
// const init1 = async () => {
//   const web3 = new Web3(infuraUrl);
//   const networkId = await web3.eth.net.getId();
//   const myContract = new web3.eth.Contract(
//     MyContract.abi,
//     MyContract.networks[networkId].address
//   );

//   const tx = myContract.methods.setData(1);
//   const gas = await tx.estimateGas({from: address});
//   const gasPrice = await web3.eth.getGasPrice();
//   const data = tx.encodeABI();
//   const nonce = await web3.eth.getTransactionCount(address);

//   const signedTx = await web3.eth.accounts.signTransaction(
//     {
//       to: myContract.options.address, 
//       data,
//       gas,
//       gasPrice,
//       nonce, 
//       chainId: networkId
//     },
//     privateKey
//   );
//   console.log(`Old data value: ${await myContract.methods.data().call()}`);
//   const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
//   console.log(`Transaction hash: ${receipt.transactionHash}`);
//   console.log(`New data value: ${await myContract.methods.data().call()}`);
// }

// //Slightly easier (web3#sendTransaction())
// const init2 = async () => {
//   const web3 = new Web3(infuraUrl);
//   const networkId = await web3.eth.net.getId();
//   const myContract = new web3.eth.Contract(
//     MyContract.abi,
//     MyContract.networks[networkId].address
//   );
//   web3.eth.accounts.wallet.add(privateKey);

//   const tx = myContract.methods.setData(2);
//   const gas = await tx.estimateGas({from: address});
//   const gasPrice = await web3.eth.getGasPrice();
//   const data = tx.encodeABI();
//   const nonce = await web3.eth.getTransactionCount(address);
//   const txData = {
//     from: address,
//     to: myContract.options.address,
//     data: data,
//     gas,
//     gasPrice,
//     nonce, 
//     chain: 'rinkeby', 
//     hardfork: 'istanbul'
//   };

//   console.log(`Old data value: ${await myContract.methods.data().call()}`);
//   const receipt = await web3.eth.sendTransaction(txData);
//   console.log(`Transaction hash: ${receipt.transactionHash}`);
//   console.log(`New data value: ${await myContract.methods.data().call()}`);
// }

//Easy way (Web3 + @truffle/hdwallet-provider)
const init3 = async () => {
  const provider = new Provider(privateKey, infuraUrl); 
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );

  console.log(await myContract.methods.data().call());
  console.log(`Old data value: ${await myContract.methods.data().call()}`);
  const receipt = await myContract.methods.setData(5).send({ from: address });
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`New data value: ${await myContract.methods.data().call()}`);

  const nftContract = new web3.eth.Contract(
    NFT.abi,
    nftContract.networks[networkId].address
  );

  console.log(await nftContract.methods.getToken().call());



}

init3();
