## BlockFunding : Crowdfunding Platform Powered by Ethereum Blockchain

The Platform is live on Goerli Test Network and available to use at : [blockfunding.vercel.app](https://blockfunding.vercel.app/)

BlockFunding is an innovative blockchain-powered crowdfunding platform designed to foster global giving securely and transparently. Leveraging cutting-edge technologies like Next.js, React.js, Firebase, web3.js, and Solidity, this platform ensures a seamless user experience. With a sleek interface crafted using Chakra UI, BlockFunding empowers users to support causes they care about while maintaining trust through blockchain transparency. Whether you're a donor or a fundraiser, BlockFunding provides a safe and efficient space to engage in philanthropy, making a positive impact on a global scale.

## Tech Stack

- Next JS
- Chakra UI
- Solidity
- Web3.js

## To run the application locally

- Fork the Project
- run `yarn install` to install all the dependencies
- run `yarn dev` to run the application locally

## Prerequisites to create Campaign and Contribute

1. Install **Metamask** as Google Chrome Extension and Create an account.
2. Get 0.01 ether free by giving the ethereum address <br>(`https://goerlifaucet.com/`)

## To Deploy your own Contract

1. Create an account in [https://infura.io](https://infura.io/)
2. Create .env file in Ethereum directory and add these line to it.
   > mnemonic = 'Your mnemonic code or account private key!' <br>
   > link = 'Your infura end point link '
3. Do the Changes that you want to do inside the Solidity File
4. Compile the Contract
   `node compile.js`
5. Deploy Contract by going into smart-contract Directory and run.
   `node deploy.js`

   Copy the contract deploy address and replace it in factory.js file.

6. Replace your "infura end point link" in web3.js file
