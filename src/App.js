import { useState } from "react";
import { RecipeContext } from "./contexts/RecipeContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Popular from "./pages/Popular";
import RecipePage from "./pages/RecipePage";
import SearchedRecipes from "./pages/SearchedRecipes";

function App() {
	const [recipes, setRecipes] = useState([]);

  	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<div>
					<Switch>
						<RecipeContext.Provider value ={{ recipes, setRecipes }}>
							<Route exact path='/' component={Popular} />
							<Route exact path='/recipe/:id' component={RecipePage} />							
							<Route path='/searched/:search' component={SearchedRecipes} />
						</RecipeContext.Provider>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
  	);
}

export default App;