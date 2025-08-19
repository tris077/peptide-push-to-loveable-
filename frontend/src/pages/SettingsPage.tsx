import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Crown, 
  Bell, 
  Moon, 
  Sun, 
  Palette, 
  Shield, 
  CreditCard,
  User,
  Heart,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const SettingsPage = () => {
  const { user, isAuthenticated } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 via-purple-100 to-orange-200 pt-20">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Required</h1>
            <p className="text-gray-600 mb-6">Please sign in to access your settings.</p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-600">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 via-purple-100 to-orange-200 pt-20">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Settings className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Settings & Preferences
          </h1>
          <p className="text-xl text-gray-600">
            Manage your account, subscription, and app preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Settings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                    <User className="h-6 w-6 text-purple-500" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{user?.full_name || user?.username}</p>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit Profile
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Password</p>
                      <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* App Preferences */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                    <Palette className="h-6 w-6 text-blue-500" />
                    App Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Push Notifications</p>
                        <p className="text-sm text-gray-600">Get notified about updates and new features</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {darkMode ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-600" />}
                      <div>
                        <p className="font-medium text-gray-900">Dark Mode</p>
                        <p className="text-sm text-gray-600">Switch between light and dark themes</p>
                      </div>
                    </div>
                    <Switch
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Auto-save</p>
                        <p className="text-sm text-gray-600">Automatically save your work</p>
                      </div>
                    </div>
                    <Switch
                      checked={autoSave}
                      onCheckedChange={setAutoSave}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Data Sharing</p>
                        <p className="text-sm text-gray-600">Help improve the app with anonymous usage data</p>
                      </div>
                    </div>
                    <Switch
                      checked={dataSharing}
                      onCheckedChange={setDataSharing}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Subscription & Quick Actions */}
          <div className="space-y-6">
            {/* Subscription Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                    <Crown className="h-6 w-6 text-yellow-500" />
                    Subscription
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-white/60 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold text-gray-800">
                        {user?.subscription_tier === 'premium' ? 'Premium' : 
                         user?.subscription_tier === 'basic' ? 'Basic' : 'Free'} Plan
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {user?.subscription_tier === 'free' 
                        ? 'Upgrade to access AI chatbot and premium features'
                        : 'You have access to all premium features'}
                    </p>
                    {user?.subscription_tier === 'free' ? (
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Upgrade to Premium
                      </Button>
                    ) : (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Active</span>
                      </div>
                    )}
                  </div>

                  {user?.subscription_tier !== 'free' && (
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full" size="sm">
                        View Usage
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    View Favorites
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy Policy
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Info className="h-4 w-4 mr-2" />
                    Help & Support
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
