import { useState } from 'react';
import { Calculator, Zap, TrendingUp, Calendar, Leaf, TreePine } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CalculatorSection = () => {
  const { t } = useLanguage();
  const [monthlyBill, setMonthlyBill] = useState('');
  const [roofArea, setRoofArea] = useState('');
  const [location, setLocation] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Cálculos simplificados (valores aproximados)
  const calculateResults = () => {
    const bill = parseFloat(monthlyBill) || 0;
    const area = parseFloat(roofArea) || 0;

    if (bill < 100 || area < 10) {
      return null;
    }

    // Estimativas simplificadas
    // Assumindo tarifa média de R$ 0,80/kWh e consumo = conta / tarifa
    const consumoMensal = bill / 0.80; // kWh/mês
    const consumoAnual = consumoMensal * 12;

    // Sistema solar pode gerar ~120-150 kWh/kWp/mês no Brasil
    const geracaoMonthlyPorKWp = 135; // média
    const potenciaNecessaria = consumoMensal / geracaoMonthlyPorKWp;

    // Área necessária: ~7m² por kWp
    const areaNecessaria = potenciaNecessaria * 7;
    const sistemaPossivel = Math.min(area / 7, potenciaNecessaria);

    // Economia mensal (80-95% da conta, dependendo do dimensionamento)
    const percentualEconomia = Math.min(0.95, (sistemaPossivel / potenciaNecessaria) * 0.95);
    const economiaMensal = bill * percentualEconomia;
    const economiaAnual = economiaMensal * 12;

    // ROI estimado: custo médio R$ 5.000/kWp, payback ~4-6 anos
    const custoTotal = sistemaPossivel * 5000;
    const roiMeses = Math.round((custoTotal / economiaMensal));

    // CO2 evitado: ~0.4kg CO2 por kWh
    const co2Anual = Math.round((consumoAnual * percentualEconomia * 0.4) / 1000); // toneladas
    const arvoresEquivalentes = Math.round(co2Anual * 30); // aprox. 30 árvores por tonelada de CO2

    return {
      systemSize: sistemaPossivel.toFixed(2),
      monthlyEconomy: economiaMensal.toFixed(2),
      annualEconomy: economiaAnual.toFixed(2),
      roiMonths: roiMeses,
      co2Avoided: co2Anual,
      treesEquivalent: arvoresEquivalentes,
    };
  };

  const handleCalculate = () => {
    if (monthlyBill && roofArea && location) {
      setShowResults(true);
    }
  };

  const results = showResults ? calculateResults() : null;

  return (
    <section id="calculator" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            {t('calculator.title')} <span className="text-primary">{t('calculator.title.economy')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Calculator Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">

            <div className="grid md:grid-cols-3 gap-6 mb-8">

              {/* Monthly Bill */}
              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">
                  {t('calculator.monthly.bill')}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    R$
                  </span>
                  <input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="500"
                  />
                </div>
              </div>

              {/* Roof Area */}
              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">
                  {t('calculator.roof.area')}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    m²
                  </span>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">
                  {t('calculator.location')}
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">{t('calculator.location.placeholder')}</option>
                  <option value="GO">Goiás</option>
                  <option value="SP">São Paulo</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="BA">Bahia</option>
                  <option value="PR">Paraná</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="DF">Distrito Federal</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              disabled={!monthlyBill || !roofArea || !location}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <Calculator className="h-5 w-5" />
              <span>{t('calculator.calculate')}</span>
            </button>

            {/* Results */}
            {showResults && results && (
              <div className="mt-10 pt-10 border-t border-border">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  {t('calculator.results.title')}
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* System Size */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                    <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">
                      {results.systemSize} kWp
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('calculator.results.system.size')}
                    </div>
                  </div>

                  {/* Monthly Economy */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                    <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">
                      R$ {results.monthlyEconomy}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('calculator.results.monthly.economy')}
                    </div>
                  </div>

                  {/* Annual Economy */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                    <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">
                      R$ {results.annualEconomy}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('calculator.results.annual.economy')}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* ROI */}
                  <div className="bg-muted/50 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold mb-1">
                      {results.roiMonths} meses
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('calculator.results.roi')}
                    </div>
                  </div>

                  {/* CO2 Avoided */}
                  <div className="bg-muted/50 rounded-xl p-6 text-center">
                    <Leaf className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">
                      {results.co2Avoided} ton
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('calculator.results.co2')}
                    </div>
                  </div>

                  {/* Trees Equivalent */}
                  <div className="bg-muted/50 rounded-xl p-6 text-center">
                    <TreePine className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">
                      {results.treesEquivalent}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('calculator.results.trees.unit')}
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-muted-foreground text-center mt-6 italic">
                  {t('calculator.disclaimer')}
                </p>

                {/* CTA */}
                <div className="text-center mt-8">
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {t('common.get.quote')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CalculatorSection;
