import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from '@/components/header';
import { pokemons } from "@/data/pokemons"

export default function Index () {
    return (
        <View style={styles.container}>
            <Header title="Pokédex"/>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
    },
    cards: {
        padding: 15,
    },
});