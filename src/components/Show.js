
import Books from '../components/BooksAll'

const Show = ({books, showAll, deleteBook, visibility, setBorrowForm}) => {
	return (
		<>
			{books.map ((book) => (
				<Books 
					key={book.id} 
					book={book} 
					showAll={showAll}
					deleteBook={deleteBook}
					visibility={visibility}
					setBorrowForm={setBorrowForm}

				/>
			))} 
		</>
	)
}
export default Show