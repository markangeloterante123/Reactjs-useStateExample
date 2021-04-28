
import React, { useState } from 'react'
 
const AddBook = ({addBookNew}) => {

	const [title, setTitle] = useState('')
	const [type, setType] = useState('')
	const [stock, setStock] = useState('')
	const [price, setPrice] = useState('')
	const [visible] = useState(true)
	const [borrow] = useState(false)
	const onSubmit = (e) => {
		e.preventDefault()
		if(!title || !type || !stock || !price){
			alert('Please complet the input fields');
			return
		}

		addBookNew({title, type, price, stock,visible})

		setTitle('')
		setType('')
		setStock('')
		setPrice('')
	}

	return (
		<form>
			<div className="form-controller">
				<label>Book Name</label>
				<input 
					type="text" 
					value={title}
					onChange={(e)=> setTitle(e.target.value)} 
				/>
			</div>
			<div className="form-controller">
				<label>Book type</label>
				<input 
					type="text"
					value={type}
					onChange={(e)=> setType(e.target.value)}
				/>
			</div>
			<div className="form-controller">
				<label>Book Stock</label>
				<input 
					type="text" 
					value={stock}
					onChange={(e)=> setStock(e.target.value)}
				/>
			</div>
			<div className="form-controller">
				<label>Book Price</label>
				<input 
					type="text"
					value={price}
					onChange={(e)=> setPrice(e.target.value)}
				/>
			</div>
				<button className="btn" onClick={onSubmit} > Add Book </button>
		</form>
	)
}


export default AddBook