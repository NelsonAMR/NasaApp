const API_KEY = "n2r7urFwGMLE7aPWfbpgb6jnIo0eUt60bdHkLf1x";
const API_URL = "https://api.nasa.gov/planetary/apod";

export default async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${urlParams ? urlParams : ""}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
