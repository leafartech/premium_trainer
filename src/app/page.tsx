import Box from '@/components/Box'
import ButtonCTA from '@/components/ButtonCTA'
import Card from '@/components/Card'
import ComparisionBox from '@/components/ComparasionBox'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import H2 from '@/components/H2'
import Header from '@/components/Header'
import MiniBox from '@/components/MiniBox'
import Quote from '@/components/Quote'
import SecondCard from '@/components/SecondCard'
import Section from '@/components/Section'
import ServicesBox from '@/components/ServicesBox'
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartLineIcon,
  ArrowPathRoundedSquareIcon,
  MapIcon,
} from '@heroicons/react/24/outline'
import Feedbacks from '@/components/Feedbacks'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Header
        topTitle="treinador"
        description="Seja muito bem-vindo(a) ao ponto de partida para sua nova vida. Sou especialista em estratégias individualizadas de treinamento, e estou aqui para elevar a sua qualidade de vida a novos patamares."
        ctaText="Quero saber mais!"
        ctaHref="#produtos"
        imageHeaderPath="inicio"
      >
        <H2 header={true}>
          Te ajudo a conquistar o
          <span className="text-brandRed-500"> shape dos seus sonhos</span>
        </H2>
      </Header>
      <main className="sm:-mt-16">
        <Section>
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-center md:hidden">
              <Image
                className="w-myLg mt-4 rounded-md"
                src="/images/inicio0.png"
                alt="Foto do João Navarro"
                width={459}
                height={500}
                quality={100}
              />
            </div>
            <div className="flex flex-col sm:items-center">
              <div className="w-full mt-4 md:mt-0 px-1 md:flex md:justify-center">
                <MiniBox text="treinador" />
              </div>
              <div className="my-4 md:text-center">
                <H2 center={true}>
                  Quem é <span className="text-brandRed-500">João Navarro</span>
                </H2>
              </div>
              <p className="text-zinc-300 text-justify max-w-4xl md:text-xl sm:text-center">
                Apaixonado por saúde e bem estar. Bacharel em educação física,
                pós graduado em Bodybuilding & Coach, pela Uniguaçu, e mais de 9
                anos de experiência no mundo do treinamento, ele é um
                profissional dedicado e compromissado com o sucesso de seus
                alunos.
              </p>
            </div>
            <div className="w-full hidden md:justify-center md:flex">
              <Image
                className="w-myLg mt-3 max-w-2xl mb-4"
                src="/images/inicio0.png"
                alt="Foto do João Navarro no celular sorrindo"
                width={500}
                height={500}
                quality={100}
              />
            </div>
            <div className="py-3 gap-4 w-full flex flex-col justify-center items-start md:flex-row md:justify-between md:gap-10">
              <Card
                Icon={AcademicCapIcon}
                title="Formação Acadêmica"
                description="Bacharelado em educação física e pós graduado em Bodybuilding & Coach, pela Uniguaçu."
              />
              <Card
                Icon={ClipboardDocumentListIcon}
                title="Experiência na Área"
                description="Há mais de 9 anos fazendo parte de grandes transformações na vida dos meus alunos."
              />
              <Card
                Icon={MapIcon}
                title="Mentalidade"
                description="Exploro como superar obstáculos e desafios com meu aluno, aproveitando cada etapa como um degrau em direção ao progresso."
              />
            </div>
            <div className="w-full md:hidden">
              <ButtonCTA href="#produtos">Quero saber mais!</ButtonCTA>
            </div>
          </div>
        </Section>
        <div className="hidden md:block line-gradient h-1"></div>
        <Section>
          <div className="w-full md:hidden">
            <Image
              className="w-myLg md:w-myXl mb-4"
              src="/images/inicio2.png"
              alt="Foto do João Navarro"
              width={450}
              height={450}
            />
          </div>
          <div className="md:text-center">
            <H2 center={true}>
              O meu trabalho é ideal para
              <span className="text-brandRed-500"> você que:</span>
            </H2>
            <div className="sm:mt-16 sm:mb-24 flex flex-col md:flex-row items-start sm:justify-center sm:items-center sm:gap-12">
              <div>
                <SecondCard title="Quer tratamento de lesões." />
                <SecondCard title="Busca produtividade no dia a dia." />
                <SecondCard title="Quer uma reabilitação mais segura." />
              </div>
              <div>
                <SecondCard title="Quer conquistar o shape do seus sonhos." />
                <SecondCard title="Preza por saúde e qualidade de vida." />
                <SecondCard title="Quer vencer a depressão e a ansiedade." />
              </div>
            </div>
          </div>
          <div className="w-full md:flex md:gap-5 md:justify-between md:mt-4 md:items-center mt-6">
            <div className="md:flex md:flex-col md:items-start">
              <H2>
                Mude sua vida <span className="text-brandRed-500">hoje!</span>
              </H2>
              <Quote
                firstWord="A"
                Citation="prioridade do meu trabalho é cuidarmos da sua saúde de forma responsável! Através de uma abordagem individualizada, eu consigo proporcionar treinamentos de excelência, contribuindo para uma qualidade de vida e sensação de bem-estar excepcionais em sua vida!"
              />
              <div className="w-full sm:max-w-[256px] md:mt-2 mt-6">
                <ButtonCTA href="#produtos">Quero saber mais!</ButtonCTA>
              </div>
            </div>
            <div className="w-full sm:max-w-[540px]">
              <Image
                className="w-myLg md:w-myXl mt-4"
                src="/images/inicio3.png"
                alt="Foto do João Navarro"
                width={450}
                height={450}
              />
            </div>
          </div>
        </Section>
        <Section>
          <H2 center={true}>
            Confira alguns <span className="text-brandRed-500">feedbacks</span>
          </H2>
          <div className="px-4">
            <Feedbacks />
          </div>
        </Section>
        <Section>
          <div className="md:flex md:flex-col md:justify-center md:items-center sm:mb-12">
            <div className="md:text-center">
              <H2>
                Por que meus alunos têm tantos
                <span className="text-brandRed-500">resultados?</span>
              </H2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 sm:mt-12">
              <div className="flex flex-col gap-4">
                <Box
                  Icon={TrophyIcon}
                  boxTitle="Identificação dos objetivos"
                  boxDescription="Compreendo que cada indivíduo tem suas próprias necessidades e ambições e é por isso que trabalho em estreita colaboração com cada aluno para definir metas claras e alcançáveis."
                />
                <Box
                  Icon={ClipboardDocumentCheckIcon}
                  boxTitle="Avaliações"
                  boxDescription="Desde o início, eu dou muito valor a realizar avaliações detalhadas. Essas avaliações me permitem entender o estado físico mental de cada aluno e pontos para melhorar."
                />
              </div>
              <div className="flex flex-col gap-4 md:mt-4">
                <Box
                  Icon={PresentationChartLineIcon}
                  boxTitle="Periodização"
                  boxDescription="Divido nossos programas de treinamento em diferentes fases, cada uma com seus próprios objetivos específicos. Essa abordagem permite uma progressão gradual e planejada."
                />
                <Box
                  Icon={ArrowPathRoundedSquareIcon}
                  boxTitle="Reavaliação"
                  boxDescription="Isso garante que nossos programas de treinamento estejam sempre alinhados com as metas em andamento e que os resultados positivos sejam mantidos a longo prazo."
                />
              </div>
            </div>
            <div className="mt-9 w-full max-w-lg md:flex md:justify-center md:items-center">
              <ButtonCTA href="#produtos">Quero saber mais</ButtonCTA>
            </div>
          </div>
        </Section>
        <Section>
          <div className="mb-6 md:hidden">
            <Quote
              firstWord="Todos"
              Citation="esses resultados acima são frutos de muito trabalho e dedicação de ambas as partes. Fora isso, o desenvolvimento de uma estratégia adaptada e específica para cada aluno foi um grande pilar no progresso geral."
            />
          </div>
          <ComparisionBox />
        </Section>
        <Section>
          <div className="md:text-center" id="produtos">
            <H2 center={true}>
              Conheça <span className="text-brandRed-500">meus serviços</span>
            </H2>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-12 justify-center items-center mt-5">
            <ServicesBox
              href="/consultoria-presencial"
              product="Consultoria Presencial"
              bottomSentence="Sua melhor forma"
            />
            <ServicesBox
              href="/consultoria-online"
              product="Consultoria Online"
              bottomSentence="MUDE, TREINE, SUPERE"
            />
            <ServicesBox
              href="/avaliacao-fisica"
              product="Avalição Física"
              bottomSentence="MOLDANDO SEU FÍSICO"
            />
          </div>
        </Section>
        <Section>
          <h2 className="tracking-[12px] text-center text-2xl sm:text-4xl text-brandWhite">
            FAQ
          </h2>
          <FAQ />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
