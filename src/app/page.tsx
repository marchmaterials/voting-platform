import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/icon.png"
          alt="march logo"
          width={100}
          height={100}
          priority
        />

        <div className="flex gap-4 items-center flex-col text-center">
          <h1 className="font-bold text-4xl">Just materials & architecture</h1>
          <h4>(No BS.)</h4>
          <h1 className="font-bold text-2xl">
            We are the new visual discovery platfrom for architects.
          </h1>
          <h4>...with a focus on sustainable and affordable materials.</h4>
        </div>
        <div className="flex-col">
          <a
            href="https://forms.fillout.com/t/kweQHzpMbAus"
            target="_blank"
            rel="noopener"
          >
            <button
              className="bg-black min-w-48 hover:opacity-75 text-white font-bold py-2 px-4 rounded-full"
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
            className="rounded-lg"
          ></video>
          <Image
            src="/march-ex-search.png"
            alt="march app example search results"
            sizes="45vw"
            width={800}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="/march-ex-project.png"
            alt="march app example project details overlay"
            sizes="45vw"
            width={800}
            height={200}
            className="rounded-lg"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          href="https://forms.fillout.com/t/kweQHzpMbAus"
          target="_blank"
          rel="noopener"
        >
          <button
            className="bg-black min-w-48 hover:opacity-75 text-white font-bold py-2 px-4 rounded-full"
            type="button"
          >
            Join the Waitlist
          </button>
        </a>
      </footer>
    </div>
  );
}
