const TBeg = artifacts.require("TheBackEndGuru")

// USE CONTRACT INSTEAD OF MOCHA
contract("TheBackEndGuru",(accounts) => {

    it("Credit an NFT to a specific account", async () => {
        const TbegInstance = await TBeg.deployed()

        await TbegInstance.safeMint(accounts[1], "TheBackEndGuru.json")

        console.log(await TbegInstance.ownerOf(0))
    })


})


