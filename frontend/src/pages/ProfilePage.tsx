import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { stripeService } from "@/services/stripeService";
import { 
  User, 
  Mail, 
  Crown, 
  Calendar, 
  Edit3, 
  Save, 
  X, 
  Shield,
  Activity,
  DollarSign,
  CreditCard
} from "lucide-react";

const ProfilePage = () => {
  const { user, isLoading, updateSubscription } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    full_name: "",
    email: "",
    username: ""
  });

  useEffect(() => {
    if (user && !isLoading) {
      setEditForm({
        full_name: user.full_name || "",
        email: user.email,
        username: user.username
      });
    }
  }, [user, isLoading]);

  // Redirect if not authenticated
  if (!isLoading && !user) {
    navigate("/");
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 via-purple-100 to-orange-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    // TODO: Implement profile update functionality
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      full_name: user?.full_name || "",
      email: user?.email || "",
      username: user?.username || ""
    });
    setIsEditing(false);
  };

  const handleManageSubscription = async () => {
    if (!user?.stripe_customer_id) {
      console.error("No Stripe customer ID found");
      return;
    }

    try {
      await stripeService.redirectToCustomerPortal(user.stripe_customer_id);
    } catch (error) {
      console.error("Failed to redirect to customer portal:", error);
    }
  };

  const getSubscriptionBadge = (tier: string) => {
    switch (tier) {
      case 'premium':
        return (
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            <Crown className="h-4 w-4" />
            Premium
          </div>
        );
      case 'basic':
        return (
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            Basic
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            <User className="h-4 w-4" />
            Free
          </div>
        );
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 via-purple-100 to-orange-200 pt-20">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Edit3 className="h-4 w-4" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <Save className="h-4 w-4" />
                      Save
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editForm.full_name}
                      onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
                      className="h-12 border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <User className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-800">{user?.full_name || "Not provided"}</span>
                    </div>
                  )}
                </div>

                {/* Username */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Username
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editForm.username}
                      onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                      className="h-12 border-2 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <User className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-800 font-mono">{user?.username}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </Label>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-800">{user?.email}</span>
                  </div>
                </div>

                {/* Member Since */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Member Since
                  </Label>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-800">{formatDate(user?.created_at || "")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Subscription Status */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscription</h3>
              <div className="text-center mb-4">
                {getSubscriptionBadge(user?.subscription_tier || 'free')}
              </div>
              <p className="text-sm text-gray-600 text-center mb-4">
                {user?.subscription_tier === 'free' 
                  ? "Upgrade to access AI features"
                  : "You have full access to all features"
                }
              </p>
              {user?.subscription_tier === 'free' && (
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Upgrade to Premium
                </Button>
              )}
              {user?.stripe_customer_id && user?.subscription_tier !== 'free' && (
                <Button
                  onClick={handleManageSubscription}
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Manage Subscription
                </Button>
              )}
            </div>

            {/* Usage Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Usage Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Total Tokens</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {user?.total_tokens_used?.toLocaleString() || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Total Cost</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    ${((user?.total_cost_cents || 0) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600">Monthly Tokens</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {user?.monthly_tokens_used?.toLocaleString() || 0}
                  </span>
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    user?.is_active 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {user?.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Verified</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    user?.is_verified 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {user?.is_verified ? 'Yes' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
