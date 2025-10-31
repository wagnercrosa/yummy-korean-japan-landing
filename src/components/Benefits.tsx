import { Clock, DollarSign, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economize Tempo",
    description: "Receitas práticas e eficientes que você pode fazer em 30 minutos"
  },
  {
    icon: DollarSign,
    title: "Economize Dinheiro",
    description: "Pare de gastar em delivery. Faça em casa por uma fração do preço"
  },
  {
    icon: Heart,
    title: "Mais Saudável",
    description: "Controle total dos ingredientes, sem conservantes ou excesso de sódio"
  },
  {
    icon: Users,
    title: "Impressione Todos",
    description: "Surpreenda família e amigos com pratos dignos de restaurante"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por Que Você Precisa Deste eBook?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Transforme sua cozinha em um restaurante japonês e desfrute de todos estes benefícios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-card p-8 rounded-xl text-center hover:scale-105 transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-card-foreground/80 text-lg">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              🎯 Ideal Para Quem...
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <p className="text-foreground text-lg">Ama comida japonesa e quer aprender a fazer em casa</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <p className="text-foreground text-lg">Quer impressionar amigos e família com suas habilidades</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <p className="text-foreground text-lg">Busca economizar com delivery e restaurantes</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <p className="text-foreground text-lg">Quer ter controle sobre ingredientes e qualidade</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <p className="text-foreground text-lg">Deseja explorar a culinária asiática autêntica</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <p className="text-foreground text-lg">Procura receitas práticas para o dia a dia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;