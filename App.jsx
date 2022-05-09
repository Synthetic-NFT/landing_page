
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NFTMarketPlace from "./components/NFTMarketPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|nft-market-place)">
          <NFTMarketPlace {...nFTMarketPlaceData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const nFTMarketPlaceData = {
    dappComingSoon: "dApp coming soon",
    docs: "Docs",
    twitter: "Twitter",
    democratizingInvest: "Democratizing investing in your favorite NFT collections",
    learnMore: "Learn More",
    nftsyIsAnInnovati: "NFTSy is an innovative synthetic NFT index derivatives, providing long & short exposure to the NFT asset collections.",
    rectangle184: "/img/rectangle-184@1x.png",
    bayc1: "/img/bayc-1@2x.png",
    image46: "/img/image-46@2x.png",
    image47: "/img/image-47@2x.png",
    whatIsNftsy: "What is NFTSy",
    nftsyIssuesErc20T: <React.Fragment>NFTSy issues ERC20 tokens whose price tracks the floor price of different NFT collections. <br />These tokens give you exactly the same profit and loss as if you are hodling (a fraction of) an actual NFT.<br />Users can choose to deposit with either ETH or NFTs to issue these ERC20 tokens.</React.Fragment>,
    whyNftsy: "Why NFTSy",
    instantaneousLiquidityForNfts: "Instantaneous Liquidity for NFTs",
    nftHodlersHaveAcc: "NFT hodlers have access to instataneous liquidity by minting synthetic tokens with NFTs and selling synthetic tokens.",
    unparalleledAccessibility: "Unparalleled Accessibility",
    nonNftHodlersOnly: "Non-NFT hodlers only need ETH to open long and short positions",
    earnPassiveIncomeOnNfts: "Earn Passive Income on NFTs",
    nftHoldersCanEarn: "NFT holders can earn passive income from NFTSy protocol fees through yield farming by depositing NFTs",
    nftsy: "NFTSy",
    researchDocumentationLink: <React.Fragment>Research<br />Documentation link</React.Fragment>,
    communityTwitterDiscordTelegram: <React.Fragment>Community<br />Twitter<br />Discord<br />Telegram</React.Fragment>,
};

