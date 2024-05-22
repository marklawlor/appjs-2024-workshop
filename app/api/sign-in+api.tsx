export function GET(request: Request) {
  const body = await req.json();
  const username = body?.username;
  const password = body?.password;
  if (typeof password !== 'string' || typeof password !== 'string') {
    return new Response('Invalid Input', { status: 400 });
  } else {
    return new Response('Signed in', { status: 200 });
  }
}
