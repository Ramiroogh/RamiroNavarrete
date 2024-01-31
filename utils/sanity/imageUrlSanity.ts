import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

// Configurar herramienta para obtener URL de Imagenes
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}