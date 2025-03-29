import { Button } from "react-bootstrap"
import './Profile.css'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Profile = () => {
    const { logout, email } = useContext(UserContext)

    return  <div className="profile-container d-flex justify-content-center align-items-center">
        <div className="card-body text-center">
        <h2 className="card-title">Perfil de usuario</h2>

        <p className="text-muted">
            Email: {email}
        </p>
        <Button variant="danger" onClick={() => logout()} >Logout</Button>
        </div>
    </div>
}

export default Profile