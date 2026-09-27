import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';
import { ColorModeButton } from './components/ui/color-mode';

export const App = () => {
   const [selectedRecipe, setSelectedRecipe] = useState(null);
    return ( <> 
    <ColorModeButton/> {selectedRecipe ? ( <RecipePage recipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} /> ) : ( <RecipeListPage setSelectedRecipe={setSelectedRecipe}
    />
)}
</>
    );
};