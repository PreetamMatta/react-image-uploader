const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Specify the API route you want to proxy
    createProxyMiddleware({
      target:
        "https://o3hde1m4ud.execute-api.us-east-1.amazonaws.com/Dev/kubex-identity-doc-poc/identity-output-file/Californian_sample_driver.json", // Replace with the API's actual URL
      changeOrigin: true,
    })
  );
};
