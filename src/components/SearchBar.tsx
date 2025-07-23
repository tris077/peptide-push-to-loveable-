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
    <div className="relative w-full max-w-6xl mx-auto group">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-20 pr-48 h-24 text-2xl bg-white/95 backdrop-blur-md border-2 border-white/40 shadow-biotech focus:shadow-glow focus:bg-white focus:border-accent/60 transition-all duration-500 rounded-full placeholder:text-muted-foreground/70 font-medium"
        />
        <Search className="absolute left-8 h-8 w-8 text-accent group-focus-within:scale-125 group-focus-within:text-accent transition-all duration-500" />
        <Button 
          onClick={onSearch}
          variant="hero"
          className="absolute right-6 h-16 px-12 text-xl bg-gradient-accent text-white border-0 shadow-glow hover:shadow-elevated hover:scale-105 transition-all duration-500 rounded-full font-bold"
        >
          Explore
        </Button>
      </div>
      
      {/* Enhanced biotech glow effect */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-focus-within:opacity-40 rounded-full blur-3xl transition-opacity duration-700 -z-10" />
      <div className="absolute inset-0 bg-gradient-mint opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500 -z-10" />
    </div>
  );
};