import { useEffect } from "react"
import { useMoralis } from "react-moralis"

export default function CustomHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined")
            if (window.localStorage.getItem("connected")) enableWeb3()
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found!")
            }
        })
    }, [])

    return (
        <div className="flex justify-between">
            <h1 className="text-xl font-bold">Decentralized Raffle</h1>
            {account ? (
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    // onClick={async () => {
                    //     await enableWeb3()
                    // }}
                >
                    Connected to {account.slice(0, 4)}...{account.slice(account.length - 4)}
                </button>
            ) : (
                <button
                    className={
                        isWeb3EnableLoading
                            ? "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            : "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    }
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined")
                            window.localStorage.setItem("connected", "injected")
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect
                </button>
            )}
        </div>
    )
}
