"use client"
import Image from "next/image"

interface GridProps {
    item: GridItem;
}

const GridComponent: React.FC<GridProps> = ({ item }) => {

    return(
        <div className="flex items-center p-3 hover:bg-secondary rounded-md">
            <div className="mr-4">
            <Image src={item.imageUrl} width={30} height={30} alt="image" priority />
            </div>
            <div>
                <p className="font-medium">{item.title}</p>
                <p className="font-normal text-xs">{item.description}</p>
            </div>
        </div>
    )
}
export default GridComponent;