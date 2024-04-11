import Image from "next/image";

interface GridProps {
    item: GridItemCapacitacion;
}

const FormacionItem: React.FC<GridProps> = ({ item }) => {
    return (
        <div className="flex items-center gap-3 p-5 hover:bg-blue-600 hover:text-white transition duration-300 rounded-md">
            <Image src={item.imageUrl} width={30} height={30} alt="image" priority />
            <p className="font-medium text-md">{item.title}</p>
        </div>
    )
}
export default FormacionItem