import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="w-full  bg-neutral-400 py-4 px-8">
            <ul className="flex w-full flex-col lg:flex-row items-center lg:justify-between">
                <li className="text-lg font-semibold cursor-pointer hover:underline">
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li className="text-lg font-semibold cursor-pointer hover:underline">
                    <Link to="/skin-care">
                        Skincare
                    </Link>
                </li>

                <li className="text-lg font-semibold cursor-pointer hover:underline">
                    <Link to="/especiais">
                        Especiais
                    </Link>
                </li>


                <li className="text-lg font-semibold cursor-pointer hover:underline">
                    <Link to="/contato">
                        Contato
                    </Link>
                </li>
            </ul>

        </header>
    );
}