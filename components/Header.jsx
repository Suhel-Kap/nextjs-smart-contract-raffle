import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="flex justify-between border-b-2 px-2 py-3 mb-3">
            <h1 className="text-2xl font-bold px-4 py-4">Decentralized Raffle</h1>
            <div className="px-4 py-1">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
