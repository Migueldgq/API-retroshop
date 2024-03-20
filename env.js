import dotenv from "dotenv";

dotenv.config();
export const {
  PORT,
  HOST_DB,
  USER_DB,
  PASSWORD_DB,
  PORT_DB,
  NAME_DB,
  TOKEN_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  IPV4,
} = process.env;
