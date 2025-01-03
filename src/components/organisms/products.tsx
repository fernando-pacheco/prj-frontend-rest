import { ProductService } from "@/services/core/product"
import { Product } from "./product"
import { useEffect, useState } from "react"

interface ProductsProps {
    tag: string
}

export function Products({ tag }: ProductsProps) {
    const [productItems, setProductItems] = useState([
        {
            tag: "",
            id: "",
            product: {},
        },
    ])
    useEffect(() => {
        const fetchData = async () => {
            const service = new ProductService()
            const products = await service.getProducts()
            setProductItems(products)
        }

        fetchData()
    }, [])

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {productItems
                    .filter((product) => product.tag === tag)
                    .map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
            </div>
        </div>
    )
}
