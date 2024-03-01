import React, { useState, useCallback, useEffect } from "react"
import { View, Text, ScrollView } from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import { Journals } from "../components/Journals";
import { fetchData } from "../fetchData";

export default function ThirdScreen({ navigation }) {
    const [loading, setLoading] = useState(true)
    const [journals, setJournals] = useState(null)

    useFocusEffect(
        useCallback(() => {
            callApi();
        }, [])
    );

    const callApi = async () => {
        setLoading(true)
        try {
            var response = await fetchData("https://api.crossref.org/journals?query=pharmacy+health")
            setJournals(response.message.items)
        } catch (error) {
            console.error('API call error:', error);
        } finally {
            setLoading(false)
        }
    };



    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ScrollView style={{ width: '100%', height: "100%" }}>
                <Text onPress={() => navigation.navigate("Home")} >Pantalla Tres</Text>
                {loading ? (
                    <View style={{ alignSelf: "center", justifyContent: "center", }}>
                        <Text style={{ color: "black" }}>Cargando revistas...</Text>
                    </View>
                )
                    :
                    (
                        journals?.map((journal, index) => (
                            <Journals key={index} title={journal.title} publisher={journal.publisher} />
                        ))
                    )
                }
            </ScrollView>
        </View>
    )
}