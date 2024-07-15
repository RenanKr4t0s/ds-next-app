export default function NavItem(props){
    return(
        <li className="nav-item">
          <a className="nav-link mx-1 custom-nav__itens" aria-current="page" href={props.href}>{props.name}</a>
        </li>
    )
}