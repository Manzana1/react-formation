import { useState, useEffect } from 'react'
import CartItem from './CartItem'


// import { plantList } from '../datas/plantList'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {

	function removeItem(id) {
		console.log(`removeItemId: ${id}`)
		const newCart = cart.filter(item => item.id !== id);
		updateCart(newCart);

	}

	const [isOpen, setIsOpen] = useState(true)

	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>

			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map((item, index) => (
							//Ici on voit que j'ai essayer de faire sans créer de composant.
							<CartItem key={item.id} item={item} index={index} onRemove={() => removeItem(item.id)} />
						))}

						{/* {cart.map(({ id, name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								  <span>{name} {price}€ x {amount}</span>
								
								<button onClick={() => removeItem(id)}>x</button>
							</div>
						))} */}



					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}


export default Cart