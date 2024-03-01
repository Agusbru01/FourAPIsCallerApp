import React, { useCallback, useState } from "react"
import { View, Text, Image, StyleSheet, Dimensions } from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import { fetchData } from "../fetchData";


export default function FirstScreen({ navigation }) {
  const [imageDog, setImageDog] = useState("")
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      callApi();
    }, [])
  );

  const callApi = async () => {
    setLoading(true)
    try {
      var response = await fetchData("https://dog.ceo/api/breeds/image/random")
      setImageDog(response.message)
    } catch (error) {
      console.error('API call error:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {loading ? (
        <Text style={{ color: "black" }}>Cargando Imagenes...</Text>
      ) : (
        <View style={styles.borderContainer}>
          <Image
            source={{ uri: imageDog }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  borderContainer: {
    width: '90%',
    height: Dimensions.get('window').width * 0.56, // 16:9 aspect ratio
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // for Android
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})