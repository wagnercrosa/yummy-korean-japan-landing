import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Nunca pensei que conseguiria fazer yakisoba igual ao do restaurante! O guia é muito completo e fácil de seguir. Minha família adorou!",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Excelente investimento! Já economizei mais do que o valor do eBook só em delivery. As receitas são incríveis e as fotos ajudam muito.",
    rating: 5
  },
  {
    name: "Ana Paula",
    location: "Belo Horizonte, MG",
    text: "Como chef amadora, adorei as dicas profissionais. O segredo do molho mudou completamente meu yakisoba. Recomendo demais!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-foreground/80">
            Junte-se a centenas de pessoas que já estão fazendo yakisoba profissional em casa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground/90 text-lg mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-card-foreground font-bold">{testimonial.name}</p>
                <p className="text-card-foreground/60 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card px-12 py-8 rounded-xl shadow-card">
            <div>
              <div className="text-5xl font-bold text-accent">500+</div>
              <div className="text-card-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="w-px h-16 bg-border" />
            <div>
              <div className="text-5xl font-bold text-accent">4.9</div>
              <div className="text-card-foreground">Avaliação Média</div>
            </div>
            <div className="w-px h-16 bg-border" />
            <div>
              <div className="text-5xl font-bold text-accent">98%</div>
              <div className="text-card-foreground">Recomendariam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;