import React from 'react';
import {View, Text} from 'react-native';
import useHeadlinesApi from './useHeadlinesApi';
import {Title, Description, ScrollArea, HeadlineCard} from './ListOfHeadlinesScreen.styles';

const ListOfCategoriesScreen: React.FC = () => {
  const {payload, isLoading, errorMessage} = useHeadlinesApi();

  if (errorMessage) {
    return <Text>{errorMessage}</Text>;
  }

  if (isLoading) {
    return <Title>Carregando</Title>;
  }

  return (
    <ScrollArea>
      <>
        {payload?.articles.map((article, i) => {
          return (
            <HeadlineCard key={`headline-${i}`}>
              <Title>{article.title}</Title>
              <Description>{article.description}</Description>
            </HeadlineCard>
          );
        })}
      </>
    </ScrollArea>
  );
};

export default ListOfCategoriesScreen;
