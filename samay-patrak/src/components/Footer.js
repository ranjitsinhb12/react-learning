function Footer(props) {
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <small>&copy; 2023 Chauhan development. All rights reserved.</small>
        </footer>
    )
}

export default Footer;