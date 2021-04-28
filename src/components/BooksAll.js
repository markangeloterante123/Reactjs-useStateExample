
import { FaTimes } from 'react-icons/fa'

import { FaPlus} from 'react-icons/fa'

import Star from '../components/Star'

const BooksAll = ({book, showAll, deleteBook, visibility, setBorrowForm}) => {
	return(
		<>
			{showAll ?	
				<div className={`books ${book.visible ? 'active': ''}`} onDoubleClick={() => visibility(book.id)} title="Double Click" >	
					<h2>
						{book.title}
						{showAll ?
							<FaTimes className="active-show" onClick={() => deleteBook(book.id)} /> :
							<FaPlus className="active-show" />
						}
					</h2>
					<p>Type: {book.type}</p>
					<p>Price: {book.price}</p>
					<p>Stock: {book.stock}</p>
					<p>Rating: <Star star={book.star} /></p>
				</div> :
				<>
				{book.visible &&
					<div className={`books ${book.visible ? 'active': ''}`} >	
						<h2>
							{book.title}
							{book.borrow ?
								<FaTimes className="active-show" style={{color:'red'}} onClick={() => setBorrowForm(book)} /> :
								<FaPlus className="active-show" onClick={() => setBorrowForm(book)} />
							}
						</h2>
						<p>Type: {book.type}</p>
						<p>Price: {book.price}</p>
						<p>Stock: {book.stock}</p>
						<p>Rating: <Star star={book.star} /></p>
					</div>
				}
				</>
			}
		</>
	)
}

export default BooksAll