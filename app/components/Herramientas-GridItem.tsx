import Image from "next/image"

interface GridProps {
    item: GridItem;
}

const GridComponent: React.FC<GridProps> = ({ item }) => {

    return(
        <div className="grid-container">
            <div className="flex">
                <Image src={item.imageUrl} width={10} height={10} alt="image" priority/>
                <div>
                    <p className="">{item.title}</p>
                    <p className="">{item.description}</p>
                </div>
            </div>

        </div>
    )
}
export default GridComponent;