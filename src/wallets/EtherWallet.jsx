import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

// eslint-disable-next-line react/prop-types
export const EtherWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return (
        <div>
            <button onClick={async function () {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                const hdNode = HDNodeWallet.fromSeed(seed);
                const child = hdNode.derivePath(derivationPath);
                const privateKey = child.privateKey;
                const wallet = new Wallet(privateKey);
                setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }}>
                Add ETH wallet
            </button>

            {addresses.map((p, index) => <div key={index}>
                Eth - {p}
            </div>)}
        </div>
    )
}