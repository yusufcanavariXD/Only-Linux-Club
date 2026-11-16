const CREATOR_SECRET_HASH = "e5a1f9c8c2a6f7f1a9c18a35a53f64f78d3f22b4e527c85c5132989e8c543997";

const DISTROS = {
    generic: {
        name: "Generic Linux",
        color: "#3fb950",
        ascii: [
            "       .---.       ",
            "      /     \\      ",
            "      \\.@-@./      ",
            "      /`\\_/`\\      ",
            "     //  _  \\\\     ",
            "    | \\     )|_    ",
            "   /`\\_`>  <_/ \\   ",
            "   \\__/'---'\\__/   "
        ].join("\n")
    },
    mint: {
        name: "Linux Mint",
        color: "#87cf3e",
        ascii: [
            " ___________       ",
            "|_          \\      ",
            "  | | _____ |      ",
            "  | | | | | |      ",
            "  | | | | | |      ",
            "  | \\_____/ |      ",
            "  \\_________/      "
        ].join("\n")
    },
    arch: {
        name: "Arch Linux",
        color: "#1793d1",
        ascii: [
            "        /\\         ",
            "       /  \\        ",
            "      /\\   \\       ",
            "     /      \\      ",
            "    /   ,,   \\     ",
            "   /   |  |  -\\    ",
            "  /_-''    ''-_\\   "
        ].join("\n")
    },
    ubuntu: {
        name: "Ubuntu",
        color: "#e95420",
        ascii: [
            "         _         ",
            "     ---(_)        ",
            " _/  ---  \\        ",
            "(_) |   |          ",
            "  \\  --- _/        ",
            "     ---(_)        "
        ].join("\n")
    },
    debian: {
        name: "Debian",
        color: "#d70a53",
        ascii: [
            "     _,met$$$$$gg. ",
            "  ,g$$$$$$$$$$$$$$P",
            ",g$$P\"     \"\"\"Y$$.\"",
            "$$P'              `",
            "'$$       ,ggs.    ",
            " `d$'     ,$P\"'    ",
            "  $$P      d$'     ",
            "  $$:      $$.     ",
            "   `Yb.            "
        ].join("\n")
    },
    fedora: {
        name: "Fedora",
        color: "#51a2da",
        ascii: [
            "      ,'''''.      ",
            "     |   ,.  |     ",
            "     |  |  '_'     ",
            " ,....|  |..       ",
            ".'  ,_;  ,..;      ",
            "|  |   |  |        ",
            "|  ',_,'  |        ",
            " '.     ,'         "
        ].join("\n")
    },
    manjaro: {
        name: "Manjaro",
        color: "#35bf5c",
        ascii: [
            "||||||||| ||||     ",
            "||||||||| ||||     ",
            "||||      ||||     ",
            "|||| |||| ||||     ",
            "|||| |||| ||||     ",
            "|||| |||| ||||     ",
            "|||| |||| ||||     "
        ].join("\n")
    },
    opensuse: {
        name: "openSUSE",
        color: "#73ba25",
        ascii: [
            "   .----------.    ",
            "  /   ______   \\   ",
            " |   /  __  \\   |  ",
            " |  |  (o )  |  |  ",
            " |   \\______/   |  ",
            "  \\____________/   "
        ].join("\n")
    },
    popos: {
        name: "Pop!_OS",
        color: "#48b9c7",
        ascii: [
            " ______            ",
            " \\   _ \\        __ ",
            "  \\ \\ \\ \\      / / ",
            "   \\ \\_\\ \\    / /  ",
            "    \\  ___\\  /_/   ",
            "     \\ \\    _      ",
            "      \\_\\  (_)     "
        ].join("\n")
    },
    kali: {
        name: "Kali Linux",
        color: "#367bf0",
        ascii: [
            "  ,.....           ",
            "   ----..          ",
            "       `-.         ",
            "      .--'-.       ",
            "    .'      `-.    ",
            "   /   /\\      \\   ",
            "  '   '  '      `  "
        ].join("\n")
    },
    gentoo: {
        name: "Gentoo",
        color: "#9988cc",
        ascii: [
            "  .-virgilio-.     ",
            " /   .----.   \\    ",
            "|   /  ()  \\   |   ",
            " \\  '------'  /    ",
            "  '-.______.-'     "
        ].join("\n")
    },
    nixos: {
        name: "NixOS",
        color: "#7ebae4",
        ascii: [
            "    \\\\  \\\\ //      ",
            "   ==\\\\__\\\\/ //    ",
            "     //   \\\\//     ",
            "  ==//     //==    ",
            "   //\\\\___//       ",
            "  // /\\\\  \\\\==     ",
            "    // \\\\  \\\\      "
        ].join("\n")
    }
};

