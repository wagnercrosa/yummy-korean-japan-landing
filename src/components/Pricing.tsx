import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oferta Especial de Lançamento
          </h2>
          <p className="text-xl text-foreground/80">
            Garanta seu acesso agora com desconto exclusivo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent to-accent/80 p-1 rounded-2xl shadow-glow">
            <div className="bg-card rounded-2xl p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">Oferta por tempo limitado</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-card-foreground/60 text-2xl line-through">De R$ 97,00</span>
                  <div className="text-6xl font-bold text-card-foreground mt-2">
                    R$ 47<span className="text-3xl">,00</span>
                  </div>
                  <p className="text-accent text-xl font-semibold mt-2">
                    51% de desconto
                  </p>
                </div>

                <p className="text-card-foreground/80 text-lg mb-8">
                  Pagamento único • Acesso vitalício • Sem mensalidades
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Você vai receber:
                </h3>
                {[
                  "eBook completo com mais de 50 páginas",
                  "10+ receitas variadas de yakisoba",
                  "Guia de ingredientes e onde comprar",
                  "Técnicas profissionais ilustradas",
                  "Dicas de apresentação e finalização",
                  "Lista de utensílios necessários",
                  "Seção de troubleshooting (problemas comuns)",
                  "Acesso vitalício e atualizações gratuitas",
                  "Suporte por email"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-card-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full text-xl py-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow hover:scale-105 transition-all duration-300 font-bold"
              >
                GARANTIR MINHA VAGA COM DESCONTO
              </Button>

              <div className="mt-8 p-6 bg-card-foreground/5 rounded-xl">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-card-foreground text-xl font-bold">
                      Garantia de 7 Dias
                    </h4>
                    <p className="text-card-foreground/80">
                      Se não gostar, devolvemos 100% do seu dinheiro
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-card-foreground/60 text-sm">
                  🔒 Pagamento 100% seguro e criptografado
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              ⚠️ Atenção: Esta Oferta Pode Acabar a Qualquer Momento
            </h3>
            <p className="text-card-foreground/80 text-lg">
              Estamos oferecendo este desconto especial apenas para os primeiros 100 clientes. Depois disso, o preço volta para R$ 97,00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;