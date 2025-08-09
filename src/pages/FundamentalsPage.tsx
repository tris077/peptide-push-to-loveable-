const FundamentalsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <div className="relative mb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fundamentals
            </h1>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400/20 rounded-full blur-sm"></div>
          </div>
          <p className="text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Technical reference for peptide research. Educational only. Not medical advice. Human use may be restricted or illegal in your region. Minors should not conduct peptide research. Consult a licensed professional.
          </p>
        </header>

        {/* Why this page matters */}
        <section className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              Baseline first
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Results depend on basics. Sleep, nutrition, training, skin care, and recovery influence every outcome. Optimize these before touching peptides. Research is only meaningful when variables are controlled.
            </p>
          </div>
        </section>

        {/* Units and conversions */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">⚖️</span>
            </div>
            Units and conversions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600/30">
                    <th className="text-left py-3 text-cyan-400 font-semibold">Unit</th>
                    <th className="text-left py-3 text-cyan-400 font-semibold">Meaning</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/30"><td className="py-2 font-mono text-green-400">mcg</td><td className="py-2">microgram equals 0.001 mg</td></tr>
                  <tr className="border-b border-slate-700/30"><td className="py-2 font-mono text-green-400">mg</td><td className="py-2">milligram equals 1,000 mcg</td></tr>
                  <tr className="border-b border-slate-700/30"><td className="py-2 font-mono text-green-400">mL</td><td className="py-2">milliliter liquid volume</td></tr>
                  <tr className="border-b border-slate-700/30"><td className="py-2 font-mono text-green-400">IU</td><td className="py-2">international unit varies by substance</td></tr>
                  <tr><td className="py-2 font-mono text-green-400">Units</td><td className="py-2">100 units equals 1 mL on insulin syringe</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Quick conversions</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="font-mono">mcg → mg:</span> divide by 1,000
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-mono">mg → mcg:</span> multiply by 1,000
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-mono">mL → units:</span> multiply by 100
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-mono">units → mL:</span> divide by 100
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reconstitution and dilution planning */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">🧪</span>
            </div>
            Reconstitution and dilution planning
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Goal create a known concentration so measurements are simple and repeatable. Use sterile technique in a suitable lab environment. Avoid foaming and heat. Do not shake hard.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
                <h4 className="font-semibold text-white mb-4">Core formulas</h4>
                <pre className="text-xs bg-slate-950/80 p-4 rounded-lg border border-slate-700/30 text-green-400 font-mono overflow-x-auto">
concentration mg_per_mL = total_mg / total_mL

volume_mL_needed = desired_mg / mg_per_mL

units_on_insulin_syringe = volume_mL_needed * 100
                </pre>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
                <h4 className="font-semibold text-white mb-3">Worked example</h4>
                <div className="text-sm text-slate-300 space-y-2">
                  <p className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-cyan-400">
                    <span className="text-cyan-400 font-semibold">Vial:</span> 5 mg<br/>
                    <span className="text-blue-400 font-semibold">Add:</span> 2 mL bacteriostatic water<br/>
                    <span className="text-green-400 font-semibold">Result:</span> 2.5 mg per mL<br/>
                    <span className="text-purple-400 font-semibold">To measure 0.25 mg:</span> 0.1 mL = 10 units
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Quick concentration table</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600/30">
                      <th className="text-left py-2 text-cyan-400 font-semibold">Vial mg</th>
                      <th className="text-left py-2 text-blue-400 font-semibold">Diluent mL</th>
                      <th className="text-left py-2 text-green-400 font-semibold">Result mg/mL</th>
                      <th className="text-left py-2 text-purple-400 font-semibold">mcg/unit</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700/20 hover:bg-slate-800/30">
                      <td className="py-2 font-mono">5</td><td className="py-2 font-mono">1</td><td className="py-2 font-mono">5.0</td><td className="py-2 font-mono">50</td>
                    </tr>
                    <tr className="border-b border-slate-700/20 hover:bg-slate-800/30">
                      <td className="py-2 font-mono">5</td><td className="py-2 font-mono">2</td><td className="py-2 font-mono">2.5</td><td className="py-2 font-mono">25</td>
                    </tr>
                    <tr className="border-b border-slate-700/20 hover:bg-slate-800/30">
                      <td className="py-2 font-mono">5</td><td className="py-2 font-mono">4</td><td className="py-2 font-mono">1.25</td><td className="py-2 font-mono">12.5</td>
                    </tr>
                    <tr className="border-b border-slate-700/20 hover:bg-slate-800/30">
                      <td className="py-2 font-mono">10</td><td className="py-2 font-mono">2</td><td className="py-2 font-mono">5.0</td><td className="py-2 font-mono">50</td>
                    </tr>
                    <tr className="border-b border-slate-700/20 hover:bg-slate-800/30">
                      <td className="py-2 font-mono">10</td><td className="py-2 font-mono">4</td><td className="py-2 font-mono">2.5</td><td className="py-2 font-mono">25</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="py-2 font-mono">10</td><td className="py-2 font-mono">5</td><td className="py-2 font-mono">2.0</td><td className="py-2 font-mono">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3 text-slate-400 italic">mcg per unit equals mg per mL multiplied by 10</p>
            </div>
          </div>

          <details className="mt-6 bg-slate-900/30 rounded-xl border border-slate-600/20 overflow-hidden">
            <summary className="font-semibold text-white p-4 cursor-pointer hover:bg-slate-800/30 transition-colors">
              Common lab diluents overview
            </summary>
            <div className="px-4 pb-4 text-sm space-y-3">
              <div className="p-3 bg-slate-800/30 rounded-lg border-l-4 border-cyan-400">
                <p className="text-slate-300"><strong className="text-cyan-400">Bacteriostatic water</strong> sterile water with benzyl alcohol preservative. Often preferred for multi-use storage windows in lab settings.</p>
              </div>
              <div className="p-3 bg-slate-800/30 rounded-lg border-l-4 border-blue-400">
                <p className="text-slate-300"><strong className="text-blue-400">Sterile water</strong> no preservative. Typical short stability window after reconstitution.</p>
              </div>
              <div className="p-3 bg-slate-800/30 rounded-lg border-l-4 border-green-400">
                <p className="text-slate-300"><strong className="text-green-400">Normal saline</strong> isotonic solution. Osmolality closer to physiologic. Compatibility depends on compound.</p>
              </div>
              <div className="p-3 bg-slate-800/30 rounded-lg border-l-4 border-purple-400">
                <p className="text-slate-300"><strong className="text-purple-400">Acidified diluents</strong> sometimes used for difficult peptides based on solubility data. Requires proper materials safety knowledge and compatibility checks.</p>
              </div>
            </div>
          </details>
        </section>

        {/* Mini calculators */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">🧮</span>
            </div>
            Mini calculators
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                Reconstitution planner
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <label className="text-slate-300">
                  Total peptide mg
                  <input id="rc-mg" type="number" step="0.01" className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"></input>
                </label>
                <label className="text-slate-300">
                  Diluent mL
                  <input id="rc-ml" type="number" step="0.01" className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"></input>
                </label>
                <label className="text-slate-300">
                  Desired amount mg
                  <input id="rc-need" type="number" step="0.001" className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"></input>
                </label>
                <button id="rc-go" className="col-span-1 mt-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold">
                  Calculate
                </button>
              </div>
              <div id="rc-out" className="text-sm text-slate-300 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 min-h-[60px] flex items-center"></div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                Spray calibration
              </h4>
              <p className="text-sm text-slate-300 mb-4 p-3 bg-slate-800/30 rounded-lg border-l-4 border-purple-400">
                Sprayers differ. Weigh ten sprays on a 0.001 g scale to estimate volume per spray. Water density approximates 1 g per mL.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <label className="text-slate-300">
                  Vial mg
                  <input id="sp-mg" type="number" step="0.01" className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"></input>
                </label>
                <label className="text-slate-300">
                  Total diluent mL
                  <input id="sp-ml" type="number" step="0.01" className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"></input>
                </label>
                <label className="text-slate-300">
                  mL per spray
                  <input id="sp-per" type="number" step="0.001" className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors" defaultValue="0.1"></input>
                </label>
                <button id="sp-go" className="col-span-1 mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold">
                  Calculate
                </button>
              </div>
              <div id="sp-out" className="text-sm text-slate-300 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 min-h-[60px] flex items-center"></div>
            </div>
          </div>
        </section>

        {/* Routes and forms overview */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">💉</span>
            </div>
            Routes and forms overview
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                Subcutaneous solutions
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  Isotonicity and pH matter. Follow solubility and compatibility data.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  Use sterile, single-use needles. Dispose of sharps safely.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  No step-by-step administration guidance provided here.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                Intranasal sprays
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                  Concentration determines mg per spray. Calibrate bottle output.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                  Keep solutions clean. Replace bottles regularly to reduce contamination risk.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                Topical preparations
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                  Percent w/v equals grams per 100 mL. Example 0.5 percent equals 0.5 g in 100 mL.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                  Choose appropriate vehicles. Patch testing reduces irritation risk.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                Oral capsules or solutions
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                  Stability and bioavailability vary widely. Check primary sources.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                  Use accurate scales. Avoid contamination when filling capsules.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Storage and stability */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">❄️</span>
            </div>
            Storage and stability
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Storage guidelines</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  Unreconstituted vials typically stored frozen.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  Reconstituted solutions refrigerated and protected from light.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  Avoid repeated freeze thaw cycles. Aliquot if needed.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  Label vials with name, concentration, diluent, date.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Stability factors</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  Bacteriostatic water may extend multi-use window in lab settings.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  Sterile water or saline often have shorter stability after reconstitution.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  Discard if solution becomes cloudy, discolored, or shows particulates.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lab safety essentials */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-orange-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">⚠️</span>
            </div>
            Lab safety essentials
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Safety protocols</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  Work on a clean surface. Use gloves and eye protection.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  Sanitize vial stoppers before each access.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  Use sterile syringes, needles, and filters as appropriate.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  Never share vials, needles, or spray devices.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Disposal & security</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  Dispose of sharps in approved containers.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  Keep materials away from children and pets.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  Minors should not handle research chemicals.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality and sourcing */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">🔍</span>
            </div>
            Quality and sourcing
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Quality verification</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                  Request identity and purity data such as HPLC and MS where available.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  Check batch numbers and dates on certificates of analysis.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  Prefer transparent vendors with documented testing.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
              <h4 className="font-semibold text-white mb-4">Red flags to avoid</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  Avoid products with undisclosed excipients.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  Beware of claims that conflict with known chemistry or stability.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  Keep records of orders, lot numbers, and storage conditions.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Record keeping */}
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">📋</span>
            </div>
            Record keeping
          </h3>
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/20">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                  Compound name and source
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  Lot or batch number with COA if available
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  Reconstitution details diluent, mL, concentration
                </li>
              </ul>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  Dates mixed, opened, discarded
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  Storage location and temperature
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  Any observations such as clarity, color, precipitation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Legal and ethical reminder */}
        <section className="relative bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-md flex items-center justify-center">
                <span className="text-white text-xs">⚖️</span>
              </div>
              Legal and ethical reminder
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Laws differ by region. Many peptides are research chemicals and not approved drugs. Human consumption may be illegal or unsafe. Seek licensed professional guidance. This site does not provide medical advice or dosing instructions.
            </p>
          </div>
        </section>

      {/* JavaScript functionality */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Reconstitution planner
        const rc = (id) => document.getElementById(id);
        
        document.addEventListener('DOMContentLoaded', () => {
          rc('rc-go')?.addEventListener('click', () => {
            const mg = parseFloat(rc('rc-mg').value);
            const ml = parseFloat(rc('rc-ml').value);
            const need = parseFloat(rc('rc-need').value);
            if (!(mg > 0 && ml > 0 && need >= 0)) { rc('rc-out').textContent = 'Enter valid numbers.'; return; }
            const mgPerMl = mg / ml;
            const vol = need / mgPerMl;
            const units = vol * 100;
            const mcgPerUnit = mgPerMl * 1000 / 100;
            rc('rc-out').textContent =
              \`Concentration \${mgPerMl.toFixed(3)} mg per mL. mcg per unit \${mcgPerUnit.toFixed(1)}. Volume needed \${vol.toFixed(3)} mL which is \${Math.round(units)} units.\`;
          });

          // Spray calibration
          rc('sp-go')?.addEventListener('click', () => {
            const mg = parseFloat(rc('sp-mg').value);
            const ml = parseFloat(rc('sp-ml').value);
            const per = parseFloat(rc('sp-per').value);
            if (!(mg > 0 && ml > 0 && per > 0)) { rc('sp-out').textContent = 'Enter valid numbers.'; return; }
            const mgPerMl = mg / ml;
            const mgPerSpray = mgPerMl * per;
            const mcgPerSpray = mgPerSpray * 1000;
            rc('sp-out').textContent = \`Each spray approximately \${mgPerSpray.toFixed(3)} mg which is \${Math.round(mcgPerSpray)} mcg. Calibrate your bottle to confirm.\`;
          });
        });
      ` }} />
      </section>
    </div>
  );
};

export default FundamentalsPage;
