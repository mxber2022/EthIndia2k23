const hre = require("hardhat");

async function main() {

  // const contract_content = await hre.ethers.deployContract("Content", ["0x7199D548f1B30EA083Fe668202fd5E621241CC89"], {gasPrice: 1817260});
  // await contract_content.waitForDeployment()
  // console.log(contract_content.target);



  // const contract_GovernanceToken = await hre.ethers.deployContract("GovernanceToken", ["0x7199D548f1B30EA083Fe668202fd5E621241CC89"], {gasPrice: 1817260});
  // await contract_GovernanceToken.waitForDeployment()
  // console.log(contract_GovernanceToken.target);  


  
  const contract_GovernanceContract = await hre.ethers.deployContract("GovernanceContract", ["0x82a288B3D29a18e24a8f7776f222D91B757266cb"], {gasPrice: 1817260});
  await contract_GovernanceContract.waitForDeployment()
  console.log(contract_GovernanceContract.target);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

