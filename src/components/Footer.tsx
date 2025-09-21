import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex flex-row items-center justify-between container">
            <div className="flex flex-row" >
                <a
                    href="https://www.instagram.com/marchmaterials/"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/instagram.svg"
                        alt="instagram logo"
                        width={30}
                        height={30}
                        priority
                    />
                </a>
                < a
                    href="https://www.linkedin.com/company/marchmaterials/"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/linkedin.svg"
                        alt="linkedin logo"
                        width={30}
                        height={30}
                        priority
                    />
                </a>
                < Link href="/imprint" className="pl-1 text-link underline">Imprint</Link>
            </div>
            < div className="flex flex-row justify-center items-center gap-2 h-10" >
                <Image
                    src="/avant-now.png"
                    alt="avant now accelerator fem track logo"
                    width={60}
                    height={20}
                    priority
                />
                <Image
                    src="https://www.berlin.de/i9f/r1/images/logo_berlin_m_srgb.svg"
                    alt="Berlin Senat Logo"
                    width={120}
                    height={20}
                    priority
                />
                <Image
                    src="/EUlogo.png"
                    alt="kofinanziert von der Europäischen Union"
                    width={180}
                    height={10}
                    priority
                />
            </div>
        </div >)
}