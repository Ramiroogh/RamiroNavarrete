import { createClient } from "next-sanity";

// Crear conexion de Cliente Sanity
export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
})