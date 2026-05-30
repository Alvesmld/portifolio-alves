let salesChart, categoryChart;

function initCharts() {
    // Sales Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
            datasets: [{
                label: 'Vendas',
                data: [12000, 19000, 15000, 25000, 22000, 30000, 35000],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    // Category Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Eletrônicos', 'Roupas', 'Casa', 'Outros'],
            datasets: [{
                data: [35, 25, 20, 20],
                backgroundColor: [
                    '#3b82f6',
                    '#10b981',
                    '#8b5cf6',
                    '#f59e0b'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    loadActivities();
}

function loadActivities() {
    const activities = [
        {
            type: 'sale',
            title: 'Nova venda realizada',
            value: 'R$ 1.250,00',
            time: '2 minutos atrás'
        },
        {
            type: 'user',
            title: 'Novo usuário cadastrado',
            value: 'João Silva',
            time: '15 minutos atrás'
        },
        {
            type: 'view',
            title: 'Página visualizada',
            value: 'Produto X',
            time: '30 minutos atrás'
        },
        {
            type: 'sale',
            title: 'Nova venda realizada',
            value: 'R$ 890,00',
            time: '1 hora atrás'
        },
        {
            type: 'user',
            title: 'Novo usuário cadastrado',
            value: 'Maria Santos',
            time: '2 horas atrás'
        }
    ];

    const container = document.getElementById('activityList');
    container.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                <i class="fas ${getIconForType(activity.type)}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
            <div class="activity-value">${activity.value}</div>
        </div>
    `).join('');
}

function getIconForType(type) {
    switch(type) {
        case 'sale': return 'fa-shopping-cart';
        case 'user': return 'fa-user';
        case 'view': return 'fa-eye';
        default: return 'fa-circle';
    }
}

function updateData() {
    // Simulate data update with random values
    const activeUsers = Math.floor(Math.random() * 5000) + 10000;
    const sales = (Math.random() * 20 + 35).toFixed(1);
    const views = Math.floor(Math.random() * 20000) + 70000;
    const conversion = (Math.random() * 2 + 3).toFixed(1);

    document.getElementById('activeUsers').textContent = activeUsers.toLocaleString();
    document.getElementById('sales').textContent = 'R$ ' + sales + 'K';
    document.getElementById('views').textContent = views.toLocaleString() + 'K';
    document.getElementById('conversion').textContent = conversion + '%';

    // Update charts with new random data
    if (salesChart) {
        salesChart.data.datasets[0].data = salesChart.data.datasets[0].data.map(() => 
            Math.floor(Math.random() * 25000) + 10000
        );
        salesChart.update();
    }

    if (categoryChart) {
        categoryChart.data.datasets[0].data = [
            Math.floor(Math.random() * 20) + 25,
            Math.floor(Math.random() * 15) + 20,
            Math.floor(Math.random() * 15) + 15,
            Math.floor(Math.random() * 10) + 15
        ];
        categoryChart.update();
    }

    // Show notification
    showNotification('Dados atualizados com sucesso!');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize on load
window.addEventListener('load', initCharts);
