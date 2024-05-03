import Image from 'next/image';

export default function Schema() {
  return (
    <div className="border-gray-200 px-4 lg:px-6 py-10">
      <div className="flex flex-col items-center mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Schéma zapojení</h2>
        <Image className="relative" src="/schema.png" alt="Schéma zapojení" width={1400} height={1750} priority />
      </div>
    </div>
  );
}
