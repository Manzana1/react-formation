import PlantItem from './PlantItem'


function CartItem({ item, index, onRemove}) {
    return (
      <div>
        <span>{index + 1}. {item.name} - {item.price}€ x {item.amount}</span>
        <button onClick={() => onRemove()}>x</button>
      </div>
    );
  }
        // <div>
        //     <span>{index + 1}. {item.name} - {item.price}€ x {item.amount}</span>
        //     <button onClick={() => removeItem(item.id)}>Supprimer</button>
        // </div>
  


export default CartItem