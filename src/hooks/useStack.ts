import { useState, useEffect } from "react";
import { Peptide } from "@/data/peptides";

export interface StackItem {
  peptide: Peptide;
  isPrimary: boolean;
  purpose?: string;
  dateAdded: string;
}

export const useStack = () => {
  const [stackItems, setStackItems] = useState<StackItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedStack = localStorage.getItem("peptide-stack");
    if (savedStack) {
      try {
        setStackItems(JSON.parse(savedStack));
      } catch (error) {
        console.error("Error loading stack from localStorage:", error);
      }
    }
  }, []);

  // Save to localStorage whenever stack changes
  useEffect(() => {
    localStorage.setItem("peptide-stack", JSON.stringify(stackItems));
  }, [stackItems]);

  const addToStack = (peptide: Peptide, purpose?: string) => {
    if (stackItems.length >= 15) {
      throw new Error("Maximum of 15 peptides allowed in stack");
    }
    
    if (stackItems.some(item => item.peptide.id === peptide.id)) {
      throw new Error("Peptide already in stack");
    }

    const newItem: StackItem = {
      peptide,
      isPrimary: false,
      purpose,
      dateAdded: new Date().toISOString(),
    };

    setStackItems(prev => [...prev, newItem]);
  };

  const removeFromStack = (peptideId: string) => {
    setStackItems(prev => prev.filter(item => item.peptide.id !== peptideId));
  };

  const togglePrimary = (peptideId: string) => {
    setStackItems(prev => 
      prev.map(item => 
        item.peptide.id === peptideId 
          ? { ...item, isPrimary: !item.isPrimary }
          : item
      )
    );
  };

  const updatePurpose = (peptideId: string, purpose: string) => {
    setStackItems(prev => 
      prev.map(item => 
        item.peptide.id === peptideId 
          ? { ...item, purpose }
          : item
      )
    );
  };

  const clearStack = () => {
    setStackItems([]);
  };

  const isInStack = (peptideId: string) => {
    return stackItems.some(item => item.peptide.id === peptideId);
  };

  return {
    stackItems,
    addToStack,
    removeFromStack,
    togglePrimary,
    updatePurpose,
    clearStack,
    isInStack,
    isStackFull: stackItems.length >= 15,
    stackCount: stackItems.length,
  };
};