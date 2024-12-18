import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { s } from "./styles"
import { colors } from "@/styles/theme"

function Button() {
    return (
        <TouchableOpacity activeOpacity={1}>
            <Text>Botãozinho</Text>
        </TouchableOpacity>
    )
}

export { Button }