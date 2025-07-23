import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, onSearch, placeholder = "Search peptides, research chemicals..." }: SearchBarProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-12 pr-20 h-14 text-lg border-2 border-primary/20 focus:border-primary transition-colors bg-card/50 backdrop-blur-sm"
        />
        <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
        <Button 
          onClick={onSearch}
          variant="hero"
          className="absolute right-2 h-10 px-6"
        >
          Search
        </Button>
      </div>
    </div>
  );
};