const Header = (parent, props) =>{
 const header = document.createElement('h1')
 header.append(props.title)
 parent.append(header)
}

export default Header
