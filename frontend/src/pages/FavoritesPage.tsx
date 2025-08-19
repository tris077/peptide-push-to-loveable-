import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Heart, BookOpen, Filter, Search, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface FavoritePeptide {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string[];
  useCases: string[];
  benefits: string[];
  administration: string;
  dosage: string;
  sideEffects: string;
  researchStatus: string;
  imageUrl?: string;
  favoritedAt: Date;
}

const FavoritesPage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<FavoritePeptide[]>([]);
  const [filteredFavorites, setFilteredFavorites] = useState<FavoritePeptide[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories from favorites
  const categories = ["all", ...Array.from(new Set(favorites.flatMap(f => f.category || [])))];

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    // Load favorites from localStorage
    loadFavorites();
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Filter favorites based on search and category
    let filtered = favorites;

    if (searchTerm) {
      filtered = filtered.filter(favorite =>
        favorite.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        favorite.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (favorite.category || []).some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(favorite =>
        (favorite.category || []).includes(selectedCategory)
      );
    }

    setFilteredFavorites(filtered);
  }, [favorites, searchTerm, selectedCategory]);

  const loadFavorites = () => {
    try {
      const storedFavorites = localStorage.getItem(`favorites_${user?.id}`);
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites).map((f: any) => ({
          ...f,
          favoritedAt: new Date(f.favoritedAt)
        }));
        setFavorites(parsedFavorites);
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFavorite = (peptideId: string) => {
    const updatedFavorites = favorites.filter(f => f.id !== peptideId);
    setFavorites(updatedFavorites);
    
    // Update localStorage
    localStorage.setItem(`favorites_${user?.id}`, JSON.stringify(updatedFavorites));
    
    // Also update the global favorites state if it exists
    const globalFavorites = JSON.parse(localStorage.getItem('globalFavorites') || '{}');
    delete globalFavorites[peptideId];
    localStorage.setItem('globalFavorites', JSON.stringify(globalFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem(`favorites_${user?.id}`);
    localStorage.removeItem('globalFavorites');
  };

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 via-purple-100 to-orange-200 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your favorites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 via-purple-100 to-orange-200 pt-20">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Favorites</h1>
          <p className="text-gray-600 text-lg">
            {favorites.length === 0 
              ? "Start building your peptide collection by favoriting compounds you're interested in"
              : `You have ${favorites.length} favorited peptide${favorites.length !== 1 ? 's' : ''}`
            }
          </p>
        </motion.div>

        {favorites.length > 0 && (
          <>
            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-xl mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search your favorites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 border-2 border-gray-200 focus:border-pink-400 focus:ring-pink-400/20"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-pink-400/20"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear All Button */}
                <Button
                  onClick={clearAllFavorites}
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredFavorites.length} of {favorites.length} favorites
              </div>
            </motion.div>

            {/* Favorites Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredFavorites.map((favorite, index) => (
                <motion.div
                  key={favorite.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Remove Favorite Button */}
                  <Button
                    onClick={() => removeFavorite(favorite.id)}
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full w-8 h-8 p-0"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>

                  {/* Favorite Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-pink-500 text-white border-0">
                      <Heart className="h-3 w-3 mr-1" />
                      Favorited
                    </Badge>
                  </div>

                  {/* Peptide Card */}
                  <div className="transform transition-transform duration-200 hover:scale-105">
                    <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-xl">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{favorite.name}</CardTitle>
                        <p className="text-gray-600 text-lg">{favorite.shortDescription}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">Category: {(favorite.category || []).join(", ")}</p>
                        <p className="text-sm text-gray-700 mb-3">Use Cases: {(favorite.useCases || []).join(", ")}</p>
                        <p className="text-sm text-gray-700 mb-3">Benefits: {(favorite.benefits || []).join(", ")}</p>
                        <p className="text-sm text-gray-700 mb-3">Administration: {favorite.administration || "Not specified"}</p>
                        <p className="text-sm text-gray-700 mb-3">Dosage: {favorite.dosage || "Not specified"}</p>
                        <p className="text-sm text-gray-700 mb-3">Side Effects: {favorite.sideEffects || "Not specified"}</p>
                        <p className="text-sm text-gray-700 mb-3">Research Status: {favorite.researchStatus || "Not specified"}</p>
                        {favorite.imageUrl && (
                          <img src={favorite.imageUrl} alt={favorite.name} className="w-full h-auto rounded-lg mt-4" />
                        )}
                        
                        {/* View Details Button */}
                        <Button
                          onClick={() => navigate(`/compound/${favorite.id}`)}
                          className="w-full mt-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Favorited Date */}
                  <div className="text-xs text-gray-500 text-center mt-2">
                    Added {favorite.favoritedAt.toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State for Filtered Results */}
            {filteredFavorites.length === 0 && favorites.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No matches found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search terms or category filter
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </>
        )}

        {/* Empty State */}
        {favorites.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-16 w-16 text-pink-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Start Building Your Collection</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Browse our research library and click the heart icon on any peptide to add it to your favorites
            </p>
            <Button
              onClick={() => navigate("/directory")}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3 rounded-xl"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Browse Research Library
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
