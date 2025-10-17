import Link from "next/link";
import Instagram from "./Instagram";
import { Mail } from 'lucide-react';
import Image from "next/image";

export default function VotingResultsFooter() {
    return (
        <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto gap-8">
            <div>
                <h2 className="text-2xl"><span className="font-bold">MARCH</span>{" "}is a new discovery platform for {" "}</h2>
                <h2 className="text-2xl">architects and designers</h2>
            </div>
            <Link
                href="https://forms.fillout.com/t/kweQHzpMbAus"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center w-48 justify-center bg-march_green text-black px-4 py-2 rounded-full font-semibold hover:opacity-75 transition-colors"
            >
                Reserve My Spot
            </Link>
            <div className="flex flex-row items-center justify-center gap-2">
                <Link href="https://www.instagram.com/marchmaterials/">
                    <Instagram />
                </Link>
                <Link href="mailto:info@marchmaterials.com">
                    <Mail size={48} />
                </Link>
                <Link href="https://www.linkedin.com/company/marchmaterials/">
                    <Image src={"/InBug-Black.png"} width={42} height={42} alt="LinkedIn logo" />
                </Link>
            </div>
        </div>
    )
}