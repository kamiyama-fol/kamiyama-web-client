import Image from "next/image";
import { socials } from "@/lib/socials";

export default function ProfilePage() {
  return (
    <main>
      <section className="py-40px px-0 border-b border-gray-700 my-16">
        <h1 className="text-3xl font-bold text-center mb-8">CONTENTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {socials.map((social) => (
            <div key={social.name} className="text-center">
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.image!}
                  alt={social.alt}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
                <p className="mt-2">{social.pageLabel}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
