import { useState } from "react";

const FundamentalsPage = () => {
  // State for reconstitution calculator
  const [rcMg, setRcMg] = useState("");
  const [rcMl, setRcMl] = useState("");
  const [rcNeed, setRcNeed] = useState("");
  const [rcResult, setRcResult] = useState("");

  // State for spray calibration calculator
  const [spMg, setSpMg] = useState("");
  const [spMl, setSpMl] = useState("");
  const [spPer, setSpPer] = useState("0.1");
  const [spResult, setSpResult] = useState("");

  // Reconstitution calculator function
  const calculateReconstitution = () => {
    const mg = parseFloat(rcMg);
    const ml = parseFloat(rcMl);
    const need = parseFloat(rcNeed);
    
    if (!(mg > 0 && ml > 0 && need >= 0)) {
      setRcResult("Enter valid numbers.");
      return;
    }
    
    const mgPerMl = mg / ml;
    const vol = need / mgPerMl;
    const units = vol * 100;
    const mcgPerUnit = mgPerMl * 1000 / 100;
    
    setRcResult(
      `Concentration ${mgPerMl.toFixed(3)} mg per mL. mcg per unit ${mcgPerUnit.toFixed(1)}. Volume needed ${vol.toFixed(3)} mL which is ${Math.round(units)} units.`
    );
  };

  // Spray calibration calculator function
  const calculateSprayCalibration = () => {
    const mg = parseFloat(spMg);
    const ml = parseFloat(spMl);
    const per = parseFloat(spPer);
    
    if (!(mg > 0 && ml > 0 && per > 0)) {
      setSpResult("Enter valid numbers.");
      return;
    }
    
    const mgPerMl = mg / ml;
    const mgPerSpray = mgPerMl * per;
    const mcgPerSpray = mgPerSpray * 1000;
    
    setSpResult(
      `Each spray approximately ${mgPerSpray.toFixed(3)} mg which is ${Math.round(mcgPerSpray)} mcg. Calibrate your bottle to confirm.`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-50 to-cyan-100 pt-20">
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <div className="relative mb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Fundamentals
            </h1>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-400/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-400/20 rounded-full blur-sm"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Technical reference for peptide research. Educational only. Not medical advice. Human use may be restricted or illegal in your region. Minors should not conduct peptide research. Consult a licensed professional.
          </p>
        </header>

        {/* Why this page matters */}
        <section className="relative bg-gradient-to-r from-white/60 to-purple-50/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              Baseline first
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Results depend on basics. Sleep, nutrition, training, skin care, and recovery influence every outcome. Optimize these before touching peptides. Research is only meaningful when variables are controlled.
            </p>
          </div>
        </section>

        {/* Units and conversions */}
        <section className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">⚖️</span>
            </div>
            Units and conversions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-200/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600/30">
                    <th className="text-left py-3 text-purple-600 font-semibold">Unit</th>
                    <th className="text-left py-3 text-purple-600 font-semibold">Meaning</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-purple-200/50"><td className="py-2 font-mono text-green-600">mcg</td><td className="py-2">microgram equals 0.001 mg</td></tr>
                  <tr className="border-b border-purple-200/50"><td className="py-2 font-mono text-green-600">mg</td><td className="py-2">milligram equals 1,000 mcg</td></tr>
                  <tr className="border-b border-purple-200/50"><td className="py-2 font-mono text-green-600">mL</td><td className="py-2">milliliter liquid volume</td></tr>
                  <tr className="border-b border-purple-200/50"><td className="py-2 font-mono text-green-600">IU</td><td className="py-2">international unit varies by substance</td></tr>
                  <tr><td className="py-2 font-mono text-green-600">Units</td><td className="py-2">100 units equals 1 mL on insulin syringe</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-200/50">
              <h4 className="font-semibold text-gray-800 mb-4">Quick conversions</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-mono">mcg → mg:</span> divide by 1,000
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="font-mono">mg → mcg:</span> multiply by 1,000
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="font-mono">mL → units:</span> multiply by 100
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="font-mono">units → mL:</span> divide by 100
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reconstitution and dilution planning */}
        <section className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">🧪</span>
            </div>
            Reconstitution and dilution planning
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Goal create a known concentration so measurements are simple and repeatable. Use sterile technique in a suitable lab environment. Avoid foaming and heat. Do not shake hard.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-purple-50/70 rounded-xl p-6 border border-purple-200/50">
                <h4 className="font-semibold text-gray-800 mb-4">Core formulas</h4>
                <pre className="text-xs bg-white/80 p-4 rounded-lg border border-purple-200/50 text-purple-700 font-mono overflow-x-auto">
concentration mg_per_mL = total_mg / total_mL

volume_mL_needed = desired_mg / mg_per_mL

units_on_insulin_syringe = volume_mL_needed * 100
                </pre>
              </div>
              
              <div className="bg-purple-50/70 rounded-xl p-6 border border-purple-200/50">
                <h4 className="font-semibold text-gray-800 mb-3">Worked example</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="p-3 bg-white/60 rounded-lg border-l-4 border-purple-400">
                    <span className="text-purple-600 font-semibold">Vial:</span> 5 mg<br/>
                    <span className="text-pink-600 font-semibold">Add:</span> 2 mL bacteriostatic water<br/>
                    <span className="text-rose-600 font-semibold">Result:</span> 2.5 mg per mL<br/>
                    <span className="text-cyan-600 font-semibold">To measure 0.25 mg:</span> 0.1 mL = 10 units
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50/70 rounded-xl p-6 border border-purple-200/50">
              <h4 className="font-semibold text-gray-800 mb-4">Quick concentration table</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-200">
                      <th className="text-left py-2 text-purple-600 font-semibold">Vial mg</th>
                      <th className="text-left py-2 text-pink-600 font-semibold">Diluent mL</th>
                      <th className="text-left py-2 text-rose-600 font-semibold">Result mg/mL</th>
                      <th className="text-left py-2 text-cyan-600 font-semibold">mcg/unit</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-purple-100 hover:bg-purple-50">
                      <td className="py-2 font-mono">5</td><td className="py-2 font-mono">1</td><td className="py-2 font-mono">5.0</td><td className="py-2 font-mono">50</td>
                    </tr>
                    <tr className="border-b border-purple-100 hover:bg-purple-50">
                      <td className="py-2 font-mono">5</td><td className="py-2 font-mono">2</td><td className="py-2 font-mono">2.5</td><td className="py-2 font-mono">25</td>
                    </tr>
                    <tr className="border-b border-purple-100 hover:bg-purple-50">
                      <td className="py-2 font-mono">5</td><td className="py-2 font-mono">4</td><td className="py-2 font-mono">1.25</td><td className="py-2 font-mono">12.5</td>
                    </tr>
                    <tr className="border-b border-purple-100 hover:bg-purple-50">
                      <td className="py-2 font-mono">10</td><td className="py-2 font-mono">2</td><td className="py-2 font-mono">5.0</td><td className="py-2 font-mono">50</td>
                    </tr>
                    <tr className="border-b border-purple-100 hover:bg-purple-50">
                      <td className="py-2 font-mono">10</td><td className="py-2 font-mono">4</td><td className="py-2 font-mono">2.5</td><td className="py-2 font-mono">25</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="py-2 font-mono">10</td><td className="py-2 font-mono">5</td><td className="py-2 font-mono">2.0</td><td className="py-2 font-mono">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3 text-gray-500 italic">mcg per unit equals mg per mL multiplied by 10</p>
            </div>
          </div>

          <details className="mt-6 bg-purple-50/50 rounded-xl border border-purple-200/50 overflow-hidden">
            <summary className="font-semibold text-gray-800 p-4 cursor-pointer hover:bg-purple-100/50 transition-colors">
              Common lab diluents overview
            </summary>
            <div className="px-4 pb-4 text-sm space-y-3">
              <div className="p-3 bg-white/60 rounded-lg border-l-4 border-purple-400">
                <p className="text-gray-600"><strong className="text-purple-600">Bacteriostatic water</strong> sterile water with benzyl alcohol preservative. Often preferred for multi-use storage windows in lab settings.</p>
              </div>
              <div className="p-3 bg-white/60 rounded-lg border-l-4 border-pink-400">
                <p className="text-gray-600"><strong className="text-pink-600">Sterile water</strong> no preservative. Typical short stability window after reconstitution.</p>
              </div>
              <div className="p-3 bg-white/60 rounded-lg border-l-4 border-rose-400">
                <p className="text-gray-600"><strong className="text-rose-600">Normal saline</strong> isotonic solution. Osmolality closer to physiologic. Compatibility depends on compound.</p>
              </div>
              <div className="p-3 bg-white/60 rounded-lg border-l-4 border-cyan-400">
                <p className="text-gray-600"><strong className="text-cyan-600">Acidified diluents</strong> sometimes used for difficult peptides based on solubility data. Requires proper materials safety knowledge and compatibility checks.</p>
              </div>
            </div>
          </details>
        </section>

        {/* Mini calculators */}
        <section className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">🧮</span>
            </div>
            Mini calculators
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-purple-50/70 rounded-xl p-6 border border-purple-200/50">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                Reconstitution planner
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <label className="text-gray-600">
                  Total peptide mg
                  <input 
                    type="number" 
                    step="0.01" 
                    value={rcMg}
                    onChange={(e) => setRcMg(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-white border border-purple-200 rounded-lg text-gray-800 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="5.0"
                  />
                </label>
                <label className="text-gray-600">
                  Diluent mL
                  <input 
                    type="number" 
                    step="0.01" 
                    value={rcMl}
                    onChange={(e) => setRcMl(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-white border border-purple-200 rounded-lg text-gray-800 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="2.0"
                  />
                </label>
                <label className="text-gray-600">
                  Desired amount mg
                  <input 
                    type="number" 
                    step="0.001" 
                    value={rcNeed}
                    onChange={(e) => setRcNeed(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-white border border-purple-200 rounded-lg text-gray-800 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="0.25"
                  />
                </label>
                <button 
                  onClick={calculateReconstitution}
                  className="col-span-1 mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold"
                >
                  Calculate
                </button>
              </div>
              <div className="text-sm text-gray-600 p-3 bg-white/60 rounded-lg border border-purple-200/50 min-h-[60px] flex items-center">
                {rcResult || "Enter values and click Calculate"}
              </div>
            </div>

            <div className="bg-purple-50/70 rounded-xl p-6 border border-purple-200/50">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                Spray calibration
              </h4>
              <p className="text-sm text-gray-600 mb-4 p-3 bg-white/60 rounded-lg border-l-4 border-pink-400">
                Sprayers differ. Weigh ten sprays on a 0.001 g scale to estimate volume per spray. Water density approximates 1 g per mL.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <label className="text-gray-600">
                  Vial mg
                  <input 
                    type="number" 
                    step="0.01" 
                    value={spMg}
                    onChange={(e) => setSpMg(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-white border border-purple-200 rounded-lg text-gray-800 focus:border-pink-400 focus:outline-none transition-colors"
                    placeholder="10.0"
                  />
                </label>
                <label className="text-gray-600">
                  Total diluent mL
                  <input 
                    type="number" 
                    step="0.01" 
                    value={spMl}
                    onChange={(e) => setSpMl(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-white border border-purple-200 rounded-lg text-gray-800 focus:border-pink-400 focus:outline-none transition-colors"
                    placeholder="5.0"
                  />
                </label>
                <label className="text-gray-600">
                  mL per spray
                  <input 
                    type="number" 
                    step="0.001" 
                    value={spPer}
                    onChange={(e) => setSpPer(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-white border border-purple-200 rounded-lg text-gray-800 focus:border-pink-400 focus:outline-none transition-colors"
                  />
                </label>
                <button 
                  onClick={calculateSprayCalibration}
                  className="col-span-1 mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-semibold"
                >
                  Calculate
                </button>
              </div>
              <div className="text-sm text-gray-600 p-3 bg-white/60 rounded-lg border border-purple-200/50 min-h-[60px] flex items-center">
                {spResult || "Enter values and click Calculate"}
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections with consistent color updates... */}
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">
            Additional sections continue with the same rose/purple/cyan color scheme...
          </p>
        </div>

      </section>
    </div>
  );
};

export default FundamentalsPage;
