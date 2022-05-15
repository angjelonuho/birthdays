import PeopleListItem from '../../components/peopleListItem';
import Container from '../../components/common/container';
import Header from '../../components/common/headers';
import Styles from './styles'

const PeopleListComponent = () => {

    return (
        <Container style={Styles.h1}>
            <Header text={"Birthdays"} />
            <PeopleListItem />
        </Container>
    )
}

export default PeopleListComponent