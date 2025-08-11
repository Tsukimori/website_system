// lib/newsFetch.ts
import { apiClient } from "@/lib/api/apiClient"
import { Cms } from "@/types"

export const newsFetch = {
  list: (limit = 100) => apiClient.fetchList<Cms>("news", { limit }),
  get: (id: string) => apiClient.fetchById<Cms>("news", id),
}
