import React, { useContext, useState, useEffect } from 'react';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import { Input, InputGroup, InputLeftElement, Icon, Box, Flex } from '@chakra-ui/core';
import Autosuggest, { RenderSuggestionsContainer, RenderSuggestion } from 'react-autosuggest';
import fetchStockSymbols from '../../services/fetchStockSymbols';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string, allSuggestions) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  const allFiltered = inputLength === 0 ? [] : allSuggestions.filter(company =>
    company.symbol.toLowerCase().slice(0, inputLength) === inputValue
  )
  return allFiltered.slice(0, 20);
};

const getSuggestionValue = (suggestion: any) => suggestion.symbol;

// Use your imagination to render suggestions.
const renderSuggestion: RenderSuggestion<any> = (suggestion: any) => (
  <Flex justifyContent="space-between">
    <p>{suggestion.symbol}</p>
    <p>{suggestion.description}</p>
  </Flex>
);

const renderSuggestionsContainer: RenderSuggestionsContainer = ({containerProps,children}) => {
  const containerStyles = {
    background: 'white',
    color: 'black',
    maxHeight: '300px',
    overflow: 'scroll'
  }
  return (
    <div {...containerProps}>
      <Box {...containerStyles}>
        {children}
      </Box>
    </div>
    
  )
}
const StockAutosuggest = () => {
  const { setStockName } = useContext(ActiveCompany);
  const [suggestions, setSugestions] = useState([]);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetchStockSymbols().then((data) => {
      setCompanies(data)
      setSugestions(data)
    })
  }, [])
  const [value, setValue] = useState('')
  const inputProps = {
    placeholder: 'Type a stock symbol',
    value,
    onChange: (event: Event, { newValue }) => { 
      setValue(newValue)
    }
  };
  const onSuggestionsFetchRequested = ({ value }) => {
    setSugestions(getSuggestions(value, companies))
  }
  return (
    <Box position='relative'>
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={() => { setSugestions(companies) }}
          onSuggestionSelected={(e, { suggestion }) => {
            setStockName(suggestion.symbol)
          }}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSuggestionsContainer={renderSuggestionsContainer}
          renderInputComponent={(inputProps) => (
            <Input marginLeft="10px" color="black" {...inputProps} />
          )}
          inputProps={inputProps}
        />

      </InputGroup>
    </Box>
  );
};

export default StockAutosuggest;