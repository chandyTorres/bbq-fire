import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BBQ Fire — Cardápio" },
      { name: "description", content: "Cardápio do BBQ Fire: hambúrgueres, carnes e porções na brasa." },
      { property: "og:title", content: "BBQ Fire — Cardápio" },
      { property: "og:description", content: "Hambúrgueres, carnes e porções na brasa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  {
    title: "Hambúrgueres",
    items: [
      { name: "Fire Classic", desc: "Blend 180g, cheddar, cebola caramelizada, molho da casa", price: "32,90" },
      { name: "Smoke Bacon", desc: "Blend 180g, bacon defumado, queijo prato, barbecue", price: "36,90" },
      { name: "Double Fire", desc: "2 blends 150g, duplo cheddar, picles, maionese defumada", price: "42,90" },
      { name: "Costela Burger", desc: "Costela desfiada, queijo coalho, cebola crispy", price: "39,90" },
    ],
  },
  {
    title: "Carnes",
    items: [
      { name: "Picanha na Brasa (400g)", desc: "Acompanha farofa, vinagrete e pão de alho", price: "89,90" },
      { name: "Costela BBQ (500g)", desc: "Assada 12h, glaceada no barbecue", price: "79,90" },
      { name: "Fraldinha (400g)", desc: "Ao ponto, com chimichurri", price: "69,90" },
      { name: "Linguiça Artesanal", desc: "Porção com mandioca cozida", price: "42,90" },
    ],
  },
  {
    title: "Porções",
    items: [
      { name: "Batata Rústica", desc: "Com páprica e maionese da casa", price: "24,90" },
      { name: "Onion Rings", desc: "Anéis de cebola empanados", price: "26,90" },
      { name: "Mandioca Frita", desc: "Crocante, com queijo ralado", price: "22,90" },
      { name: "Tábua Fire", desc: "Picanha, linguiça, batata e queijo coalho", price: "99,90" },
    ],
  },
];

function Index() {
  return (
    <main className="min-h-screen">
      <header className="relative h-[60vh] min-h-80 overflow-hidden">
        <img src={hero} alt="Hambúrguer e costela na brasa" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-fade" />
        <div className="relative flex h-full flex-col items-center justify-end pb-10 text-center">
          <p className="font-display text-xl tracking-[0.4em] text-accent">Cardápio</p>
          <h1 className="font-display text-7xl leading-none md:text-9xl">
            BBQ <span className="text-primary">Fire</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Hambúrgueres · Carnes · Porções</p>
        </div>
      </header>

      <nav className="sticky top-0 z-10 flex justify-center gap-6 border-b bg-background/90 py-3 backdrop-blur">
        {menu.map((s) => (
          <a key={s.title} href={`#${s.title}`} className="font-display text-xl tracking-wider hover:text-primary">
            {s.title}
          </a>
        ))}
      </nav>

      <div className="mx-auto max-w-3xl space-y-14 px-5 py-12">
        {menu.map((s) => (
          <section key={s.title} id={s.title} className="scroll-mt-16">
            <h2 className="mb-6 font-display text-5xl text-primary">{s.title}</h2>
            <ul className="space-y-5">
              {s.items.map((i) => (
                <li key={i.name} className="rounded-lg border bg-card p-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold">{i.name}</h3>
                    <span className="flex-1 border-b border-dashed" />
                    <span className="font-display text-2xl text-accent">R$ {i.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">BBQ Fire · Feito na brasa 🔥</footer>
    </main>
  );
}
