import { StyleSheet, View, Text } from "react-native"

function formatNumber(num) {
    return Number(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

export function TradingActivity(props) {
    return (
        <View style={styles.container}>
            <View style={{ padding: 5, width: "100%", alignItems: "center", borderBottomWidth: 1, width: "100%" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 25 }}>{props.activity.symbol}</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>({props.activity.baseAsset})</Text>
                </View>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center"}}>
                <View style={{ flexDirection: "row"}}>
                    <Text style={{ color: "red", fontWeight: "bold", fontSize: 13 }}>lowPrice: {formatNumber(props.activity.lowPrice)} {props.activity.quoteAsset}</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 13 }}>  -  </Text>
                    <Text style={{ color: "green", fontWeight: "bold", fontSize: 13 }}>highPrice: {formatNumber(props.activity.highPrice)} {props.activity.quoteAsset}</Text>
                </View>
                <Text style={{ color: "black", fontSize: 15 }}>lastPrice: {formatNumber(props.activity.lastPrice)} {props.activity.baseAsset}</Text>
                <Text style={{ color: "black", fontSize: 15 }}>volume: {formatNumber(props.activity.volume)} {props.activity.baseAsset}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "95%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        margin: 5,
    }
})