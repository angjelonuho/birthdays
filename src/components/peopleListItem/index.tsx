
import { useState, useEffect } from "react";
import axiosInstance from "../../helpers/axiosHelper";
import Styles from "./styles";
import profilePicture from "../../assets/images/profilePicture.png";
import { useNavigate } from "react-router-dom";
import formatDate from "../../utils/formatDate";

type data = {

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

const PeopleListItem = () => {
    const [list, setList] = useState<data[]>()
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get('https://randomuser.me/api/?results=1000&seed=chalkboard&inc=name,dob')
            .then((res) => {
                if (res.status === 200) {
                    setList(res?.data?.results)
                }
            })
            .catch((error) => {
                ErrorPageHandler(error.response.data.error)
            })
    })

    const ErrorPageHandler = (item: string) => {
        navigate('/Error', {
            state: {
                data: item
            }
        })
    }
    
    const DetailsClickHandler = (item: data) => {
        navigate('/Details', {
            state: {
                data: item
            }
        })
    }

    const listItems = list?.map((item: data, index: number) =>
        <li style={Styles.ListItem} key={index} onClick={() => DetailsClickHandler(item)}>
            <div style={Styles.GridContainer}>
                <img style={Styles.Image} src={profilePicture} alt=''></img>
                <div>
                    <span style={Styles.ItemName}>{item?.name.first}</span>
                    <span style={Styles.ItemDate} >
                        {formatDate(new Date(item?.dob.date))}
                    </span>
                </div>
            </div>
        </li>
    );
    return (
        <ul style={Styles.List} data-testid="pl-1">
            {listItems}
        </ul>
    )

}

export default PeopleListItem 