import imageUrlBuilder from "@sanity/image-url";
// Estado y config. de la inizialización del Cliente
import { client } from "./client";


// Configurar herramienta para obtener URL de Imagenes
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}