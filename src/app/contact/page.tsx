import { socials } from "@/lib/socials";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

export default function ContactPage() {
  return (
    <main>
      <section className="text-center py-16 ">
        <h1 className="text-3xl font-bold mb-8">CONTACT</h1>
        <div className="mt-8 flex justify-center px-4 w-full">
          <div className="w-full max-w-2xl">
            <FadeInSection className="py-0 px-0 my-8">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfm6Y1Lzy4hoiiMomc-vFnHBi37uUircuxG42efP2y98o-vTA/viewform?embedded=true"
                width="100%"
                height="645"
              >
                読み込んでいます…
              </iframe>
            </FadeInSection>
          </div>
        </div>
        <p className="mt-8">SNSのDMでもご連絡を受け付けております。</p>
        <div className="social-links flex justify-center space-x-6 py-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              {social.icon ? (
                <social.icon />
              ) : (
                <Image
                  src={social.image!}
                  alt={social.alt}
                  width={25}
                  height={25}
                />
              )}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
