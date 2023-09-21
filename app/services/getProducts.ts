export async function getProducts<TProducts>(
  url: string
): Promise<TProducts | undefined> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
