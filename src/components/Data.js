import { RectangleGroupIcon, PlusCircleIcon, ArrowPathIcon, CpuChipIcon, BanknotesIcon, HomeIcon, StarIcon } from '@heroicons/react/24/outline'
import { BnbIcon, BtcIcon, EthIcon, TetherIcon } from "@/components/Crypto";

export const Navigations =[
    {
    title: 'Dashboard',
    icon: RectangleGroupIcon,
    path: '/',
    },
    {
    title: 'Buy',
    icon: PlusCircleIcon,
    path: '/buy',
    },
    {
    title: 'Swap',
    icon: ArrowPathIcon,
    path: '/swap',
    },
    {
    title: 'Stake',
    icon: BanknotesIcon,
    path: '/stake',
    },
    {
    title: 'Bridge',
    icon: CpuChipIcon,
    path: '/bridge',
    },
    {
        title: 'Watchlist',
        icon: StarIcon,
        path: '/watchlist'
    }
]

export const coins = [
    {
        name: "Ethereum",
        icon: EthIcon,
        alias: "ETH"
    },
    {
        name: "Tether",
        icon: TetherIcon,
        alias: "TETHER"
    },
    {
        name: "Bitcoin",
        icon: BtcIcon,
        alias: "BTC"
    },
    {
        name: "Binance Coin",
        icon: BnbIcon,
        alias: "BNB"
    },
]
