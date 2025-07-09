"use client"
import Image from "next/image";
import { ConfigProvider, theme as antdTheme } from "antd";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
      }}
    >
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <Image
            src="/icon.png"
            alt="march logo"
            width={100}
            height={100}
            priority
          />

          <div className="flex gap-4 items-center flex-col text-center">
            <h1 className="font-bold text-2xl m-5 w-3/4">
              MARCH is a visual sourcing engine -{" "}
              <span className="font-normal">
                where architects, designers, and clients come to get inspired and
                source materials through built projects.
              </span>
            </h1>
          </div>
          <div className="flex-col">
            <a
              href="https://forms.fillout.com/t/kweQHzpMbAus"
              target="_blank"
              rel="noopener"
            >
              <button
                className="bg-green min-w-48 hover:opacity-75  font-bold py-2 px-4 rounded-full"
                type="button"
              >
                Join the Waitlist
              </button>
            </a>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <video
              autoPlay
              muted
              playsInline
              loop
              width={800}
              height={400}
              src="/prototype-better-quality.mov"
              className="rounded-lg shadow-xl"
            ></video>
          </div>
        </main>
        <footer className="row-start-3 flex flex-row gap-6 items-center justify-between container">
          <div className="flex flex-row">
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
            <a
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
          </div>
          <div className="flex flex-row justify-around gap-2 h-10">
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
        </footer>
      </div>
    </ConfigProvider>
  );
}
