// ===== Sidebar Menu Toggle =====
// Usage:
// sidebarMenuToggle("menu-btn", "sidebar");

function sidebarMenuToggle(menuBtnId, sidebarId) {
    const menuBtn = document.getElementById(menuBtnId);
    const sidebar = document.getElementById(sidebarId);

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("show");
        sidebar.classList.toggle("hidden");
    });
}


/*
HTML Example:
<button id="menu-btn">☰ Menu</button>
<nav id="sidebar" class="hidden">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>

<script src="features/sidebarMenuToggle.js"></script>
<script>
    sidebarMenuToggle("menu-btn", "sidebar");
</script>
*/
/*
CSS Example:
.hidden { transform: translateX(-100%); transition: 0.3s; }
.show { transform: translateX(0); }

#sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background: #333;
    color: white;
    padding: 20px;
}
*/


