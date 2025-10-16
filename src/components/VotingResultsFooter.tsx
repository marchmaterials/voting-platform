import Link from "next/link";
import Instagram from "./Instagram";

export default function VotingResultsFooter() {
    return (
        <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto gap-8">
            <div>
                <h2 className="text-2xl font-bold">MARCH is a new discovery platform for {" "}</h2>
                <h2 className="text-2xl font-bold">architects and designers</h2>
            </div>
            <Link
                href="https://forms.fillout.com/t/kweQHzpMbAus"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center w-48 justify-center bg-march_green text-black px-4 py-2 rounded-full font-semibold hover:opacity-75 transition-colors"
            >
                Reserve My Spot
            </Link>
            <Link href="https://www.instagram.com/marchmaterials/">
                <Instagram />
            </Link>
        </div>
    )
}