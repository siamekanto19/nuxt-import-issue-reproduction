import { hashSync } from "bcryptjs"; // This import works fine with every other framework

export default defineEventHandler((event) => {
  return {
    string: hashSync("Sample String"), // Using function from Library
  };
});
