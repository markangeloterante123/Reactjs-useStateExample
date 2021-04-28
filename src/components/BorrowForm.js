
import React, { useState } from 'react'


const BorrowForm = ({ addBorrower }) => {
	const [borrower, setBorrower] = useState('')
	const [date, setDate] = useState('')
	
	const onSubmit = (e) => {
		e.preventDefault()

		if(!borrower || !date){
			alert('Complete the fill up form')
			return
		}

		addBorrower({borrower, date})
		setBorrower('')
		setDate('')
	}

	return (
		<form>
			<div className="form-controller">
				<label>Barrower Name</label>
				<input 
					type="text" 
					value={borrower}
					onChange={(e)=> setBorrower(e.target.value)} 
				/>
			</div>
			<div className="form-controller">
				<label>Date:</label>
				<input 
					type="text" 
					value={date}
					onChange={(e)=> setDate(e.target.value)} 
				/>
			</div>
			<button className="btn" onClick={onSubmit} > Barrow Books </button>
		</form>
	)
}

export default BorrowForm