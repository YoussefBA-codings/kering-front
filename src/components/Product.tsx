import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Product } from '@/types/products.types'

const Product = (product: Product) => {
  return (
    <Card className="w-[350px] mt-4">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <img className="w-full h-64 object-cover" src={product.images[0]} alt={product.name} />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Prix</Label>
              <span>{product.price} €</span>
              <Label htmlFor="name">Couleur</Label>
              <span>{product.color}</span>
              <Label htmlFor="name">Matériau</Label>
              <span>{product.material}</span>
              <Label htmlFor="name">Style</Label>
              <span>{product.style}</span>
              <Label htmlFor="name">Description</Label>
              <span>{product.description}</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default Product
