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

async function run() {
    if (!await hasAccounts() && !await requestAccounts()) {
        throw new Error("Please let me take your money");
    }

    const hello = new ethers.Contract("", [], new ethers.providers.Web3Provider(getEth())); 
}

run();