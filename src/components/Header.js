import "./Header.css"
import React from "react"
export default function Header() {

    const [navbarOpen, setNavBarOpen] = React.useState(false)
    React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setNavBarOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []);


    const navMenuStyle = {
        display: navbarOpen ? "flex" : "none",
        opacity: navbarOpen ? 1 : 0,
        //visibility: navbarOpen ? "visible" : "hidden",
        transition: "opacity 0.2s ease, visibility 0.4s ease",
        flexDirection: "column"
    }


    function ToggleNavBar() {
        console.log("its working")
        setNavBarOpen(prevState => !prevState)
    }

    console.log("Navbar open: ", navbarOpen);

    return( <>
        <header>
            <h2>Hamza Sheikh</h2>
            <div className="header-buttons">
                <button className="headerButton">Home</button>
                <button className="headerButton">About</button>
                <button className="headerButton">Skills</button>
                <button className="headerButton">Projects</button>
                <button className="headerButton">Contact</button>
            </div>
            <div className="MobileNavBar">
                <button className="NavBarButton" onClick={ToggleNavBar}></button>
            </div>
        </header>
        <div className="NavBarExpanded" style={navMenuStyle}>
                    <button className="headerButton">Home</button>
                    <button className="headerButton">About</button>
                    <button className="headerButton">Skills</button>
                    <button className="headerButton">Projects</button>
                    <button className="headerButton">Contact</button>
        </div>
        </>
    )
}