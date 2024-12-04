import React, { useState, useEffect } from 'react';
import { AutocompleteType } from './model/model';
import { GenreType } from '@/pages/movie/model/model';

export const Autocomplete = ({
  suggestions,
  setInput,
  saveKeywords,
  placeholder,
}: AutocompleteType) => {
  const [query, setQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<GenreType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setInput(value);

    if (value) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelect = (suggestion: GenreType) => {
    if (!selectedItems.includes(suggestion)) {
      setSelectedItems((prev) => [...prev, suggestion]);
    }
    setQuery('');
    setShowSuggestions(false);
  };

  useEffect(() => {
    saveKeywords(selectedItems.map((items) => items.id));
  }, [selectedItems]);

  const handleRemove = (item: string) => {
    setSelectedItems((prev) =>
      prev.filter((selected) => selected.name !== item)
    );
  };

  const filteredSuggestions = suggestions.filter(
    (suggestion) =>
      suggestion.name.toLowerCase().includes(query.toLowerCase()) &&
      !selectedItems.includes(suggestion)
  );

  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:border-lightBlue"
        placeholder={placeholder}
      />

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelect(suggestion)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && filteredSuggestions.length === 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md px-4 py-2 text-gray-500">
          No suggestions found.
        </div>
      )}

      {selectedItems.length > 0 && (
        <div className="flex flex-wrap gap-2 my-2">
          {selectedItems.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 pl-2 pr-1 py-1 rounded-md flex items-center"
            >
              {item.name}
              <button
                onClick={() => handleRemove(item.name)}
                className="ml-2 -mt-3 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
