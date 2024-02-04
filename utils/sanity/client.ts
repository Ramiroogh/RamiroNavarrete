import { createClient } from "next-sanity";

// Crear conexion de Cliente Sanity
export const client = createClient({
    projectId: '5i5m1z88',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
})