import React from 'react'
import { Link } from 'react-router-dom' //Link is read as an <a></a> tag in html
import "../Styles/Navbar.css" //to import the css file

function Navbar() {
  return (
    <div className="Navbar-Container">
        <ul>
            <li>
                <Link to="/use-state">useState</Link>   {/* to instead of href in html*/}
            </li>
            <li>
                <Link to = "/use-effect">useEffect</Link>
            </li>
            <li>
                <Link to = "/use-context">useContext</Link>
            </li>
            <li>
                <Link to = "/use-ref">useRef</Link>
            </li>
            <li>
                <Link to = "/use-reducer">useReducer</Link>
            </li>
            <li>
                <Link to = "/use-callback">useCallback</Link>
            </li>
            <li>
                <Link to = "/use-memo">useMemo</Link>
            </li>
            <li>
                <Link to = "/custom-hook">Custom Hook</Link>
            </li>

        </ul>
    </div>
  )
}

export default Navbar