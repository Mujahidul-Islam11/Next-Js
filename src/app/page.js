import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>This is home</h3>
        <div className="flex gap-3">
          {[1, 2, 3, 4, 5].map((el) => (
            <Image key={el} width={500} src={"/download.jpeg"} />
          ))}
        </div>
      </main>
    </div>
  );
}
