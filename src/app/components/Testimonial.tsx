// components/Testimonial.js
import Image from 'next/image';

type TestimonialType = {
  name: string;
  text: string;
  avatar?: string; // opcional, pode ser undefined ou vazio para usar uma imagem padrão
}
export default function Testimonial({ name, text } : TestimonialType) {
  // URL para uma imagem de avatar aleatória
  const avatarUrl = `https://picsum.photos/seed/${name}/100`;

  return (
    <div className="flex items-start space-x-4 bg-white p-8 rounded shadow-md">
      <div className="w-16 h-16 relative">
        <Image src={avatarUrl} alt={name} className="rounded-full" layout="fill" objectFit="cover" />
      </div>
      <div>
        <blockquote className="text-gray-700">{text}</blockquote>
        <div className="mt-2 font-semibold text-gray-900">{name}</div>
      </div>
    </div>
  );
}
