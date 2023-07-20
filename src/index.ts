import server from "./server";

const { PORT = 8888 } = process.env;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
