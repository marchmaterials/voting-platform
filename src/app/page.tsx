import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
              MARCH {" "}
              <span className="font-normal">
                is a new discovery platform for architects and designers. Get inspired and explore new materials through built projects.
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
                Reserve My Spot
              </button>
            </a>
          </div>
          {/* <div className="flex flex-col justify-center gap-10">
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
          </div> */}
        </main >
      </div >
      <footer className="flex justify-center">
        <Footer />
      </footer>
    </>
  );
}
