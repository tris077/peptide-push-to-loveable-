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
    <div className="relative w-full max-w-5xl mx-auto group">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-16 pr-40 h-20 text-xl bg-white/90 backdrop-blur-md border-2 border-white/30 shadow-elevated focus:shadow-glow focus:bg-white focus:border-accent/50 transition-all duration-300 rounded-3xl placeholder:text-muted-foreground/70 font-medium"
        />
        <Search className="absolute left-6 h-7 w-7 text-accent group-focus-within:scale-110 group-focus-within:text-accent transition-all duration-300" />
        <Button 
          onClick={onSearch}
          variant="hero"
          className="absolute right-4 h-12 px-10 text-lg bg-gradient-accent text-white border-0 shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300 rounded-2xl font-semibold"
        >
          Search
        </Button>
      </div>
      
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-focus-within:opacity-30 rounded-3xl blur-2xl transition-opacity duration-500 -z-10" />
    </div>
  );
};