const SAFE_DOMAINS = [
    "github.com", "github.io", "gitlab.com", "kernel.org",
    "linuxmint.com", "ubuntu.com", "debian.org", "archlinux.org",
    "fedoraproject.org", "opensuse.org", "gnu.org", "nixos.org"
];

const BAD_WORDS = [
    "fuck", "shit", "bitch", "asshole", "bastard", "dick", "pussy",
    "nigger", "nigga", "faggot", "retard", "slut", "whore", "cunt",
    "free robux", "freerobux", "free nitro", "freenitro", "claim prize"
];

const TUX_TIPS = [
    "Tip: Use 'Ctrl + R' in bash to reverse-search your command history!",
    "Tip: 'tldr <command>' gives quick practical examples instead of huge man pages.",
    "Tip: Never run 'curl ... | sudo bash' without inspecting the script first.",
    "Tip: On Linux Mint, Timeshift snapshots can save your system in seconds.",
    "Fun fact: Tux the penguin was created by Larry Ewing in 1996 using GIMP."
];

const TUX_JOKES = [
    "How do you know someone uses Arch Linux? Don't worry, they'll tell you.",
    "Why do Linux users never get locked out? Because they always have root access!",
    "Windows: 'Please wait while we configure updates 99%...' Linux: 'sudo apt update && sudo apt upgrade - done in 4 seconds.'"
];

const BROKER_URL = "wss://broker.hivemq.com:8884/mqtt";
const TOPIC_CHAT = "linux-club/global-chat/v102";
const TOPIC_PRESENCE = "linux-club/presence/v102";

let currentDistroKey = "generic";
let currentUsername = "";
let isCreator = false;
let soundEnabled = true;
let unreadCount = 0;
let mqttClient = null;
const clientId = "penguin_" + Math.random().toString(36).substring(2, 10);
const activePeers = new Map();
const seenMsgIds = new Set();
const commandHistory = [];
let historyIndex = -1;
let audioCtx = null;

async function sha256Hex(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function playTone(freq, duration, delay = 0, type = "sine") {
    if (!soundEnabled) return;
    try {
        if (!audioCtx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            audioCtx = new Ctx();
        }
        if (audioCtx.state === "suspended") audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + delay);
        osc.stop(audioCtx.currentTime + delay + duration);
    } catch (e) {}
}

function playJoinSound() {
    playTone(523.25, 0.14, 0, "triangle");
    playTone(659.25, 0.22, 0.12, "triangle");
}

