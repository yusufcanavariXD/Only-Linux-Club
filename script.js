const BT = String.fromCharCode(96);

const DISTROS = {
    generic: {
        name: "Generic Linux",
        color: "#3fb950",
        ascii: "       .---.       \n      /     \\      \n      \\.@-@./      \n      /" + BT + "\\_/" + BT + "\\      \n     //  _  \\\\     \n    | \\     )|_    \n   /" + BT + "\\_" + BT + ">  <_/ \\   \n   \\__/'---'\\__/   "
    },
    mint: {
        name: "Linux Mint",
        color: "#87cf3e",
        ascii: " ___________       \n|_          \\      \n  | | _____ |      \n  | | | | | |      \n  | | | | | |      \n  | \\_____/ |      \n  \\_________/      "
    },
    arch: {
        name: "Arch Linux",
        color: "#1793d1",
        ascii: "        /\\         \n       /  \\        \n      /\\   \\       \n     /      \\      \n    /   ,,   \\     \n   /   |  |  -\\    \n  /_-''    ''-_\\   "
    },
    ubuntu: {
        name: "Ubuntu",
        color: "#e95420",
        ascii: "         _         \n     ---(_)        \n _/  ---  \\        \n(_) |   |          \n  \\  --- _/        \n     ---(_)        "
    },
    debian: {
        name: "Debian",
        color: "#d70a53",
        ascii: "     _,met$$$$$gg. \n  ,g$$$$$$$$$$$$$$P\n,g$$P\"     \"\"\"Y$$.\"\n$$P'              " + BT + "\n'$$       ,ggs.    \n " + BT + "d$'     ,$P\"'    \n  $$P      d$'     \n  $$:      $$.     \n   " + BT + "Yb.            "
    },
    fedora: {
        name: "Fedora",
        color: "#51a2da",
        ascii: "      ,'''''.      \n     |   ,.  |     \n     |  |  '_'     \n ,....|  |..       \n.'  ,_;  ,..;      \n|  |   |  |        \n|  ',_,'  |        \n '.     ,'         "
    },
    manjaro: {
        name: "Manjaro",
        color: "#35bf5c",
        ascii: "||||||||| ||||     \n||||||||| ||||     \n||||      ||||     \n|||| |||| ||||     \n|||| |||| ||||     \n|||| |||| ||||     \n|||| |||| ||||     "
    },
    opensuse: {
        name: "openSUSE",
        color: "#73ba25",
        ascii: "   .----------.    \n  /   ______   \\   \n |   /  __  \\   |  \n |  |  (o )  |  |  \n |   \\______/   |  \n  \\____________/   "
    },
    popos: {
        name: "Pop!_OS",
        color: "#48b9c7",
        ascii: " ______            \n \\   _ \\        __ \n  \\ \\ \\ \\      / / \n   \\ \\_\\ \\    / /  \n    \\  ___\\  /_/   \n     \\ \\    _      \n      \\_\\  (_)     "
    },
    kali: {
        name: "Kali Linux",
        color: "#367bf0",
        ascii: "  ,.....           \n   ----..          \n       " + BT + "-.         \n      .--'-.       \n    .'      " + BT + "-.    \n   /   /\\      \\   \n  '   '  '      " + BT + "  "
    },
    gentoo: {
        name: "Gentoo",
        color: "#9988cc",
        ascii: "  .-virgilio-.     \n /   .----.   \\    \n|   /  ()  \\   |   \n \\  '------'  /    \n  '-.______.-'     "
    },
    nixos: {
        name: "NixOS",
        color: "#7ebae4",
        ascii: "    \\\\  \\\\ //      \n   ==\\\\__\\\\/ //    \n     //   \\\\//     \n  ==//     //==    \n   //\\\\___//       \n  // /\\\\  \\\\==     \n    // \\\\  \\\\      "
    }
};

// Trusted domains allowed in global chat
const TRUSTED_DOMAINS = [
    "github.com",
    "github.io",
    "gitlab.com",
    "codeberg.org",
    "kernel.org",
    "archlinux.org",
    "linuxmint.com",
    "ubuntu.com",
    "debian.org",
    "fedoraproject.org",
    "opensuse.org",
    "gentoo.org",
    "nixos.org",
    "gnu.org",
    "fsf.org",
    "wikipedia.org",
    "stackoverflow.com",
    "stackexchange.com",
    "neocities.org"
];

