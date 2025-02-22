require("dotenv").config();const{ethers:e}=require("ethers");console.log(`
██╗  ██╗ █████╗ ███████╗██╗   ██╗██╗  ██╗ █████╗ 
██║ ██╔╝██╔══██╗╚══███╔╝██║   ██║██║  ██║██╔══██╗
█████╔╝ ███████║  ███╔╝ ██║   ██║███████║███████║
██╔═██╗ ██╔══██║ ███╔╝  ██║   ██║██╔══██║██╔══██║
██║  ██╗██║  ██║███████╗╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
                                                 
🚀 Nexus Token Distribution Bot
`);const PRIVATE_KEY=process.env.PRIVATE_KEY,RPC_URL=process.env.RPC_URL,provider=new e.JsonRpcProvider(RPC_URL),wallet=new e.Wallet(PRIVATE_KEY,provider);function generateRandomAddress(){return e.Wallet.createRandom().address}async function sendNativeToken(n,t){try{console.log(`🚀 Sending ${t} Nexus native token to ${n}...`);let o=await wallet.sendTransaction({to:n,value:e.parseEther(t.toString())});console.log(`🔗 Tx hash: ${o.hash}`),await o.wait(),console.log(`✅ Transaction successful to ${n}!`)}catch(s){console.error(`❌ Failed to send to ${n}:`,s)}}async function sendToRandomAddresses(e,n){console.log("\uD83C\uDF1F Starting Nexus Token Distribution...");for(let t=0;t<e;t++){let o=generateRandomAddress();console.log(`🎯 Random Address #${t+1}: ${o}`),await sendNativeToken(o,n)}console.log("✨ All transactions completed successfully! ✨")}sendToRandomAddresses(50,.000001);