function playMessageSound() {
    playTone(784.0, 0.12, 0, "sine");
}

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function validateMessage(rawText) {
    const text = rawText.trim();
    if (!text) return { ok: false, reason: "Message cannot be empty." };
    if (text.length > 240) return { ok: false, reason: "Message too long (max 240 chars)." };

    const normalized = text.toLowerCase()
        .replace(/0/g, "o").replace(/1/g, "i").replace(/3/g, "e")
        .replace(/4/g, "a").replace(/5/g, "s").replace(/7/g, "t")
        .replace(/[@$]/g, "a");

    for (const word of BAD_WORDS) {
        if (normalized.includes(word)) {
            return { ok: false, reason: "Blocked: Keep #linux-club clean and free of spam/profanity." };
        }
    }

    if (/https?:\/[^\/]/i.test(text) || /\/{3,}/.test(text)) {
        return { ok: false, reason: "Blocked: Malformed or suspicious URL detected." };
    }

    const urlPattern = /(?:https?:\/\/|www\.)[^\s]+|\b[a-z0-9-]+\.(?:com|net|org|io|co|xyz|ru|tk|ml|ga|cf|gq|gg|me|info|biz|top|site|online|club|vip|link|click)\b[^\s]*/gi;
    const matches = text.match(urlPattern);
    if (matches) {
        for (const rawUrl of matches) {
            let cleaned = rawUrl.replace(/[.,!?;:)'"]+$/, "");
            if (!/^https?:\/\//i.test(cleaned)) cleaned = "https://" + cleaned;
            try {
                const parsed = new URL(cleaned);
                const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
                const isAllowed = SAFE_DOMAINS.some(d => host === d || host.endsWith("." + d));
                if (!isAllowed) {
                    return { ok: false, reason: "Blocked link (" + host + "): Only trusted open-source domains are allowed." };
                }
            } catch (e) {
                return { ok: false, reason: "Blocked: Invalid URL format." };
            }
        }
    }

    return { ok: true, text };
}

function formatMessageWithLinks(text) {
    const escaped = escapeHTML(text);
    const urlRegex = /(https?:\/\/[^\s<]+)/gi;
    return escaped.replace(urlRegex, (url) => {
        return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + url + '</a>';
    });
}

function showChatWarning(msg) {
    const warn = document.getElementById("chat-warning");
    warn.textContent = msg;
    warn.classList.remove("hidden");
    clearTimeout(warn._timer);
    warn._timer = setTimeout(() => warn.classList.add("hidden"), 4500);
}

function updateRolePreview() {
    const preview = document.getElementById("role-preview");
    if (!preview) return;
    const distro = DISTROS[currentDistroKey] || DISTROS.generic;
    let html = "";
    if (isCreator) {
        html += '<span class="creator-badge">CREATOR</span>';
    }
    html += '<span class="distro-tag" style="color:' + distro.color + ';border-color:' + distro.color + '">[' + escapeHTML(distro.name) + ']</span>';
    html += '<span class="preview-name">' + escapeHTML(currentUsername) + '</span>';
    preview.innerHTML = html;
}

function setUsername(newName, announce = false) {
    const clean = newName.trim().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 20);
    if (!clean) {
        showChatWarning("Invalid username. Use letters, numbers, _ or -.");
        return false;
    }
    const check = validateMessage(clean);
    if (!check.ok) {
        showChatWarning(check.reason);
        return false;
    }
    const oldName = currentUsername;
    currentUsername = clean;
    localStorage.setItem("linuxClubUser", currentUsername);

    const input = document.getElementById("username-input");
    if (input) input.value = currentUsername;
    document.getElementById("top-title").textContent = currentUsername + "@linux-club: ~";
    document.getElementById("prompt-user-top").textContent = currentUsername;
    document.getElementById("prompt-user-input").textContent = currentUsername;
    document.getElementById("nf-user").textContent = currentUsername;

    updateRolePreview();
    broadcastPresence();

    if (announce && oldName && oldName !== currentUsername) {
        appendLocalSystemMsg("Handle updated: " + oldName + " -> " + currentUsername);
    }
    return true;
}

function applyDistroTheme(key, save = true) {
    currentDistroKey = DISTROS[key] ? key : "generic";
    const distro = DISTROS[currentDistroKey];

    document.documentElement.style.setProperty("--accent", distro.color);
    document.getElementById("ascii-art").textContent = distro.ascii;
    document.getElementById("nf-os").textContent = distro.name + " (x86_64)";

    document.querySelectorAll(".distro-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.distro === currentDistroKey);
    });

    if (save) {
        localStorage.setItem("linuxClubDistro", currentDistroKey);
    }
    updateRolePreview();
    broadcastPresence();
}

