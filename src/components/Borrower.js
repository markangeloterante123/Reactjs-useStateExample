


const Borrower = ({ borrow, returnBook }) => {
	return (
		<>
			{ borrow.map ((rec) => (
				<div className="books active" key={rec.id} onDoubleClick={() => returnBook(rec)} title="Double Click" >	
					<h2>Title: {rec.book} </h2>
					<p>Barrow By: {rec.borrower}</p>
					<p>Date: {rec.date}</p>
				</div>
			))}	
		</>
	)
}

export default Borrower