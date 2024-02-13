import Image from "next/image";

interface GridProps {
    item: GridItemCapacitacion;
}

const FormacionItem: React.FC<GridProps> = ({ item }) => {
    return (
        <div className="flex items-center w-44 gap-3 p-2 hover:bg-blue-600 hover:text-white transition duration-300 rounded-md">
                <Image src={item.imageUrl} width={20} height={20} alt="image" priority />
                <p className="font-medium text-sm">{item.title}</p>
        </div>
    )
}
export default FormacionItem