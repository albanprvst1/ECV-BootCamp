import React from "react";
import { StyleSheet, StatusBar, ScrollView, Text,Image, View } from "react-native";

import { default as data } from "../../api/data.json";
const starships = data.results; // Récupérer le tableau des starships depuis la propriété "results"
const img = require("../../starships/CR90corvette.jpg");

export const StarshipFeedScreen = (/*{name,model,crew,hyperdrive_rating,cost_in_credits }*/) => {
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        {starships.map((starship, index) => (
          <>
                <Text key={index}>{starship.name},{starship.model},{starship.crew},{starship.hyperdrive_rating},{starship.cost_in_credits}</Text>
                <Text>cc </Text>
            <Image source={img} />
            
            </>
          
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});