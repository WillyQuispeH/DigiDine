import nextConfig from "../../next.config";

const config = {
  api_URL: nextConfig.env?.API_URL || "",
  api_key: nextConfig.env?.API_KEY || "",
  app_www: nextConfig.env?.APP_WWW || "",
  gtag: nextConfig.env?.GTAG || "",
  NEXTAUTH_URL: nextConfig.env?.NEXTAUTH_URL || "",
};

export default config;