// Blocked toxic/spam/scam terms
const BLOCKED_TERMS = [
    "freerobux",
    "free-robux",
    "free robux",
    "freerbou",
    "freevbucks",
    "free-vbucks",
    "free nitro",
    "freenitro",
    "discord-nitro",
    "steamgift",
    "crypto-airdrop",
    "claim-reward",
    "kys",
    "kill yourself",
    "nigger",
    "nigga",
    "faggot",
    "retard",
    "rape",
    "porn",
    "xxx",
    "grabify",
    "iplogger"
];

let currentDistroKey = "generic";
let currentUsername = "penguin_0000";
const commandHistory = new Array();
let historyIndex = -1;
let sendGlobalMessageFn = null;

function sanitizeHandle(raw) {
    const cleaned = raw.trim().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 20);
    return cleaned.length >= 2 ? cleaned : null;
}

function validateChatMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) {
        return { ok: false, reason: "Message cannot be empty." };
    }
    if (trimmed.length > 240) {
        return { ok: false, reason: "Message too long (max 240 characters)." };
    }

    // Normalize l33tspeak & strip spaces/slashes to catch disguised bad words or links
    const normalized = trimmed
        .toLowerCase()
        .replace(/0/g, "o")
        .replace(/1/g, "i")
        .replace(/3/g, "e")
        .replace(/4/g, "a")
        .replace(/5/g, "s")
        .replace(/7/g, "t")
        .replace(/@/g, "a")
        .replace(/\$/g, "s");

    const collapsed = normalized.replace(/[^a-z0-9]/g, "");

    for (let i = 0; i < BLOCKED_TERMS.length; i++) {
        const term = BLOCKED_TERMS.at(i);
        const collapsedTerm = term.replace(/[^a-z0-9]/g, "");
        if (normalized.includes(term) || collapsed.includes(collapsedTerm)) {
            return { ok: false, reason: "Blocked: message contains prohibited language or scam keywords." };
        }
    }

    // Catch malformed protocols like "https:/evil.co/////" or "http:evil.com"
    if (/https?:\/{0,1}[^/\s]/i.test(trimmed) && !/https?:\/\/[^/\s]/i.test(trimmed)) {
        return { ok: false, reason: "Blocked: malformed or suspicious URL detected." };
    }

    // Catch excessive trailing/repeated slashes in URLs like "https://site.co///////"
    if (/https?:\/\/\S*\/{4,}/i.test(trimmed)) {
        return { ok: false, reason: "Blocked: suspicious URL with excessive slashes." };
    }

    // Extract any URL or domain-like string
    const urlPattern = /(?:https?:\/\/|www\.)[^\s]+|\b[a-z0-9-]+\.(?:com|io|org|net|co|xyz|tk|ml|ga|cf|gq|ru|cn|info|biz|top|click|link|site|online|club|vip|gg|me|tv|cc|pw|ws|to|in|uk|de|fr|br|app|dev|sh)(?:\/[^\s]*)?\b/gi;
    const matches = trimmed.match(urlPattern);

    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            const rawUrl = matches.at(i).toLowerCase();

            // Block IP-address links
            if (/^https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(rawUrl)) {
                return { ok: false, reason: "Blocked: direct IP links are not allowed." };
            }

            // Extract hostname cleanly
            let host = rawUrl.replace(/^https?:\/+/, "").replace(/^www\./, "");
            const slashIdx = host.indexOf("/");
            if (slashIdx !== -1) host = host.slice(0, slashIdx);
            const queryIdx = host.indexOf("?");
            if (queryIdx !== -1) host = host.slice(0, queryIdx);
            const portIdx = host.indexOf(":");
            if (portIdx !== -1) host = host.slice(0, portIdx);

            // Check against trusted allowlist (exact match or valid subdomain like user.github.io)
            let isTrusted = false;
            for (let j = 0; j < TRUSTED_DOMAINS.length; j++) {
                const allowed = TRUSTED_DOMAINS.at(j);
                if (host === allowed || host.endsWith("." + allowed)) {
                    isTrusted = true;
                    break;
                }
            }

            if (!isTrusted) {
                return {
                    ok: false,
                    reason: "Blocked untrusted link ('" + host + "'). Only safe open-source/Linux domains (like github.com or github.io) are allowed."
                };
            }
        }
    }

    return { ok: true, cleanText: trimmed };
}

