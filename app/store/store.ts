import { create } from 'zustand';
import type { Products } from '@/types/products_type';
import { persist } from 'zustand/middleware';

//TODO Extender Products y agregarle quantity pa que sea el shopping cart product

interface ICartProduct extends Products {
  quantity: number;
}

type CartState = {
  shoppingCart: ICartProduct[];
  addToCart: (product: Products) => void;
  removeFromCart: (product: Products) => void;
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

      removeFromCart: (product) => {
        const shoppingCart = get().shoppingCart;
        const filteredCart = shoppingCart.filter(
          (item) => item.id !== product.id
        );
        set(() => ({ shoppingCart: filteredCart }));
      },

      incrementProductQuantity: (product: ICartProduct) => {
        const newShoppingCart = get().shoppingCart;
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
          const newShoppingCart = get().shoppingCart;
          const productIndex = newShoppingCart.findIndex(
            (item) => item.id === product.id
          );
          newShoppingCart[productIndex].quantity - 1;
          set(() => ({ shoppingCart: newShoppingCart }));
        }
      }
    }),

    {
      name: 'cart'
    }
  )
);
