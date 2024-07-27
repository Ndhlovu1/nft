# NFT-PROJECT

## DEPLOYING TO TRUFFLE BLOCKCHAIN

1. `> truffle develop`

2. Create a deployment script properly numbered

3. `> migrate`

**TO USE GANACHE, ADD IT TO THE truffle-config file**

`> truffle migrate --network ganache`


`> web3.eth.getAccounts()`

**MINT AN NFT**


`> const TheBackEndGuruInstance = await TheBackEndGuru.deployed()`

`> const TheBackEndGuruInstance.name()`

**WRITE A TRANSACTION**

`> const accounts = await web3.eth.getAccounts()`


`> await TheBackEndGuruInstance.safeMint(accounts[1], "TheBackEndGuru.json")`

`> TheBackEndGuruInstance.ownerOf(0)`

`> TheBackEndGuruInstance.tokenURI(0)`