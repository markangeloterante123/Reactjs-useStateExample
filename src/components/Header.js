
import { FaPlus } from 'react-icons/fa'

import { FaTimes } from 'react-icons/fa'

import { FaEye} from 'react-icons/fa'

import { FaEyeSlash } from 'react-icons/fa'

const Header = ({ addBook, onClick, displayBorrow, borrowShow }) => {
	return (
		<header>
			{!borrowShow ?
				'Books-useState' :
				'Barrow Records'
			}
			
			<div>
				<button className="btn" onClick={onClick}>
					{ !addBook ? 
						<FaPlus /> :
						<FaTimes />
					}
				</button>
				<button className="btn" onClick={displayBorrow}>
					{borrowShow ?
						<FaEye /> :
						<FaEyeSlash />
					}
				</button>
			</div>	
		</header>
	)
}

export default Header