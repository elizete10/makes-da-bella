import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";

export const HomePage = () => {
    return (
        <>
            <Header />

            <main className="min-h-dvh grid place-items-center bg-neutral-200 py-14  px-8 lg:px-12">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">
                    Bem - vindo a makes bella!
                </h1>

                <div className="w-full flex items-center justify-center">
                    <div className="w-full max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                            title="BT Skin M40"
                            description="Base líquida ultra fluida, resistente à água, com textura leve e acabamento aveludado."
                            price="R$ 89,90"
                            img="./base-pele-morena.png"
                        />

                        <ProductCard
                            title="Gloss Labial Liphoney Fran By Franciny Ehlke Brilho Intenso Dourado"
                            description="O novo Gloss Labial LipHoney é aquele que faltava na sua nécessaire!"
                            price="R$ 60,77"
                            img="./gloss.jpg"
                        />

                        <ProductCard
                            title="Océane Paleta de Sombras Nádia Tambasco By Océane - To Go Basic 7,2g"
                            description="Esta paleta traz as nove cores que são tendência nas produções do dia e da noite"
                            price="R$ 42,92"
                            img="./71zJ8IzYO3L._AC_SL1500_.jpg"
                        />

                        <ProductCard
                            title="BT Skin D60"
                            description="Base líquida ultra fluida, resistente à água, com textura leve e acabamento aveludado."
                            price="R$ 89,90"
                            img="./base-pele-retinta.png"
                        />

                        <ProductCard
                            title="Gloss Labial BT Gloss Denise"
                            description="O BT Gloss é um gloss cremoso, confortável, com efeito laqueado. Pode ser usado sozinho ou por cima de outros batons."
                            price="R$ 20,99"
                            img="./gloss-labial-denise.webp"
                        />

                        <ProductCard
                            title="Océane Paleta de Sombras Nádia Tambasco By Océane - To Go Basic 7,2g"
                            description="Esta paleta traz as nove cores que são tendência nas produções do dia e da noite"
                            price="R$ 42,92"
                            img="./71r5UzNR0CL._AC_SL1000_.jpg"
                        />

                        <ProductCard
                            title="BT Skin T20"
                            description="Base líquida ultra fluida, resistente à água, com textura leve e acabamento aveludado."
                            price="R$ 89,90"
                            img="./base-pele-morena.png"
                        />

                        <ProductCard
                            title="FRAN BY FRANCINY EHLKE Gloss Aumento Volume Lábios Lipchilli"
                            description="O novo Gloss Labial LipHoney é aquele que faltava na sua nécessaire!"
                            price="R$ 32,77"
                            img="./public/51MFq9SLkFL._AC_SL1000_.jpg"
                        />

                        <ProductCard
                            title="Océane Paleta de Sombras Nádia Tambasco By Océane - To Go Basic 7,2g"
                            description="Esta paleta traz as nove cores que são tendência nas produções do dia e da noite"
                            price="R$ 56,92"
                            img="./616aHepHMpL._AC_SL1000_.jpg"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}