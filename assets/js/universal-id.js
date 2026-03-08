document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const placeIdInput = document.getElementById('place-id');
    const findBtn = document.getElementById('find-id-btn');
    const resultSection = document.getElementById('result-section');
    const errorSection = document.getElementById('error-section');
    const loader = document.getElementById('loader');
    const resultPlaceId = document.getElementById('result-place-id');
    const resultUniverseId = document.getElementById('result-universe-id');
    const resultApiUrl = document.getElementById('result-api-url');
    const errorMessage = document.getElementById('error-message');
    const copyBtn = document.getElementById('copy-result');
    
    // API endpoint
    const API_BASE = 'https://apis.roblox.com/universes/v1/places';
    
    // Example items
    const exampleItems = document.querySelectorAll('.example-item');
    
    // Validate Place ID
    function validatePlaceId(placeId) {
        const num = parseInt(placeId);
        return !isNaN(num) && num > 0 && /^\d+$/.test(placeId);
    }
    
    // Show/hide elements
    function showElement(element) {
        if (element) element.style.display = 'block';
    }
    
    function hideElement(element) {
        if (element) element.style.display = 'none';
    }
    
    // Format number with commas
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // Fetch Universe ID
    async function fetchUniverseId(placeId) {
        const url = `${API_BASE}/${placeId}/universe`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }
            
            return data;
        } catch (error) {
            throw new Error(error.message || 'Failed to fetch Universe ID');
        }
    }
    
    // Handle find button click
    async function handleFindClick() {
        const placeId = placeIdInput.value.trim();
        
        // Hide previous results
        hideElement(resultSection);
        hideElement(errorSection);
        
        // Validate input
        if (!placeId) {
            showError('Please enter a Place ID');
            return;
        }
        
        if (!validatePlaceId(placeId)) {
            showError('Invalid Place ID. Please enter a valid number.');
            return;
        }
        
        // Show loader
        showElement(loader);
        
        try {
            const data = await fetchUniverseId(placeId);
            
            // Check if Universe ID exists
            if (!data.UniverseId) {
                throw new Error('No Universe ID found for this Place ID');
            }
            
            // Display result
            resultPlaceId.textContent = formatNumber(placeId);
            resultUniverseId.textContent = formatNumber(data.UniverseId);
            
            // Create API URL
            const apiUrl = `https://apis.roblox.com/universes/v1/places/${placeId}/universe`;
            resultApiUrl.innerHTML = `<code>${apiUrl}</code>`;
            
            // Show result section
            showElement(resultSection);
            
            // Add animation
            resultSection.style.animation = 'none';
            resultSection.offsetHeight;
            resultSection.style.animation = 'fadeInUp 0.5s ease';
            
        } catch (error) {
            showError(error.message);
        } finally {
            // Hide loader
            hideElement(loader);
        }
    }
    
    // Show error
    function showError(message) {
        errorMessage.textContent = message;
        showElement(errorSection);
        
        errorSection.style.animation = 'none';
        errorSection.offsetHeight;
        errorSection.style.animation = 'fadeInUp 0.5s ease';
    }
    
    // Copy result to clipboard
    async function copyResult() {
        if (!resultUniverseId.textContent) return;
        
        const textToCopy = resultUniverseId.textContent.replace(/,/g, '');
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Show feedback
            const originalIcon = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.style.color = 'var(--secondary)';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalIcon;
                copyBtn.style.color = '';
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }
    
    // Event listeners
    if (findBtn) {
        findBtn.addEventListener('click', handleFindClick);
    }
    
    if (placeIdInput) {
        placeIdInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleFindClick();
            }
        });
        
        // Allow only numbers
        placeIdInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
    
    if (copyBtn) {
        copyBtn.addEventListener('click', copyResult);
    }
    
    // Example items click handler
    exampleItems.forEach(item => {
        item.addEventListener('click', function() {
            const placeId = this.dataset.placeId;
            if (placeId && placeIdInput) {
                placeIdInput.value = placeId;
                handleFindClick();
            }
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.borderColor = 'var(--primary)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderColor = 'var(--border-color)';
        });
    });
    
    // Add input validation for minimum value
    if (placeIdInput) {
        placeIdInput.addEventListener('blur', function() {
            if (this.value && parseInt(this.value) < 1) {
                this.value = '';
            }
        });
    }
});
