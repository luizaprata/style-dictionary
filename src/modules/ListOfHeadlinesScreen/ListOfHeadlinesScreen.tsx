import React from 'react';
import {
  ButtonPrimary,
  CardContent,
  HeadingSmall,
  Paragraph,
  ScrollArea,
  SubtitleSmall,
} from './ListOfHeadlinesScreen.styles';
import useHeadlinesApi from './useHeadlinesApi';

const ListOfCategoriesScreen: React.FC = () => {
  const {payload, isLoading, errorMessage} = useHeadlinesApi();

  if (errorMessage) {
    return <SubtitleSmall>{errorMessage}</SubtitleSmall>;
  }

  if (isLoading) {
    return <SubtitleSmall>Carregando</SubtitleSmall>;
  }

  return (
    <ScrollArea>
      <>
        {payload?.articles.map((article, i) => {
          return (
            <CardContent key={`headline-${i}`}>
              <HeadingSmall>{article.title}</HeadingSmall>
              <SubtitleSmall>{article.description}</SubtitleSmall>
              <Paragraph>{article.content}</Paragraph>
              <ButtonPrimary>Veja mais</ButtonPrimary>
            </CardContent>
          );
        })}
      </>
    </ScrollArea>
  );
};

export default ListOfCategoriesScreen;
