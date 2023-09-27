import type { Product } from '@/types/product_type';
import { ICartProduct } from '@/types/cart_product.interface';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartState = {
  shoppingCart: ICartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  incrementProductQuantity: (product: ICartProduct) => void;
  decreaseProductQuantity: (product: ICartProduct) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      shoppingCart: [],

      addToCart: (product) => {
        const shoppingCart = get().shoppingCart;
        const isInCart = shoppingCart.some((item) => item.id === product.id);
        if (isInCart || product.stock === 0) {
          return;
        }
        set((state) => ({
          shoppingCart: [...state.shoppingCart, { ...product, quantity: 1 }]
        }));
      },

      removeFromCart: (id) => {
        const shoppingCart = get().shoppingCart;
        const filteredCart = shoppingCart.filter((item) => item.id !== id);
        set(() => ({ shoppingCart: filteredCart }));
      },

      incrementProductQuantity: (product: ICartProduct) => {
        const newShoppingCart = structuredClone(get().shoppingCart);
        const productIndex = newShoppingCart.findIndex(
          (item) => item.id === product.id
        );
        if (productIndex >= 0 && product.quantity < product.stock) {
          newShoppingCart[productIndex].quantity++;
          set(() => ({ shoppingCart: newShoppingCart }));
        }
      },

      decreaseProductQuantity: (product: ICartProduct) => {
        if (product.quantity > 1) {
          const newShoppingCart = structuredClone(get().shoppingCart);
          const productIndex = newShoppingCart.findIndex(
            (item) => item.id === product.id
          );
          newShoppingCart[productIndex].quantity--;
          set(() => ({ shoppingCart: newShoppingCart }));
        }
      }
    }),

    {
      name: 'cart'
    }
  )
);
