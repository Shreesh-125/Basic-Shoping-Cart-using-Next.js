This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

------installled libraries-----------
1) npx shadcn-ui@latest init
2) npm install @reduxjs/toolkit
3) npm install react-redux
4) npm install next-auth@beta
5) shadcn things like i) npx shadcn-ui@latest add card ii) npx shadcn-ui@latest add button




-----Extra things we have done---
1) visited githb for Oauth service setting->developersetting->Oauth there we created new application and in application we have provided HomwpageURL as our local3000 and AuthenticationURL we have taken from https://authjs.dev/guides/configuring-github scrooling down we get this link http://localhost:3000/api/auth/callback/github which we have to provide in AuthenticationURL

2) npx auth secret in terminal then we get a Auth_SECRET key which we have have to paste in .env.local file that we have created in src 
3) after the second step we have to get client id from the application of oauth that we have created in github and also client secret from that apllication only by generating it 
AUTH_GITHUB_ID={CLIENT_ID}
AUTH_GITHUB_SECRET={CLIENT_SECRET}

we have to paste above two variable in .env file with there values as mentioned in step 3


