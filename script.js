// ૧. લિસ્ટ મુજબનો કાયમી પ્રોડક્ટ ડેટા
const productCatalog = [
    // --- 500 ગ્રામ (A & B) ---
    { id: 1, name: "સ્પે સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 70 },
    { id: 2, name: "ભાવનગરી ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70 },
    { id: 3, name: "નાયલોન ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70 },
    { id: 4, name: "મસાલા તીખા ગાંઠીયા (500 Gm)", packType: "કટો", packSize: 24, price: 70 },
    { id: 5, name: "સ્પે ચવાણું (500 Gm)", packType: "કટો", packSize: 30, price: 70 },
    { id: 6, name: "ખટ્ટા મીઠા મીક્ષ (500 Gm)", packType: "કટો", packSize: 30, price: 70 },
    { id: 7, name: "મસાલા ચણા દાળ (500 Gm)", packType: "કટો", packSize: 30, price: 70 },
    { id: 8, name: "મોળી ચણા દાળ (500 Gm)", packType: "કટો", packSize: 30, price: 70 },
    { id: 9, name: "મસાલા વટાણા (500 Gm)", packType: "કટો", packSize: 30, price: 70 },
    { id: 10, name: "રતલામી સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 75 },
    { id: 11, name: "આલુ સેવ (500 Gm)", packType: "કટો", packSize: 24, price: 75 },
    { id: 12, name: "તીખો ફરાળી ચેવડો (500 Gm)", packType: "કટો", packSize: 30, price: 75 },
    { id: 13, name: "લીંબુ શીંગ ભુજીયા (500 Gm)", packType: "કટો", packSize: 30, price: 75 },
    { id: 14, name: "મસાલા શીંગ ભુજીયા (500 Gm)", packType: "કટો", packSize: 30, price: 75 },
    { id: 15, name: "સ્પે. સ્વીટ ફરાળી ચેવડો (500 Gm)", packType: "કટો", packSize: 30, price: 75 },

    // --- 450 ગ્રામ (D) ---
    { id: 16, name: "ડાયમંડ ચવાણું (450 Gm)", packType: "કટો", packSize: 30, price: 55 },

    // --- 400 ગ્રામ (E) ---
    { id: 17, name: "દબેલા ચણા (400 Gm)", packType: "કટો", packSize: 30, price: 50 },
    { id: 18, name: "સેવ મમરા ગાર્લીક (400 Gm)", packType: "કટો", packSize: 30, price: 50 },
    { id: 19, name: "સેવ મમરા મોળા (400 Gm)", packType: "કટો", packSize: 30, price: 50 },
    { id: 20, name: "શક્કરપારા (400 Gm)", packType: "કટો", packSize: 30, price: 50 },
    { id: 21, name: "ભાખરવડી (400 Gm)", packType: "કટો", packSize: 30, price: 50 },

    // --- 250 ગ્રામ & 200 ગ્રામ (F બોક્ષ/કટો) ---
    { id: 22, name: "મિક્ષ ચવાણું (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 23, name: "નાયલોન ગાંઠીયા (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 24, name: "ખટ્ટામીઠા મિક્ષ (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 25, name: "ભાવનગરી ગાંઠીયા (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 26, name: "રતલામી સેવ (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 27, name: "સ્પે. સેવ (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 28, name: "મસાલા દાળ (250 Gm)", packType: "બોક્ષ", packSize: 24, price: 40 },
    { id: 29, name: "તીખો ફરાળી ચેવડો (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 30, name: "સ્પે. સ્વીટ ફરાળી ચેવડો (250 Gm)", packType: "બોક્ષ", packSize: 21, price: 40 },
    { id: 31, name: "શીંગ ભજીયા (250 Gm)", packType: "બોક્ષ", packSize: 24, price: 40 },
    { id: 32, name: "સોયા સ્ટીક (200 Gm)", packType: "બોક્ષ", packSize: 20, price: 35 }
];

let customerInfo = { name: "", mobile: "" };
let cartItems = [];
let grossBillTotal = 0;
let finalDueAmount = 0;

// તારીખ અને સમય અપડેટ
function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleDateString('gu-IN') + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateEl = document.getElementById('billDateDisplay');
    if (dateEl) dateEl.innerText = formatted;
}

// ૧૦ અંકનું લાઈવ વેલિડેશન (માત્ર અંકો અને ૧૦ થી વધુ નહીં)
function validateMobileInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    const err = document.getElementById('mobileError');
    if (input.value.length === 10) {
        err.style.display = 'none';
    }
}

// ફોન ડાયરી કનેક્શન (GitHub Pages લાઈવ માટે)
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

// ભાગ ૧ -> ભાગ ૨ (૧૦ અંકનું કડક ચેકિંગ)
function goToPart2(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('custNameInput').value.trim();
    const mobile = document.getElementById('custMobileInput').value.trim();

    if (!name) {
        alert("કૃપા કરીને ગ્રાહકનું નામ દાખલ કરો!");
        return;
    }

    // મોબાઈલ નંબર પૂરા ૧૦ અંકનો જ હોવો જોઈએ
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

// ભાગ ૨ -> ભાગ ૧
function goToPart1() {
    document.getElementById('sectionPart1').classList.remove('hidden');
    document.getElementById('sectionPart2').classList.add('hidden');
    document.getElementById('sectionPart3').classList.add('hidden');
}

// ભાગ ૨ -> ભાગ ૩ (લાઈવ બિલ)
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

// ભાગ ૩ -> ભાગ ૨
function backToPart2() {
    document.getElementById('sectionPart1').classList.add('hidden');
    document.getElementById('sectionPart2').classList.remove('hidden');
    document.getElementById('sectionPart3').classList.add('hidden');
}

// પ્રોડક્ટ કાર્ડ્સ રેન્ડર કરવા
function renderProductCards(products) {
    const container = document.getElementById('productsFullContainer');
    if (!container) return;
    container.innerHTML = '';

    products.forEach((item) => {
        const fullKattaPrice = item.packSize * item.price;
        const inCart = cartItems.find(c => c.id === item.id);
        const currentKatta = inCart ? inCart.katta : 0;
        const currentLoose = inCart ? inCart.loose : 0;
        const isSelected = (currentKatta > 0 || currentLoose > 0);

        const card = document.createElement('div');
        card.className = `prod-card ${isSelected ? 'active-selected' : ''}`;
        card.id = `card_${item.id}`;

        card.innerHTML = `
            <div class="prod-meta-top">
                <div>
                    <div class="prod-name">${item.name}</div>
                    <div class="prod-rate-box">
                        <span class="rate-pouch">૧ પાઉંચ: <strong class="rate-val">₹${item.price}</strong></span><br>
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
    const filtered = productCatalog.filter(p => p.name.toLowerCase().includes(query));
    renderProductCards(filtered);
}

function removeInvoiceItem(index) {
    const removed = cartItems[index];
    cartItems.splice(index, 1);

    const k = document.getElementById(`katta_${removed.id}`);
    const l = document.getElementById(`loose_${removed.id}`);
    if (k) k.value = 0;
    if (l) l.value = 0;

    const c = document.getElementById(`card_${removed.id}`);
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

    cartItems.forEach((rowItem, idx) => {
        grossBillTotal += rowItem.totalCost;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-left"><strong>${rowItem.name}</strong></td>
            <td>${rowItem.katta > 0 ? rowItem.katta + ' ' + rowItem.packType : '-'}</td>
            <td>${rowItem.loose > 0 ? rowItem.loose + ' નંગ' : '-'}</td>
            <td><strong>${rowItem.totalPouches}</strong></td>
            <td>₹${rowItem.unitPrice}</td>
            <td>₹${rowItem.totalCost}</td>
            <td class="no-capture">
                <button type="button" class="btn-del" onclick="removeInvoiceItem(${idx})">✕</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('billGrossTotal').innerText = `₹ ${grossBillTotal.toLocaleString('en-IN')}`;
    calculateBalance();
}

// ૫ પેમેન્ટ બટન મુજબ ગણતરી
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

// સહાયક: લોગો સાથે ૧૦૦% સાચો કેનવાસ બનાવવો
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

// ૧. ગેલેરીમાં બિલ સેવ કરવું
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

// ૨. WhatsApp: સીધો ફોટો શેર કરવો (GitHub Pages પર)
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

    // ગેલેરીમાં પણ સેવ થઈ જાય
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = canvas.toDataURL('image/png');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Web Share API થી ડાયરેક્ટ ફોટો WhatsApp શેર કરવો
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

// ૩. PDF: ગેલેરી જેવા જ ૧૦૦% સેમ લેઆઉટમાં A4 PDF ડાઉનલોડ
async function saveBillAsPDF() {
    if (cartItems.length === 0) {
        alert('PDF સેવ કરવા માટે પહેલા આઇટમ ઉમેરો!');
        return;
    }

    const canvas = await renderBillCanvas();
    const imgData = canvas.toDataURL('image/png');

    const element = document.createElement('div');
    element.style.padding = "10px";
    element.style.textAlign = "center";
    element.innerHTML = `<img src="${imgData}" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">`;

    const safeCustName = customerInfo.name.replace(/\s+/g, '_') || 'Customer';
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `AmanSales_Bill_${safeCustName}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// ૪. પ્રિન્ટ બિલ (ફક્ત બિલ જ પ્રિન્ટરમાં આવશે)
function printBillDirect() {
    if (cartItems.length === 0) {
        alert('પ્રિન્ટ કરવા માટે પહેલા આઇટમ ઉમેરો!');
        return;
    }
    
    updateDateTime();
    
    const billArea = document.getElementById('printableBillArea');
    const deleteButtons = billArea.querySelectorAll('.no-capture');
    deleteButtons.forEach(btn => btn.style.display = 'none');

    // પ્રિન્ટ ડાયલોગ ખોલવો
    window.print();

    // પ્રિન્ટ વિન્ડો બંધ થયા પછી પાછાં બટનો દર્શાવવા
    setTimeout(() => {
        deleteButtons.forEach(btn => btn.style.display = '');
    }, 1000);
}

// ૫. ક્લિયર
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