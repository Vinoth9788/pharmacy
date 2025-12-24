// Medicines Page Functionality

let allMedicines = [];

// Load all medicines
async function loadMedicines() {
    const container = document.getElementById('medicinesGrid');
    const noResults = document.getElementById('noResults');
    
    try {
        const response = await fetch('data/medicines.json');
        allMedicines = await response.json();
        displayMedicines(allMedicines);
    } catch (error) {
        console.error('Error loading medicines:', error);
        container.innerHTML = '<p class="error-message">Error loading medicines. Please try again later.</p>';
    }
}

// Display medicines
function displayMedicines(medicines) {
    const container = document.getElementById('medicinesGrid');
    const noResults = document.getElementById('noResults');
    
    if (medicines.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'flex';
        return;
    }
    
    container.style.display = 'grid';
    noResults.style.display = 'none';
    
    container.innerHTML = medicines.map(medicine => `
        <div class="medicine-card">
            <div class="medicine-icon">${medicine.image}</div>
            <h3>${medicine.name}</h3>
            <p class="medicine-category"><i class="fas fa-tag"></i> ${medicine.category}</p>
            <p class="medicine-usage">${medicine.usage}</p>
            <div class="medicine-footer">
                <span class="medicine-price">$${medicine.price.toFixed(2)}</span>
                <button class="btn-info" onclick="showMedicineDetails(${medicine.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        </div>
    `).join('');
}

// Filter medicines based on search and category
function filterMedicines() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    let filtered = allMedicines;
    
    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(med => med.category === category);
    }
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(med => 
            med.name.toLowerCase().includes(searchTerm) ||
            med.usage.toLowerCase().includes(searchTerm) ||
            med.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayMedicines(filtered);
}

// Show medicine details
function showMedicineDetails(medicineId) {
    const medicine = allMedicines.find(m => m.id === medicineId);
    if (!medicine) return;
    
    const modal = document.createElement('div');
    modal.className = 'medicine-modal';
    modal.innerHTML = `
        <div class="medicine-modal-content">
            <button class="modal-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-header">
                <div class="modal-icon">${medicine.image}</div>
                <h2>${medicine.name}</h2>
            </div>
            <div class="modal-body">
                <div class="modal-info">
                    <p><strong>Category:</strong> ${medicine.category}</p>
                    <p><strong>Price:</strong> $${medicine.price.toFixed(2)}</p>
                </div>
                <div class="modal-usage">
                    <h3>Usage Instructions:</h3>
                    <p>${medicine.usage}</p>
                </div>
                <div class="modal-disclaimer">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p><strong>Important:</strong> This information is for general guidance only. Please consult a certified doctor before taking any medication.</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">
                    Close
                </button>
                <button class="btn btn-primary" onclick="orderMedicine('${medicine.name}')">
                    <i class="fas fa-shopping-cart"></i> Order Now
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Order medicine (opens chatbot)
function orderMedicine(medicineName) {
    // Close modal
    const modal = document.querySelector('.medicine-modal');
    if (modal) modal.remove();
    
    // Open chatbot
    toggleChatbot();
    
    // Pre-fill message
    setTimeout(() => {
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.value = `I would like to order ${medicineName}`;
            chatInput.focus();
        }
    }, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadMedicines();
});