function initUsername() {
    const saved = localStorage.getItem("linuxClubUsername");
    const validSaved = saved ? sanitizeHandle(saved) : null;
    if (validSaved) {
        currentUsername = validSaved;
    } else {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        currentUsername = "penguin_" + randNum;
        localStorage.setItem("linuxClubUsername", currentUsername);
    }
    syncUsernameUI();
}

function setUsername(newName) {
    const clean = sanitizeHandle(newName);
    if (!clean) return false;

    const modCheck = validateChatMessage(clean);
    if (!modCheck.ok) return false;

    currentUsername = clean;
    localStorage.setItem("linuxClubUsername", currentUsername);
    syncUsernameUI();
    return true;
}

function syncUsernameUI() {
    const displayEl = document.getElementById("display-username");
    const barUserEl = document.getElementById("bar-user");
    const nfUserEl = document.getElementById("nf-user");
    if (displayEl) displayEl.textContent = currentUsername;
    if (barUserEl) barUserEl.textContent = currentUsername;
    if (nfUserEl) nfUserEl.textContent = currentUsername;

    document.querySelectorAll(".dyn-user").forEach(el => {
        el.textContent = currentUsername;
    });
}

function detectBrowserName(ua) {
    if (/Firefox/i.test(ua)) return "Firefox / LibreWolf";
    if (/Brave/i.test(ua)) return "Brave";
    if (/Edg/i.test(ua)) return "Edge";
    if (/OPR|Opera/i.test(ua)) return "Opera";
    if (/Chrome|Chromium/i.test(ua)) return "Chromium / Chrome";
    return "Linux Web Browser";
}

function detectDistroFromUA(ua) {
    if (/Mint/i.test(ua)) return "mint";
    if (/Ubuntu/i.test(ua)) return "ubuntu";
    if (/Fedora/i.test(ua)) return "fedora";
    if (/Debian/i.test(ua)) return "debian";
    if (/Arch/i.test(ua)) return "arch";
    if (/Manjaro/i.test(ua)) return "manjaro";
    if (/SUSE/i.test(ua)) return "opensuse";
    if (/Pop!_OS|PopOS/i.test(ua)) return "popos";
    if (/Kali/i.test(ua)) return "kali";
    if (/Gentoo/i.test(ua)) return "gentoo";
    if (/NixOS/i.test(ua)) return "nixos";
    return null;
}

function applyDistroTheme(key, save) {
    currentDistroKey = DISTROS.hasOwnProperty(key) ? key : "generic";
    const distro = Reflect.get(DISTROS, currentDistroKey);

    document.documentElement.style.setProperty("--accent", distro.color);
    document.getElementById("ascii-art").textContent = distro.ascii;
    document.getElementById("nf-os").textContent = distro.name + " (x86_64)";

    document.querySelectorAll(".distro-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.distro === currentDistroKey);
    });

    if (save) {
        localStorage.setItem("linuxClubDistro", currentDistroKey);
    }
}