function appendChatMessage(msgObj) {
    const container = document.getElementById("chat-messages");
    const row = document.createElement("div");
    row.className = "chat-msg" + (msgObj.isBot ? " bot-msg" : "") + (msgObj.isPrivate ? " private-msg" : "");

    const date = new Date(msgObj.ts || Date.now());
    const timeStr = date.toTimeString().slice(0, 5);
    const distroInfo = DISTROS[msgObj.distro] || DISTROS.generic;
    const badgeColor = msgObj.isBot ? "#58a6ff" : distroInfo.color;
    const badgeLabel = msgObj.isBot ? "BOT" : distroInfo.name;

    let badgesHtml = "";
    if (msgObj.isCreator) {
        badgesHtml += '<span class="creator-badge">CREATOR</span>';
    }
    badgesHtml += '<span class="msg-badge" style="color:' + badgeColor + ';border-color:' + badgeColor + '">[' + escapeHTML(badgeLabel) + ']</span>';
    if (msgObj.isPrivate) {
        badgesHtml += '<span class="private-tag">[ONLY YOU]</span>';
    }

    row.innerHTML =
        '<span class="msg-time">' + timeStr + '</span>' +
        badgesHtml +
        '<span class="msg-user" style="color:' + (msgObj.isCreator ? "#ff66b2" : badgeColor) + '">' + escapeHTML(msgObj.user) + ':</span> ' +
        '<span class="msg-text">' + formatMessageWithLinks(msgObj.text) + '</span>';

    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
}

function appendLocalSystemMsg(text) {
    appendChatMessage({
        user: "TuxBot",
        distro: "generic",
        text,
        ts: Date.now(),
        isBot: true,
        isPrivate: true
    });
}

function updateOnlineCountUI() {
    const now = Date.now();
    for (const [id, info] of activePeers.entries()) {
        if (now - info.lastSeen > 25000) {
            activePeers.delete(id);
        }
    }
    const countEl = document.getElementById("online-count");
    if (countEl) countEl.textContent = Math.max(1, activePeers.size);
}

function broadcastPresence() {
    if (!mqttClient || !mqttClient.connected) return;
    const payload = JSON.stringify({
        type: "heartbeat",
        id: clientId,
        user: currentUsername,
        distro: currentDistroKey,
        isCreator
    });
    mqttClient.publish(TOPIC_PRESENCE, payload);
}

function handleBotTrigger(text) {
    const lower = text.trim().toLowerCase();
    let reply = null;

    if (lower === "!help") {
        reply = "Commands: !tip (Linux tip), !joke (Linux humor), !distro (random distro), !ping (latency check), or mention @tux!";
    } else if (lower === "!tip") {
        reply = TUX_TIPS[Math.floor(Math.random() * TUX_TIPS.length)];
    } else if (lower === "!joke") {
        reply = TUX_JOKES[Math.floor(Math.random() * TUX_JOKES.length)];
    } else if (lower === "!distro") {
        const keys = Object.keys(DISTROS).filter(k => k !== "generic");
        const pick = DISTROS[keys[Math.floor(Math.random() * keys.length)]].name;
        reply = "Distro Roulette says you should try: " + pick + "!";
    } else if (lower === "!ping") {
        reply = "Pong! Kernel verified and MQTT relay is alive.";
    } else if (lower.includes("@tux")) {
        reply = "Greetings from the kernel! Type !help to see what I can do.";
    }

    if (reply && mqttClient && mqttClient.connected) {
        setTimeout(() => {
            const botMsg = {
                id: "bot_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
                user: "TuxBot",
                distro: "generic",
                text: reply,
                ts: Date.now(),
                isBot: true
            };
            mqttClient.publish(TOPIC_CHAT, JSON.stringify(botMsg));
        }, 450);
    }
}

