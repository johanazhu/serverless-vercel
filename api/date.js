export default function handler(request, response) {
  return response.send(`当前时间 ${new Date().toISOString()}`);
}
