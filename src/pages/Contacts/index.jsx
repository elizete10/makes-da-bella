import { useState } from "react";
import { Header } from "../../components/Header";
import { Textfield } from "../../components/TextField";

export const ContactPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        console.log({ name, email, message })
        // Enviar para API/banco de dados

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            <Header />

            <main className="min-h-dvh grid place-items-center bg-neutral-200 py-14  px-8 lg:px-12">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">
                    Gostaria de ser um revendedor dos nossos produtos?
                </h1>
                
                   <p>Preencha os campos a baixo e entraremos em contato assim que possível</p> 
                

                <form onSubmit={handleSubmit}>

                    <Textfield
                        label="Digite seu nome completo"
                        placeholder="Nome completo"
                        name="name"
                        id="name"
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />

                    <Textfield
                        label="Digite seu E-mail"
                        placeholder="E-mail"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />

                     <Textfield
                        label="Digite sua Mensagem"
                        placeholder="Mensagem"
                        type="text"
                        id="message"
                        name="message"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />

                    <button
                        type="submit"
                        className="inline-block px-4 py-2 w-full rounded-lg border houver:bg-slate-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        Enviar
                    </button>
                </form>

            </main>
        </>
    )
}