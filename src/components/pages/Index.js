
import { FaEye } from 'react-icons/fa'

import { FaEyeSlash } from 'react-icons/fa'

import Header from  '../../components/Header'

import AddBook from '../../components/AddBook'

import Show from '../../components/Show'

import Borrower from '../../components/Borrower'

import BorrowForm from '../../components/BorrowForm'

const Index = ({ 
			addBook, addBookOpen, books, showAll, 
			onShow, offShow, addBookNew, deleteBook, 
			visibility, showBooks, displayBorrow, 
			borrowShow, borrow, borrowForm, setBorrowForm,
			addBorrower,returnBook
}) => {

	return (
		<section>
			<div className="main">
				<div className="container">
					
					<Header 
						addBook={addBook}  
						onClick={addBookOpen}
						displayBorrow={displayBorrow}
						borrowShow={borrowShow} 
					/>

					<div className="form-container">	
						{ addBook &&
							<AddBook addBookNew={addBookNew} />
						}
						
						{borrowForm &&
							<BorrowForm addBorrower={addBorrower} />	
						}
					</div>

					{showBooks &&
						<>
							<div className="book-mode">
								<button className={`${showAll ? 'active':'hide'}`} onClick={onShow} >All Books</button>
								<button className={`${!showAll ? 'active':'hide'}`} onClick={offShow} >Books</button>
							</div>

							<div className="book-shelve">
								<Show 
									books={books}  
									showAll={showAll}
									deleteBook={deleteBook}
									visibility={visibility}
									setBorrowForm={setBorrowForm}
								/>
							</div>
						</>
					}

					{borrowShow &&
						<div className="book-shelve">
							<Borrower borrow={borrow} returnBook={returnBook} />
						</div>
					}

				</div>
			</div>	
		</section>
	)
}

export default Index