function setupGlobalChat() {
    const messagesEl = document.getElementById("chat-messages");
    const formEl = document.getElementById("chat-form");
    const inputEl = document.getElementById("chat-input");
    const statusEl = document.getElementById("chat-status");

    const seenIds = new Set();

    function showChatWarning(reason) {
        const warn = document.createElement("div");
        warn.className = "chat-warn";
        warn.textContent = reason;
        messagesEl.appendChild(warn);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function renderMessageText(container, text) {
        const linkRegex = /(https?:\/\/[^\s]+)/g;
        const segments = text.split(linkRegex);
        for (let i = 0; i < segments.length; i++) {
            const part = segments.at(i);
            if (/^https?:\/\//.test(part)) {
                const a = document.createElement("a");
                a.href = part;
                a.textContent = part;
                a.className = "chat-link";
                a.target = "_blank";
                a.rel = "noopener noreferrer nofollow";
                container.appendChild(a);
            } else {
                container.appendChild(document.createTextNode(part));
            }
        }
    }

    function appendChatMessage(id, data) {
        if (!data || !data.text || !data.user || seenIds.has(id)) return;

        // Re-validate incoming peer messages too so malicious peers cannot bypass client filter
        const check = validateChatMessage(String(data.text));
        if (!check.ok) return;

        const cleanUser = sanitizeHandle(String(data.user));
        if (!cleanUser) return;

        seenIds.add(id);

        const row = document.createElement("div");
        row.className = "chat-msg";

        const dateObj = data.time ? new Date(data.time) : new Date();
        const timeStr = dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const timeSpan = document.createElement("span");
        timeSpan.className = "chat-time";
        timeSpan.textContent = timeStr;

        const distroInfo = DISTROS.hasOwnProperty(data.distro) ? Reflect.get(DISTROS, data.distro) : DISTROS.generic;
        const distroSpan = document.createElement("span");
        distroSpan.className = "chat-distro-tag";
        distroSpan.style.color = distroInfo.color;
        distroSpan.style.borderColor = distroInfo.color;
        distroSpan.textContent = distroInfo.name;

        const userSpan = document.createElement("span");
        userSpan.className = "chat-user";
        userSpan.style.color = distroInfo.color;
        userSpan.textContent = cleanUser + ":";

        const textSpan = document.createElement("span");
        textSpan.className = "chat-text";
        renderMessageText(textSpan, check.cleanText);

        row.appendChild(timeSpan);
        row.appendChild(distroSpan);
        row.appendChild(userSpan);
        row.appendChild(textSpan);

        messagesEl.appendChild(row);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    let chatRoom = null;
    if (typeof Gun === "function") {
        try {
            const gun = Gun({
                peers: [
                    "https://gun-manhattan.herokuapp.com/gun",
                    "https://peer.wallie.io/gun"
                ]
            });
            chatRoom = gun.get("linux-club-global-room-v2");
            statusEl.textContent = "P2P Relay Active";

            chatRoom.map().on((data, id) => {
                if (data && data.time && Date.now() - data.time < 86400000) {
                    appendChatMessage(id, data);
                }
            });
        } catch (err) {
            statusEl.textContent = "Local Mode";
        }
    } else {
        statusEl.textContent = "Local Mode";
    }

    function sendChat(rawText) {
        const check = validateChatMessage(rawText);
        if (!check.ok) {
            showChatWarning(check.reason);
            return false;
        }

        const msgId = Date.now() + "_" + Math.random().toString(36).slice(2, 8);
        const payload = {
            user: currentUsername,
            distro: currentDistroKey,
            text: check.cleanText,
            time: Date.now()
        };

        appendChatMessage(msgId, payload);
        if (chatRoom) {
            chatRoom.get(msgId).put(payload);
        }
        return true;
    }

    sendGlobalMessageFn = sendChat;

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        if (sendChat(inputEl.value)) {
            inputEl.value = "";
        }
    });
}

