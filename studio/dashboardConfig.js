export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc99bc03835a834a3aac0e5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b8wcqi7d',
                  apiId: 'a91d92e5-b07b-43e8-b10b-0dfc233eb1b4'
                },
                {
                  buildHookId: '5dc99bc0cf9975e7e049ec59',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6x1ahr9a',
                  apiId: '5c2ee89c-c9e1-4ef5-90e8-7039ff7b58bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cmanish049/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6x1ahr9a.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
