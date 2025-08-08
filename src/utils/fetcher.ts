const fetcher = async (...args: Parameters<typeof fetch>) => {
  try {
    const [url, options = {}] = args;
    const res = await fetch(url, {
      ...options,
      headers: {
        Authorization: "Bearer Wookie2021",
        ...options.headers,
      },
    });

    if (!res.ok) {
      throw new Error("An error occurred while fetching the data.");
    }

    return await res.json();
  } catch {
    // Handle fetch() failures like timeouts, CORS errors, DNS issues
    throw new Error("An error occurred while fetching the data.");
  }
};

export default fetcher;
