import { ethers } from "ethers";

function getEth() {
    // @ts-ignore
    const eth =  window.ethereum;
    if (!eth) {
        throw new Error('Get metamask and a positive attitude');
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = eth.request({
        method: "eth_accounts"
    }) as string[];

    return accounts && accounts.length;
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = eth.request({
        method: "eth_accounts"
    }) as string[];

    return accounts && accounts.length;
}