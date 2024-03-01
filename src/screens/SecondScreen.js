import React, { useState, useCallback } from "react"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import { Newspapers } from "../components/Newspapers";
import { fetchData } from "../fetchData";


export default function SecondScreen({ navigation }) {

    const [loading, setLoading] = useState(true)
    const [diarios, setDiarios] = useState(null)
    const [limit, setLimit] = useState(10)

    useFocusEffect(
        useCallback(() => {
            callApi();
        }, [])
    );

    const callApi = async () => {
        setLoading(true)
        try {
            var response = await fetchData("https://chroniclingamerica.loc.gov/newspapers.json")
            setDiarios(response.newspapers)
        } catch (error) {
            console.error('API call error:', error);
        } finally {
            setLoading(false)
        }
    };


    function loadMoreNewsPapers() {
        setLimit(limit + 10)
    }


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ScrollView style={{ width: '100%' }}>
                <View style={{ alignSelf: "center", justifyContent: "center",width: '100%' }}>
                    {loading ? (
                        <View style={{ alignSelf: "center", justifyContent: "center", }}>
                            <Text style={{ color: "black" }}>Cargando diarios...</Text>
                        </View>
                    ) : (
                        <View style={{ width: '100%' }}>
                            {
                                diarios?.map((diario, index) => (
                                    index < limit &&
                                    <Newspapers key={index} title={diario.title} id={diario.lccn} state={diario.state} />
                                ))
                            }
                            <TouchableOpacity onPress={() => loadMoreNewsPapers()} style={styles.buttonLoadMore}>
                                <Text style={styles.buttonText}>Ver mas</Text>
                            </TouchableOpacity>
                        </View>

                    )}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonLoadMore: {
        backgroundColor: "#007BFF", // Un azul bonito como color de fondo
        paddingVertical: 10, // Espacio vertical dentro del botón
        paddingHorizontal: 20, // Espacio horizontal dentro del botón
        borderRadius: 25, // Bordes redondeados
        // Sombra para dar un efecto elevado al botón (opcional)
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Necesario para sombra en Android
      },
      buttonText: {
        color: "white", // Color de texto blanco para contraste
        fontSize: 16, // Tamaño de fuente
        fontWeight: "bold", // Negrita
        textAlign: "center", // Alineación del texto
      }
})