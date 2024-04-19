// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// NFTMarketplace contract that extends ERC721URIStorage
contract NFTMarketplace is ERC721URIStorage {
    uint256 private _nextTokenId = 1; // Initialize the next token ID to 1, replacing the Counters
    address payable platformOwner; // Owner of the platform 
    uint reward = 0.0001 ether; // Set a reward value for token listing

    // Struct for a token listed on the marketplace
    struct ListedToken {
        uint256 tokenId; // Unique token ID
        address payable owner; // Owner of the token
        uint256 price; // Price of the token
        bool isListed; // Flag indicating whether the token is listed for sale
    }

    // Mapping from seller address to the number of tokens they have listed
    mapping(address => uint256) private sellerListedTokens;

    // Mapping from token ID to the listed token's details
    mapping(uint256 => ListedToken) private idToListedToken;

    // Event emitted when a token is listed on the marketplace
    event TokenListed(
        uint256 indexed tokenId,
        address owner,
        uint256 price,
        bool isListed
    );

    // Constructor to set the platform owner and initialize the ERC721 token with a name and symbol
    constructor() ERC721("MarketplaceNFT", "MPNFT") payable {
        platformOwner = payable(msg.sender); // Set the platform owner to the contract deployer
    }

    // Function to create and list a new token on the marketplace
    function createAndListToken(string memory tokenURI, uint256 price) public payable{
        // Ensure a seller cannot list more than 3 tokens at a time
        require(sellerListedTokens[msg.sender] < 3, "You can only list up to 3 tokens at a time.");

        uint256 newTokenId = _nextTokenId++; // Use the next available token ID and increment it for the next token

        // Mint a new token for the sender with the newTokenId and set its URI
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        // Add the new token to the idToListedToken mapping with its details
        idToListedToken[newTokenId] = ListedToken({
            tokenId: newTokenId,
            owner: payable(msg.sender),
            price: price,
            isListed: true
        });

        // Increment the count of tokens listed by the seller
        sellerListedTokens[msg.sender] += 1;

        // Transfer the listing reward to the token's owner
        idToListedToken[newTokenId].owner.transfer(reward);

        // Emit the TokenListed event
        emit TokenListed(newTokenId, msg.sender, price, true);
    }

    // Function to allow buyers to purchase a listed token
    function buyToken(uint256 tokenId) public payable {
        // Retrieve the token's details from the mapping
        ListedToken storage token = idToListedToken[tokenId];

        // Ensure the token is listed for sale
        require(token.isListed, "This token is not listed.");
        
        // Ensure the buyer has submitted at least the asking price
        require(msg.value >= token.price, "Please submit the asking price to complete the purchase.");
        
        // Prevent the owner from buying their own token
        require(token.owner != msg.sender, "You cannot buy your own token.");

        // Transfer 60% of the purchase price to the seller
        token.owner.transfer(msg.value * 60 / 100);

        // Transfer 40% of the purchase price to the platform owner
        payable(platformOwner).transfer(msg.value * 40 / 100);

        // Transfer the token to the buyer
        _transfer(token.owner, msg.sender, tokenId);

        // Mark the token as not listed since it has been sold
        token.isListed = false;

        // Decrement the count of tokens the seller has listed for sale
        sellerListedTokens[token.owner] -= 1;
    }

    // Function to get the number of tokens a seller has listed
    function getSellerListedTokensCount(address seller) public view returns (uint256) {
        return sellerListedTokens[seller];
    }

    // Function to change the price of a listed token
    function changeTokenPrice(uint256 tokenId, uint256 newPrice) public {
        // Retrieve the token's details from the mapping
        ListedToken storage token = idToListedToken[tokenId];

        // Ensure only the owner can change the price
        require(msg.sender == token.owner, "Only the token owner can change the price.");

        // Ensure the token is currently listed
        require(token.isListed, "Token must be listed to change the price.");

        // Update the token price
        token.price = newPrice;

        // Emit an event for changing the token price
        emit TokenListed(tokenId, msg.sender, newPrice, true);
    }

    // Function to remove a token from the marketplace
    function removeToken(uint256 tokenId) public {
        // Retrieve the token's details from the mapping
        ListedToken storage token = idToListedToken[tokenId];

        // Ensure only the owner can remove the token
        require(msg.sender == token.owner, "Only the token owner can remove the token.");

        // Ensure the token is currently listed
        require(token.isListed, "Token must be listed to be removed.");

        // Mark the token as not listed
        token.isListed = false;

        // Decrement the count of tokens the seller has listed for sale
        sellerListedTokens[msg.sender] -= 1;

        // Emit an event for the token removal
        emit TokenListed(tokenId, msg.sender, token.price, false);

    }
}