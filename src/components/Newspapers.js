import { StyleSheet, View, Text } from "react-native"

export function Newspapers(props) {
    return (
        <View style={styles.container}>
            <View>
            </View>
            <View style={{ flexDirection: "column" }}>
                <View style={{ alignItems: "center", alignContent: "center" }}>
                    <Text style={{ color: "black" }}>{props.title}</Text>
                    <Text style={{ color: "black" }}>{props.state}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width:"90%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        borderRadius:10,
        borderWidth:1,
        margin:5,
    }
})