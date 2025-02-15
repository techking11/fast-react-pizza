// import formatCurrency from '@/src/utils/formatCurrency';

// function OrderItem({ item, isLoadingIngredients, ingredients }) {
function OrderItem() {
  // const { quantity, name, totalPrice } = item;

  return (
    <li>
      order item
      <div>
        <p>{/* <span>{quantity}&times;</span> {name} */}</p>
        {/* <p>{formatCurrency(totalPrice)}</p> */}
      </div>
    </li>
  );
}

export default OrderItem;
