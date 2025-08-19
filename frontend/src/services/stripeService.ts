import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe (you'll need to add your publishable key to .env)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_test_key_here');

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  stripePriceId: string;
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'premium',
    name: 'Premium',
    price: 10.00,
    interval: 'month',
    features: [
      'Unlimited AI Chat Access',
      'GPT-4o-mini Integration',
      'Custom AI Personalities',
      'Priority Support',
      'Advanced Analytics'
    ],
    stripePriceId: 'price_1OqX8X2eZvKYlo2CQZvKYlo2C' // Test price ID - replace with your actual Stripe price ID
  }
];

export class StripeService {
  private static instance: StripeService;
  private stripe: any = null;

  private constructor() {}

  public static getInstance(): StripeService {
    if (!StripeService.instance) {
      StripeService.instance = new StripeService();
    }
    return StripeService.instance;
  }

  async initialize(): Promise<void> {
    if (!this.stripe) {
      this.stripe = await stripePromise;
    }
  }

  async createCheckoutSession(priceId: string, userId: string, userEmail: string): Promise<string | null> {
    try {
      console.log("Creating checkout session for:", { priceId, userId, userEmail });
      
      await this.initialize();
      
      if (!this.stripe) {
        console.error("Stripe failed to initialize");
        throw new Error('Stripe failed to initialize');
      }

      console.log("Stripe initialized, creating checkout session...");

      // Create checkout session on your backend
      const response = await fetch('http://localhost:8000/api/v1/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          user_id: userId,
          user_email: userEmail,
          success_url: `${window.location.origin}/profile?success=true`,
          cancel_url: `${window.location.origin}/profile?canceled=true`,
        }),
      });

      console.log("Backend response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Backend error response:", errorText);
        throw new Error('Failed to create checkout session');
      }

      const responseData = await response.json();
      console.log("Backend response data:", responseData);
      
      const { session_id } = responseData;
      return session_id;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      return null;
    }
  }

  async redirectToCheckout(sessionId: string): Promise<void> {
    try {
      await this.initialize();
      
      if (!this.stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error } = await this.stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
      throw error;
    }
  }

  async createSubscription(planId: string, userId: string, userEmail: string): Promise<boolean> {
    try {
      console.log("StripeService.createSubscription called with:", { planId, userId, userEmail });
      
      const plan = SUBSCRIPTION_PLANS.find(p => p.id === planId);
      if (!plan) {
        console.error("Plan not found:", planId);
        throw new Error('Invalid plan selected');
      }

      console.log("Found plan:", plan);

      const sessionId = await this.createCheckoutSession(plan.stripePriceId, userId, userEmail);
      console.log("Checkout session created:", sessionId);
      
      if (!sessionId) {
        console.error("Failed to create checkout session");
        throw new Error('Failed to create checkout session');
      }

      console.log("Redirecting to Stripe checkout...");
      await this.redirectToCheckout(sessionId);
      console.log("Redirect successful");
      return true;
    } catch (error) {
      console.error('Error creating subscription:', error);
      return false;
    }
  }

  async getCustomerPortalUrl(customerId: string): Promise<string | null> {
    try {
      const response = await fetch('http://localhost:8000/api/v1/stripe/create-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_id: customerId,
          return_url: `${window.location.origin}/profile`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create portal session');
      }

      const { url } = await response.json();
      return url;
    } catch (error) {
      console.error('Error creating portal session:', error);
      return null;
    }
  }

  async redirectToCustomerPortal(customerId: string): Promise<void> {
    try {
      const portalUrl = await this.getCustomerPortalUrl(customerId);
      if (portalUrl) {
        window.location.href = portalUrl;
      } else {
        throw new Error('Failed to get customer portal URL');
      }
    } catch (error) {
      console.error('Error redirecting to customer portal:', error);
      throw error;
    }
  }
}

export const stripeService = StripeService.getInstance();
