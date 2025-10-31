import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/yakisoba-hero.jpg";

const Hero = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-foreground space-y-8">
            <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
              🔥 OFERTA ESPECIAL - LANÇAMENTO
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Aprenda a Fazer o{" "}
              <span className="text-accent">Yakisoba Perfeito</span> em Casa!
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              O guia completo e definitivo com técnicas profissionais para você dominar a arte do yakisoba autêntico.
            </p>
            
            <div className="space-y-3">
              {[
                "Receitas passo a passo ilustradas",
                "Segredos dos restaurantes japoneses",
                "Variações para todos os gostos",
                "Lista de ingredientes e onde comprar"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent h-6 w-6 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <Button
              onClick={scrollToPrice}
              size="lg"
              className="w-full md:w-auto text-lg px-12 py-7 bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow hover:scale-105 transition-all duration-300 font-bold"
            >
              QUERO O MEU EBOOK AGORA!
            </Button>
            
            <p className="text-sm text-foreground/80">
              ✅ Acesso imediato após a compra | 💯 Garantia de 7 dias
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Yakisoba delicioso em tigela"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;