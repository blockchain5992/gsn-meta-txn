// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@opengsn/contracts/src//BaseRelayRecipient.sol";

contract Simple_Token is ERC20, BaseRelayRecipient {
    constructor(address _forwarder, uint256 initialsupply) ERC20("MyToken", "MYT") {
        _setTrustedForwarder(_forwarder);
        _mint(_msgSender(), initialsupply);
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mintToken(address user, uint256 amount) public {
        _mint(user, amount);

    }

    function _msgSender()
        internal
        view
        override(ERC2771Recipient, Context)
        returns (address sender)
    {
        return super._msgSender();
    }

    function _msgData()
        internal
        view
        override(Context, BaseRelayRecipient)
        returns (bytes calldata)
    {
        return super._msgData();
    }
}