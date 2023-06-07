export default function handler(request, response) {
  // api/[name].js -> /api/johan
  // request.query.name -> "johan"
  const { name = "world" } = request.query;
  return response.end(`Hello ${name}!`);
}
