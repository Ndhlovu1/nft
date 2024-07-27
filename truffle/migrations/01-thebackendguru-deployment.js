const tBEG = artifacts.require("TheBackEndGuru")

module.exports = async function(deployer, network, accounts) {

    const initialOwner = accounts[0]
    await deployer.deploy(tBEG, initialOwner)

    // Deploy somewhere
    // In the terminal type truffle develop
    // Afterwards type, migrate

}