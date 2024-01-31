export default {
    name: 'job',
    type: 'document',
    title: 'Trabajo',
    fields: [
      {
        title: 'Nombre',
        name: 'name',
        type: 'string'
      },
      
      {
        title: 'Descripcion',
        name: 'description',
        type: 'string'
      },
      {
        title: 'Objetivo',
        name: 'objetive',
        type: 'string'
      },
      {
        title: 'Fecha',
        name: 'releaseDate',
        type: 'date'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug del Trabajo',
        options: {
            source: 'name',
        }
    },
    {
        name: 'images',
        type: 'array',
        title: 'Imagenes del Trabajo',
        of: [{type: 'image'}],
    },
    {
        name: 'category',
        title: 'Categoria del Trabajo',
        type: 'reference',
        to: [{
            type: 'category'
        }]
    }
    ]
}