/* ========================================
   CBSE CLASS 11 COMMERCE NOTES
   JavaScript File - 5 Subjects
   ======================================== */

// ========================================
// DATA: CBSE CLASS 11 SYLLABUS WITH PDF LINKS
// ========================================
// Update the PDF paths in script.js like this:

const notesData = [
    {
        id: 1,
        subject: "Accountancy",
        icon: "📊",
        chapters: [
            { name: "Chapter 1: Introduction to Accounting", pdf: "pdf/accountancy/accountancy-ch1.pdf" },
            { name: "Chapter 2: Accounting Equations", pdf: "pdf/accountancy/accountancy-ch2.pdf" },
            { name: "Chapter 3: Journal Entries", pdf: "pdf/accountancy/accountancy-ch3.pdf" },
            { name: "Chapter 4: Ledger", pdf: "pdf/accountancy/accountancy-ch4.pdf" },
            { name: "Chapter 5: Bank Reconciliation", pdf: "pdf/accountancy/accountancy-ch5.pdf" },
            { name: "Chapter 6: Depreciation", pdf: "pdf/accountancy/accountancy-ch6.pdf" },
            { name: "Chapter 7: Trial Balance", pdf: "pdf/accountancy/accountancy-ch7.pdf" },
            { name: "Chapter 8: Final Accounts", pdf: "pdf/accountancy/accountancy-ch8.pdf" }
        ]
    },
    {
        id: 2,
        subject: "Business Studies",
        icon: "💼",
        chapters: [
            { name: "Chapter 1: Business, Trade and Commerce", pdf: "pdf/business-studies/bs-ch1.pdf" },
            { name: "Chapter 2: Business Environment", pdf: "pdf/business-studies/bs-ch2.pdf" },
            { name: "Chapter 3: Principles of Management", pdf: "pdf/business-studies/bs-ch3.pdf" },
            { name: "Chapter 4: Financial Management", pdf: "pdf/business-studies/bs-ch4.pdf" },
            { name: "Chapter 5: Marketing Management", pdf: "pdf/business-studies/bs-ch5.pdf" },
            { name: "Chapter 6: Planning", pdf: "pdf/business-studies/bs-ch6.pdf" },
            { name: "Chapter 7: Organising", pdf: "pdf/business-studies/bs-ch7.pdf" }
        ]
    },
    {
        id: 3,
        subject: "Economics",
        icon: "📈",
        chapters: [
            { name: "Chapter 1: Intro to Microeconomics", pdf: "pdf/economics/eco-ch1.pdf" },
            { name: "Chapter 2: National Income", pdf: "pdf/economics/eco-ch2.pdf" },
            { name: "Chapter 3: Money and Banking", pdf: "pdf/economics/eco-ch3.pdf" },
            { name: "Chapter 4: Indian Economic Development", pdf: "pdf/economics/eco-ch4.pdf" },
            { name: "Chapter 5: Demand and Supply", pdf: "pdf/economics/eco-ch5.pdf" },
            { name: "Chapter 6: Consumer Equilibrium", pdf: "pdf/economics/eco-ch6.pdf" }
        ]
    },
    {
        id: 4,
        subject: "English",
        icon: "📚",
        chapters: [
            { name: "Chapter 1: The Portrait of a Lady", pdf: "pdf/english/hornbil/eng-ch1.pdf" },
            { name: "Chapter 2: Deep Water", pdf: "pdf/english/eng-ch2.pdf" },
            { name: "Chapter 3: The Rattrap", pdf: "pdf/english/eng-ch3.pdf" },
            { name: "Chapter 4: Indigo", pdf: "pdf/english/eng-ch4.pdf" },
            { name: "Chapter 5: The Tiger King", pdf: "pdf/english/eng-ch5.pdf" },
            { name: "Chapter 6: The Third Level", pdf: "pdf/english/eng-ch6.pdf" },
            { name: "Chapter 7: The Enemy", pdf: "pdf/english/eng-ch7.pdf" }
        ]
    },
    {
        id: 5,
        subject: "Optional Subject (IP/CS/Applied Maths)",
        icon: "💻",
        chapters: [
            { name: "Chapter 1: Introduction to Computer", pdf: "pdf/optional/opt-ch1.pdf" },
            { name: "Chapter 2: Computer Networks", pdf: "pdf/optional/opt-ch2.pdf" },
            { name: "Chapter 3: Data Handling", pdf: "pdf/optional/opt-ch3.pdf" },
            { name: "Chapter 4: Programming in Python", pdf: "pdf/optional/opt-ch4.pdf" },
            { name: "Chapter 5: Database Management", pdf: "pdf/optional/opt-ch5.pdf" },
            { name: "Chapter 6: Applied Mathematics", pdf: "pdf/optional/opt-ch6.pdf" }
        ]
    }
];

