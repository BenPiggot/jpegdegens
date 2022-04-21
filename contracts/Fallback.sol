// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/hardhat/console.sol";

interface IFallback {
    function count() external;
}

contract Fallback {
    function foo() internal view {
        console.log("Hello World");
    }

    fallback() external payable {
        foo();
        console.log("feedback");

        revert("You shouldn't be here");
    }
}