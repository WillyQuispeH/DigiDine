import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      id: string;
      person_id: string;
      exp:string
    };
  }
}
