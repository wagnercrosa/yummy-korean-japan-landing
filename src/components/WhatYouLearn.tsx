import { BookOpen, ChefHat, Flame, ShoppingCart } from "lucide-react";
import ingredientsImage from "@/assets/ingredients.jpg";
import cookingImage from "@/assets/cooking-process.jpg";

const features = [
  {
    icon: ChefHat,
    title: "Técnicas Profissionais",
    description: "Aprenda os segredos dos mestres da culinária japonesa para conseguir o sabor autêntico"
  },
  {
    icon: Flame,
    title: "Controle do Fogo",
    description: "Domine a técnica de cozimento no calor alto, essencial para o yakisoba perfeito"
  },
  {
    icon: BookOpen,
    title: "Receitas Variadas",
    description: "Mais de 10 variações: carne, frango, frutos do mar, vegetariano e especiais"
  },
  {
    icon: ShoppingCart,
    title: "Guia de Compras",
    description: "Lista completa de ingredientes e onde encontrar produtos autênticos"
  }
];

const WhatYouLearn = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Você Vai Aprender
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Um guia completo que vai transformar você em um mestre do yakisoba, com conhecimento profissional ao seu alcance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-card-foreground/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={ingredientsImage}
              alt="Ingredientes do yakisoba"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Ingredientes e Preparação Detalhados
            </h3>
            <p className="text-lg text-foreground/80">
              Cada receita vem com fotos de alta qualidade, instruções passo a passo e dicas profissionais para garantir o sucesso na sua cozinha.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Escolha dos Ingredientes</h4>
                  <p className="text-foreground/80">Como selecionar os melhores produtos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Preparação Adequada</h4>
                  <p className="text-foreground/80">Cortes, marinadas e mise en place</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Execução Perfeita</h4>
                  <p className="text-foreground/80">Técnicas de cocção e finalização</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-foreground">
              Processo de Cozimento Profissional
            </h3>
            <p className="text-lg text-foreground/80">
              Descubra os segredos do wok, controle de temperatura e timing perfeito que fazem toda a diferença no resultado final.
            </p>
            <ul className="space-y-3">
              {[
                "Técnica de salteado em fogo alto",
                "Como obter aquele sabor defumado característico",
                "Ordem correta de adicionar os ingredientes",
                "Truques para massa solta e saborosa"
              ].map((tip) => (
                <li key={tip} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={cookingImage}
              alt="Processo de cozimento do yakisoba"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;