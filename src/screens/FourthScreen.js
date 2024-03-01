import React, { useState, useCallback } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { TradingActivity } from "../components/TradingActivity"
import { useFocusEffect } from '@react-navigation/native';
import { fetchData } from "../fetchData";


export default function FourthScreen({ navigation }) {

    const [loading, setLoading] = useState(true)
    const [tradingActivity, setTradingActivity] = useState(null)
    const [limit, setLimit] = useState(10)

    useFocusEffect(
        useCallback(() => {
            callApi();
        }, [])
    );

    const callApi = async () => {
        setLoading(true)
        try {
            var response = await fetchData("https://api.wazirx.com/sapi/v1/tickers/24hr")
            setTradingActivity(response)
        } catch (error) {
            console.error('API call error:', error);
        } finally {
            setLoading(false)
        }
    };

    function loadMoreTradings() {
        setLimit(limit + 10)
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ScrollView style={{ width: '100%' }}>

                {
                    loading ? (
                        <View style={{ alignSelf: "center", justifyContent: "center", }}>
                            <Text style={{ color: "black" }}>Cargando criptomonedas...</Text>
                        </View>
                    )
                        :
                        (
                            <View style={{ width: '100%' }}>
                                {
                                    tradingActivity?.map((activity, index) => (
                                        index < limit &&
                                        <TradingActivity key={index} activity={activity} />
                                    ))
                                }
                                <TouchableOpacity onPress={() => loadMoreTradings()} style={styles.buttonLoadMore}>
                                    <Text style={styles.buttonText}>Ver mas</Text>
                                </TouchableOpacity>
                            </View>
                        )
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonLoadMore: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    }
})