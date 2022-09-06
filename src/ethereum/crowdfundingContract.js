import { web3 } from "./web3";
import CrowdfundingAbi from "./crowdfundingAbi";

export function createContract(contractAddress) {
    return new web3.eth.Contract(CrowdfundingAbi, contractAddress)
}