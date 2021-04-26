export class ApiClient {
  private apiUrl;

  constructor(baseUrl: string | undefined) {
    this.apiUrl = baseUrl;
  }

  async get(resource: string) {
    const url = `${this.apiUrl}${resource}`;
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
      console.error(`Request ${url} failed with ${response.status}`);
      return response;
    } catch (error) {
      console.error(`Request ${url} failed with error`, error);
    }
  }
}
