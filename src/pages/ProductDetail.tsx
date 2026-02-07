import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        setProduct(data?.data?.productByHandle || null);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    if (handle) fetchProduct();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

    const shopifyProduct: ShopifyProduct = { node: product };

    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success(`${product.title} added to cart`, {
      position: "top-center",
    });
  };

  const selectedVariant = product?.variants.edges[selectedVariantIndex]?.node;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6">
          <Link to="/store" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Store
          </Link>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : !product ? (
            <div className="text-center py-20">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Product not found</h2>
              <Link to="/store">
                <Button variant="outline">Back to Store</Button>
              </Link>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 lg:gap-16"
            >
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-secondary rounded-lg overflow-hidden border border-border">
                  {product.images.edges[selectedImage] ? (
                    <img
                      src={product.images.edges[selectedImage].node.url}
                      alt={product.images.edges[selectedImage].node.altText || product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                    </div>
                  )}
                </div>
                {product.images.edges.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.edges.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`w-16 h-16 rounded-md overflow-hidden border-2 flex-shrink-0 transition-colors ${
                          i === selectedImage ? "border-primary" : "border-border"
                        }`}
                      >
                        <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {product.title}
                </h1>
                <p className="font-display text-2xl font-bold text-primary mb-6">
                  {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
                </p>

                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Options */}
                {product.options.filter(o => o.name !== "Title").map((option) => (
                  <div key={option.name} className="mb-6">
                    <label className="font-display text-sm font-semibold text-foreground mb-2 block">
                      {option.name}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => {
                        const variantIndex = product.variants.edges.findIndex(v =>
                          v.node.selectedOptions.some(o => o.name === option.name && o.value === value)
                        );
                        const isSelected = selectedVariantIndex === variantIndex;
                        return (
                          <button
                            key={value}
                            onClick={() => variantIndex >= 0 && setSelectedVariantIndex(variantIndex)}
                            className={`px-4 py-2 text-sm font-body rounded-sm border transition-all duration-200 ${
                              isSelected
                                ? "border-primary bg-primary/10 text-foreground"
                                : "border-border text-muted-foreground hover:border-primary/50"
                            }`}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <Button
                  onClick={handleAddToCart}
                  disabled={isCartLoading || !selectedVariant?.availableForSale}
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-primary mt-auto"
                  size="lg"
                >
                  {isCartLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : !selectedVariant?.availableForSale ? (
                    "Sold Out"
                  ) : (
                    "Add to Cart"
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
