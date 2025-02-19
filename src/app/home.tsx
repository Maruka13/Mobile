import { useEffect, useState } from "react"
import { View, Alert } from "react-native"
import { api } from "src/app/services/api"
import { Categories, CategoriesProps } from "./components/categories"

  
export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")

    async function fetchCategories() {
        try{
            const { data } = await api.get("/categories")
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias.")
        }
    }

useEffect(() => {
    fetchCategories()
}, [])

    return (
        <View style={{ flex: 1}}>
            <Categories 
                data={categories}
                onSelect={setCategory}
                selected={category} 
            />
        </View>
    )
}