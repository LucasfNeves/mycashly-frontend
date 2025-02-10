import { getAllCategories } from '@/app/services/categoriesServices/getCategoriesByUserId'
import { useQuery } from '@tanstack/react-query'

export function useGetAllCategories() {
  const { data, isFetching } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => getAllCategories(),
  })

  return {
    categories: data ?? [],
    isFetchingAllCategories: isFetching,
  }
}
