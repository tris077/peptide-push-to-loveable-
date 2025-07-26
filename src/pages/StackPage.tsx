import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStack } from "@/hooks/useStack";
import { useToast } from "@/hooks/use-toast";
import { peptidesData } from "@/data/peptides";
import { 
  Plus, 
  Trash2, 
  Star, 
  StarOff, 
  FlaskConical, 
  Calendar,
  Target,
  Search,
  Filter,
  Edit3,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function StackPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    stackItems, 
    addToStack, 
    removeFromStack, 
    togglePrimary, 
    updatePurpose,
    clearStack,
    isStackFull,
    stackCount 
  } = useStack();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingPurpose, setEditingPurpose] = useState<string | null>(null);
  const [tempPurpose, setTempPurpose] = useState("");

  const categories = Array.from(
    new Set(peptidesData.flatMap(p => p.category))
  ).sort();

  const availablePeptides = peptidesData.filter(peptide => {
    const notInStack = !stackItems.some(item => item.peptide.id === peptide.id);
    const matchesSearch = peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         peptide.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || 
                           peptide.category.includes(selectedCategory);
    
    return notInStack && matchesSearch && matchesCategory;
  });

  const handleAddPeptide = (peptide: any, purpose?: string) => {
    try {
      addToStack(peptide, purpose);
      setIsAddModalOpen(false);
      setSearchTerm("");
      setSelectedCategory("All Categories");
      toast({
        title: "Added to Stack",
        description: `${peptide.name} has been added to your stack.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleRemovePeptide = (peptideId: string, peptideName: string) => {
    removeFromStack(peptideId);
    toast({
      title: "Removed from Stack",
      description: `${peptideName} has been removed from your stack.`,
    });
  };

  const handleUpdatePurpose = (peptideId: string) => {
    updatePurpose(peptideId, tempPurpose);
    setEditingPurpose(null);
    setTempPurpose("");
    toast({
      title: "Purpose Updated",
      description: "Peptide purpose has been updated.",
    });
  };

  const primaryPeptides = stackItems.filter(item => item.isPrimary);
  const regularPeptides = stackItems.filter(item => !item.isPrimary);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <Navigation />
      
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(185_100%_65%_/_0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(260_60%_75%_/_0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/10 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FlaskConical className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-4xl font-black text-white mb-2">My Custom Stack</h1>
                  <p className="text-cyan-400 text-lg">
                    {stackCount === 0 
                      ? "Build your personalized peptide research stack" 
                      : `${stackCount} peptide${stackCount === 1 ? '' : 's'} in your stack (${15 - stackCount} remaining)`
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {stackCount > 0 && (
                  <Button
                    variant="outline"
                    onClick={clearStack}
                    className="text-red-400 border-red-400/50 hover:bg-red-400/10"
                  >
                    Clear Stack
                  </Button>
                )}
                
                <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      disabled={isStackFull}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-glow"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Peptide
                      {isStackFull && " (Stack Full)"}
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl bg-black/95 backdrop-blur-xl border border-white/20 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
                        <Plus className="h-6 w-6 text-cyan-400" />
                        Add Peptide to Stack
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Search and Filter */}
                      <div className="flex gap-4">
                        <div className="flex-1 relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Search peptides..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                            <Filter className="h-4 w-4 mr-2" />
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-black/95 border-white/20 text-white">
                            <SelectItem value="All Categories">All Categories</SelectItem>
                            {categories.map(category => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Available Peptides Grid */}
                      <div className="max-h-96 overflow-y-auto">
                        {availablePeptides.length === 0 ? (
                          <div className="text-center py-12">
                            <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-400">No peptides available to add</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {availablePeptides.map((peptide) => (
                              <Card key={peptide.id} className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between mb-3">
                                    <div>
                                      <h3 className="font-bold text-white mb-1">{peptide.name}</h3>
                                      <p className="text-sm text-gray-300 line-clamp-2">
                                        {peptide.shortDescription}
                                      </p>
                                    </div>
                                    <Button
                                      size="sm"
                                      onClick={() => handleAddPeptide(peptide)}
                                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                    >
                                      <Plus className="h-3 w-3 mr-1" />
                                      Add
                                    </Button>
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {peptide.category.slice(0, 2).map((cat) => (
                                      <Badge key={cat} className="text-xs bg-cyan-500/20 text-cyan-300">
                                        {cat}
                                      </Badge>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>

          {/* Stack Content */}
          {stackCount === 0 ? (
            <motion.div 
              className="text-center py-24"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FlaskConical className="h-16 w-16 text-cyan-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Your Stack is Empty</h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
                Start building your personalized peptide research stack by adding compounds that align with your research goals.
              </p>
              <Button 
                onClick={() => setIsAddModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-glow px-8 py-4 rounded-full font-bold text-lg"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Your First Peptide
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {/* Primary Peptides */}
              {primaryPeptides.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">Primary Stack</h2>
                    <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30">
                      {primaryPeptides.length} primary
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {primaryPeptides.map((item, index) => (
                        <StackPeptideCard
                          key={item.peptide.id}
                          item={item}
                          index={index}
                          onRemove={handleRemovePeptide}
                          onTogglePrimary={togglePrimary}
                          onUpdatePurpose={handleUpdatePurpose}
                          editingPurpose={editingPurpose}
                          setEditingPurpose={setEditingPurpose}
                          tempPurpose={tempPurpose}
                          setTempPurpose={setTempPurpose}
                          navigate={navigate}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {/* Regular Peptides */}
              {regularPeptides.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FlaskConical className="h-6 w-6 text-cyan-400" />
                    <h2 className="text-2xl font-bold text-white">Research Stack</h2>
                    <Badge className="bg-cyan-400/20 text-cyan-300 border-cyan-400/30">
                      {regularPeptides.length} peptide{regularPeptides.length === 1 ? '' : 's'}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {regularPeptides.map((item, index) => (
                        <StackPeptideCard
                          key={item.peptide.id}
                          item={item}
                          index={index}
                          onRemove={handleRemovePeptide}
                          onTogglePrimary={togglePrimary}
                          onUpdatePurpose={handleUpdatePurpose}
                          editingPurpose={editingPurpose}
                          setEditingPurpose={setEditingPurpose}
                          tempPurpose={tempPurpose}
                          setTempPurpose={setTempPurpose}
                          navigate={navigate}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Stack Peptide Card Component
interface StackPeptideCardProps {
  item: any;
  index: number;
  onRemove: (id: string, name: string) => void;
  onTogglePrimary: (id: string) => void;
  onUpdatePurpose: (id: string) => void;
  editingPurpose: string | null;
  setEditingPurpose: (id: string | null) => void;
  tempPurpose: string;
  setTempPurpose: (purpose: string) => void;
  navigate: (path: string) => void;
}

const StackPeptideCard = ({
  item,
  index,
  onRemove,
  onTogglePrimary,
  onUpdatePurpose,
  editingPurpose,
  setEditingPurpose,
  tempPurpose,
  setTempPurpose,
  navigate,
}: StackPeptideCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      layout
    >
      <Card className={`relative overflow-hidden bg-gradient-card backdrop-blur-lg border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 ${
        item.isPrimary ? 'ring-2 ring-yellow-400/50' : ''
      }`}>
        {/* Primary Badge */}
        {item.isPrimary && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/50 flex items-center gap-1">
              <Star className="h-3 w-3" />
              Primary
            </Badge>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onTogglePrimary(item.peptide.id)}
            className={`p-2 rounded-full ${
              item.isPrimary 
                ? 'text-yellow-400 hover:bg-yellow-400/20' 
                : 'text-gray-400 hover:bg-white/10'
            }`}
          >
            {item.isPrimary ? <Star className="h-4 w-4 fill-current" /> : <StarOff className="h-4 w-4" />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onRemove(item.peptide.id, item.peptide.name)}
            className="p-2 rounded-full text-red-400 hover:bg-red-400/20"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <CardHeader className="pb-4 pt-12">
          <CardTitle 
            className="text-xl font-bold text-primary cursor-pointer hover:text-cyan-400 transition-colors"
            onClick={() => navigate(`/compound/${item.peptide.id}`)}
          >
            {item.peptide.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.peptide.shortDescription}
          </p>

          {/* Purpose Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Purpose</span>
              {editingPurpose !== item.peptide.id && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setEditingPurpose(item.peptide.id);
                    setTempPurpose(item.purpose || "");
                  }}
                  className="p-1 h-auto text-gray-400 hover:text-cyan-400"
                >
                  <Edit3 className="h-3 w-3" />
                </Button>
              )}
            </div>
            
            {editingPurpose === item.peptide.id ? (
              <div className="space-y-2">
                <Textarea
                  value={tempPurpose}
                  onChange={(e) => setTempPurpose(e.target.value)}
                  placeholder="What's the purpose of this peptide in your stack?"
                  className="bg-white/10 border-white/20 text-white text-sm resize-none"
                  rows={2}
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => onUpdatePurpose(item.peptide.id)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setEditingPurpose(null)}
                    className="text-gray-400"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-300 bg-white/5 p-3 rounded-lg min-h-[3rem] flex items-center">
                {item.purpose || "No purpose specified yet"}
              </p>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {item.peptide.category.slice(0, 3).map((cat: string) => (
              <Badge key={cat} className="text-xs bg-accent/20 text-accent">
                {cat}
              </Badge>
            ))}
          </div>

          {/* Date Added */}
          <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 border-t border-white/10">
            <Calendar className="h-3 w-3" />
            Added {new Date(item.dateAdded).toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};