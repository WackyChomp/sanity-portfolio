import {defineField, defineType} from 'sanity';


export const aboutType = defineType({
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields:[
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    // {
    //   name: '',
    //   title: '',
    //   type: 'string',
    // },
  ]
})