function setupTerminal(userAgent) {
    const terminalWindow = document.getElementById("terminal-window");
    const outputEl = document.getElementById("terminal-output");
    const inputEl = document.getElementById("terminal-input");

    terminalWindow.addEventListener("click", () => {
        if (window.getSelection().toString() === "") {
            inputEl.focus();
        }
    });

    function printLine(text, className) {
        const line = document.createElement("div");
        if (className) line.className = className;
        line.textContent = text;
        outputEl.appendChild(line);
        outputEl.scrollTop = outputEl.scrollHeight;
    }

    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function printPromptEcho(cmd) {
        const line = document.createElement("div");
        line.innerHTML = '<span class="prompt-user">' + escapeHTML(currentUsername) + '@linux-club</span>:<span class="prompt-path">~</span>$ ' + escapeHTML(cmd);
        outputEl.appendChild(line);
    }

    function runCommand(rawInput) {
        const trimmed = rawInput.trim();
        printPromptEcho(rawInput);

        if (!trimmed) return;

        commandHistory.push(trimmed);
        historyIndex = commandHistory.length;

        const parts = trimmed.split(/\s+/);
        const cmd = parts.at(0).toLowerCase();
        const args = parts.slice(1);
        const firstArg = args.at(0);

        switch (cmd) {
            case "help":
                printLine("Available commands:");
                printLine("  help              - Show this command list");
                printLine("  nick <username>   - Change & save your club username");
                printLine("  say <message>     - Post a message to #linux-club chat");
                printLine("  ls                - List files in club directory");
                printLine("  cat <file>        - Read a file (try: cat manifesto.txt)");
                printLine("  distro <name>     - Switch & save distro theme (e.g., distro mint)");
                printLine("  whoami            - Display current club member");
                printLine("  uname -a          - Print kernel & User-Agent info");
                printLine("  neofetch          - Refresh system info");
                printLine("  date              - Show current system date/time");
                printLine("  echo <text>       - Print text to terminal");
                printLine("  sudo <cmd>        - Run a command as root");
                printLine("  clear             - Clear terminal output");
                break;

            case "nick":
                if (!firstArg) {
                    printLine("Current username: " + currentUsername);
                    printLine("Usage: nick <new_username> (letters, numbers, _ or -)");
                } else if (setUsername(firstArg)) {
                    printLine("Username updated to: " + currentUsername);
                } else {
                    printLine("Invalid or blocked username. Use 2-20 clean alphanumeric characters.", "cmd-error");
                }
                break;

            case "say":
                if (args.length === 0) {
                    printLine("Usage: say <message>", "cmd-error");
                } else if (sendGlobalMessageFn) {
                    const msgText = args.join(" ");
                    if (sendGlobalMessageFn(msgText)) {
                        printLine("Sent to #linux-club: " + msgText);
                    } else {
                        printLine("Message blocked by chat safety filter (see chat warning).", "cmd-error");
                    }
                }
                break;

            case "ls":
                printLine("manifesto.txt   club_rules.md   distros.list   secret_penguin.sh");
                break;

            case "cat":
                if (!firstArg) {
                    printLine("cat: missing file operand (try 'ls' first)", "cmd-error");
                } else if (firstArg === "manifesto.txt") {
                    printLine("1. Free as in freedom, not just free beer.");
                    printLine("2. No forced restarts while you're in the middle of work.");
                    printLine("3. Windows users get redirected to ubuntu.com.");
                } else if (firstArg === "club_rules.md") {
                    printLine("# Club Rules\n- Respect all distros (yes, even Arch users who tell everyone).\n- No toxic messages or shady links in #linux-club (GitHub/Linux links welcome).");
                } else if (firstArg === "distros.list") {
                    printLine(Object.keys(DISTROS).join(", "));
                } else if (firstArg === "secret_penguin.sh") {
                    printLine("#!/bin/bash\necho 'Greetings from Tux! Keep hacking and stay open-source.'");
                } else {
                    printLine("cat: " + firstArg + ": No such file or directory", "cmd-error");
                }
                break;

            case "distro":
                if (!firstArg) {
                    printLine("Current distro: " + Reflect.get(DISTROS, currentDistroKey).name);
                    printLine("Usage: distro <name> (" + Object.keys(DISTROS).join(", ") + ")");
                } else {
                    const target = firstArg.toLowerCase();
                    if (DISTROS.hasOwnProperty(target)) {
                        applyDistroTheme(target, true);
                        const chosen = Reflect.get(DISTROS, target);
                        document.getElementById("detector-status").textContent = "Saved Distro Profile: " + chosen.name;
                        printLine("Switched & saved theme to " + chosen.name + "!");
                    } else {
                        printLine("Unknown distro '" + target + "'. Available: " + Object.keys(DISTROS).join(", "), "cmd-error");
                    }
                }
                break;

            case "whoami":
                printLine(currentUsername + " (verified penguin)");
                break;

            case "uname":
                if (firstArg === "-a") {
                    printLine("Linux linux-club 6.8.0-generic #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux (" + userAgent + ")");
                } else {
                    printLine("Linux");
                }
                break;

            case "neofetch":
                applyDistroTheme(currentDistroKey, false);
                printLine("Neofetch refreshed for " + Reflect.get(DISTROS, currentDistroKey).name + ".");
                break;

            case "date":
                printLine(new Date().toString());
                break;

            case "echo":
                printLine(args.join(" "));
                break;

            case "sudo":
                if (trimmed.includes("rm -rf /")) {
                    printLine("Nice try! System protected by penguin armor.", "cmd-error");
                } else {
                    printLine("sudo password for " + currentUsername + ": Sorry, no root access on static HTML!", "cmd-error");
                }
                break;

            case "clear":
                outputEl.innerHTML = "";
                break;

            default:
                printLine("bash: " + cmd + ": command not found. Type 'help' for available commands.", "cmd-error");
        }
    }

    inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const val = inputEl.value;
            inputEl.value = "";
            runCommand(val);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                inputEl.value = commandHistory.at(historyIndex);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                inputEl.value = commandHistory.at(historyIndex);
            } else {
                historyIndex = commandHistory.length;
                inputEl.value = "";
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const userAgent = navigator.userAgent;
    const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";

    const statusBox = document.getElementById("status-box");
    const linuxBox = document.getElementById("linux-welcome");
    const deniedBox = document.getElementById("access-denied");

    const isAndroid = /Android/i.test(userAgent);
    const isLinux = (/Linux|X11/i.test(userAgent) || /Linux/i.test(platform)) && !isAndroid;

    statusBox.classList.add("hidden");

    if (isLinux) {
        linuxBox.classList.remove("hidden");

        initUsername();

        const userForm = document.getElementById("username-form");
        const userInput = document.getElementById("username-input");
        userForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (setUsername(userInput.value)) {
                userInput.value = "";
            } else {
                alert("Please enter a clean 2-20 character username (letters, numbers, _ or -).");
            }
        });

        document.getElementById("nf-res").textContent = window.screen.width + "x" + window.screen.height;
        document.getElementById("nf-browser").textContent = detectBrowserName(userAgent);
        document.getElementById("nf-cores").textContent = navigator.hardwareConcurrency || "Unknown";

        const btnContainer = document.getElementById("distro-buttons");
        Object.keys(DISTROS).forEach((key) => {
            const data = Reflect.get(DISTROS, key);
            const btn = document.createElement("button");
            btn.className = "distro-btn";
            btn.dataset.distro = key;
            btn.textContent = data.name;
            btn.addEventListener("click", () => {
                applyDistroTheme(key, true);
                document.getElementById("detector-status").textContent = "Saved Distro Profile: " + data.name;
            });
            btnContainer.appendChild(btn);
        });

        const savedKey = localStorage.getItem("linuxClubDistro");
        const detectedKey = detectDistroFromUA(userAgent);
        const statusText = document.getElementById("detector-status");

        if (savedKey && DISTROS.hasOwnProperty(savedKey)) {
            applyDistroTheme(savedKey, false);
            statusText.textContent = "Welcome back! Loaded saved profile: " + Reflect.get(DISTROS, savedKey).name;
        } else if (detectedKey) {
            applyDistroTheme(detectedKey, false);
            statusText.textContent = "Detected Distro in User-Agent: " + Reflect.get(DISTROS, detectedKey).name + "!";
        } else {
            applyDistroTheme("generic", false);
            statusText.textContent = "Kernel: Linux Verified (Exact distro hidden by browser anti-fingerprinting)";
        }

        setupTerminal(userAgent);
        setupGlobalChat();

    } else {
        deniedBox.classList.remove("hidden");
        const title = document.getElementById("denied-title");
        const message = document.getElementById("denied-message");
        document.getElementById("other-ua").textContent = userAgent;

        if (/Windows NT/i.test(userAgent)) {
            title.textContent = "Windows Detected!";
            message.textContent = "Wrong OS! Sending you to get a real operating system...";

            const redirectBox = document.getElementById("redirect-box");
            const countdownEl = document.getElementById("countdown");
            const progressBar = document.getElementById("progress-bar");
            redirectBox.classList.remove("hidden");

            let secondsLeft = 5;
            const timer = setInterval(() => {
                secondsLeft--;
                countdownEl.textContent = secondsLeft;
                progressBar.style.width = ((secondsLeft / 5) * 100) + "%";

                if (secondsLeft <= 0) {
                    clearInterval(timer);
                    window.location.href = "https://ubuntu.com/download";
                }
            }, 1000);

        } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
            title.textContent = "macOS Detected!";
            message.textContent = "Nice aluminum laptop, wrong kernel. Penguins only.";
        } else if (isAndroid || /iPhone|iPad/i.test(userAgent)) {
            title.textContent = "Mobile Device Detected!";
            message.textContent = "Come back from a real Linux desktop.";
        }
    }
});
