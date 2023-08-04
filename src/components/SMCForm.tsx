import useForm from '@/hooks/useForm'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Check, ChevronsUpDown, Loader2 } from 'lucide-react'
import Product from '@/components/Product'
import countries from '@/data/countries.json'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'

const SMCForm = () => {
  const { form, onSubmit, product, isFetching } = useForm()
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="smcCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code SMC</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Pays</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-[200px] justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? countries.find((country) => country.code === field.value)?.name
                          : 'Sélectionnez un pays'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Rechercher un pays..." />
                      <CommandEmpty>Aucun pays trouvé.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            value={country.name}
                            key={country.code}
                            onSelect={() => {
                              form.setValue('country', country.code)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                country.code === field.value ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {country.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*<FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pays</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un pays" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country, index) => (
                      <SelectItem key={index} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                {}
              </FormItem>
            )}
          />*/}
          <Button type="submit" disabled={isFetching}>
            {isFetching ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Envoyer'}
          </Button>
        </form>
      </Form>
      {product && !isFetching ? <Product {...product} /> : null}
    </>
  )
}

export default SMCForm
