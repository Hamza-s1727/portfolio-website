import "./Header.css"
import React from "react"
export default function Header(props) {

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

    const navRef = React.useRef(null)

    React.useEffect(() => {
        if (navbarOpen && navRef.current) {
            navRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [navbarOpen])


    const navMenuStyle = {
        display: navbarOpen ? "flex" : "none",
        opacity: navbarOpen ? 1 : 0,
        //visibility: navbarOpen ? "visible" : "hidden",
        transition: "opacity 0.2s ease, visibility 0.4s ease",
        flexDirection: "column"
    }


    function ToggleNavBar() {
        setNavBarOpen(prevState => (!prevState))
    }

    console.log("Navbar open: ", navbarOpen);

    return( <>
        <header>
            <h2>Hamza Sheikh</h2>
            <div className="header-buttons">
                <button className="headerButton" onClick={() => props.scrollToSection(props.refs.welcomeRef)} >Home</button>
                <button className="headerButton"onClick={() => props.scrollToSection(props.refs.aboutRef)} >About</button>
                <button className="headerButton" onClick={() => props.scrollToSection(props.refs.skillsRef)}>Skills</button>
                <button className="headerButton" onClick={() => props.scrollToSection(props.refs.projectsRef)}>Projects</button>
                <button className="headerButton" onClick={() => props.scrollToSection(props.refs.contactRef)}>Contact</button>
            </div>
            <div className="MobileNavBar">
                <button className="NavBarButton" onClick={ToggleNavBar}></button>
            </div>
        </header>
        <div className="NavBarExpanded" ref={navRef} style={navMenuStyle}>
                    <button className="headerButton" onClick={() => props.scrollToSection(props.refs.welcomeRef)}>Home</button>
                    <button className="headerButton" onClick={() => props.scrollToSection(props.refs.aboutRef)}>About</button>
                    <button className="headerButton" onClick={() => props.scrollToSection(props.refs.skillsRef)}>Skills</button>
                    <button className="headerButton" onClick={() => props.scrollToSection(props.refs.projectsRef)}>Projects</button>
                    <button className="headerButton" onClick={() => props.scrollToSection(props.refs.contactRef)}>Contact</button>
        </div>
        </>
    )
}