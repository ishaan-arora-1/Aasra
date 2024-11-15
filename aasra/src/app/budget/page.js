import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-700 mb-3">Student Food Budget Planner</h1>
          <p className="text-emerald-600">Plan your weekly meals within your budget</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-emerald-50/70 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-emerald-100">
          <div className="space-y-8">
            <div className="transform transition-all hover:scale-[1.01]">
              <label className="block text-emerald-700 font-medium mb-3 text-lg">Your Monthly Budget (₹)</label>
              <input 
                type="number"
                className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80 text-emerald-800 text-lg"
                placeholder="Enter your monthly budget"
              />
            </div>

            <div className="transform transition-all hover:scale-[1.01]">
              <label className="block text-emerald-700 font-medium mb-3 text-lg">Dietary Preference</label>
              <select className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80 text-emerald-800 text-lg">
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
              </select>
            </div>

            <button className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-all transform hover:scale-[1.02] text-lg font-medium shadow-md">
              Generate Weekly Plan
            </button>
          </div>
        </div>

        {/* Sample Weekly Plan */}
        <div className="max-w-4xl mx-auto bg-yellow-50/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-yellow-100">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">Your Weekly Grocery List</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-emerald-50/50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-6 border-b-2 border-emerald-200 pb-2">Essential Items</h3>
              <ul className="space-y-3 text-emerald-600">
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Rice (1kg)</span>
                  <span className="font-semibold">₹60</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Dal/Lentils (500g)</span>
                  <span className="font-semibold">₹70</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Wheat Flour (1kg)</span>
                  <span className="font-semibold">₹40</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Cooking Oil (500ml)</span>
                  <span className="font-semibold">₹80</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-6 border-b-2 border-emerald-200 pb-2">Fresh Produce</h3>
              <ul className="space-y-3 text-emerald-600">
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Mixed Vegetables</span>
                  <span className="font-semibold">₹150</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Fruits</span>
                  <span className="font-semibold">₹100</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Eggs (1 dozen)</span>
                  <span className="font-semibold">₹84</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                  <span className="font-medium">Milk (1L)</span>
                  <span className="font-semibold">₹60</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-emerald-100/50 rounded-xl shadow-inner">
            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Nutritional Tips:</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-emerald-700">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                <span>Include proteins in every meal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                <span>Try to have at least 2 servings of fruits daily</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                <span>Include green vegetables in your diet</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                <span>Stay hydrated throughout the day</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-right">
            <p className="text-2xl font-bold text-emerald-800 bg-emerald-100/50 inline-block px-6 py-3 rounded-xl">
              Estimated Weekly Expense: ₹644
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default page;
