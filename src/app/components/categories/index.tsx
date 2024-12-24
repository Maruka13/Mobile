import { FlatList } from "react-native"
import { Category } from "../category"
import { s } from "./styles"

export type CategoriesProps = {
    id: string
    name: string
}[]

type Props = {
    data: CategoriesProps
}

export function Categories({ data }: Props) {
    console.log(data)

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Category name={item.name} iconId={item.id} />}
            horizontal
            contentContainerStyle={s.content}
            style={s.content}
        />
    )
}