// ૧. લિસ્ટ મુજબનો કાયમી પ્રોડક્ટ ડેટા (MRP સાથે)
const productCatalog = [
    // --- ૧. 500 ગ્રામ (સેક્શન A) - વાદળી થીમ ---
    { id: 1, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "સ્પે સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 2, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "ભાવનગરી ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 3, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "નાયલોન ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 4, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મસાલા તીખા ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 5, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "સ્પે ચવાણું (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 6, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "ખટ્ટા મીઠા મીક્ષ (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 7, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મસાલા ચણા દાળ (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 8, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મોળી ચણા દાળ (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 9, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મસાલા વટાણા (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },

    // --- ૨. 500 ગ્રામ પ્રીમિયમ (સેક્શન B) - જાંબલી/પર્પલ થીમ ---
    { id: 10, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "રતલામી સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 75, mrp: 95 },
    { id: 11, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "આલુ સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 75, mrp: 95 },
    { id: 12, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "તીખો ફરાળી ચેવડો (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },
    { id: 13, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "લીંબુ શીંગ ભુજીયા (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },
    { id: 14, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "મસાલા શીંગ ભુજીયા (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },
    { id: 15, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "સ્પે. સ્વીટ ફરાળી ચેવડો (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },

    // --- ૩. 450 ગ્રામ (સેક્શન D) - એમ્બર/ઓરેન્જ થીમ ---
    { id: 16, category: "૪૫૦ ગ્રામ", colorClass: "cat-amber", name: "ડાયમંડ ચવાણું (450 Gm)", packType: "કટો", packSize: 30, price: 55, mrp: 70 },

    // --- ૪. 400 ગ્રામ (સેક્શન E) - ટીલ/સમુદ્રી થીમ ---
    { id: 17, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "દબેલા ચણા (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 18, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "સેવ મમરા ગાર્લીક (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 19, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "સેવ મમરા મોળા (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 20, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "શક્કરપારા (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 21, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "ભાખરવડી (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },

    // --- ૫. 250 ગ્રામ (સેક્શન F) - લીલી/ગ્રીન થીમ ---
    { id: 22, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "મિક્ષ ચવાણું (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 23, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "નાયલોન ગાંઠીયા (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 24, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "ખટ્ટામીઠા મિક્ષ (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 25, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "ભાવનગરી ગાંઠીયા (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 26, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "રતલામી સેવ (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 27, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "સ્પે. સેવ (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 28, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "મસાલા દાળ (250 Gm)", packType: "બોક્ષ", packSize: 24, price: 40, mrp: 50 },
    { id: 29, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "તીખો ફરાળી ચેવડો (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 30, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "સ્પે. સ્વીટ ફરાળી ચેવડો (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40, mrp: 50 },
    { id: 31, category: "૨૫૦ ગ્રામ (બોક્ષ/કટો)", colorClass: "cat-green", name: "શીંગ ભજીયા (250 Gm)", packType: "બોક્ષ", packSize: 24, price: 40, mrp: 50 },

    // --- ૬. 200 ગ્રામ (સેક્શન G) - ગુલાબી/પિંક થીમ ---
    { id: 32, category: "૨૦૦ ગ્રામ", colorClass: "cat-pink", name: "સોયા સ્ટીક (200 Gm)", packType: "બોક્ષ", packSize: 20, price: 35, mrp: 45 }
];

let customerInfo = { name: "", mobile: "" };
let cartItems = [];
let grossBillTotal = 0;
let finalDueAmount = 0;

function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleDateString('gu-IN') + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateEl = document.getElementById('billDateDisplay');
    if (dateEl) dateEl.innerText = formatted;
}

function validateMobileInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    const err = document.getElementById('mobileError');
    if (input.value.length === 10) {
        err.style.display = 'none';
    }
}

async function pickContactFromPhone() {
    const props = ['name', 'tel'];
    const opts = { multiple: false };

    if ('contacts' in navigator && 'ContactsManager' in window) {
        try {
            const contacts = await navigator.contacts.select(props, opts);
            if (contacts && contacts[0]) {
                const name = contacts[0].name ? contacts[0].name[0] : '';
                let tel = contacts[0].tel ? contacts[0].tel[0] : '';

                tel = tel.replace(/[^0-9]/g, '');
                if (tel.length > 10) tel = tel.slice(-10);

                if (name) document.getElementById('custNameInput').value = name;
                if (tel) {
                    document.getElementById('custMobileInput').value = tel;
                    validateMobileInput(document.getElementById('custMobileInput'));
                }
            }
        } catch (ex) {
            console.log('Cancelled');
        }
    } else {
        alert('આ બ્રાઉઝરમાં સીધી ફોન ડાયરી સપોર્ટ નથી. જાતે નામ અને નંબર લખો.');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
});

function goToPart2(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('custNameInput').value.trim();
    const mobile = document.getElementById('custMobileInput').value.trim();

    if (!name) {
        alert("કૃપા કરીને ગ્રાહકનું નામ દાખલ કરો!");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById('mobileError').style.display = 'block';
        alert("ભૂલ: મોબાઈલ નંબર પૂરા ૧૦ અંકનો જ હોવો જોઈએ! (૯ કે ૧૧ અંક નહીં ચાલે)");
        document.getElementById('custMobileInput').focus();
        return;
    }

    customerInfo.name = name;
    customerInfo.mobile = mobile;

    document.getElementById('activeCustName').innerText = name;
    document.getElementById('activeCustMobile').innerText = mobile;
    document.getElementById('billCustDisplay').innerText = name;
    document.getElementById('billPhoneDisplay').innerText = mobile;

    updateDateTime();

    document.getElementById('sectionPart1').classList.add('hidden');
    document.getElementById('sectionPart2').classList.remove('hidden');
    document.getElementById('sectionPart3').classList.add('hidden');

    renderProductCards(productCatalog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPart1() {
    document.getElementById('sectionPart1').classList.remove('hidden');
    document.getElementById('sectionPart2').classList.add('hidden');
    document.getElementById('sectionPart3').classList.add('hidden');
}

function goToPart3() {
    if (cartItems.length === 0) {
        alert("બિલ જોવા માટે પહેલા લિસ્ટમાંથી સંખ્યા પસંદ કરો!");
        return;
    }
    updateDateTime();
    updateInvoiceTable();
    calculateBalance();

    document.getElementById('sectionPart1').classList.add('hidden');
    document.getElementById('sectionPart2').classList.add('hidden');
    document.getElementById('sectionPart3').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToPart2() {
    document.getElementById('sectionPart1').classList.add('hidden');
    document.getElementById('sectionPart2').classList.remove('hidden');
    document.getElementById('sectionPart3').classList.add('hidden');
}

function renderProductCards(products) {
    const container = document.getElementById('productsFullContainer');
    if (!container) return;
    container.innerHTML = '';

    let lastCategory = "";

    products.forEach((item, index) => {
        if (item.category !== lastCategory) {
            if (index !== 0) {
                const divider = document.createElement('hr');
                divider.className = 'section-divider';
                container.appendChild(divider);
            }

            const catBlock = document.createElement('div');
            catBlock.className = 'category-block';
            catBlock.innerHTML = `<span class="category-title ${item.colorClass}-header">📂 ${item.category}</span>`;
            container.appendChild(catBlock);

            lastCategory = item.category;
        }

        const fullKattaPrice = item.packSize * item.price;
        const inCart = cartItems.find(c => c.id === item.id);
        const currentKatta = inCart ? inCart.katta : 0;
        const currentLoose = inCart ? inCart.loose : 0;
        const isSelected = (currentKatta > 0 || currentLoose > 0);

        const card = document.createElement('div');
        card.className = `prod-card theme-${item.colorClass} ${isSelected ? 'active-selected' : ''}`;
        card.id = `card_${item.id}`;

        card.innerHTML = `
            <div class="prod-meta-top">
                <div>
                    <div class="prod-name">${item.name}</div>
                    <div class="prod-rate-box">
                        <span class="rate-pouch">૧ પાઉંચ: <strong class="rate-val">₹${item.price}</strong> <span style="font-size: 12px; color: #94a3b8; text-decoration: line-through; margin-left: 5px;">MRP: ₹${item.mrp}</span></span><br>
                        <span class="rate-katta-total">૧ ${item.packType} (${item.packSize} પાઉંચ) = <strong>₹${fullKattaPrice}</strong></span>
                    </div>
                </div>
                <span class="prod-badge">૧ ${item.packType} = ${item.packSize} પાઉંચ</span>
            </div>

            <div class="prod-actions">
                <div class="control-item">
                    <span class="ctrl-title">${item.packType} (આખા)</span>
                    <div class="step-control">
                        <button type="button" class="btn-ctrl" onclick="stepCountDirect(${item.id}, 'katta', -1)">-</button>
                        <input type="number" id="katta_${item.id}" value="${currentKatta}" min="0" oninput="syncDirectInput(${item.id})">
                        <button type="button" class="btn-ctrl" onclick="stepCountDirect(${item.id}, 'katta', 1)">+</button>
                    </div>
                </div>

                <div class="control-item">
                    <span class="ctrl-title">છૂટક પેકેટ</span>
                    <div class="step-control">
                        <button type="button" class="btn-ctrl" onclick="stepCountDirect(${item.id}, 'loose', -1)">-</button>
                        <input type="number" id="loose_${item.id}" value="${currentLoose}" min="0" oninput="syncDirectInput(${item.id})">
                        <button type="button" class="btn-ctrl" onclick="stepCountDirect(${item.id}, 'loose', 1)">+</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    const finalDivider = document.createElement('hr');
    finalDivider.className = 'section-divider';
    container.appendChild(finalDivider);
}

function stepCountDirect(id, type, change) {
    const input = document.getElementById(`${type}_${id}`);
    if (!input) return;
    let val = parseInt(input.value) || 0;
    val += change;
    if (val < 0) val = 0;
    input.value = val;
    autoUpdateCart(id);
}

function syncDirectInput(id) {
    autoUpdateCart(id);
}

function autoUpdateCart(id) {
    const item = productCatalog.find(p => p.id === id);
    const kattaQty = parseInt(document.getElementById(`katta_${id}`).value) || 0;
    const looseQty = parseInt(document.getElementById(`loose_${id}`).value) || 0;

    const totalPouches = (kattaQty * item.packSize) + looseQty;
    const totalCost = totalPouches * item.price;

    const cardElement = document.getElementById(`card_${id}`);
    const existingIndex = cartItems.findIndex(c => c.id === id);

    if (totalPouches > 0) {
        if (existingIndex > -1) {
            cartItems[existingIndex].katta = kattaQty;
            cartItems[existingIndex].loose = looseQty;
            cartItems[existingIndex].totalPouches = totalPouches;
            cartItems[existingIndex].totalCost = totalCost;
        } else {
            cartItems.push({
                id: item.id,
                category: item.category,
                colorClass: item.colorClass,
                name: item.name,
                packType: item.packType,
                katta: kattaQty,
                loose: looseQty,
                totalPouches: totalPouches,
                unitPrice: item.price,
                totalCost: totalCost
            });
        }
        if (cardElement) cardElement.classList.add('active-selected');
    } else {
        if (existingIndex > -1) cartItems.splice(existingIndex, 1);
        if (cardElement) cardElement.classList.remove('active-selected');
    }
    updateInvoiceTable();
}

function filterProductCards() {
    const query = document.getElementById('productSearch').value.toLowerCase().trim();
    const filtered = productCatalog.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    renderProductCards(filtered);
}

function removeInvoiceItem(id) {
    const itemIndex = cartItems.findIndex(c => c.id === id);
    if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
    }

    const k = document.getElementById(`katta_${id}`);
    const l = document.getElementById(`loose_${id}`);
    if (k) k.value = 0;
    if (l) l.value = 0;

    const c = document.getElementById(`card_${id}`);
    if (c) c.classList.remove('active-selected');

    updateInvoiceTable();
    calculateBalance();
}

function updateInvoiceTable() {
    const tbody = document.getElementById('billItemsTbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    grossBillTotal = 0;

    if (cartItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="empty-cart-msg">હજુ કોઈ આઇટમ ઉમેરેલી નથી.</td></tr>`;
        document.getElementById('billGrossTotal').innerText = `₹ 0`;
        document.getElementById('billFinalDueTotal').innerText = `₹ 0`;
        return;
    }

    const categoriesOrder = [
        "૫૦૦ ગ્રામ (રેગ્યુલર)",
        "૫૦૦ ગ્રામ (પ્રીમિયમ)",
        "૪૫૦ ગ્રામ",
        "૪૦૦ ગ્રામ",
        "૨૫૦ ગ્રામ (બોક્ષ/કટો)",
        "૨૦૦ ગ્રામ"
    ];

    categoriesOrder.forEach(catName => {
        const itemsUnderCat = cartItems.filter(ci => ci.category === catName);
        if (itemsUnderCat.length > 0) {
            const firstItem = itemsUnderCat[0];
            const catHeaderClass = firstItem.colorClass ? firstItem.colorClass.replace('cat-', 'bcat-') : 'bcat-blue';

            const catHeaderTr = document.createElement('tr');
            catHeaderTr.innerHTML = `
                <td colspan="7" class="bill-cat-header-row ${catHeaderClass}">
                    📂 ${catName}
                </td>
            `;
            tbody.appendChild(catHeaderTr);

            itemsUnderCat.forEach(rowItem => {
                grossBillTotal += rowItem.totalCost;
                const itemTr = document.createElement('tr');
                itemTr.className = `brow-${rowItem.colorClass}`;
                itemTr.innerHTML = `
                    <td class="text-left"><strong>${rowItem.name}</strong></td>
                    <td>${rowItem.katta > 0 ? rowItem.katta + ' ' + rowItem.packType : '-'}</td>
                    <td>${rowItem.loose > 0 ? rowItem.loose + ' નંગ' : '-'}</td>
                    <td><strong>${rowItem.totalPouches}</strong></td>
                    <td>₹${rowItem.unitPrice}</td>
                    <td><strong>₹${rowItem.totalCost}</strong></td>
                    <td class="no-capture">
                        <button type="button" class="btn-del" onclick="removeInvoiceItem(${rowItem.id})">✕</button>
                    </td>
                `;
                tbody.appendChild(itemTr);
            });
        }
    });

    document.getElementById('billGrossTotal').innerText = `₹ ${grossBillTotal.toLocaleString('en-IN')}`;
    calculateBalance();
}

function calculateBalance() {
    const cash = parseFloat(document.getElementById('payCash').value) || 0;
    const online = parseFloat(document.getElementById('payOnline').value) || 0;
    const discount = parseFloat(document.getElementById('payDiscount').value) || 0;
    const deposit = parseFloat(document.getElementById('payDeposit').value) || 0;

    const totalPaid = cash + online;
    finalDueAmount = grossBillTotal - discount - deposit - totalPaid;
    if (finalDueAmount < 0) finalDueAmount = 0;

    document.getElementById('payDue').value = finalDueAmount;
    document.getElementById('billFinalDueTotal').innerText = `₹ ${finalDueAmount.toLocaleString('en-IN')}`;

    const rowDisc = document.getElementById('rowDiscount');
    const rowDep = document.getElementById('rowDeposit');
    const rowPaid = document.getElementById('rowPaid');

    if (discount > 0) {
        rowDisc.style.display = '';
        document.getElementById('dispDiscount').innerText = `- ₹ ${discount}`;
    } else {
        rowDisc.style.display = 'none';
    }

    if (deposit > 0) {
        rowDep.style.display = '';
        document.getElementById('dispDeposit').innerText = `- ₹ ${deposit}`;
    } else {
        rowDep.style.display = 'none';
    }

    if (totalPaid > 0) {
        rowPaid.style.display = '';
        document.getElementById('dispPaid').innerText = `- ₹ ${totalPaid} (રોકડ: ${cash} | ઓનલાઇન: ${online})`;
    } else {
        rowPaid.style.display = 'none';
    }
}

async function renderBillCanvas() {
    updateDateTime();
    const billArea = document.getElementById('printableBillArea');
    const deleteButtons = billArea.querySelectorAll('.no-capture');
    deleteButtons.forEach(btn => btn.style.display = 'none');

    const logoImg = document.getElementById('logoPart3');
    if (logoImg && !logoImg.complete) {
        await new Promise((resolve) => {
            logoImg.onload = resolve;
            logoImg.onerror = resolve;
        });
    }

    try {
        const canvas = await html2canvas(billArea, {
            scale: 2.5,
            backgroundColor: "#ffffff",
            logging: false,
            allowTaint: true,
            useCORS: true
        });

        deleteButtons.forEach(el => el.style.display = '');
        return canvas;
    } catch (err) {
        deleteButtons.forEach(el => el.style.display = '');
        throw err;
    }
}

async function exportBillToGallery() {
    if (cartItems.length === 0) {
        alert('બિલ સેવ કરવા માટે પહેલા ઓછામાં ઓછી ૧ આઇટમ ઉમેરો!');
        return;
    }

    try {
        const canvas = await renderBillCanvas();
        const safeCustName = customerInfo.name.replace(/\s+/g, '_') || 'Customer';
        const fileName = `AmanSales_${safeCustName}_${Date.now()}.png`;

        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        alert("સેવ કરવામાં સમસ્યા: " + e.message);
    }
}

async function shareOnWhatsAppAndSave() {
    if (cartItems.length === 0) {
        alert('પહેલા ઓર્ડરમાં આઇટમ ઉમેરો!');
        return;
    }

    let canvas;
    try {
        canvas = await renderBillCanvas();
    } catch (e) {
        alert("કેનવાસ બનાવવામાં એરર: " + e.message);
        return;
    }

    const safeCustName = customerInfo.name.replace(/\s+/g, '_') || 'Customer';
    const fileName = `AmanSales_${safeCustName}_${Date.now()}.png`;

    let mobile = customerInfo.mobile.replace(/[^0-9]/g, '');
    if (mobile.length === 10) mobile = '91' + mobile;

    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = canvas.toDataURL('image/png');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    if (navigator.canShare && canvas.toBlob) {
        canvas.toBlob(async (blob) => {
            const imageFile = new File([blob], fileName, { type: 'image/png' });
            if (navigator.canShare({ files: [imageFile] })) {
                try {
                    await navigator.share({
                        files: [imageFile],
                        title: 'અમાન સેલ્સ એજન્સી બિલ',
                        text: `અમાન સેલ્સ એજન્સી - બોટાદ\nગ્રાહક: ${customerInfo.name}\nબાકી રકમ: ₹${finalDueAmount}`
                    });
                    return;
                } catch (err) {
                    console.log("Share canceled by user");
                }
            }
            openWhatsAppChatFallback(mobile);
        }, 'image/png');
    } else {
        openWhatsAppChatFallback(mobile);
    }
}

function openWhatsAppChatFallback(mobile) {
    alert("✅ બિલનો ફોટો ગેલેરીમાં સેવ થઈ ગયો છે!\nહવે WhatsApp ખૂલશે, ત્યાં અટેચમેન્ટ (📎) માંથી ફોટો સિલેક્ટ કરીને મોકલી આપો.");
    window.open(`https://wa.me/${mobile}`, '_blank');
}

function printBillDirect() {
    if (cartItems.length === 0) {
        alert('પ્રિન્ટ કરવા માટે પહેલા આઇટમ ઉમેરો!');
        return;
    }
    
    updateDateTime();
    
    const billArea = document.getElementById('printableBillArea');
    const deleteButtons = billArea.querySelectorAll('.no-capture');
    deleteButtons.forEach(btn => btn.style.display = 'none');

    window.print();

    setTimeout(() => {
        deleteButtons.forEach(btn => btn.style.display = '');
    }, 1000);
}

function clearFullBill() {
    if (confirm("શું તમે ખરેખર બિલ ક્લિયર કરીને નવો ઓર્ડર શરૂ કરવા માંગો છો?")) {
        cartItems = [];
        customerInfo = { name: "", mobile: "" };
        grossBillTotal = 0;
        finalDueAmount = 0;

        document.getElementById('custNameInput').value = '';
        document.getElementById('custMobileInput').value = '';
        document.getElementById('payCash').value = 0;
        document.getElementById('payOnline').value = 0;
        document.getElementById('payDiscount').value = 0;
        document.getElementById('payDeposit').value = 0;
        document.getElementById('payDue').value = 0;

        productCatalog.forEach(p => {
            const k = document.getElementById(`katta_${p.id}`);
            const l = document.getElementById(`loose_${p.id}`);
            if (k) k.value = 0;
            if (l) l.value = 0;
            const c = document.getElementById(`card_${p.id}`);
            if (c) c.classList.remove('active-selected');
        });

        document.getElementById('sectionPart1').classList.remove('hidden');
        document.getElementById('sectionPart2').classList.add('hidden');
        document.getElementById('sectionPart3').classList.add('hidden');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
