# Strapi Starter Gridsome Blog v2

Gridsome starter for creating an great blog with Strapi.

This starter allows you to try Strapi with Gridsome with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

![screenshot image](/screenshot.png)

### Deploy the backend

To deploy the Strapi instance you'll need:

- [An Heroku account](https://signup.heroku.com/) for free
- [A Cloudinary account for saving images](https://cloudinary.com/users/register/free) for free

Once you have created these accounts you can deploy your instance by clicking on this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/strapi/strapi-starter-gridsome-blog)

### Deploy the frontend

**On Vercel**

To deploy the Gridsome blog you'll need:

  - [A Vercel account](https://vercel.com/dashboard) for free
  - Wait for your heroku instance to be up and running before deploying your Gridsome Blog
  - Vercel will ask you the root directory of the project to deploy which is **frontend**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fstrapi%2Fstrapi-starter-gridsome-blog-v2&env=GRIDSOME_STRAPI_URL&envDescription=Enter%20the%20url%20of%20your%20Strapi%20API%20without%20the%20trailing%20slash&project-name=my-strapi-starter-gatsby-blog)  

  - Select the repository you want to deploy, here it's the `strapi-starter-gridsome-blog`
  - Select the root directory of your frontend which is `frontend` here
  - Paste the url of your running Strapi instance on Heroku without the trailing slash as your `GRIDSOME_STRAPI_URL` env variable

### Automatic build on Vercel

We're using Gridsome which is a static site generator (SSG). This means we need to trigger new builds when the content changes in Strapi. We'll use webhooks to do this automatically.

  - We first need to create a Deploy Hook in Vercel. In your project's settings, go to the end of the Git Integration tab. Name your hook however you want, but make sure you link it to your master branch.

Then copy the generated URL and open your Strapi admin in production.

  - In the settings tab, open Webhooks and paste the hook URL. Make sure you check all events to trigger build after every change.

Now everytime we make a change in Strapi, Vercel creates a new build!

### Features in Strapi

- 1 Single type
- 4 Components
- 3 Collection types: Article, Category, User
- 6 Created articles
- 5 Created categories
- Permissions set to `true` for article, category and user
- Responsive design using UIkit
- Slug system
- Publication system (draft & published)
- Role based access control

### Getting started

Clone the repository

```
git clone https://github.com/strapi/strapi-starter-gridsome-blog.git
cd strapi-starter-gridsome-blog
```

**Backend**

Install dependencies and run your server

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

**Frontend**

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

Gridsome server is running here => [http://localhost:8080](http://localhost:8080)

Enjoy this starter
