import { ApiClient } from "./ApiClient";

export class OpenLibraryService {
  private static apiClient = new ApiClient(process.env.OPEN_LIBRARY);

  static async searchBooks(searchQuery: string, page: number) {
    return OpenLibraryService.apiClient.get(
      `/search.json?q=${searchQuery}&page=${page}`
    );
  }
}
