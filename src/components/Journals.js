import { StyleSheet, View, Text } from "react-native"

export function Journals(props) {
    return (
        <View style={styles.container}>
            <View>
            </View>
            <View>
                <View style={{flexDirection:"column" ,alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ color: "black", fontWeight: "bold",textAlign:"center" }}>{props.title}</Text>
                    <Text style={{ color: "black" ,textAlign:"center"}}>{props.publisher}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        width:"90%", 
        marginBottom:10
    }
})