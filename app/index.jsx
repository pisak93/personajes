import { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-web";
import Card from "../assets/componentes/Card";

export default function Index() {

  const [personajes, setPersonajes] = useState([]);

function getPersonajes() {

}

useEffect(function(){
  getPersonajes();
}, []);

function itemCard({item}){
  return(
    <Card
    nombre={item.nombre}
    clase={item.clase}
    xp={item.experiencia}
    hp={item.healthPoints}
    mana={item.mana}
    fuerza={item.fuerza}
    velocidad={item.velocidad}
    habilidades={item.habilidades}
    />
  )

}

  return (
    <View>
      <FlatList
      data={personajes}

      renderItem={itemCard}
      />
    </View>
  );
}
