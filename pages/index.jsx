import Head from "next/head"
import Image from "next/image"
// import CustomHeader from "../components/CustomHeader"
import Header from "../components/Header"
import LotteryEntrace from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Smart Contract Raffle</title>
                <meta name="description" content="Smart contract raffle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mx-4 my-4">
                {/* <CustomHeader /> */}
                <Header />
                <LotteryEntrace />
            </main>
        </div>
    )
}
