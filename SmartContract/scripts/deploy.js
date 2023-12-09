const hre = require("hardhat");

async function main() {

  // const contract_GovernanceToken = await hre.ethers.deployContract("GovernanceToken", ["0x7199D548f1B30EA083Fe668202fd5E621241CC89"]);
  // await contract_GovernanceToken.waitForDeployment()
  // console.log(contract_GovernanceToken.target);  


  
  const contract_GovernanceContract = await hre.ethers.deployContract("GovernanceContract", ["0x541CC71120f5A96a2fc01f33C7597740cDC9D80a"]);
  await contract_GovernanceContract.waitForDeployment()
  console.log(contract_GovernanceContract.target);



  //  const contract_content = await hre.ethers.deployContract("Content", ["0x7199D548f1B30EA083Fe668202fd5E621241CC89"]);
  //  await contract_content.waitForDeployment()
  //  console.log(contract_content.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

