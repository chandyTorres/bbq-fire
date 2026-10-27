import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BBQ Fire — Cardápio" },
      { name: "description", content: "Cardápio do BBQ Fire: hambúrgueres, lanches, porções e bebidas." },
      { property: "og:title", content: "BBQ Fire — Cardápio" },
      { property: "og:description", content: "Hambúrgueres, lanches, porções e bebidas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "(18) 99815-0854";
const WHATSAPP_LINK = "https://wa.me/5518998150854";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-whatsapp-foreground shadow-lg transition hover:brightness-110 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span className="font-display text-xl tracking-wider">{label}</span>
      <span className="text-sm font-semibold">{WHATSAPP_NUMBER}</span>
    </a>
  );
}




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
          <img src={logo.url} alt="BBQ Fire" className="h-40 w-40 rounded-full shadow-2xl md:h-52 md:w-52" />
          <h1 className="mt-3 font-display text-3xl tracking-[0.4em] text-accent">Cardápio</h1>
          <p className="mt-2 text-muted-foreground">Lanches · Porções · Bebidas</p>
          <WhatsAppButton label="Chamar no WhatsApp" className="mt-5" />
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
        {menu.map((s, idx) => (
          <Fragment key={s.title}>
            <section id={s.title} className="scroll-mt-16">
              <h2 className="mb-6 font-display text-5xl text-primary">{s.title}</h2>
              <ul className="space-y-5">
                {s.items.map((i) => (
                  <li key={i.name} className="rounded-lg border bg-card p-4">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-lg font-semibold">{i.name}</h3>
                      <span className="flex-1 border-b border-dashed" />
                      <span className="font-display text-2xl text-accent">{i.price ? `R$ ${i.price}` : "Consulte"}</span>
                    </div>
                    {i.desc && <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>}
                  </li>
                ))}
              </ul>
            </section>
            {idx === 1 && (
              <div className="flex flex-col items-center gap-1 py-2 text-center">
                <WhatsAppButton label="Pedir pelo WhatsApp" />
                <p className="text-xs text-muted-foreground">
                  É só chamar e mandar seu pedido — a gente confirma na hora.
                </p>
              </div>
            )}
          </Fragment>
        ))}

      </div>
      <footer className="border-t py-10 text-center">
        <p className="text-sm text-muted-foreground">BBQ Fire · Feito na brasa 🔥</p>
        <WhatsAppButton label="Chamar no WhatsApp" className="mt-4" />
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-sm text-whatsapp hover:underline"
        >
          {WHATSAPP_NUMBER}
        </a>
      </footer>


      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-whatsapp px-3 py-2 text-whatsapp-foreground shadow-lg transition hover:brightness-110"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="text-sm font-semibold">{WHATSAPP_NUMBER}</span>
      </a>
    </main>
  );
}
