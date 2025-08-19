import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Check, Sparkles, Crown, Zap, Shield, CreditCard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { stripeService, SUBSCRIPTION_PLANS } from "@/services/stripeService";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(SUBSCRIPTION_PLANS[0]);

  const handleSubscribe = async () => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    console.log("Starting subscription process for user:", user.id, user.email);
    setIsLoading(true);
    
    try {
      console.log("Calling stripeService.createSubscription...");
      const success = await stripeService.createSubscription(
        selectedPlan.id,
        user.id.toString(),
        user.email
      );
      
      console.log("Subscription result:", success);
      
      if (success) {
        console.log("Subscription successful, user should be redirected to Stripe");
        // The user will be redirected to Stripe checkout
        // No need to close modal here as they'll be redirected
      } else {
        console.error("Subscription failed - success was false");
        throw new Error("Failed to create subscription");
      }
    } catch (error) {
      console.error("Subscription failed with error:", error);
      // Show error to user
      alert(`Subscription failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Crown className="h-8 w-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Upgrade to Premium</h2>
                <p className="text-purple-100 text-lg">
                  Unlock unlimited AI access and premium features
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Plan Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose Your Plan</h3>
                <div className="space-y-4">
                  {SUBSCRIPTION_PLANS.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedPlan.id === plan.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{plan.name}</h4>
                          <p className="text-gray-600 text-sm">
                            ${plan.price}/{plan.interval}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">
                            ${plan.price}
                          </div>
                          <div className="text-sm text-gray-500">per {plan.interval}</div>
                        </div>
                      </div>
                      
                      {selectedPlan.id === plan.id && (
                        <div className="absolute top-2 right-2">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleSubscribe}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Subscribe for ${selectedPlan.price}/{selectedPlan.interval}
                    </div>
                  )}
                </Button>

                {user?.stripe_customer_id && (
                  <Button
                    onClick={handleManageSubscription}
                    variant="outline"
                    className="w-full py-3 text-gray-700 hover:bg-gray-50"
                  >
                    Manage Existing Subscription
                  </Button>
                )}

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                  You can cancel anytime from your account settings.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
