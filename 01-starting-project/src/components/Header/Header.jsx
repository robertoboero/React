
import './Header.css';
const reactDescritions = ['Fondamental', 'Core', 'Crucial'];
function genRandomDescription(max){
  return Math.floor(Math.random()* (max +1))
}

function Header (props) {
  const description = reactDescritions[genRandomDescription(2)]
    return(
            <header>
            <img src={props.logo} alt={props.alt} />

            <h1>React Essentials</h1>
            <pre>

            </pre>
            <p>

            {description} Rdeact conccepts you will need for almost any app you are



                    </p>
        </header>
    )

}

export default Header;