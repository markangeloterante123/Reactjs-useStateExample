
import { Switch, Route } from 'react-router-dom'

import Home from './Data'

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	)
}

export default App