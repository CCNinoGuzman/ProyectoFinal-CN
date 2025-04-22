var MenuTop = ({name, className})=>{
    return(
        <li className={className}>
            <a href="#" className="nav-link">{name}</a>
        </li>
    );
}

export default MenuTop;