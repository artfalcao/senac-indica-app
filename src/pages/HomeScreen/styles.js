import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        align: 'center',
        height: "20%",
    },
    row1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        marginTop: 16,
        alignSelf: 'center',
    },
    logo: {
        height: 60,
        width: 160,
        resizeMode: "contain",
        alignSelf: "center",
    },
    local: {
        color: "#B66E6F",
        fontSize: 14,
        fontWeight:'bold'
    },
    searchBox: {
        width: "95%",
        alignSelf: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
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
        width: "95%",
        marginBottom: 16,
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
    },
    cardList: {
        height: "60%",
        width: "95%",
        alignSelf: "center",
        flexDirection: "column"
    }
})