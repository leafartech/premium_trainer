import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import H2 from "@/components/H2"
import Header from "@/components/Header"
import PurchaseCard from "@/components/PurchaseCard"
import Quote from "@/components/Quote"
import SecondBox from "@/components/SecondBox"
import SecondCard from "@/components/SecondCard"
import Section from "@/components/Section"
import TimeLine from "@/components/TimeLine"

const ConsultoriaPresencial = () => {
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
                topTitle="Consultoria Presencial"
                ctaText="Quero comprar agora"
                ctaHref="#produto"
                description="Explore ao máximo a qualidade de vida por meio da transformação física! Uma abordagem exclusiva de treinos feitos sob a medida das suas especificidades."
                // description="Experimente uma abordagem direcionada e interativa com nossos serviços de consultoria presencial. Trabalharemos juntos para definir metas, traçar estratégias e alcançar resultados excepcionais.."
                imageHeaderPath="consultoria-presencial"
            >
                <H2 header={true}>
                    <span className="text-brandRed-500">Treinamento</span> feito sob a sua medida
                </H2>
            </Header>
            <main className="-t">
                <Section>
                    <div className="w-full flex flex-col gap-1 mt-3 mb-6">
                        <H2 center={true}>
                            Como a <span className="text-brandRed-500">consultoria</span>{" "}
                            funciona
                        </H2>
                        <h4 className="text-zinc-300 md:text-center">
                            Para entender melhor, confira a linha do tempo abaixo:{" "}
                        </h4>
                    </div>
                    <TimeLine
                        txt1={{ title: 'Contato', description: 'Em até 72h após o pagamento, entrarei em contato diretamente com você para marcarmos a melhor data para a sua consultoria.' }}
                        txt2={{ title: 'Análise de objetivos', description: 'Chegada a data da consultoria, teremos uma conversa detalhada para analisar seu caso e criar uma estratégia exclusiva, direcionada às suas metas.' }}
                        txt3={{ title: 'Avaliação física', description: 'Realizaremos uma dupla avaliação física (bioimpedância e antropométrica) para termos uma referência inicial.' }}
                        txt4={{ title: 'Avaliação postural', description: 'Para finalizar, uma avaliação postural para descobrir possíveis desníveis, encurtamentos e desequilíbrios de forças.' }}
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
                        titleCard="Consultoria Presencial"
                        descriptionCard="Ideal para você que busca uma estratégia individualizada e específica para os seus objetivos"
                        valueOff="299"
                        valueOn="207"
                        hrefList={['https://pay.kiwify.com.br/h61XBU7', 'https://pay.kiwify.com.br/y5ozQMc', 'https://pay.kiwify.com.br/0LA5Vou', 'https://pay.kiwify.com.br/YFvUtNu']}
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

export default ConsultoriaPresencial
