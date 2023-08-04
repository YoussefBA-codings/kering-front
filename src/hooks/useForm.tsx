import { useForm as useHookForms } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from 'react-query'
import { getProducts } from '@/api/products'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { Product } from '@/types/products.types';

const formSchema = z.object({
  smcCode: z.string(),
  country: z.string(),
})

const useForm = () => {
  const { toast } = useToast()
  const form = useHookForms<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      smcCode: '',
      country: '',
    },
  })

  const { data, isFetching, refetch } = useQuery({
    queryKey: [
      'getProduct',
      `smc-${form.getValues('smcCode')}`,
      `country-${form.getValues('country')}`,
    ],
    queryFn: () =>
      getProducts({ smcCode: form.getValues('smcCode'), country: form.getValues('country') }),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: 1,
    onError: (error: { response: { data: { message: string } } }) => {
      const errorMessage = error?.response?.data?.message ?? "Une erreur s'est produite"
      toast({
        variant: 'destructive',
        description: errorMessage,
      })
    },
  })

  const product: Product = data?.data ?? null

  function onSubmit(values: z.infer<typeof formSchema>) {
    refetch()
  }

  return { form, onSubmit, product, refetch, isFetching }
}

export default useForm
