import React, { useState } from "react";
import IconA from "../../assets/Icon.svg";
import IconB from "../../assets/Icon (1).svg";
import IconC from "../../assets/Icon (2).svg";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Demo",
    sub: "Free Plan",
    price: "Free",
    priceNote: "For Limited Period",
    description:
      "Explore HireCraft with sample data. Great for evaluation & demos.",
    features: [
      "3 Demo JD",
      "View Dashboard Snapshot",
      "1 month Free Trial",
      "3GB storage",
      "Ads Preview",
    ],
  },
  {
    name: "Plantinum",
    sub: "For the best results",
    price: "$342",
    priceNote: "For Limited Period",
    description:
      "Advanced features, SLAs and onboarding for large teams.",
    features: [
      "Unlimited JD Credits",
      "Priority Integrations & Support",
      "Custom SLAs",
      "Email Support",
      "Dedicated success manager",
    ],
  },
  {
    name: "Standard",
    sub: "Most popular",
    price: "$234",
    priceNote: "Billing Monthly",
    description:
      "For small teams starting to automate sourcing and outreach.",
    features: [
      "50 JD Credits / Month",
      "Naukri & LinkedIn Integrations",
      "Basic AI Scoring",
      "Email Support",
      "Ads Preview",
    ],
  },
];

const PricingPlan = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  return (
    <div id="pricing" className="relative">
      <div className="max-w-8xl mx-auto px-4 pt-12">
        <h2 className="text-center text-gray-900 font-bold tracking-tight text-4xl md:text-6xl">
          Pricing plans that suit you
        </h2>
        <div className="mt-6 flex justify-center">
          <div className="rounded-full p-1 bg-[#10E39C] shadow-sm flex gap-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-gray-900 text-white"
                  : "text-white/90 hover:bg-white/20"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-gray-900 text-white"
                  : "bg-[#10E39C] text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const isFeatured = plan.name === "Plantinum";
          const icons = [IconA, IconB, IconC];
          const iconSrc = icons[index] || IconA;
          return (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`flex flex-col rounded-[28px] p-8 
                ${isFeatured 
                  ? "bg-gradient-to-b from-[#d7e7f9] to-[#d5f4ec] border-[4px] border-[#6B7CFF]" 
                  : "bg-white border-gray-200 shadow-sm hover:border-[#6B7CFF] hover:shadow-md"
                }`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full overflow-hidden flex items-center justify-center ${isFeatured ? "bg-[#E4ECFF]" : "bg-[#F2F3F5]"}`}>
                    <img src={iconSrc} alt={`${plan.name} icon`} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[28px] leading-8 font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{plan.sub}</p>
                  </div>
                </div>
              </div>
              <div className="mx-[-2rem] border-t border-gray-200 mb-6" />

              {/* Features */}
              <ul className="space-y-4 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-800 ">
                    <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-[#E7FFF5] text-[#10E39C]">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L8.5 11.086l6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[15px]">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-6 text-center">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-auto text-center mb-4">
                <p className="text-[34px] leading-[42px] font-bold text-gray-700">{plan.price}</p>
                <p className="text-xs text-gray-500">{plan.priceNote}</p>
              </div>

              {/* Button */}
              <button
                className="w-[50%] mx-auto py-3 rounded-lg font-medium bg-gray-900 text-white hover:bg-gray-800 text-sm"
              >
                Get started
              </button>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlan;



