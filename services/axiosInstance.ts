const handleCreateAxiosInstance = async () => {
  const axios = await (await import("axios")).default;
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
    method: "get",
    params: { api_key: process.env.API_KEY },
  });

  return instance;
};

export default handleCreateAxiosInstance;
