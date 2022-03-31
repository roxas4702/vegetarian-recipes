import { useState } from "react";
import { RecipeContext } from "./Contexts/RecipeContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Popular from "./pages/Popular";
import SearchedRecipes from "./pages/SearchedRecipes";

function App() {
	const [recipes, setRecipes] = useState([]);

  	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<div className="content">
					<Switch>
						<RecipeContext.Provider value ={{ recipes, setRecipes }}>
							<Route exact path='/'> <Popular /> </Route>
							<Route path='/searched/:search'> <SearchedRecipes /> </Route>
						</RecipeContext.Provider>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
  	);
}

export default App;