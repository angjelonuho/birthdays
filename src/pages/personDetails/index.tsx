import profilePicture from "../../assets/images/profilePicture.png";
import { useNavigate, useLocation } from "react-router-dom";
import Container from '../../components/common/container';
import Styles from './styles'

type LocationState = {
    data: {
        name: {
            title: string,
            first: string,
            last: string
        },
        dob: {
            date: string,
            age: number
        }
    }
}

const PeopleDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = (location.state as LocationState)?.data;

    return (
        <Container style={Styles.Container} data-testid="pd-1">
            <img style={Styles.Image} src={profilePicture} alt="Profile Picture"></img>
            <div style={Styles.TextDiv}>
                <h1 style={Styles.H1}>{data.name.first}</h1>
                <h3 style={Styles.H3}>{data.dob.age} years old</h3>
            </div>
            <button style={Styles.BackButton} onClick={() => { navigate("/") }}>GO BACK</button>
        </ Container>
    )
}

export default PeopleDetails;