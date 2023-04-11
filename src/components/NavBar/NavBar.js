import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Games for allnighters</h3>
            <div>
                <button>Resident Evil 4</button>
                <button>Elden Ring</button>
                <button>Hogwarts Legacy</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar