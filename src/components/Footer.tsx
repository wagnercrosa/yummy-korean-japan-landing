const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🍜 Yakisoba Perfeito
            </h3>
            <p className="text-foreground/80">
              O guia completo para dominar a arte do yakisoba em casa
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition-colors">
                  Sobre o eBook
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/80 hover:text-accent transition-colors">
                  Comprar Agora
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Email: contato@yakisobaperfeito.com</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Horário: Seg-Sex, 9h-18h</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-foreground/60">
            © 2025 Yakisoba Perfeito. Todos os direitos reservados.
          </p>
          <p className="text-foreground/60 text-sm mt-2">
            Este site não é afiliado ao Facebook, Instagram ou qualquer outra rede social.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;