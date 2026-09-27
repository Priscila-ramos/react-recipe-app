import { Box, Center, Heading, Image, SimpleGrid, Text, Input } from '@chakra-ui/react';
import { data } from '../utils/data';
import { useState } from 'react';

export const RecipeListPage = ({ setSelectedRecipe }) => {
    const [searchTerm, setSearchTerm] = useState("");
    // You can play around with the console log,
    // but ultimately remove it once you are done
    console.log(data.hits[0].recipe.mealType);

    const filteredRecipes = data.hits.filter((item) =>
        item.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
    ||item.recipe.healthLabels.some((label) => label.toLowerCase().includes(searchTerm.toLowerCase())
)
    );

    return (
        <Center minH="100vh" flexDir="column">
            <Heading>Your Recipe App</Heading>

            <Input placeholder="Search recipes..."
            value={searchTerm}
            onChange={(event)=> setSearchTerm(event.target.value)}
            />

            <SimpleGrid columns={{ base: 1, md: 3 }}
            gap= {6}>

            {filteredRecipes.map((item) => (<Box key={item.recipe.label} p={4}
            
            borderRadius="lg" onClick={() => setSelectedRecipe(item)}
            >
                <Image src={item.recipe.image}
                w="100%"
                h="250px"

                objectFit="cover"
                 />
                
            <Heading>{item.recipe.label}</Heading>

            <Text>{item.recipe.dietLabels.join(",")}</Text>

            <Text>{item.recipe.cautions.join(",")}</Text>

             <Text>{item.recipe.mealType.join(",")}</Text>

              <Text>{item.recipe.dishType.join(",")}</Text>

               {item.recipe.healthLabels.includes("Vegan") && ( <Text>Vegan</Text>)}

                {item.recipe.healthLabels.includes("Vegetarian") && ( <Text>Vegetarian</Text>)}

            </Box>))}

            </SimpleGrid>

        </Center>
    );
};