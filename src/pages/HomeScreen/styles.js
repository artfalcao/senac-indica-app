import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: "#B66E6F",
        height: "20%",
    },
    row1: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "95%",
        marginTop: 16
    },
    logo: {
        height: 60,
        width: 60,
        alignSelf: "center",
    },
    logo2: {
        height: 60,
        width: 120,
        alignSelf: "center",
    },
    local: {
        color: 'white',
        fontSize: 14,
        fontWeight:'normal'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        fontSize: 14
    },
    row2: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "90%",
        marginTop: 16,
        alignSelf: "center",
    },
    filterTag: {
        width: 128,
        height: 40,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 5
    },
    filterTagText: {
        fontSize: 16
    }
})