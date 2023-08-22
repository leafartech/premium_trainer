import FAQ from "components/FAQ"
import Footer from "components/Footer"
import H2 from "components/H2"
import Header from "components/Header"
import PurchaseCard from "components/PurchaseCard"
import Quote from "components/Quote"
import SecondBox from "components/SecondBox"
import SecondCard from "components/SecondCard"
import Section from "components/Section"
import TimeLine from "components/TimeLine"

const ConsultoriaOnline = () => {
  const secondCardDataTitles = [
    "Quer começar a treinar.",
    "Busca qualidade de vida e saúde.",
    "Precisa de um acompanhamento.",
    "Procura melhorar a perfomance física e mental.",
    "Quer ser mais produtivo no dia a dia."
  ]
  return (
    <div className="overflow-hidden">
      <Header
        topTitle="Consultoria Online"
        ctaText="Quero comprar agora"
        ctaHref="#produto"
        description="Receba orientação especializada onde quer que esteja. Nosso plano individualizado se adapta a sua rotina, garantindo que você alcance seus objetivos de forma eficiente!"
        imageHeaderPath="consultoria-online"
      >
        <H2 header={true}>
          <span className="text-brandRed-500">Alcance</span> o seu potencial
          máximo
        </H2>
      </Header>
      <main>
        <Section>
          <div className="w-full flex flex-col gap-1 mt-3 mb-6">
            <H2 center={true}>
              Como a <span className="text-brandRed-500">consultoria</span>{" "}
              funciona
            </H2>
            <h4 className="text-zinc-300 md:text-center">
              Para entender melhor, confira esta linha do tempo abaixo:{" "}
            </h4>
          </div>
          <TimeLine
            txt1={{ title: 'Agendamento simplificado', description: 'Em menos de 3 minutos, você consegue agendar a melhor data para você utilizando nosso sistema inteligente.' }}
            txt2={{ title: 'Preparação', description: 'Primeiro, antes da data da consulta, preciso que responda a algumas perguntas e que envie algumas fotos para o meu email para eu te conhecer melhor.' }}
            txt3={{ title: 'Análise de objetivos', description: 'Chegada a data da consultoria, teremos uma conversa detalhada pelo Google Meet para analisar seu caso e criar uma estratégia exclusiva, direcionada às suas metas e baseada no conteúdo enviado por você.' }}
            txt4={{ title: 'Entrega', description: 'Dentro de 72 horas, você receberá o acesso do aplicativo para visualizar o seu treino personalizado.' }}
          />
        </Section>
        <Section>
          <div className="mb-2">
            <H2 center={true}>
              Ele é <span className="text-brandRed-500">ideal</span> para você
              que:
            </H2>
            <div className="mt-4">
              {secondCardDataTitles.map((title, index) => (
                <SecondCard key={index} title={title} />
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-12">
            <img src="./images/allPages.png" className="" alt="" />
          </div>
        </Section>
        <span id="produto"></span>
        <Section>
          <PurchaseCard
            titleCard="Consultoria Online"
            descriptionCard="Ideal para você que busca uma estratégia individualizada e específica para os seus objetivos"
            valueOff="219"
            valueOn="180"
            href="https://pay.kiwify.com.br/gBaughf"
            hrefList={['https://pay.kiwify.com.br/I7IXUy8', 'https://pay.kiwify.com.br/f8nlTcl', 'https://pay.kiwify.com.br/5IbEPTb', 'https://pay.kiwify.com.br/jx9rv0j']}
          />
        </Section>
        <Section>
          <SecondBox titleBox="9" descriptionBox="Anos transformando vidas" />
          <div className="w-full">
            <Quote
              firstWord="Estarei"
              Citation="te acompanhando de perto durante todo o processo e vou te ajudar para que alcance os seus objetivos da melhor forma possível com base em estudos. Bora pra cima!!!!"
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

export default ConsultoriaOnline
