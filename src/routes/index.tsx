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
    title: "Lanches",
    items: [
      { name: "Onion", desc: "Hambúrguer 150g, queijo americano, bacon crocante, 3 anéis de cebola onion, barbecue e maionese da casa", price: "" },
      { name: "Prime", desc: "Dois hambúrgueres 150g, duas fatias de queijo americano, duas camadas de bacon e maionese da casa", price: "" },
      { name: "Crispy", desc: "Hambúrguer 150g, queijo americano, bacon, cebola crispy, barbecue e maionese", price: "" },
      { name: "Cremoso", desc: "Hambúrguer 150g, queijo americano, cebola caramelizada, catupiry, bacon e maionese", price: "" },
      { name: "Costela", desc: "Hambúrguer 150g, queijo americano, costela desfiada, catupiry e alho frito", price: "45,00" },
      { name: "Cupim", desc: "Hambúrguer 150g, queijo americano, cupim desfiado, catupiry e alho frito", price: "45,00" },
      { name: "Salada", desc: "Hambúrguer 150g, queijo americano, cebola, alface, tomate e maionese da casa", price: "32,00" },
      { name: "Salada Bacon", desc: "Hambúrguer 150g, queijo americano, bacon, cebola, alface, tomate e maionese da casa", price: "39,00" },
      { name: "Texas", desc: "Hambúrguer 150g, queijo americano, bacon crocante e maionese da casa", price: "36,00" },
      { name: "Burger", desc: "Hambúrguer 150g, queijo americano e maionese da casa", price: "29,00" },
      { name: "Kids", desc: "Hambúrguer 150g, queijo americano e maionese. Acompanha fritas e suco Kapo", price: "" },
    ],
  },
  {
    title: "Porções",
    items: [
      { name: "Batata Individual", desc: "140g", price: "10,00" },
      { name: "Batata 400g", desc: "400g de batata frita", price: "30,00" },
      { name: "Batata Costela", desc: "400g de batata, 200g de costela desfiada e sour cream", price: "50,00" },
      { name: "Batata Cupim", desc: "400g de batata, 200g de cupim desfiado e sour cream", price: "50,00" },
      { name: "Onion Individual", desc: "8 anéis de cebola", price: "15,00" },
      { name: "Onion Família", desc: "20 anéis de cebola", price: "35,00" },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Coca-Cola lata", desc: "", price: "7,00" },
      { name: "Coca-Cola Zero lata", desc: "", price: "7,00" },
      { name: "Suco Kapo", desc: "", price: "5,00" },
      { name: "Água", desc: "", price: "4,00" },
      { name: "Água com gás", desc: "", price: "5,00" },
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
