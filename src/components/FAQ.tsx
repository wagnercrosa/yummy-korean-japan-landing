import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para quem é este eBook?",
    answer: "Este eBook é perfeito para qualquer pessoa que ame comida japonesa e queira aprender a fazer yakisoba autêntico em casa. Desde iniciantes na cozinha até chefs amadores que querem aprimorar suas técnicas."
  },
  {
    question: "Preciso ter experiência na cozinha?",
    answer: "Não! O guia foi desenvolvido pensando em pessoas de todos os níveis. Cada receita vem com instruções passo a passo detalhadas e fotos ilustrativas para garantir que você consiga fazer mesmo sendo iniciante."
  },
  {
    question: "Como recebo o eBook após a compra?",
    answer: "Você receberá o acesso imediatamente após a confirmação do pagamento, direto no seu email. Você poderá baixar o PDF e começar a cozinhar em minutos!"
  },
  {
    question: "Onde encontro os ingredientes?",
    answer: "O eBook inclui um guia completo de ingredientes com dicas de onde comprar (supermercados, lojas de produtos orientais e opções online). Também incluímos alternativas para ingredientes mais difíceis de encontrar."
  },
  {
    question: "E se eu não gostar do eBook?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta enviar um email e devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "O eBook funciona em qualquer dispositivo?",
    answer: "Sim! O eBook está no formato PDF e pode ser acessado em qualquer dispositivo: computador, tablet, celular ou até mesmo impresso para usar na cozinha."
  },
  {
    question: "Há alguma cobrança recorrente?",
    answer: "Não! É um pagamento único de R$ 47,00 e você terá acesso vitalício ao eBook, incluindo todas as atualizações futuras sem custo adicional."
  },
  {
    question: "Posso imprimir o eBook?",
    answer: "Sim! Você pode imprimir o eBook para usar na cozinha. Muitos clientes preferem ter uma versão impressa para consultar enquanto cozinham."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-foreground/80">
            Tire todas as suas dúvidas sobre o eBook
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border-none shadow-card"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-accent hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-card-foreground/80 text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;