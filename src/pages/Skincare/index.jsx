import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";

export const SkinCarePage = () => {
    return (
        <>
            <Header />

            <main className="min-h-dvh grid place-items-center bg-neutral-200 py-14  px-8 lg:px-12">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">
                Skin Carees
                </h1>

                <div className="w-full flex items-center justify-center">
                    <div className="w-full max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                            title="La Roche-Posay Mela B3 Sérum Antimanchas Concentrado, com Novo Ativo Melasyl™ e 10% Niacinamida, Corrige Manchas Solares e Pós-Acne, Previne Reaparecimento, 30ml"
                            description="O Mela B3 Sérum da La Roche-Posay é indicado para todos os tipos de peles, inclusive as oleosas, com resultados visíveis nas manchas em 1 semana."
                            price="R$ 80,99"
                            img="./41Bs4bVtJjL._AC_.jpg"
                        />

                        <ProductCard
                            title="Creamy Skincare Ácido Mandélico 30g | Reduz a Oleosidade, Combate a Formação de Acne, Uniformiza o Tom da Pele | Todos os Tipos de Pele, Inclusive as Oleosas, Uso Noturno"
                            description="Clareamento Efetivo: Nosso gel com 7% de ácido mandélico oferece um peeling noturno suave, clareando manchas de sol, acne e melasma."
                            price="R$ 100,77"
                            img="./41u5hCkVweL._AC_SL1199_.jpg"
                        />

                        <ProductCard
                            title="PRINCIPIA, Gel de Limpeza Facial 2% Ácido Salicílico + 5% Glicerina GL-01 com 350g"
                            description="Controlar a oleosidade"
                            price="R$ 45,00"
                            img="./61LjW7CkcsL._AC_SL1500_.jpg"
                        />

                        <ProductCard
                            title="Creamy Skincare Protetor Solar 50g | FPS 60, Watery Lotion, Toque Seco, Efeito Matte, Rápida Absorção, Resistente à Agua e Suor | Fórmula Inodora, Todos os Tipos de Pele"
                            description="Proteção Avançada: Nosso Protetor Solar FPS 60 Watery Lotion oferece alta proteção contra raios UVA/UVB, com FPS 60 e PPD 25, mantendo sua pele segura contra os danos causados pelo sol."
                            price="R$ 89,90"
                            img="./51SZm2g9E9L._AC_SL1500_.jpg"
                        />

                        <ProductCard
                            title="Água Micelar 5 Em 1 200ml, L'Oréal Paris, 200ml, Demaquila, Limpa, Purifica, Suaviza, Elimina Impurezas e Reequilibra a Pele"
                            description="Revolucione sua rotina de limpeza facial com esta solução 5 em 1, que limpa, demaquila, purifica, suaviza e reequilibra a pele em um único passo, de forma prática e eficaz."
                            price="R$ 62,77"
                            img="./718LEi0ObmL._AC_SL1500_.jpg"
                        />

                        <ProductCard
                            title="NIVEA Creme Facial Nutritivo 100g - Sua fórmula à base de água, Karité e Vitaminas hidrata por 30h sem deixar a pele oleosa, além de ser um ótimo primer"
                            description="PELE SUAVE E MACIA: Proporciona sensação imediata de bem-estar, deixando a pele agradável ao toque."
                            price="R$ 42,92"
                            img="./71leHzYxDYL._AC_SL1500_.jpg"
                        />

                        <ProductCard
                            title="Neutrogena Hidratante Facial Hydro Boost Water Gel, 50g"
                            description="Com ácido hialurônico que pode protege a pele contra a perda de água, mantendo uma hidratação intensa e prolongada."
                            price="R$ 39,90"
                            img="./517yaXCD5oL._AC_SL1000_.jpg"
                        />

                        <ProductCard
                            title="Kit Skincare + Óleo Clareador Rosa Selvagem"
                            description="Ácido Clareador Rosa Selvagem: Clareamento, Hidratação e Renovação Celular: Com ação anti-inflamatória potente, o Ácido Clareador Rosa Selvagem combate manchas escuras e inflamações, uniformizando o tom da pele."
                            price="R$ 130,99"
                            img="./public/61Rr0P+8YrL._AC_SY450_.jpg"
                        />

                        <ProductCard
                            title="Rolo de jade para rosto, conjunto de pedras faciais naturais de jade, massageador de pele com ferramentas de raspagem Gua Sha"
                            description="Esta paleta traRolo de jade perfeito + tábua de raspagem em 1 conjunto: use seu rolo de jade como um massageador facial para massagear óleo na pele e como um depuffer para os olhos, rosto"
                            price="R$ 42,92"
                            img="./61xmuioOLgL._AC_SL1200_.jpg"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}