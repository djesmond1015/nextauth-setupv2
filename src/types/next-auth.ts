import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    message: string;
  }
  interface Session {
    user: User & {
      message: string;
    };
    token: {
      message: string;
    };
  }
}

// declare module 'next-auth' {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       message : string;
//     } & DefaultSession['user'];
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     id: string;

//   }
// }
