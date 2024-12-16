import { View, Text } from "react-native";
import { s } from "./styles";
import { Step } from "../step";

export function Steps() {
    return (
        <View style={s.container}>
            <Text style= {s.title}>Veja como funciona:</Text>

            <Step title="Encontre estabelecimentos" description="Veja parceiros Nearby perto de você." />
            <Step title="Ative seu cupom com QR Code" description="Escaneie o código para usar seu benefício." />
            <Step title="Garanta vantagens perto de você" description="Ative cupons onde estiver, em diferentes tipos de estabelecimento." />
            
        </View>
    )
}