function NavItem(props) {
    return (
        <>
        <li><button id={props.navItemId}>{props.navItemName}</button></li>
        </>
    )
}

export default NavItem