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
    <div className="relative w-full max-w-3xl mx-auto group">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-14 pr-32 h-16 text-lg bg-white/80 backdrop-blur-md border-0 shadow-glass focus:shadow-elevated focus:bg-white transition-all duration-300 rounded-2xl placeholder:text-muted-foreground/60"
        />
        <Search className="absolute left-5 h-6 w-6 text-accent group-focus-within:scale-110 transition-transform duration-300" />
        <Button 
          onClick={onSearch}
          variant="hero"
          className="absolute right-3 h-10 px-8 bg-gradient-accent text-white border-0 shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300 rounded-xl font-semibold"
        >
          Search
        </Button>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-focus-within:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
    </div>
  );
};