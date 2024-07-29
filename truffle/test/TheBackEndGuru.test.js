const TBeg = artifacts.require("TheBackEndGuru")
const truffleAssert = require("truffle-assertions")


// USE CONTRACT INSTEAD OF MOCHA
contract("TheBackEndGuru",(accounts) => {

    it("Credit an NFT to a specific account", async () => {
        const TbegInstance = await TBeg.deployed()

        let TxResult = await TbegInstance.safeMint(accounts[1], "TheBackEndGuru.json")

        //VERIFYING LOGS
        truffleAssert.eventEmitted(TxResult, "Transfer", {from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0") })

        //console.log(TxResult.logs[0].args)

        assert.equal(await TbegInstance.ownerOf(0), accounts[1]), "Owner of Token 1 is not Equal to 2nd Account"

        //console.log(await TbegInstance.ownerOf(0))


    })




})


