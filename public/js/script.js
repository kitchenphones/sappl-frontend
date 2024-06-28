function showEntryForm() {
    document.getElementById('entry').style.display = 'block';
    document.getElementById('sold').style.display = 'none';
}

function showSoldForm() {
    document.getElementById('entry').style.display = 'none';
    document.getElementById('sold').style.display = 'block';
}

document.getElementById('entryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'abdul' && password === 'maddy1') {
        const data = {
            accountNumber: document.getElementById('accountNumber').value,
            quantities: document.getElementById('quantities').value,
            imeiNumbers: document.getElementById('imeiNumbers').value.split(','),
            billDueDate: document.getElementById('billDueDate').value,
            mobileNumbers: document.getElementById('mobileNumbers').value.split(','),
            storeName: document.getElementById('storeName').value,
            date: document.getElementById('date').value,
            invoiceNumber: document.getElementById('invoiceNumber').value,
            marketName: document.getElementById('marketName').value
        };

        const response = await fetch('http://ec2-34-235-140-38.compute-1.amazonaws.com:3000/api/entry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.text();
        alert(result);
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('soldForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        imeiNumber: document.getElementById('soldImeiNumber').value,
        amount: document.getElementById('amount').value,
        invoiceNumber: document.getElementById('soldInvoiceNumber').value,
        store: document.getElementById('soldStore').value,
        status: document.getElementById('status').value,
        date: document.getElementById('soldDate').value,
    };

    const response = await fetch('http://ec2-34-235-140-38.compute-1.amazonaws.com:3000/api/sold', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.text();
    alert(result);
});
