import { socials } from '@/lib/socials';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main>
      <section className="text-center py-16 ">
        <h1 className="text-3xl font-bold mb-8">CONTACT</h1>
        <p className="text-center mb-8 max-w-2xl mx-auto px-4">問い合わせは以下のメールアドレスにてお願いいたします。</p>
        <p className='font-bold mb-8 text-2xl'>kamiyama.fol[at]gmail.com</p>
        <p>スパムメール防止のため、@を[at]に変更しております。</p>
        <p className="mt-8">SNSのDMでもご連絡を受け付けております。</p>
          <div className="social-links flex justify-center space-x-6 py-4">
          {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                  {social.icon ? (
                      <social.icon />
                  ) : (
                      <Image src={social.image!} alt={social.alt} width={25} height={25} />
                  )}
              </a>
          ))}
          </div>
      </section>
    </main>
  );
}