async function sendChatMessage(rawText) {
    const trimmed = rawText.trim();
    if (!trimmed) return false;

    if (trimmed.toLowerCase().startsWith("/creator")) {
        const secret = trimmed.slice(8).trim();
        if (!secret) {
            appendLocalSystemMsg("Usage: /creator <secret-passphrase>");
            return true;
        }
        const hashed = await sha256Hex(secret);
        if (hashed === CREATOR_SECRET_HASH || secret === "minty-penguin-2026") {
            isCreator = true;
            localStorage.setItem("linuxClubCreator", "1");
            updateRolePreview();
            broadcastPresence();
            appendLocalSystemMsg("Creator mode unlocked! Your pink [CREATOR] badge is now active.");
        } else {
            appendLocalSystemMsg("Invalid Creator passphrase.");
        }
        return true;
    }

    const check = validateMessage(trimmed);
    if (!check.ok) {
        showChatWarning(check.reason);
        return false;
    }

    const msgObj = {
        id: clientId + "_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
        user: currentUsername,
        distro: currentDistroKey,
        isCreator,
        text: check.text,
        ts: Date.now(),
        isBot: false
    };

    seenMsgIds.add(msgObj.id);
    appendChatMessage(msgObj);

    if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_CHAT, JSON.stringify(msgObj));
        handleBotTrigger(check.text);
    } else {
        showChatWarning("Offline: Message shown locally only (reconnecting to relay...)");
    }
    return true;
}

function initGlobalChat() {
    const statusEl = document.getElementById("chat-status");
    activePeers.set(clientId, { user: currentUsername, distro: currentDistroKey, lastSeen: Date.now() });
    updateOnlineCountUI();

    setTimeout(() => {
        const others = [];
        for (const [id, info] of activePeers.entries()) {
            if (id !== clientId && info.user) others.push(info.user);
        }
        const whoLine = others.length > 0
            ? "Currently online: " + others.join(", ") + "."
            : "You are the first penguin in the room right now—say hi or try !tip!";
        appendLocalSystemMsg("Welcome to #linux-club, " + currentUsername + "! " + whoLine);
    }, 1100);

    if (typeof mqtt === "undefined") {
        statusEl.textContent = "● OFFLINE";
        statusEl.className = "chat-status offline";
        return;
    }

    mqttClient = mqtt.connect(BROKER_URL, {
        clientId,
        clean: true,
        connectTimeout: 8000,
        reconnectPeriod: 3000,
        will: {
            topic: TOPIC_PRESENCE,
            payload: JSON.stringify({ type: "leave", id: clientId }),
            qos: 0,
            retain: false
        }
    });

    mqttClient.on("connect", () => {
        statusEl.textContent = "● LIVE";
        statusEl.className = "chat-status live";
        mqttClient.subscribe(TOPIC_CHAT);
        mqttClient.subscribe(TOPIC_PRESENCE);
        broadcastPresence();
    });

    mqttClient.on("reconnect", () => {
        statusEl.textContent = "● RECONNECTING";
        statusEl.className = "chat-status connecting";
    });

    mqttClient.on("offline", () => {
        statusEl.textContent = "● OFFLINE";
        statusEl.className = "chat-status offline";
    });

    mqttClient.on("message", (topic, payload) => {
        try {
            const data = JSON.parse(payload.toString());
            if (topic === TOPIC_PRESENCE) {
                if (data.type === "leave" && data.id) {
                    activePeers.delete(data.id);
                    updateOnlineCountUI();
                } else if (data.type === "heartbeat" && data.id) {
                    const isNewVisitor = !activePeers.has(data.id) && data.id !== clientId;
                    activePeers.set(data.id, {
                        user: data.user || "penguin",
                        distro: data.distro || "generic",
                        lastSeen: Date.now()
                    });
                    updateOnlineCountUI();
                    if (isNewVisitor) {
                        playJoinSound();
                        appendLocalSystemMsg((data.user || "A new penguin") + " hopped into #linux-club!");
                        broadcastPresence();
                    }
                }
            } else if (topic === TOPIC_CHAT) {
                if (!data || !data.id || seenMsgIds.has(data.id)) return;
                seenMsgIds.add(data.id);

                if (!data.isBot) {
                    const check = validateMessage(data.text || "");
                    if (!check.ok) return;
                }

                appendChatMessage(data);

                if (document.hidden) {
                    unreadCount++;
                    document.title = "(" + unreadCount + ") New message! - The Linux Club";
                    playMessageSound();
                }
            }
        } catch (e) {}
    });

    setInterval(() => {
        activePeers.set(clientId, { user: currentUsername, distro: currentDistroKey, lastSeen: Date.now() });
        broadcastPresence();
        updateOnlineCountUI();
    }, 10000);
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
    const checks = [
        { key: "mint", regex: /Mint/i },
        { key: "ubuntu", regex: /Ubuntu/i },
        { key: "fedora", regex: /Fedora/i },
        { key: "debian", regex: /Debian/i },
        { key: "arch", regex: /Arch/i },
        { key: "manjaro", regex: /Manjaro/i },
        { key: "opensuse", regex: /SUSE/i },
        { key: "popos", regex: /Pop!_OS|PopOS/i },
        { key: "kali", regex: /Kali/i },
        { key: "gentoo", regex: /Gentoo/i },
        { key: "nixos", regex: /NixOS/i }
    ];
    for (const item of checks) {
        if (item.regex.test(ua)) return item.key;
    }
    return null;
}

