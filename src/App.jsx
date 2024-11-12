import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './wallets/SolanaWallet';
import { EtherWallet } from './wallets/EtherWallet';

function App() {
  const [mnemonic, setMnemonic] = useState('')
  return (
    <>
      <input type="text" value={mnemonic}></input>
      <button onClick={async function () {
        const mn = generateMnemonic();
        setMnemonic(mn)
      }}>
        Create Seed Phrase
      </button>

      {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
      {mnemonic && <EtherWallet mnemonic={mnemonic} />}
    </>
  )
}

export default App
