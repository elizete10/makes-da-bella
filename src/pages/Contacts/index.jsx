import { Header } from "../../components/Header";

export const ContactPage = () => {
    return (
        <>
            <Header />

            <main className="min-h-dvh grid place-items-center bg-neutral-200 py-14  px-8 lg:px-12">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">
                    Bem - vindo a makes bella!
                </h1>

            <form action="/enviar" method="POST">
             <label for="nome">Nome:</label>
             <input type="text" id="nome" name="nome"/>
             <button type="submit">Enviar</button>
            
             </form> 
            </main>
        </>
    )
}