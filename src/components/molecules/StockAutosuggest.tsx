import React, { useContext, useState, useEffect, FormEvent } from 'react';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
  Flex,
  PseudoBox,
} from '@chakra-ui/core';
import Autosuggest, {
  RenderSuggestionsContainer,
  RenderSuggestion,
  ChangeEvent,
} from 'react-autosuggest';
import fetchStockSymbols from '../../services/fetchStockSymbols';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string, allSuggestions: FinnhubCompanySymbol[]) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  const allFiltered =
    inputLength === 0
      ? []
      : allSuggestions.filter(
        (company) =>
          company.symbol.toLowerCase().slice(0, inputLength) === inputValue || 
          company.description.toLowerCase().includes(value) ,
      );
  return allFiltered.slice(0, 20);
};

const getSuggestionValue = (suggestion: any) => suggestion.symbol;

// Use your imagination to render suggestions.
const renderSuggestion: RenderSuggestion<any> = (suggestion: any) => (
  <PseudoBox
    _hover={{
      borderColor: "gray.200",
      bg: "gray.200"
    }}
  >
    <Flex justifyContent="space-between">
      <p>{suggestion.description}</p>
      <p>{suggestion.symbol}</p>
    </Flex>
  </PseudoBox>
);

const renderSuggestionsContainer: RenderSuggestionsContainer = ({
  containerProps,
  children,
}) => {
  const containerStyles = {
    position: 'absolute',
    zIndex: 100,
    background: 'white',
    color: 'black',
    maxHeight: '300px',
    overflow: 'scroll',
    width: '120%'
  };
  return (
    <div {...containerProps}>
      {/* @ts-ignore */}
      <Box {...containerStyles}>{children}</Box>
    </div>
  );
};
const StockAutosuggest = () => {
  const { setStockName } = useContext(ActiveCompany);
  const [suggestions, setSugestions] = useState<FinnhubCompanySymbol[]>([]);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetchStockSymbols().then((data) => {
      setCompanies(data);
      setSugestions(data);
    });
  }, []);
  const [value, setValue] = useState('');
  const onSuggestionsFetchRequested = ({ value }: {value: string}) => {
    setSugestions(getSuggestions(value, companies));
  };
  return (
    <Box position="relative">
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={() => {
            setSugestions(companies);
          }}
          onSuggestionSelected={(e, { suggestion }) => {
            setStockName(suggestion.symbol);
          }}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSuggestionsContainer={renderSuggestionsContainer}
          renderInputComponent={(inputProps) => (
            // Ignored due to Autosuggest props being passed that don't exist on Chakra
            // @ts-ignore
            <Input 
              marginLeft="10px" 
              color="black" 
              {...inputProps} 
            />
          )}
          inputProps={{
            placeholder: 'Type A Stock Symbol',
            onChange: (event: FormEvent<any>, { newValue }: ChangeEvent) => {
              setValue(newValue);
            },
            value
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default StockAutosuggest;