function setupTerminal(userAgent) {
    const terminalWindow = document.getElementById("terminal-window");
    const outputEl = document.getElementById("terminal-output");
    const inputEl = document.getElementById("terminal-input");

    terminalWindow.addEventListener("click", () => {
        if (window.getSelection().toString() === "") inputEl.focus();
    });

    function printLine(text, className = "") {
        const line = document.createElement("div");
        if (className) line.className = className;
        line.textContent = text;
        outputEl.appendChild(line);
        outputEl.scrollTop = outputEl.scrollHeight;
    }

    function printPromptEcho(cmd) {
        const line = document.createElement("div");
        line.innerHTML = '<span class="prompt-user">' + escapeHTML(currentUsername) + '</span>@linux-club:<span class="prompt-path">~</span>$ ' + escapeHTML(cmd);
        outputEl.appendChild(line);
    }

    async function runCommand(rawInput) {
        const trimmed = rawInput.trim();
        printPromptEcho(rawInput);
        if (!trimmed) return;

        commandHistory.push(trimmed);
        historyIndex = commandHistory.length;

        const parts = trimmed.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        switch (cmd) {
            case "help":
                printLine("Commands: help, nick <name>, say <msg>, distro <name>, users, ls, cat <file>, whoami, uname -a, neofetch, clear");
                break;
            case "nick":
                if (!args[0]) printLine("Usage: nick <username>", "cmd-error");
                else if (setUsername(args[0], true)) printLine("Username set to: " + currentUsername);
                break;
            case "say":
                if (args.length === 0) printLine("Usage: say <message>", "cmd-error");
                else if (await sendChatMessage(args.join(" "))) printLine("Sent to #linux-club.");
                break;
            case "creator":
                if (!args[0]) printLine("Usage: creator <secret>", "cmd-error");
                else await sendChatMessage("/creator " + args[0]);
                break;
            case "users":
                const names = Array.from(activePeers.values()).map(p => p.user);
                printLine("Penguins online (" + names.length + "): " + names.join(", "));
                break;
            case "ls":
                printLine("manifesto.txt   club_rules.md   distros.list   secret_penguin.sh");
                break;
            case "cat":
                if (args[0] === "manifesto.txt") printLine("1. Free as in freedom.\n2. No forced updates.\n3. Windows users go to ubuntu.com.");
                else if (args[0] === "club_rules.md") printLine("# Club Rules\n- Be respectful.\n- Safe open-source links only.");
                else if (args[0] === "distros.list") printLine(Object.keys(DISTROS).join(", "));
                else if (args[0] === "secret_penguin.sh") printLine("#!/bin/bash\necho 'Greetings from Tux!'");
                else printLine("cat: " + (args[0] || "") + ": No such file", "cmd-error");
                break;
            case "distro":
                if (!args[0]) printLine("Usage: distro <name> (" + Object.keys(DISTROS).join(", ") + ")");
                else if (DISTROS[args[0].toLowerCase()]) {
                    const t = args[0].toLowerCase();
                    applyDistroTheme(t, true);
                    document.getElementById("detector-status").textContent = "Saved Distro Profile: " + DISTROS[t].name;
                    printLine("Switched to " + DISTROS[t].name);
                } else printLine("Unknown distro.", "cmd-error");
                break;
            case "whoami":
                printLine(currentUsername + (isCreator ? " [CREATOR]" : "") + " @ linux-club");
                break;
            case "uname":
                printLine(args[0] === "-a" ? "Linux linux-club 6.8.0-generic x86_64 GNU/Linux (" + userAgent + ")" : "Linux");
                break;
            case "neofetch":
                applyDistroTheme(currentDistroKey, false);
                printLine("Refreshed neofetch.");
                break;
            case "clear":
                outputEl.innerHTML = "";
                break;
            default:
                printLine("bash: " + cmd + ": command not found (try 'help')", "cmd-error");
        }
    }

    inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const val = inputEl.value;
            inputEl.value = "";
            runCommand(val);
        } else if (e.key === "ArrowUp" && historyIndex > 0) {
            e.preventDefault();
            historyIndex--;
            inputEl.value = commandHistory[historyIndex];
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                inputEl.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                inputEl.value = "";
            }
        }
    });
}

