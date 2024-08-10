import 'dotenv/config';
export const env = {
  jwtSecret: process.env.JWT_SECRET!,
  API_TOKEN: process.env.API_TOKEN!
};
