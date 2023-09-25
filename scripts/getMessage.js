const hre = require("hardhat");
const { ethers } = require("ethers");

async function getStorageValue(rpcURL, contractAddress, slotNumber) {
    const provider = new ethers.getDefaultProvider(rpcURL);

    const storageValue = await provider.getStorage(contractAddress, slotNumber);
    
    return `Storage Value at Slot ${slotNumber}: 0x${storageValue}`;
}

async function main() {
    const contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";
    const slotNumber = 0;
    const rpcURL = hre.network.config.url;

    const printLogs = {
        contract: contractAddress,
        slotNumber,
        rpcURL,
    };

    console.log(printLogs);

    try {
        const result = await getStorageValue(rpcURL, contractAddress, slotNumber);
        console.log("\nResponse:");
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