document.addEventListener("visibilitychange", () => {
    if (!document.hidden && unreadCount > 0) {
        unreadCount = 0;
        document.title = "The Linux Club";
    }
});

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

        document.getElementById("nf-res").textContent = window.screen.width + "x" + window.screen.height;
        document.getElementById("nf-browser").textContent = detectBrowserName(userAgent);
        document.getElementById("nf-cores").textContent = navigator.hardwareConcurrency || "Unknown";

        if (localStorage.getItem("linuxClubCreator") === "1") {
            isCreator = true;
        }

        const savedUser = localStorage.getItem("linuxClubUser") || ("penguin_" + Math.floor(1000 + Math.random() * 9000));
        setUsername(savedUser, false);

        document.getElementById("save-username-btn").addEventListener("click", () => {
            setUsername(document.getElementById("username-input").value, true);
        });
        document.getElementById("username-input").addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                setUsername(e.target.value, true);
            }
        });

        const soundBtn = document.getElementById("sound-toggle-btn");
        const savedSound = localStorage.getItem("linuxClubSound");
        if (savedSound === "0") {
            soundEnabled = false;
            soundBtn.textContent = "Sound: MUTE";
        }
        soundBtn.addEventListener("click", () => {
            soundEnabled = !soundEnabled;
            localStorage.setItem("linuxClubSound", soundEnabled ? "1" : "0");
            soundBtn.textContent = soundEnabled ? "Sound: ON" : "Sound: MUTE";
            if (soundEnabled) playMessageSound();
        });

        const btnContainer = document.getElementById("distro-buttons");
        Object.entries(DISTROS).forEach(([key, data]) => {
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

        if (savedKey && DISTROS[savedKey]) {
            applyDistroTheme(savedKey, false);
            statusText.textContent = "Welcome back! Loaded saved profile: " + DISTROS[savedKey].name;
        } else if (detectedKey) {
            applyDistroTheme(detectedKey, false);
            statusText.textContent = "Detected Distro in User-Agent: " + DISTROS[detectedKey].name + "!";
        } else {
            applyDistroTheme("generic", false);
            statusText.textContent = "Kernel: Linux Verified (Exact distro hidden by browser anti-fingerprinting)";
        }

        document.getElementById("chat-form").addEventListener("submit", async (e) => {
            e.preventDefault();
            const chatInput = document.getElementById("chat-input");
            if (await sendChatMessage(chatInput.value)) {
                chatInput.value = "";
            }
        });

        setupTerminal(userAgent);
        initGlobalChat();

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
