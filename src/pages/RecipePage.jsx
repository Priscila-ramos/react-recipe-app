import { Heading, Image, Text, Button, Box } from '@chakra-ui/react';
import { useEffect } from 'react';

export const RecipePage = ({ recipe, setSelectedRecipe }) => { useEffect(() => {

    window.scrollTo(0, 0);
}, []);
    return ( <Box
    maxW="900px"
    mx="auto"
    p={{ base: 4, md: 8 }}>
    <Button onClick={() => setSelectedRecipe(null)}>Back
    </Button>

    <Heading
    my={4}
    
    fontSize={{ base: "2x1", md: "3x1" }}>
        
        {recipe.recipe.label}
        </Heading>

    <Image src={recipe.recipe.image}
    w="100%"
    maxH="450px"
    
    objectFit="cover"
    
    borderRadius="lg"
    mb={6}
    />

<Box mb={6}>
    <Text>- Meal type: {recipe.recipe.mealType.join(",")}</Text>
    <Text>- Dish type: {recipe.recipe.dishType.join(",")}</Text>

    <Text>- Total time: {recipe.recipe.totalTime > 0 ? `${recipe.recipe.totalTime} minutes` : "N/A"}</Text>
   
   {recipe.recipe.dietLabels.length > 0 && (
    <Text>- Diet labels: {recipe.recipe.dietLabels.join(",")}</Text>)}
   <Heading size="md" my={4}>
     Health labels:
   </Heading>
   {recipe.recipe.healthLabels.map((label) => ( <Text key={label}> • {label}

   </Text>))}
    <Text mb={1}> - Cautions: {recipe.recipe.cautions.join(",")}</Text>

    <Text mb={1}> - Servings: {recipe.recipe.yield}</Text>
</Box>

    <Heading size="md" my={4}>Ingredients:</Heading>
    {recipe.recipe.ingredientLines.map((ingredient) => (
        <Text key={ingredient}
        mb={1}> • {ingredient}</Text>
    ))}

    <Heading size="md" my={4}>Nutrients:</Heading>
    <Text mb={1}>
       - Energy: {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)} kcal
    </Text>

     <Text mb={1}>
       - Protein: {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
    </Text>

    <Text mb={1}>
       - Fat: {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
    </Text>

    <Text mb={1}>
      - Carbs: {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} g
    </Text>

    <Text mb={1}>
      - Cholesterol: {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
    </Text>

    <Text mb={1}>
       - Sodium: {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
    </Text>

    </Box>
    );
};