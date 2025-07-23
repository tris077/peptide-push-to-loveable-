import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { peptidesData } from "@/data/peptides";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, onSearch, placeholder = "Search peptides, research chemicals..." }: SearchBarProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
      setShowSuggestions(false);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const generateSuggestions = (searchValue: string) => {
    if (!searchValue.trim()) return [];
    
    const suggestions = new Set<string>();
    const searchLower = searchValue.toLowerCase();
    
    peptidesData.forEach(peptide => {
      // Add peptide names
      if (peptide.name.toLowerCase().includes(searchLower)) {
        suggestions.add(peptide.name);
      }
      
      // Add categories
      peptide.category.forEach(cat => {
        if (cat.toLowerCase().includes(searchLower)) {
          suggestions.add(cat);
        }
      });
      
      // Add relevant description keywords
      const words = peptide.description.toLowerCase().split(/\s+/);
      words.forEach(word => {
        if (word.length > 3 && word.includes(searchLower)) {
          suggestions.add(word);
        }
      });
    });
    
    return Array.from(suggestions).slice(0, 6);
  };

  const handleInputChange = (newValue: string) => {
    onChange(newValue);
    const newSuggestions = generateSuggestions(newValue);
    setSuggestions(newSuggestions);
    setShowSuggestions(newValue.length > 0 && newSuggestions.length > 0);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
    onSearch();
  };

  const clearSearch = () => {
    onChange("");
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto group">
      <div className="relative flex items-center">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => value.length > 0 && suggestions.length > 0 && setShowSuggestions(true)}
          className="pl-20 pr-48 h-24 text-2xl text-foreground bg-white/95 backdrop-blur-md border-2 border-white/40 shadow-biotech focus:shadow-glow focus:bg-white focus:border-accent/60 transition-all duration-500 rounded-full placeholder:text-muted-foreground/70 font-medium"
        />
        <Search className="absolute left-8 h-8 w-8 text-accent group-focus-within:scale-125 group-focus-within:text-accent transition-all duration-500" />
        {value && (
          <Button
            onClick={clearSearch}
            variant="ghost"
            size="sm"
            className="absolute right-32 h-8 w-8 p-0 hover:bg-accent/20 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button 
          onClick={onSearch}
          variant="hero"
          className="absolute right-6 h-16 px-12 text-xl bg-gradient-accent text-white border-0 shadow-glow hover:shadow-elevated hover:scale-105 transition-all duration-500 rounded-full font-bold"
        >
          Explore
        </Button>
      </div>

      {/* Autocomplete Suggestions */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border rounded-3xl shadow-glow max-h-60 overflow-y-auto z-50"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-8 py-4 text-left hover:bg-accent/10 first:rounded-t-3xl last:rounded-b-3xl transition-colors duration-200 text-lg font-medium capitalize"
            >
              <Search className="inline h-4 w-4 mr-3 text-accent" />
              {suggestion}
            </button>
          ))}
        </div>
      )}
      
      {/* Enhanced biotech glow effect */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-focus-within:opacity-40 rounded-full blur-3xl transition-opacity duration-700 -z-10" />
      <div className="absolute inset-0 bg-gradient-mint opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500 -z-10" />
    </div>
  );
};