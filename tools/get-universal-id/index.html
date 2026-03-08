document.addEventListener('DOMContentLoaded', function() {
    // Exchange rates (base: USD)
    const exchangeRates = {
        'USD': 1.00,
        'EUR': 0.92,
        'GBP': 0.79,
        'JPY': 151.50,
        'CAD': 1.37,
        'AUD': 1.52,
        'CHF': 0.90,
        'CNY': 7.24,
        'INR': 83.50,
        'BRL': 5.10
    };
    
    // DevEx rate: 10,000 Robux = $35 USD
    const ROBUX_PER_USD = 10000 / 35; // Approximately 285.71 Robux per USD
    const USD_PER_ROBUX = 35 / 10000; // $0.0035 per Robux
    
    // DOM elements
    const robuxInput = document.getElementById('robux-amount');
    const currencySelect = document.getElementById('currency');
    const resultValue = document.getElementById('result-value');
    const resultCurrency = document.getElementById('result-currency');
    const robuxAmountDisplay = document.getElementById('robux-amount-display');
    const rateDetails = document.getElementById('rate-details');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    // Currency symbols
    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
        'JPY': '¥',
        'CAD': 'C$',
        'AUD': 'A$',
        'CHF': 'Fr',
        'CNY': '¥',
        'INR': '₹',
        'BRL': 'R$'
    };
    
    // Format number with commas
    function formatNumber(number, decimals = 2) {
        return number.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // Calculate conversion
    function calculateConversion() {
        let robux = parseFloat(robuxInput.value);
        
        // Validate input
        if (isNaN(robux) || robux < 0) {
            robux = 0;
            robuxInput.value = 0;
        }
        
        // Calculate USD amount
        const usdAmount = robux * USD_PER_ROBUX;
        
        // Get selected currency
        const currency = currencySelect.value;
        const rate = exchangeRates[currency];
        
        // Convert to selected currency
        const convertedAmount = usdAmount * rate;
        
        // Update display
        resultValue.textContent = formatNumber(convertedAmount);
        resultCurrency.textContent = currencySymbols[currency] || '$';
        robuxAmountDisplay.textContent = `${formatNumber(robux, 0)} Robux =`;
        
        // Update rate details
        const rateInSelectedCurrency = USD_PER_ROBUX * rate;
        rateDetails.textContent = `Rate: 1 Robux = ${currencySymbols[currency]}${rateInSelectedCurrency.toFixed(6)} ${currency}`;
        
        // Add animation
        resultValue.style.animation = 'none';
        resultValue.offsetHeight;
        resultValue.style.animation = 'fadeInUp 0.5s ease';
    }
    
    // Reset calculator
    function resetCalculator() {
        robuxInput.value = '';
        currencySelect.value = 'USD';
        resultValue.textContent = '0.00';
        resultCurrency.textContent = '$';
        robuxAmountDisplay.textContent = '0 Robux =';
        rateDetails.textContent = 'Rate: 10,000 Robux = $35.00 USD';
        
        // Remove animation
        resultValue.style.animation = 'none';
    }
    
    // Event listeners
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateConversion);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetCalculator);
    }
    
    if (robuxInput) {
        robuxInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateConversion();
            }
        });
    }
    
    if (currencySelect) {
        currencySelect.addEventListener('change', function() {
            if (robuxInput.value) {
                calculateConversion();
            }
        });
    }
    
    // Add input validation
    if (robuxInput) {
        robuxInput.addEventListener('input', function() {
            let value = this.value.replace(/[^0-9]/g, '');
            if (value === '') {
                this.value = '';
            } else {
                this.value = parseInt(value, 10);
            }
        });
    }
    
    // Initial calculation if there's a value
    if (robuxInput && robuxInput.value) {
        calculateConversion();
    }
});
