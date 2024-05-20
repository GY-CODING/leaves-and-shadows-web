export async function getProfile (): Promise<any> {
  const response = await fetch('/api/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )
  const data = await response.text()
  return data
}
