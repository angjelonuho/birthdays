import { useNavigate, useLocation } from "react-router-dom";
import Styles from './styles'

type LocationState = {
    data: string
}

const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = (location.state as LocationState)?.data

    return(
        <div data-testid="er-1">
        <h1 style={Styles.Text}>{data}</h1>
        <button style={Styles.BackButton} onClick={() => { navigate("/") }}>GO BACK</button>
        </div>
    )
}

export default ErrorPage