// ========================================
// DOM ELEMENTS
// ========================================
const grid = document.getElementById("subjectGrid");
const modal = document.getElementById("chapterModal");
const modalTitle = document.getElementById("modalTitle");
const chapterBody = document.getElementById("chapterBody");
const searchInput = document.getElementById("searchInput");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// ========================================
// RENDER CARDS FUNCTION
// ========================================
function renderCards(data) {
    grid.innerHTML = "";
    
    if (data.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p style="font-size: 1.2rem;">📭 No notes found matching your search.</p>
            </div>
        `;
        return;
    }
    
    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openChapterModal(item);
        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${item.subject}</h3>
            <p>${item.chapters.length} Chapters Available</p>
            <span class="badge">NCERT Aligned</span>
        `;
        grid.appendChild(card);
    });
}

// ========================================
// OPEN CHAPTER MODAL FUNCTION
// ========================================
function openChapterModal(item) {
    modalTitle.innerText = item.subject;
    chapterBody.innerHTML = "";
    
    // Create chapter list
    const ul = document.createElement("ul");
    ul.className = "chapter-list";
    
    item.chapters.forEach(chapter => {
        const li = document.createElement("li");
        li.className = "chapter-item";
        li.innerHTML = `
            <span>📖 ${chapter.name}</span>
            <span class="pdf-icon">📄</span>
        `;
        li.onclick = () => openPdf(chapter.pdf);
        ul.appendChild(li);
    });
    
    chapterBody.appendChild(ul);
    
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// ========================================
// CLOSE CHAPTER MODAL FUNCTION
// ========================================
function closeChapterModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// ========================================
// OPEN PDF FUNCTION
// ========================================
function openPdf(pdfLink) {
    if (pdfLink && pdfLink !== "") {
        window.open(pdfLink, "_blank");
        showToast(`Opening ${pdfLink}...`);
    } else {
        showToast("⚠️ PDF file not found! Please add the PDF file.");
    }
    closeChapterModal();
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================
function filterNotes() {
    const input = searchInput.value.toLowerCase();
    
    const filteredData = notesData.filter(item => {
        if (item.subject.toLowerCase().includes(input)) return true;
        const chapterMatch = item.chapters.some(chapter => 
            chapter.name.toLowerCase().includes(input)
        );
        return chapterMatch;
    });
    
    renderCards(filteredData);
}

// ========================================
// TOAST NOTIFICATION FUNCTION
// ========================================
function showToast(message) {
    toastMessage.innerText = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// ========================================
// DARK MODE TOGGLE FUNCTION
// ========================================
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    body.setAttribute("data-theme", newTheme);
    
    const btn = document.querySelector('.icon-btn[title="Toggle Dark Mode"]');
    if (btn) {
        btn.querySelector(".icon").innerText = newTheme === "dark" ? "☀️" : "🌙";
    }
    
    localStorage.setItem("theme", newTheme);
    showToast(`Switched to ${newTheme} mode`);
}

// ========================================
// CLOSE MODAL IF CLICKING OUTSIDE
// ========================================
window.onclick = function(event) {
    if (event.target == modal) {
        closeChapterModal();
    }
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener("keydown", function(event) {
    // Close modal with ESC key
    if (event.key === "Escape") {
        closeChapterModal();
    }
    
    // Focus search with '/' key
    if (event.key === "/" && document.activeElement !== searchInput) {
        event.preventDefault();
        searchInput.focus();
    }
});

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener("DOMContentLoaded", function() {
    // Render initial cards
    renderCards(notesData);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        const btn = document.querySelector('.icon-btn[title="Toggle Dark Mode"]');
        if (btn) {
            btn.querySelector(".icon").innerText = "☀️";
        }
    }
    
    // Check system preference for dark mode
    if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute("data-theme", "dark");
        const btn = document.querySelector('.icon-btn[title="Toggle Dark Mode"]');
        if (btn) {
            btn.querySelector(".icon").innerText = "☀️";
        }
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedFilter = debounce(filterNotes, 300);
searchInput.addEventListener("keyup", debouncedFilter);

// ========================================
// END OF SCRIPT
// ========================================
