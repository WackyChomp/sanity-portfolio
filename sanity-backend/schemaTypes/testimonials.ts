import {defineField, defineType} from 'sanity';

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'employmentlocation',
      title: 'Employment Location',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    }),
  ],
})