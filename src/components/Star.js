
import { FaStar } from  'react-icons/fa'

const Star = ({star}) => {
	return (
		<>
			{[...Array(star)].map((_, i) => (
				<FaStar key={i} style={{color:'#fff'}} />
			))}
		</>
	)
}

export default Star
