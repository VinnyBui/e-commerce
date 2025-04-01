import { supabase } from "@/lib/supabase"

export default async function ProductsPage () {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
  
  if(error) {
    console.error('Error fetching products: ', error.message)
    return <div className="p-6">Failed to load product.</div>
  }
  console.log('products:', products)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lumen Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-md transition">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}