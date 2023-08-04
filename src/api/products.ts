import { getProductProps } from '@/types/products.types'
import { axiosInstance } from '@/api/axios'

export const getProducts = ({ smcCode, country }: getProductProps) => {
  const params = new URLSearchParams()
  params.set('SMC', smcCode);
  params.set('country', country);
  return axiosInstance.get(
      `product?${params.toString()}`
  );
}
