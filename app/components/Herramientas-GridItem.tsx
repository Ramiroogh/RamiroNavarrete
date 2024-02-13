"use client"
import Image from "next/image"

interface GridProps {
    item: GridItem;
}

const GridComponent: React.FC<GridProps> = ({ item }) => {

    return(
        <div className="flex items-center w-52 gap-3 px-3 py-3 hover:bg-blue-600 hover:text-white rounded-md transition duration-300">
            <div className="">
                <Image src={item.imageUrl} width={30} height={30} alt="image" priority />
            </div>
            <div>
                <p className="font-medium ">{item.title}</p>
                <p className="font-normal text-xs">{item.description}</p>
            </div>
        </div>
    )
}
export default GridComponent;