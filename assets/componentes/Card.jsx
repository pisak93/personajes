import { Text, View } from "react-native-web";


function Card({ nombre, clase, xp, hp, mana, fuerza, velocidad, habilidades }) {

    return(
        <View>
            <Text>{nombre}</Text>
            <Text>{clase}</Text>
            <View>
                <Text>XP: {xp}</Text>
                <Text>HP: {hp}</Text>
                <Text>Mana: {mana}</Text>
            </View>
            <View>
                <Text>Fuerza: {fuerza}</Text>
                <Text>Velocidad: {velocidad}</Text>
            </View>
            <View>
                <Text>Habilidades</Text>
                <View>
                     {habilidades.map(function(habilidad,index){
                return (<Text key={index}>{habilidad}</Text>)
             })}

                </View>
           
            </View>
        </View>
    )
}

export default Card;