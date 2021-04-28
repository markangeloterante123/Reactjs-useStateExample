
import React, { useState } from 'react'

import Home from './components/pages/Index'

const Data = () => {
	
	const [addBook, setAddBook] = useState(false)

	const [showAll, setShowAll] = useState(true)

	const [showBooks, setShowBooks] = useState(true)

	const [borrowShow, setBorrowSHow] = useState(false)

	const [borrowForm, setBorForm] = useState(false)
	
	const [books, setBooks] = useState([
		{
			id: '1',
			star: 5,
			title:'Over Geared',
			type:'WN-KR',
			price: 250,
			stock: 10,
			visible: true,
			borrow:false
		},
		{
			id: '2',
			star: 4,
			title:'The Legendary Moonlight Sculptor',
			type:'WN-KR',
			price: 300,
			stock: 9,
			visible: true,
			borrow:false
		},
		{
			id: '3',
			star: 5,
			title:'Isekai Tensei Soudouki',
			type:'LN-JP',
			price: 250,
			stock: 10,
			visible: false,
			borrow:false
		}
	])
	const [borrow, setBorrow] = useState([
		{
			id: '1',
			ids:'2',
			book:'The Legendary Moonlight Sculptor',
			borrower:'Mark Angelo Terante',
			date:'April-12'
		}
	])
	const [borrowHold, setBorrowHold] = useState({
			id:'',
			ids:'',
			book: ''
		})
	//Add Books
	const addBookNew = (addBookNew) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const star = Math.floor(Math.random() * 9) + 1
		const newBook = {id, star, ...addBookNew}
		setBooks([...books, newBook])
	} 
	//add borrower
	const addBorrower = (addBorrower) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newBorrower = {id, ...borrowHold, ...addBorrower }
		setBorrow([...borrow, newBorrower])
		setBooks(books.map((books) => books.id === borrowHold.ids ?
		{...books, stock:books.stock - 1} : books))
	}
	//return the book
	const returnBook = (rec) => {
		setBooks(books.map((books) => books.id === rec.ids ?
		{...books, stock:books.stock + 1} : books))	
		setBorrow(borrow.filter((borrow) => borrow.id !== rec.id ))	
	}

	//delete book
	const deleteBook = (id) => {
		setBooks(books.filter((books) => books.id !== id ))
	}
	//opem & closed books Add 
	const addBookOpen = () => {
		setAddBook(!addBook)
		setShowBooks(!showBooks)		
	}
	//visibility
	const visibility = (id) => {
		setBooks(books.map((books) => books.id === id ?
		{...books, visible:!books.visible} : books))
	}
	//--- toggle show books
	const onShow = () => {
		setShowAll(true)
	}
	const offShow = () => {
		setShowAll(false)
	}
	//--- end here
	//view all borrowed books
	const displayBorrow = () => {
		setShowBooks(!showBooks)
		setBorrowSHow(!borrowShow)
	}
	//display borrow form
	const setBorrowForm = (book) => {
		setBorForm(!borrowForm)	
		//first loop
		setBorrowHold({ids:book.id, book:book.title})
		//second loop
		setBooks(books.map((books) => books.id === book.id ?
		{...books, borrow:!books.borrow} : {...books, borrow:false}))
	}

	return(
		<Home 
			addBook={addBook}
			addBookOpen={addBookOpen} 
			books={books}
			showAll={showAll}
			onShow={onShow}
			offShow={offShow}
			addBookNew={addBookNew}
			deleteBook={deleteBook}			
			visibility={visibility}
			showBooks={showBooks}
			displayBorrow={displayBorrow}
			borrowShow={borrowShow}
			borrow={borrow}
			borrowForm={borrowForm}
			setBorrowForm={setBorrowForm}	
			addBorrower={addBorrower}
			returnBook={returnBook}
		/>
	)
}	

export default Data