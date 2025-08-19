export interface FavoritePeptide {
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

class FavoritesService {
  private getFavoritesKey(userId: string): string {
    return `favorites_${userId}`;
  }

  private getGlobalFavoritesKey(): string {
    return 'globalFavorites';
  }

  // Add a peptide to favorites
  addToFavorites(userId: string, peptide: any): void {
    try {
      const favoritesKey = this.getFavoritesKey(userId);
      const globalKey = this.getGlobalFavoritesKey();
      
      // Get current favorites for this user
      const currentFavorites = this.getFavorites(userId);
      
      // Check if already favorited
      if (currentFavorites.some(f => f.id === peptide.id)) {
        console.log('Peptide already in favorites');
        return;
      }

      // Create favorite peptide object
      const favoritePeptide: FavoritePeptide = {
        id: peptide.id,
        name: peptide.name,
        shortDescription: peptide.shortDescription,
        fullDescription: peptide.fullDescription,
        category: peptide.category,
        useCases: peptide.useCases,
        benefits: peptide.benefits,
        administration: peptide.administration,
        dosage: peptide.dosage,
        sideEffects: peptide.sideEffects,
        researchStatus: peptide.researchStatus,
        imageUrl: peptide.imageUrl,
        favoritedAt: new Date()
      };

      // Add to user's favorites
      const updatedFavorites = [...currentFavorites, favoritePeptide];
      localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));

      // Update global favorites (for quick lookup)
      const globalFavorites = JSON.parse(localStorage.getItem(globalKey) || '{}');
      globalFavorites[peptide.id] = {
        userId,
        favoritedAt: favoritePeptide.favoritedAt
      };
      localStorage.setItem(globalKey, JSON.stringify(globalFavorites));

      console.log(`Added ${peptide.name} to favorites`);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  }

  // Remove a peptide from favorites
  removeFromFavorites(userId: string, peptideId: string): void {
    try {
      const favoritesKey = this.getFavoritesKey(userId);
      const globalKey = this.getGlobalFavoritesKey();
      
      // Get current favorites
      const currentFavorites = this.getFavorites(userId);
      
      // Remove the peptide
      const updatedFavorites = currentFavorites.filter(f => f.id !== peptideId);
      localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));

      // Update global favorites
      const globalFavorites = JSON.parse(localStorage.getItem(globalKey) || '{}');
      delete globalFavorites[peptideId];
      localStorage.setItem(globalKey, JSON.stringify(globalFavorites));

      console.log(`Removed peptide ${peptideId} from favorites`);
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  }

  // Get all favorites for a user
  getFavorites(userId: string): FavoritePeptide[] {
    try {
      const favoritesKey = this.getFavoritesKey(userId);
      const stored = localStorage.getItem(favoritesKey);
      
      if (!stored) return [];
      
      const favorites = JSON.parse(stored);
      return favorites.map((f: any) => ({
        ...f,
        favoritedAt: new Date(f.favoritedAt)
      }));
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  }

  // Check if a peptide is favorited by a user
  isFavorited(userId: string, peptideId: string): boolean {
    try {
      const favorites = this.getFavorites(userId);
      return favorites.some(f => f.id === peptideId);
    } catch (error) {
      console.error('Error checking if favorited:', error);
      return false;
    }
  }

  // Get favorite count for a user
  getFavoriteCount(userId: string): number {
    try {
      const favorites = this.getFavorites(userId);
      return favorites.length;
    } catch (error) {
      console.error('Error getting favorite count:', error);
      return 0;
    }
  }

  // Clear all favorites for a user
  clearAllFavorites(userId: string): void {
    try {
      const favoritesKey = this.getFavoritesKey(userId);
      const globalKey = this.getGlobalFavoritesKey();
      
      // Get current favorites to remove from global
      const currentFavorites = this.getFavorites(userId);
      
      // Remove from global favorites
      const globalFavorites = JSON.parse(localStorage.getItem(globalKey) || '{}');
      currentFavorites.forEach(f => {
        delete globalFavorites[f.id];
      });
      
      // Clear user favorites
      localStorage.removeItem(favoritesKey);
      localStorage.setItem(globalKey, JSON.stringify(globalFavorites));
      
      console.log('Cleared all favorites');
    } catch (error) {
      console.error('Error clearing favorites:', error);
    }
  }

  // Search favorites
  searchFavorites(userId: string, searchTerm: string): FavoritePeptide[] {
    try {
      const favorites = this.getFavorites(userId);
      if (!searchTerm) return favorites;
      
      const term = searchTerm.toLowerCase();
      return favorites.filter(favorite =>
        favorite.name.toLowerCase().includes(term) ||
        favorite.shortDescription.toLowerCase().includes(term) ||
        favorite.category.some(cat => cat.toLowerCase().includes(term)) ||
        favorite.useCases.some(useCase => useCase.toLowerCase().includes(term)) ||
        favorite.benefits.some(benefit => benefit.toLowerCase().includes(term))
      );
    } catch (error) {
      console.error('Error searching favorites:', error);
      return [];
    }
  }

  // Filter favorites by category
  filterFavoritesByCategory(userId: string, category: string): FavoritePeptide[] {
    try {
      const favorites = this.getFavorites(userId);
      if (category === 'all') return favorites;
      
      return favorites.filter(favorite =>
        favorite.category.includes(category)
      );
    } catch (error) {
      console.error('Error filtering favorites:', error);
      return [];
    }
  }

  // Get unique categories from favorites
  getFavoriteCategories(userId: string): string[] {
    try {
      const favorites = this.getFavorites(userId);
      const categories = new Set<string>();
      
      favorites.forEach(favorite => {
        favorite.category.forEach(cat => categories.add(cat));
      });
      
      return Array.from(categories).sort();
    } catch (error) {
      console.error('Error getting favorite categories:', error);
      return [];
    }
  }
}

export const favoritesService = new FavoritesService();
export type { FavoritePeptide };
