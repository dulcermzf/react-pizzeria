import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
    return <div className="not-found-container d-flex justify-content-center align-items-center">
        <div className="image-container d-flex justify-content-end align-items-center">
            <div className="text-container">
                <p>Looks like you got lost!</p>
                <Link className="nav-link" to="/" >Click <span className="underline-text">here</span> to get back home :)</Link>
            </div>
        </div>
    </div>
}

export default NotFound