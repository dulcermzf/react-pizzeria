import { Button } from "react-bootstrap"
import './Profile.css'

const Profile = () => {
    return  <div className="profile-container d-flex justify-content-center align-items-center">
        <div className="card-body text-center">
        <h2 className="card-title">Perfil de usuario</h2>

        <p className="text-muted">
            Email: email@email.com
        </p>
        <Button variant="danger" >Logout</Button>
        </div>
    </div>
}

export default Profile