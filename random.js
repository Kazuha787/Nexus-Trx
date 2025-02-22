require('dotenv').config();
const { ethers } = require("ethers");

// Load environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;
const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Fungsi untuk membuat alamat random
function generateRandomAddress() {
    return ethers.Wallet.createRandom().address;
}

// Fungsi untuk mengirim native token
async function sendNativeToken(recipient, amount) {
    try {
        console.log(`🔹 Mengirim ${amount} Nexus native token ke ${recipient}...`);

        const tx = await wallet.sendTransaction({
            to: recipient,
            value: ethers.parseEther(amount.toString()) // Convert ke wei
        });

        console.log("Tx hash:", tx.hash);
        await tx.wait();
        console.log(`✅ Transaksi sukses ke ${recipient}!`);
    } catch (error) {
        console.error(`❌ Gagal mengirim ke ${recipient}:`, error);
    }
}

// Kirim ke beberapa alamat random
async function sendToRandomAddresses(count, amount) {
    for (let i = 0; i < count; i++) {
        let randomAddress = generateRandomAddress();
        console.log(`🎯 Alamat Random #${i + 1}: ${randomAddress}`);
        await sendNativeToken(randomAddress, amount);
    }
}

// Jumlah alamat random & jumlah token per transaksi
sendToRandomAddresses(50, 0.001); // Kirim 0.001 Nexus ke 50 alamat random
