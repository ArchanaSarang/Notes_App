import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* <h1>Navbar</h1> */}
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/notes">Notes</NavLink>
            </div>


        </>
    );
}
export default Navbar;