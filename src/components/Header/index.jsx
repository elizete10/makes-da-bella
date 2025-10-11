import { Link } from "react-router-dom";

export const Header = () => {
return (
<header>
<ul>
    <li>
        <Link to="/">
        Home
        </Link>
    </li>

    <li>
        <Link to="/skincare">
        Skincare
        </Link>
    </li>

    <li>
        <Link to="/especiais">
        Especiais
        </Link>
    </li>

       
    <li>
        <Link to="/contato">
        Contato
        </Link>
    </li>
</ul>

</header>
);
}