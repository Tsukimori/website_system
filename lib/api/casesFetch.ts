// lib/casesFetch.ts
import { apiClient } from "@/lib/api/apiClient"
import { Cms } from "@/types"

export const casesFetch = {
  list: (limit = 100) => apiClient.fetchList<Cms>("cases", { limit }),
  get: (id: string) => apiClient.fetchById<Cms>("cases", id),
}
