import Image from "next/image";
import Testimonial from "./components/Testimonial";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-pink-300 text-green-900 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-3xl font-bold mb-4 md:mb-0">Clínica Elah</div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold mb-2">Imersão em Saúde da Mulher</h1>
            <h2 className="text-2xl">Descubra o Segredo para uma Vida Saudável e Equilibrada</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-green-700 text-white py-3 px-6 rounded shadow-lg hover:bg-green-800 transition duration-300">Inscreva-se Agora!</button>
          </div>
        </div>
      </header>

      {/* Introdução */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-3/5 mb-6 md:mb-0">
            <Image
              src="https://picsum.photos/800/800"
              alt="Saúde da Mulher"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/5 md:pl-10">
            <p className="mb-6 text-xl leading-relaxed">
              Na Clínica Elah, acreditamos que a saúde da mulher vai além do físico. Nossa imersão é projetada para oferecer uma visão completa sobre a importância de uma vida saudável, abordando tanto o corpo quanto a mente.
            </p>
            <a href="#benefits" className="bg-green-700 text-white py-3 px-6 rounded shadow-lg hover:bg-green-800 transition duration-300 hover:underline">Descubra os Benefícios</a>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="benefits" className="bg-pink-100 py-16 pb-40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Benefícios de Participar da Imersão</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="h-10 w-10 text-green-700" />
              <p className="text-xl leading-relaxed">
                Aprimore sua saúde física com dicas de nutrição e exercícios personalizados
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="h-10 w-10 text-green-700" />
              <p className="text-xl leading-relaxed">
                Desenvolva técnicas de mindfulness para melhorar seu bem-estar emocional
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="h-10 w-10 text-green-700" />
              <p className="text-xl leading-relaxed">
                Aprenda a gerir o estresse e a ansiedade com métodos comprovados
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="h-10 w-10 text-green-700" />
              <p className="text-xl leading-relaxed">
                Conecte-se com outras mulheres e compartilhe experiências e apoio
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="h-10 w-10 text-green-700" />
              <p className="text-xl leading-relaxed">
                Receba orientação de especialistas em saúde feminina
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="h-10 w-10 text-green-700" />
              <p className="text-xl leading-relaxed">
                Melhore sua qualidade de sono com técnicas e hábitos recomendados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importância da Saúde Emocional */}
      <section className="bg-white-100 py-40">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-8">A Importância da Saúde Emocional</h2>
          <p className="text-xl leading-relaxed my-10">
            A saúde emocional é um pilar fundamental para uma vida equilibrada e satisfatória. Durante nossa imersão, você aprenderá como identificar e gerenciar emoções, cultivar relacionamentos saudáveis e desenvolver uma mentalidade positiva. Descubra como cuidar do seu bem-estar emocional pode transformar sua vida.
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-pink-200 py-40 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Depoimentos de Quem Já Participou</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex-1">
              <Testimonial
                name="Maria S."
                text="Participar da imersão foi um divisor de águas para minha saúde física e mental. Recomendo a todas as mulheres!"
              />
            </div>
            <div className="flex-1">
              <Testimonial
                name="Ana P."
                text="Aprendi a importância de cuidar do meu emocional e isso transformou minha rotina diária. Obrigada, Clínica Elah!"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="bg-pink-100 pt-40 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Inscreva-se Agora e Transforme Sua Vida!</h2>
          <p className="text-lg leading-relaxed mb-6">Não perca a oportunidade de participar dessa experiência única. Inscreva-se agora e dê o primeiro passo rumo a uma vida mais saudável e equilibrada.</p>
          <button className="bg-green-700 text-white py-3 px-6 rounded shadow-lg hover:bg-green-800 transition duration-300">Quero Me Inscrever!</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-8">
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="cursor-pointer text-lg font-semibold">Qual a duração da imersão?</summary>
              <p>A imersão dura 4 semanas, com encontros semanais e atividades diárias.</p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="cursor-pointer text-lg font-semibold">Preciso ter algum conhecimento prévio?</summary>
              <p>Não, a imersão é aberta para todas as mulheres, independentemente do seu nível de conhecimento sobre saúde.</p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="cursor-pointer text-lg font-semibold">Quais são os métodos de pagamento?</summary>
              <p>Aceitamos cartões de crédito, débito e pagamentos via PayPal.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Botão do WhatsApp */}
      <a 
        href="https://wa.me/1234567890" 
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-10 w-10 pr-1" />
        Fale conosco
      </a>

      {/* Footer */}
      {/* <footer className="bg-green-700 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg font-semibold">Clínica Elah</p>
          <p>Endereço: Rua da Saúde, 123, Centro, Cidade</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
          <p>Email: contato@clinicaelah.com</p>
        </div>
      </footer> */}
    </div>
  );
}
