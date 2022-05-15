import Colors from '../../assets/theme/colors'
const Styles = {
    Container: {
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center"
    },
    Image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: "100px",
        height: "100px",
        marginTop: "67px"
    },
    H1: {
        fontWeight: 700,
        fontSize: "32ppx",
        color: Colors.primary,
        marginBottom: 0
    },
    H3: {
        fontWeight: 400,
        marginTop: 0,
        fontSize: "16px"

    },
    TextDiv: {
        marginTop: "70px",
        color: Colors.secondary,
        textAlign: "center" as const

    },
    BackButton: {
        marginTop: "109px",
        width: "80vw",
        backgroundColor: Colors.primary,
        color: Colors.background,
        borderRadius: "6px",
        height: "35px",
        fontSize: "12px"
    }
}

export default Styles