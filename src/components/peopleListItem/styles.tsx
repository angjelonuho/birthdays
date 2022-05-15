import Colors from '../../assets/theme/colors'
const Styles = {
    List: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        borderTop: "1px solid",
        borderColor: Colors.border,
    },
    ListItem: {
      
    },
    ListImage: {
        margin: 0,
        padding: 0,
    },
    ListText: {
        width: "100%",
        alignTtems: "center",


    },
    ItemName: {
        width: "29px",
        height: "15px",
        fontFamily: "inherit",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "12px",
        lineHeight: "15px",
        display: "flex",
        alignItems: "center",
    },
    ItemDate: {
        width: "65px",
        height: "15px",
        fontFamily: "inherit",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "15px",
        color: Colors.secondary
    },
    Image: {
        width: "38px",
        height: "38px",
        top: "14px",
        left: "14px",
        padding: "2.5px",
        borderRadius: "19px",

    },
    GridContainer: {
        height: "71px",
        borderBottom: "1px solid",
        borderColor: Colors.border,
        padding: "0 14px",
        flex: "none",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: "12px"
    }
}
export default Styles