import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Svg, { Text as SvgText, TextProps } from "react-native-svg";
import api from "../services/api";
import { colors } from "../styles";

const games = [
  { id: "1", title: "Catan", description: "Jeu de stratégie et d’échange" },
  { id: "2", title: "Carcassonne", description: "Jeu de pose de tuiles" },
  { id: "3", title: "7 Wonders", description: "Jeu de civilisation" },
  { id: "4", title: "Catan", description: "Jeu de stratégie et d’échange" },
  { id: "5", title: "Carcassonne", description: "Jeu de pose de tuiles" },
  { id: "6", title: "7 Wonders", description: "Jeu de civilisation" },
  { id: "7", title: "Catan", description: "Jeu de stratégie et d’échange" },
  { id: "8", title: "Carcassonne", description: "Jeu de pose de tuiles" },
  { id: "9", title: "7 Wonders", description: "Jeu de civilisation" },
  { id: "10", title: "Catan", description: "Jeu de stratégie et d’échange" },
  { id: "11", title: "Carcassonne", description: "Jeu de pose de tuiles" },
  { id: "12", title: "7 Wonders", description: "Jeu de civilisation" },
  { id: "13", title: "Catan", description: "Jeu de stratégie et d’échange" },
  { id: "14", title: "Carcassonne", description: "Jeu de pose de tuiles" },
  { id: "15", title: "7 Wonders", description: "Jeu de civilisation" },
  // Ajoute d’autres jeux ici
];

const numColumns = 2; // Nombre de colonnes pour la grille

export default function App() {
  useEffect(() => {
    api.get("/ping").then((res) => console.log(res.data));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {games.map((game, index) => {
        const isLeftAligned = index % numColumns === 0; // Vérifie si l'index est pair pour aligner à gauche
        const isRightAligned = index % numColumns === 1; // Vérifie si l'index est impair pour aligner à droite

        return (
          <View
            key={game.id}
            style={[
              styles.card,
              isLeftAligned && styles.leftAligned,
              isRightAligned && styles.rightAligned,
            ]}
          >
            <Svg height="60" width="120">
              <SvgText
                {...svgTextStyles}
                fill="none"
                stroke={colors.primary}
                strokeWidth="4"
              >
                {game.title}
              </SvgText>
              {/* Texte intérieur */}
              <SvgText {...svgTextStyles} fill="white">
                {game.title}
              </SvgText>
            </Svg>
            <Text>{game.description}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // ou "space-between"
    padding: 20,
    gap: 40,
    marginTop: 50,
  },
  card: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  leftAligned: {
    marginLeft: 20, // Espace à droite pour les cartes alignées à gauche
  },
  rightAligned: {
    marginRight: 20, // Espace à gauche pour les cartes alignées à droite
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

const svgTextStyles: TextProps = {
  fontWeight: "bold",
  fontSize: 15,
  x: 60,
  y: 30,
  textAnchor: "middle",
  alignmentBaseline: "middle",
};
