// lib/blogsFetch.ts
import { apiClient } from "@/lib/api/apiClient"
import { Cms } from "@/types"

export const blogsFetch = {
  list: (limit = 100) => apiClient.fetchList<Cms>("blogs", { limit }),
  get: (id: string) => apiClient.fetchById<Cms>("blogs", id),
}
