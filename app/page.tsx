import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#00001A] bg-gradient">
      <div className="">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/solarsoft_logo.svg"
          alt="Solarsoft"
          width={240}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
