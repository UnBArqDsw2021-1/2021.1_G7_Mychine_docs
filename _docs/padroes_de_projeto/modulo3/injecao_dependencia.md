---
layout: default
title: Injeção de dependência
grand_parent: Desenho de Software (Padrões de Projeto)
parent: Módulo Padrões de Projeto Extras
nav_order: 1
---

Injeção de dependência
{: .fs-9}

#### Versionamento

{: .no_toc }

| Versão | Data       | Comentários                                         | Autor(es)      |
| ------ | ---------- | --------------------------------------------------- | -------------- |
| 0.1    | 15/09/2021 | Adicionando conteúdo sobre o injeção de dependência | Eduardo Picolo |

### Conceito

Injeção de Dependência é um é um padrão de projeto usado para evitar o alto nível de acoplamento de código dentro de uma aplicação. O padrão Injeção de dependência diz:

- Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
- Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

### Modelagem

### Código Exemplo

Em ReactJS é possivel implementar a injeção de dependência por meio do Context.

O CartContext contém as operações do carrinho, como adicionar e remover item.

A interface abaixo contém a abstração do CartContext

```typescript
export interface ICartContext {
  hidden: boolean
  cart: ICartItem[]
  addItem(item: ICartItem, quantity?: number): void
  removeItem: Dispatch<SetStateAction<ICartItem>>
  clearItem: Dispatch<SetStateAction<ICartItem>
  findItem(item: ICartItem['id']): ICartItem | undefined
  clearCart: Dispatch<SetStateAction<[]>
  toggleCart(state?: boolean): void
  cartItemsCount: number
  cartTotal: number
}
```

Logo é utilizado o `React Context` para prover a implementação da interface

```typescript
export const CartContext = createContext<ICartContext>(/* CartContextDefaultValues */);
```

Implemetação dos estados e métodos da interface ICartContext

```typescript
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [hidden, setHidden] = useState(true);

  const findItem = (itemId: ICartItem['_id']) => {
    /* ... */
  };

  const addItem = (itemToAdd: ICartItem, quantity?: number) => {
    /* ... */
  };

  const removeItem = (itemToRemove: ICartItem) => {
    /* ... */
  };

  const clearItem = (itemToClear: ICartItem) => {
    /* ... */
  };

  const clearCart = () => setCart([]);

  const toggleCart = (state?: boolean) => {
    /* ... */
  };

  const cartItemsCount = {
    /* ... */
  };

  const cartTotal = {
    /* ... */
  };

  const values = {
    cart,
    hidden,
    addItem,
    removeItem,
    clearItem,
    findItem,
    clearCart,
    toggleCart,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
```

E para facilitar o uso na aplicação, é criado um _custom hook_ `useCart` a partir do `React.useContext`

```typescript
export function useCart() {
  const context = useContext<ICartContext>(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
```

Por fim, é criado um componente generico `Produto` que fará uso do método `addItem`.
Esse componente depende somente da abstração injetada via `CartContext`

```typescript
import { useCart } from '../../context/Cart'

const Produto = ({ item }) => {
  const { addItem } = useCart()

  return (
    <S.Produto>
      <S.Imagem>
      <S.Descricao>
      <Button onClick={() => addItem(item)}>
    </S.Produto>
  )
}
```

Com isso, temos o componente visual `Produto` e a implementação do Context para o carrinho, que são independentes, podem ser desenvolvidos em paralelo e são abertos a extensão.

### Vantagens

Ao expor abstrações utilizando Injeção de Dependência o codigo se torna mais facil de acompanhar a manter, e a aplicação como um todo fica mais flexivel e facil de extender.

### Desvantagens

Devido ao context usar referencia por identidade para determinar quando re-renderizar, em alguns casos pode acontecer renderizações não-intencionais nos consumidores desse context quando o pai desse context re-renderizar.

## Referências

Context – React. Disponível em: https://reactjs.org/docs/context.html. Acesso em: 15 de setembro de 2021.
