api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle any errors before the request is sent, if necessary
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration or unauthorized access here
    if (error.response && error.response.status === 401) {
      // Example: redirect to login or refresh the token
      window.location.href = "/login"; // Adjust as needed
    }
    return Promise.reject(error);
  }
);
