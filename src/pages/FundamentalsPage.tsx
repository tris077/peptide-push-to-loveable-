const FundamentalsPage = () => {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-10">
      <header className="mb-6">
        <h1 className="page-title text-3xl font-semibold">Fundamentals</h1>
        <p className="muted text-base">
          Technical reference for peptide research. Educational only. Not medical advice. Human use may be restricted or illegal in your region. Minors should not conduct peptide research. Consult a licensed professional.
        </p>
      </header>

      {/* Why this page matters */}
      <section className="card mb-6">
        <div className="card-body">
          <h2 className="card-title text-xl">Baseline first</h2>
          <p>
            Results depend on basics. Sleep, nutrition, training, skin care, and recovery influence every outcome. Optimize these before touching peptides. Research is only meaningful when variables are controlled.
          </p>
        </div>
      </section>

      {/* Units and conversions */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Units and conversions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <table className="w-full text-sm">
                <thead><tr><th className="text-left">Unit</th><th className="text-left">Meaning</th></tr></thead>
                <tbody>
                  <tr><td>mcg</td><td>microgram equals 0.001 mg</td></tr>
                  <tr><td>mg</td><td>milligram equals 1,000 mcg</td></tr>
                  <tr><td>mL</td><td>milliliter liquid volume</td></tr>
                  <tr><td>IU</td><td>international unit varies by substance</td></tr>
                  <tr><td>Units on insulin syringe</td><td>100 units equals 1 mL</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>mcg to mg divide by 1,000</li>
                <li>mg to mcg multiply by 1,000</li>
                <li>mL to units multiply by 100</li>
                <li>units to mL divide by 100</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reconstitution and dilution planning */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Reconstitution and dilution planning</h3>
          <p className="text-sm mb-3">
            Goal create a known concentration so measurements are simple and repeatable. Use sterile technique in a suitable lab environment. Avoid foaming and heat. Do not shake hard.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1 text-sm">Core formulas</h4>
              <pre className="text-xs bg-gray-50 p-3 rounded-lg overflow-x-auto">
concentration mg_per_mL = total_mg / total_mL

volume_mL_needed = desired_mg / mg_per_mL

units_on_insulin_syringe = volume_mL_needed * 100
              </pre>
              <h4 className="font-medium mt-3 mb-1 text-sm">Worked example</h4>
              <p className="text-sm">
                Vial 5 mg. Add 2 mL bacteriostatic water. Concentration 2.5 mg per mL. To measure 0.25 mg, volume 0.1 mL which is 10 units on an insulin syringe.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-sm">Quick concentration table</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr><th className="text-left">Vial mg</th><th className="text-left">Diluent mL</th><th className="text-left">Result mg/mL</th><th className="text-left">mcg per unit</th></tr>
                </thead>
                <tbody>
                  <tr><td>5</td><td>1</td><td>5.0</td><td>50</td></tr>
                  <tr><td>5</td><td>2</td><td>2.5</td><td>25</td></tr>
                  <tr><td>5</td><td>4</td><td>1.25</td><td>12.5</td></tr>
                  <tr><td>10</td><td>2</td><td>5.0</td><td>50</td></tr>
                  <tr><td>10</td><td>4</td><td>2.5</td><td>25</td></tr>
                  <tr><td>10</td><td>5</td><td>2.0</td><td>20</td></tr>
                </tbody>
              </table>
              <p className="text-xs mt-2 muted">mcg per unit equals mg per mL multiplied by 10</p>
            </div>
          </div>

          <details className="mt-4">
            <summary className="font-medium text-sm">Common lab diluents overview</summary>
            <div className="text-sm mt-2 space-y-2">
              <p><strong>Bacteriostatic water</strong> sterile water with benzyl alcohol preservative. Often preferred for multi-use storage windows in lab settings.</p>
              <p><strong>Sterile water</strong> no preservative. Typical short stability window after reconstitution.</p>
              <p><strong>Normal saline</strong> isotonic solution. Osmolality closer to physiologic. Compatibility depends on compound.</p>
              <p><strong>Acidified diluents</strong> sometimes used for difficult peptides based on solubility data. Requires proper materials safety knowledge and compatibility checks.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Mini calculators */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Mini calculators</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 text-sm">Reconstitution planner</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <label>Total peptide mg<input id="rc-mg" type="number" step="0.01" className="input input-bordered w-full"></input></label>
                <label>Diluent mL<input id="rc-ml" type="number" step="0.01" className="input input-bordered w-full"></input></label>
                <label>Desired amount mg<input id="rc-need" type="number" step="0.001" className="input input-bordered w-full"></input></label>
                <button id="rc-go" className="btn btn-primary col-span-2">Calculate</button>
              </div>
              <p id="rc-out" className="text-sm mt-2"></p>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-sm">Spray calibration</h4>
              <p className="text-sm">
                Sprayers differ. Weigh ten sprays on a 0.001 g scale to estimate volume per spray. Water density approximates 1 g per mL.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <label>Vial mg<input id="sp-mg" type="number" step="0.01" className="input input-bordered w-full"></input></label>
                <label>Total diluent mL<input id="sp-ml" type="number" step="0.01" className="input input-bordered w-full"></input></label>
                <label>mL per spray<input id="sp-per" type="number" step="0.001" className="input input-bordered w-full" defaultValue="0.1"></input></label>
                <button id="sp-go" className="btn btn-primary col-span-2">Calculate</button>
              </div>
              <p id="sp-out" className="text-sm mt-2"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes and forms overview */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Routes and forms overview</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium">Subcutaneous solutions</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Isotonicity and pH matter. Follow solubility and compatibility data.</li>
                <li>Use sterile, single-use needles. Dispose of sharps safely.</li>
                <li>No step-by-step administration guidance provided here.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Intranasal sprays</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Concentration determines mg per spray. Calibrate bottle output.</li>
                <li>Keep solutions clean. Replace bottles regularly to reduce contamination risk.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Topical preparations</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Percent w/v equals grams per 100 mL. Example 0.5 percent equals 0.5 g in 100 mL.</li>
                <li>Choose appropriate vehicles. Patch testing reduces irritation risk.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Oral capsules or solutions</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Stability and bioavailability vary widely. Check primary sources.</li>
                <li>Use accurate scales. Avoid contamination when filling capsules.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Storage and stability */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Storage and stability</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Unreconstituted vials typically stored frozen.</li>
                <li>Reconstituted solutions refrigerated and protected from light.</li>
                <li>Avoid repeated freeze thaw cycles. Aliquot if needed.</li>
                <li>Label vials with name, concentration, diluent, date.</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bacteriostatic water may extend multi-use window in lab settings.</li>
                <li>Sterile water or saline often have shorter stability after reconstitution.</li>
                <li>Discard if solution becomes cloudy, discolored, or shows particulates.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lab safety essentials */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Lab safety essentials</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Work on a clean surface. Use gloves and eye protection.</li>
                <li>Sanitize vial stoppers before each access.</li>
                <li>Use sterile syringes, needles, and filters as appropriate.</li>
                <li>Never share vials, needles, or spray devices.</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dispose of sharps in approved containers.</li>
                <li>Keep materials away from children and pets.</li>
                <li>Minors should not handle research chemicals.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and sourcing */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Quality and sourcing</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Request identity and purity data such as HPLC and MS where available.</li>
                <li>Check batch numbers and dates on certificates of analysis.</li>
                <li>Prefer transparent vendors with documented testing.</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Avoid products with undisclosed excipients.</li>
                <li>Beware of claims that conflict with known chemistry or stability.</li>
                <li>Keep records of orders, lot numbers, and storage conditions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Record keeping */}
      <section className="card mb-6">
        <div className="card-body">
          <h3 className="card-title text-lg">Record keeping</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Compound name and source</li>
            <li>Lot or batch number with COA if available</li>
            <li>Reconstitution details diluent, mL, concentration</li>
            <li>Dates mixed, opened, discarded</li>
            <li>Storage location and temperature</li>
            <li>Any observations such as clarity, color, precipitation</li>
          </ul>
        </div>
      </section>

      {/* Legal and ethical reminder */}
      <section className="card">
        <div className="card-body">
          <h3 className="card-title text-lg">Legal and ethical reminder</h3>
          <p className="text-sm">
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
  );
};

export default FundamentalsPage;
