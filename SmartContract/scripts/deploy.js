const hre = require("hardhat");

async function main() {

  const contract_GovernanceToken = await hre.ethers.deployContract("GovernanceToken", { gasLimit: "4000000" });
  await contract_GovernanceToken.waitForDeployment()
  console.log(contract_GovernanceToken.target);  
  
  const contract_GovernanceContract = await hre.ethers.deployContract("GovernanceContract", contract_GovernanceToken.target, { gasLimit: "4000000" });
  await contract_GovernanceContract.waitForDeployment()
  console.log(contract_GovernanceContract.target);

  const contract_content = await hre.ethers.deployContract("Content", { gasLimit: "4000000" });
  await contract_content.waitForDeployment()
  console.log(contract_content.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

