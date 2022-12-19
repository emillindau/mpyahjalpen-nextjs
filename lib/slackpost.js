export async function postSlackRegistration(text) {
  const res = await fetch('', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ text: text }),
  });
  return res;
}
