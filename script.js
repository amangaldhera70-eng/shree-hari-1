// ૧. લિસ્ટ મુજબનો કાયમી પ્રોડક્ટ ડેટા
const productCatalog = [
    // --- ૧. 500 ગ્રામ (સેક્શન A) ---
    { id: 1, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "સ્પે સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 2, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "ભાવનગરી ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 3, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "નાયલોન ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 4, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મસાલા તીખા ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70, mrp: 90 },
    { id: 5, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "સ્પે ચવાણું (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 6, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "ખટ્ટા મીઠા મીક્ષ (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 7, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મસાલા ચણા દાળ (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 8, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મોળી ચણા દાળ (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },
    { id: 9, category: "૫૦૦ ગ્રામ (રેગ્યુલર)", colorClass: "cat-blue", name: "મસાલા વટાણા (500 Gm)", packType: "કટો", packSize: 30, price: 70, mrp: 90 },

    // --- ૨. 500 ગ્રામ પ્રીમિયમ (સેક્શન B) ---
    { id: 10, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "રતલામી સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 75, mrp: 95 },
    { id: 11, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "આલુ સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 75, mrp: 95 },
    { id: 12, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "તીખો ફરાળી ચેવડો (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },
    { id: 13, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "લીંબુ શીંગ ભુજીયા (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },
    { id: 14, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "મસાલા શીંગ ભુજીયા (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },
    { id: 15, category: "૫૦૦ ગ્રામ (પ્રીમિયમ)", colorClass: "cat-purple", name: "સ્પે. સ્વીટ ફરાળી ચેવડો (500 Gm)", packType: "કટો", packSize: 30, price: 75, mrp: 95 },

    // --- ૩. 450 ગ્રામ (સેક્શન D) ---
    { id: 16, category: "૪૫૦ ગ્રામ", colorClass: "cat-amber", name: "ડાયમંડ ચવાણું (450 Gm)", packType: "કટો", packSize: 30, price: 55, mrp: 70 },

    // --- ૪. 400 ગ્રામ (સેક્શન E) ---
    { id: 17, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "દબેલા ચણા (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 18, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "સેવ મમરા ગાર્લીક (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 19, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "સેવ મમરા મોળા (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 20, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "શક્કરપારા (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },
    { id: 21, category: "૪૦૦ ગ્રામ", colorClass: "cat-teal", name: "ભાખરવડી (400 Gm)", packType: "કટો", packSize: 30, price: 50, mrp: 65 },

    // --- ૫. 250 ગ્રામ (સેક્શન F) ---
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

    // --- ૬. 200 ગ્રામ (સેક્શન G) ---
    { id: 32, category: "૨૦૦ ગ્રામ", colorClass: "cat-pink", name: "સોયા સ્ટીક (200 Gm)", packType: "બોક્ષ", packSize: 20, price: 35, mrp: 45 }
];

let customerInfo = { name: "", mobile: "" };
let cartItems = [];
let grossBillTotal = 0;
let finalDueAmount = 0;
let currentEditingId = null;

function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleDateString('gu-IN') + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateEl = document.getElementById('billDateDisplay');
    if (dateEl) dateEl.innerText = formatted;
}
window.addEventListener('DOMContentLoaded', updateDateTime);

function validateMobileInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length === 10) document.getElementById('mobileError').style.display = 'none';
}

async function pickContactFromPhone() {
    if ('contacts' in navigator && 'ContactsManager' in window) {
        try {
            const contacts = await navigator.contacts.select(['name', 'tel'], { multiple: false });
            if (contacts && contacts[0]) {
                if (contacts[0].name) document.getElementById('custNameInput').value = contacts[0].name[0];
                let tel = contacts[0].tel ? contacts[0].tel[0].replace(/[^0-9]/g, '') : '';
                if (tel.length > 10) tel = tel.slice(-10);
                if (tel) {
                    document.getElementById('custMobileInput').value = tel;
                    validateMobileInput(document.getElementById('custMobileInput'));
                }
            }
        } catch (ex) { console.log('Cancelled'); }
    } else {
        alert('ફોન ડાયરી સપોર્ટ નથી. જાતે લખો.');
    }
}

function goToPart2(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('custNameInput').value.trim();
    const mobile = document.getElementById('custMobileInput').value.trim();
    
    if (!name) return alert("ગ્રાહકનું નામ દાખલ કરો!");
    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById('mobileError').style.display = 'block';
        return alert("મોબાઈલ નંબર પૂરા ૧૦ અંકનો હોવો જોઈએ!");
    }

    customerInfo = { name, mobile };
    document.getElementById('activeCustName').innerText = name;
    document.getElementById('activeCustMobile').innerText = mobile;
    document.getElementById('billCustDisplay').innerText = name;
    document.getElementById('billPhoneDisplay').innerText = mobile;

    updateDateTime();
    document.getElementById('sectionPart1').classList.add('hidden');
    document.getElementById('sectionPart2').classList.remove('hidden');
    document.getElementById('sectionPart3').classList.add('hidden');

    renderProductCards(productCatalog, false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPart1() {
    document.getElementById('sectionPart1').classList.remove('hidden');
    document.getElementById('sectionPart2').classList.add('hidden');
    document.getElementById('sectionPart3').classList.add('hidden');
}

function goToPart3() {
    if (cartItems.length === 0) return alert("પહેલા આઇટમ પસંદ કરો!");
    updateDateTime(); updateInvoiceTable(); calculateBalance();
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

// ----------------- એડિટ મોડલ ----------------- //
function editPrice(id) {
    const item = productCatalog.find(p => p.id === id);
    if (!item) return;

    currentEditingId = id;
    const fullKattaPrice = item.packSize * item.price;
    
    const themeContainer = document.getElementById('modalThemeContainer');
    themeContainer.className = `m-theme-${item.colorClass}`;
    
    document.getElementById('modalProductName').innerText = `${item.id}. ${item.name}`;
    document.getElementById('modalPackBadge').innerText = `૧ ${item.packType} = ${item.packSize} પાઉંચ`;
    document.getElementById('modalCurrentPrice').innerText = `₹${item.price}`;
    document.getElementById('modalMrp').innerText = `MRP: ₹${item.mrp}`;
    document.getElementById('modalKattaTotal').innerHTML = `૧ ${item.packType} (${item.packSize} પાઉંચ) = <strong>₹${fullKattaPrice}</strong>`;
    
    document.getElementById('newPriceInput').value = item.price;
    document.getElementById('priceEditModal').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('newPriceInput').focus();
        document.getElementById('newPriceInput').select();
    }, 100);
}

function closeEditModal() {
    document.getElementById('priceEditModal').classList.add('hidden');
    currentEditingId = null;
}

function saveNewPrice() {
    if (currentEditingId === null) return;
    const newPrice = parseFloat(document.getElementById('newPriceInput').value);
    
    if (!isNaN(newPrice) && newPrice >= 0) {
        const item = productCatalog.find(p => p.id === currentEditingId);
        if (item) {
            item.price = newPrice;
            const cartIndex = cartItems.findIndex(c => c.id === currentEditingId);
            if (cartIndex > -1) {
                cartItems[cartIndex].unitPrice = newPrice;
                cartItems[cartIndex].totalCost = cartItems[cartIndex].totalPouches * newPrice;
                updateInvoiceTable(); calculateBalance();
            }
            
            const searchVal = document.getElementById('productSearch').value.toLowerCase().trim();
            if (searchVal) {
                filterProductCards();
            } else {
                const allExpanded = document.querySelectorAll('.category-content.expanded');
                const openCats = Array.from(allExpanded).map(el => el.id);
                renderProductCards(productCatalog, false);
                openCats.forEach(id => {
                    const content = document.getElementById(id);
                    const icon = document.getElementById(`icon_${id}`);
                    if(content) {
                        content.classList.remove('collapsed');
                        content.classList.add('expanded');
                        if(icon) icon.innerText = '▲';
                    }
                });
            }
        }
        closeEditModal();
    } else {
        alert("સાચો આંકડો નાખો.");
        document.getElementById('newPriceInput').focus();
    }
}

// ----------------- કેટેગરી ફોલ્ડર સિસ્ટમ ----------------- //
function toggleCategory(catId) {
    const allContents = document.querySelectorAll('.category-content');
    const allIcons = document.querySelectorAll('.toggle-icon');
    
    const targetContent = document.getElementById(catId);
    const isCurrentlyExpanded = targetContent.classList.contains('expanded');

    allContents.forEach(c => { c.classList.remove('expanded'); c.classList.add('collapsed'); });
    allIcons.forEach(i => i.innerText = '▼');

    if (!isCurrentlyExpanded) {
        targetContent.classList.remove('collapsed');
        targetContent.classList.add('expanded');
        document.getElementById(`icon_${catId}`).innerText = '▲';
    }
}

// ----------------- પ્રોડક્ટ કાર્ડ રેન્ડર ----------------- //
function renderProductCards(products, expandAll = false) {
    const container = document.getElementById('productsFullContainer');
    if (!container) return;
    container.innerHTML = '';
    
    const categories = [...new Set(products.map(p => p.category))];

    categories.forEach((cat, index) => {
        const catProducts = products.filter(p => p.category === cat);
        if(catProducts.length === 0) return;

        const firstItem = catProducts[0];
        const catId = `cat_content_${index}`;

        const wrapper = document.createElement('div');
        wrapper.className = 'category-wrapper';

        const header = document.createElement('div');
        header.className = `category-header ${firstItem.colorClass}-header`;
        header.innerHTML = `<span>📂 ${cat}</span> <span class="toggle-icon" id="icon_${catId}">${expandAll ? '▲' : '▼'}</span>`;
        header.onclick = () => toggleCategory(catId);
        wrapper.appendChild(header);

        const grid = document.createElement('div');
        grid.className = `products-grid category-content ${expandAll ? 'expanded' : 'collapsed'}`;
        grid.id = catId;

        catProducts.forEach(item => {
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
                        <div class="prod-name">${item.id}. ${item.name}</div>
                        <div class="prod-rate-box">
                            <span class="rate-pouch">૧ પાઉંચ: <strong class="rate-val">₹${item.price}</strong> 
                                <span style="cursor: pointer; font-size: 14px; margin-left: 3px;" onclick="editPrice(${item.id})" title="ભાવ બદલો">✏️</span>
                                <span style="font-size: 12px; color: #94a3b8; text-decoration: line-through; margin-left: 5px;">MRP: ₹${item.mrp}</span>
                            </span><br>
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
            grid.appendChild(card);
        });

        wrapper.appendChild(grid);
        container.appendChild(wrapper);
    });
}

function filterProductCards() {
    const query = document.getElementById('productSearch').value.toLowerCase().trim();
    if(query === "") {
        renderProductCards(productCatalog, false);
    } else {
        const filtered = productCatalog.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        renderProductCards(filtered, true);
    }
}

// ----------------- કાર્ટ સિસ્ટમ ----------------- //
function stepCountDirect(id, type, change) {
    const input = document.getElementById(`${type}_${id}`);
    if (!input) return;
    let val = parseInt(input.value) || 0;
    val = Math.max(0, val + change);
    input.value = val;
    autoUpdateCart(id);
}

function syncDirectInput(id) { autoUpdateCart(id); }

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
            cartItems.push({ ...item, katta: kattaQty, loose: looseQty, totalPouches, unitPrice: item.price, totalCost });
        }
        if (cardElement) cardElement.classList.add('active-selected');
    } else {
        if (existingIndex > -1) cartItems.splice(existingIndex, 1);
        if (cardElement) cardElement.classList.remove('active-selected');
    }
    updateInvoiceTable();
}

function removeInvoiceItem(id) {
    const itemIndex = cartItems.findIndex(c => c.id === id);
    if (itemIndex > -1) cartItems.splice(itemIndex, 1);
    const k = document.getElementById(`katta_${id}`), l = document.getElementById(`loose_${id}`), c = document.getElementById(`card_${id}`);
    if (k) k.value = 0; if (l) l.value = 0; if (c) c.classList.remove('active-selected');
    updateInvoiceTable(); calculateBalance();
}

function updateInvoiceTable() {
    const tbody = document.getElementById('billItemsTbody');
    if (!tbody) return;
    tbody.innerHTML = ''; grossBillTotal = 0;

    if (cartItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="empty-cart-msg">હજુ કોઈ આઇટમ ઉમેરેલી નથી.</td></tr>`;
        document.getElementById('billGrossTotal').innerText = `₹ 0`;
        document.getElementById('billFinalDueTotal').innerText = `₹ 0`;
        return;
    }

    const categoriesOrder = [ "૫૦૦ ગ્રામ (રેગ્યુલર)", "૫૦૦ ગ્રામ (પ્રીમિયમ)", "૪૫૦ ગ્રામ", "૪૦૦ ગ્રામ", "૨૫૦ ગ્રામ (બોક્ષ/કટો)", "૨૦૦ ગ્રામ" ];

    categoriesOrder.forEach(catName => {
        const itemsUnderCat = cartItems.filter(ci => ci.category === catName);
        if (itemsUnderCat.length > 0) {
            const firstItem = itemsUnderCat[0];
            const catHeaderClass = firstItem.colorClass ? firstItem.colorClass.replace('cat-', 'bcat-') : 'bcat-blue';
            const catHeaderTr = document.createElement('tr');
            catHeaderTr.innerHTML = `<td colspan="7" class="bill-cat-header-row ${catHeaderClass}">📂 ${catName}</td>`;
            tbody.appendChild(catHeaderTr);

            itemsUnderCat.forEach(rowItem => {
                grossBillTotal += rowItem.totalCost;
                const itemTr = document.createElement('tr');
                itemTr.className = `brow-${rowItem.colorClass}`;
                itemTr.innerHTML = `
                    <td class="text-left"><strong>${rowItem.id}. ${rowItem.name}</strong></td>
                    <td>${rowItem.katta > 0 ? rowItem.katta + ' ' + rowItem.packType : '-'}</td>
                    <td>${rowItem.loose > 0 ? rowItem.loose + ' નંગ' : '-'}</td>
                    <td><strong>${rowItem.totalPouches}</strong></td>
                    <td>₹${rowItem.unitPrice}</td>
                    <td><strong>₹${rowItem.totalCost}</strong></td>
                    <td class="no-capture"><button type="button" class="btn-del" onclick="removeInvoiceItem(${rowItem.id})">✕</button></td>
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
    finalDueAmount = Math.max(0, grossBillTotal - discount - deposit - totalPaid);

    document.getElementById('payDue').value = finalDueAmount;
    document.getElementById('billFinalDueTotal').innerText = `₹ ${finalDueAmount.toLocaleString('en-IN')}`;

    document.getElementById('rowDiscount').style.display = discount > 0 ? '' : 'none';
    if(discount > 0) document.getElementById('dispDiscount').innerText = `- ₹ ${discount}`;
    
    document.getElementById('rowDeposit').style.display = deposit > 0 ? '' : 'none';
    if(deposit > 0) document.getElementById('dispDeposit').innerText = `- ₹ ${deposit}`;
    
    document.getElementById('rowPaid').style.display = totalPaid > 0 ? '' : 'none';
    if(totalPaid > 0) document.getElementById('dispPaid').innerText = `- ₹ ${totalPaid} (રોકડ: ${cash} | ઓનલાઇન: ${online})`;
}

// ----------------- સેવ / ડાઉનલોડ (Tainted Canvas Fix) ----------------- //
async function renderBillCanvas() {
    updateDateTime();
    const billArea = document.getElementById('printableBillArea');
    const deleteButtons = billArea.querySelectorAll('.no-capture');
    deleteButtons.forEach(btn => btn.style.display = 'none');

    try {
        // Tainted Canvas એરર રોકવા માટે allowance 
        const canvas = await html2canvas(billArea, { 
            scale: 2.5, 
            backgroundColor: "#ffffff", 
            logging: false, 
            useCORS: true,
            allowTaint: false 
        });
        deleteButtons.forEach(el => el.style.display = '');
        return canvas;
    } catch (err) {
        deleteButtons.forEach(el => el.style.display = ''); 
        throw err;
    }
}

async function exportBillToGallery() {
    if (cartItems.length === 0) return alert('પહેલા આઇટમ ઉમેરો!');
    try {
        const canvas = await renderBillCanvas();
        const safeCustName = customerInfo.name.replace(/\s+/g, '_') || 'Customer';
        const link = document.createElement('a');
        link.download = `AmanSales_${safeCustName}_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click(); document.body.removeChild(link);
    } catch (e) { alert("એરર: " + e.message); }
}

async function shareOnWhatsAppAndSave() {
    if (cartItems.length === 0) return alert('પહેલા આઇટમ ઉમેરો!');
    let canvas;
    try { canvas = await renderBillCanvas(); } catch (e) { return alert("એરર: " + e.message); }

    const safeCustName = customerInfo.name.replace(/\s+/g, '_') || 'Customer';
    const fileName = `AmanSales_${safeCustName}_${Date.now()}.png`;
    let mobile = customerInfo.mobile.replace(/[^0-9]/g, '');
    if (mobile.length === 10) mobile = '91' + mobile;

    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = canvas.toDataURL('image/png');
    document.body.appendChild(downloadLink); downloadLink.click(); document.body.removeChild(downloadLink);

    if (navigator.canShare && canvas.toBlob) {
        canvas.toBlob(async (blob) => {
            const imageFile = new File([blob], fileName, { type: 'image/png' });
            if (navigator.canShare({ files: [imageFile] })) {
                try {
                    await navigator.share({ files: [imageFile], title: 'અમાન સેલ્સ એજન્સી બિલ', text: `અમાન સેલ્સ એજન્સી - બોટાદ\nગ્રાહક: ${customerInfo.name}\nબાકી રકમ: ₹${finalDueAmount}` });
                    return;
                } catch (err) { console.log("Share canceled"); }
            }
            openWhatsAppChatFallback(mobile);
        }, 'image/png');
    } else openWhatsAppChatFallback(mobile);
}

function openWhatsAppChatFallback(mobile) {
    alert("✅ બિલ સેવ થઈ ગયું છે!\nWhatsApp ખૂલે ત્યાં અટેચમેન્ટ (📎) માંથી મોકલી આપો.");
    window.open(`https://wa.me/${mobile}`, '_blank');
}

function clearFullBill() {
    if (confirm("નવો ઓર્ડર શરૂ કરવો છે?")) {
        cartItems = []; customerInfo = { name: "", mobile: "" }; grossBillTotal = finalDueAmount = 0;
        ['custNameInput', 'custMobileInput'].forEach(id => document.getElementById(id).value = '');
        ['payCash', 'payOnline', 'payDiscount', 'payDeposit', 'payDue'].forEach(id => document.getElementById(id).value = 0);
        productCatalog.forEach(p => {
            const k = document.getElementById(`katta_${p.id}`), l = document.getElementById(`loose_${p.id}`), c = document.getElementById(`card_${p.id}`);
            if (k) k.value = 0; if (l) l.value = 0; if (c) c.classList.remove('active-selected');
        });
        goToPart1();
    }
}
