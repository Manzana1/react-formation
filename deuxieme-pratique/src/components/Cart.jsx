import { useState, useEffect } from 'react'
import CartItem from './CartItem'


// import { plantList } from '../datas/plantList'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	//supprime un item
	// function removeItem(id) {

	// 	console.log(`removeItemId: ${id}`)
	//  	const newCart = cart.filter(item => item.id !== id);
	// if (index != -1) {
	// 		const newCart = [...cart]
	// 		newCart.splice(index, 1)
	// 		updateCart(newCart);
	// 	}
	// }



	function removeItem(id) {

		// console.log(`removeItemId: ${id}`)

		// const newCart = cart.filter(item => item.id !== id);
		// updateCart(newCart);

		updateCart(prevCart => {
			return prevCart.map(item => {
				if (item.id === id) {
					if (item.amount > 1) {
						//si la quantité est plus que 1, décrémenter la quatité
						return { ...item, amount: item.amount - 1 }
					} else {

						return null
					}
				}
				return item
			}).filter(item => item !== null)
		})
	}
	// const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
	//ouvre et ferme la panier
	const [isOpen, setIsOpen] = useState(true)

	const total = cart.reduce(
		// (acc, plantType) => acc + plantType.amount * plantType.price,
		// 0
		(acc, plantType) => acc + plantType.price * plantType.amount, 0
	)
	// useEffect - on veut que le titre de l'onglet change pour le montant total du panier

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
			{/* si la longueur du panier plus grand que 0 on map chaque item et son ordre(item, index) */}
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