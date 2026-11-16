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

const BLOCKED_WORDS = [
    "fuck", "shit", "bitch", "asshole", "cunt", "dick", "pussy",
    "nigger", "nigga", "faggot", "retard", "whore", "slut",
    "kys", "kill yourself", "freerobux", "free robux", "free nitro",
    "steam gift scam", "crypto giveaway", "double your btc"
];

const ALLOWED_DOMAINS = [
    "github.com",
    "github.io",
    "gitlab.com",
    "codeberg.org",
    "kernel.org",
    "linux.org",
    "linuxmint.com",
    "ubuntu.com",
    "archlinux.org",
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
    "askubuntu.com"
];

const TUX_TIPS = [
    "Tip: Use 'Ctrl + R' in your terminal to search your past bash commands interactively!",
    "Tip: Forgot 'sudo' on your last command? Just type 'sudo !!' to re-run it as root.",
    "Tip: 'tldr <command>' gives clean, practical examples instead of huge man pages.",
    "Tip: Use 'ncdu' in the terminal to quickly see which folders are eating up disk space.",
    "Tip: On Linux Mint Cinnamon, press 'Ctrl + Alt + Escape' if you ever need to restart the desktop shell.",
    "Tip: 'htop' or 'btop' gives you a colorful live view of CPU, RAM, and running processes."
];

const TUX_JOKES = [
    "Why do Linux users never get locked out of their house? Because they always have root access!",
    "How many Arch Linux users does it take to change a lightbulb? Just one—and they will tell you about it for 3 weeks.",
    "Windows: 'Please wait while we configure updates (30% complete) - Do not turn off your computer.' Linux: 'sudo apt update && sudo apt upgrade - done in 4 seconds.'",
    "A SQL query walks into a Linux bar, sees two tables, and asks: 'Can I join you?'"
];

const TUX_CHATTER = [
    "Quiet in the server room today... anyone compiling a custom kernel?",
    "Reminder: Hydrate, check your backups, and never paste random 'curl | bash' commands without reading them first!",
    "Linux Mint Cinnamon, Arch + Hyprland, or Debian Stable—what is everyone daily-driving right now?",
    "No forced reboots in sight. Just pure open-source peace."
];

let currentDistroKey = "generic";
let currentUsername = "penguin_0000";
const sessionClientId = "lc_" + Math.random().toString(36).slice(2, 10);
const commandHistory = new Array();
let historyIndex = -1;
const seenMessageIds = new Set();
const activePeers = new Map();
let mqttClient = null;
let lastActivityTimestamp = Date.now();
let lastAmbientTimestamp = Date.now();

const TOPIC_CHAT = "linux-club/global-chat/v2";
const TOPIC_PRESENCE = "linux-club/presence/v2";

function normalizeForFilter(text) {
    return text
        .toLowerCase()
        .replace(/0/g, "o")
        .replace(/1/g, "i")
        .replace(/3/g, "e")
        .replace(/4/g, "a")
        .replace(/5/g, "s")
        .replace(/7/g, "t")
        .replace(/@/g, "a")
        .replace(/\$/g, "s");
}

function containsBadWords(text) {
    const cleaned = normalizeForFilter(text);
    const collapsed = cleaned.replace(/[^a-z0-9]/g, "");
    for (let i = 0; i < BLOCKED_WORDS.length; i++) {
        const word = BLOCKED_WORDS.at(i);
        const wordCollapsed = word.replace(/[^a-z0-9]/g, "");
        if (cleaned.includes(word) || collapsed.includes(wordCollapsed)) {
            return true;
        }
    }
    return false;
}

function isAllowedHost(hostname) {
    const host = hostname.toLowerCase();
    for (let i = 0; i < ALLOWED_DOMAINS.length; i++) {
        const allowed = ALLOWED_DOMAINS.at(i);
        if (host === allowed || host.endsWith("." + allowed)) {
            return true;
        }
    }
    return false;
}

function validateMessageSafety(text) {
    if (containsBadWords(text)) {
        return {
            ok: false,
            reason: "Blocked: Your message triggered the profanity or scam filter."
        };
    }

    if (/https?:\/[^\/]/i.test(text) || /\/{3,}/.test(text)) {
        return {
            ok: false,
            reason: "Blocked: Malformed or obfuscated link detected (e.g. broken slashes)."
        };
    }

    const urlPattern = /(?:https?:\/\/|www\.)[^\s]+|(?:[a-z0-9-]+\.)+(?:com|net|org|io|co|xyz|ru|tk|ml|ga|cf|gq|top|click|link|info|biz|gg|me|tv|app|dev|sh)(?:\/[^\s]*)?/gi;
    const matches = text.match(urlPattern);

    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            let rawUrl = matches.at(i);
            if (/\/{3,}/.test(rawUrl)) {
                return {
                    ok: false,
                    reason: "Blocked: Suspicious URL with excessive slashes."
                };
            }

            const withProtocol = /^https?:\/\//i.test(rawUrl) ? rawUrl : "https://" + rawUrl;
            try {
                const parsed = new URL(withProtocol);
                if (!isAllowedHost(parsed.hostname)) {
                    return {
                        ok: false,
                        reason: "Blocked link (" + parsed.hostname + "): Only trusted Linux & GitHub links are allowed."
                    };
                }
            } catch (e) {
                return {
                    ok: false,
                    reason: "Blocked: Invalid or suspicious link format."
                };
            }
        }
    }

    return { ok: true, reason: "" };
}

function showBanner(elementId, message) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = message;
    el.classList.remove("hidden");
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => {
        el.classList.add("hidden");
    }, 4500);
}

function setUsername(rawName, save) {
    const cleaned = rawName.trim().replace(/[^a-zA-Z0-9_-]/g, "");
    if (cleaned.length < 2 || cleaned.length > 20) {
        return { ok: false, reason: "Username must be 2-20 characters (letters, numbers, _ or -)." };
    }
    if (cleaned.toLowerCase() === "tux" || cleaned.toLowerCase() === "tuxbot") {
        return { ok: false, reason: "That handle is reserved for the club mascot!" };
    }
    if (containsBadWords(cleaned)) {
        return { ok: false, reason: "Blocked: That username contains restricted words." };
    }

    currentUsername = cleaned;
    document.getElementById("current-username-display").textContent = currentUsername;
    document.getElementById("header-prompt").textContent = currentUsername + "@linux-club: ~";
    document.getElementById("nf-prompt-user").textContent = currentUsername + "@linux-club";
    document.getElementById("nf-user").textContent = currentUsername;
    document.getElementById("shell-prompt-user").textContent = currentUsername + "@linux-club";

    if (save) {
        localStorage.setItem("linuxClubUsername", currentUsername);
    }
    publishPresence(true);
    return { ok: true, reason: "" };
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
    publishPresence(true);
}

function formatSafeMessageNodes(text, container) {
    const urlPattern = /((?:https?:\/\/|www\.)[^\s]+|(?:[a-z0-9-]+\.)+(?:com|net|org|io|co|xyz|ru|tk|ml|ga|cf|gq|top|click|link|info|biz|gg|me|tv|app|dev|sh)(?:\/[^\s]*)?)/gi;
    let lastIndex = 0;
    let match;

    while ((match = urlPattern.exec(text)) !== null) {
        if (match.index > lastIndex) {
            container.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        }

        const rawUrl = match.at(0);
        const withProtocol = /^https?:\/\//i.test(rawUrl) ? rawUrl : "https://" + rawUrl;
        let renderedAsLink = false;

        try {
            const parsed = new URL(withProtocol);
            if (isAllowedHost(parsed.hostname) && !/\/{3,}/.test(rawUrl)) {
                const anchor = document.createElement("a");
                anchor.href = parsed.href;
                anchor.textContent = rawUrl;
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";
                container.appendChild(anchor);
                renderedAsLink = true;
            }
        } catch (e) {
            renderedAsLink = false;
        }

        if (!renderedAsLink) {
            container.appendChild(document.createTextNode("[blocked-link]"));
        }

        lastIndex = match.index + rawUrl.length;
    }

    if (lastIndex < text.length) {
        container.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
}

function renderChatMessage(msg) {
    if (!msg || !msg.id || !msg.text || seenMessageIds.has(msg.id)) return;
    seenMessageIds.add(msg.id);

    const isBot = msg.isBot === true;
    if (!isBot) {
        const safety = validateMessageSafety(msg.text);
        if (!safety.ok) return;
    }

    const container = document.getElementById("chat-messages");
    const row = document.createElement("div");
    row.className = isBot ? "chat-msg bot-msg" : "chat-msg";

    const timeSpan = document.createElement("span");
    timeSpan.className = "chat-time";
    const dateObj = msg.ts ? new Date(msg.ts) : new Date();
    timeSpan.textContent = dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const distroKey = isBot ? "generic" : (DISTROS.hasOwnProperty(msg.distro) ? msg.distro : "generic");
    const distroInfo = Reflect.get(DISTROS, distroKey);

    const tagSpan = document.createElement("span");
    tagSpan.className = "chat-distro-tag";
    tagSpan.style.color = isBot ? "#3fb950" : distroInfo.color;
    tagSpan.textContent = isBot ? "BOT" : distroInfo.name;

    const userSpan = document.createElement("span");
    userSpan.className = "chat-user";
    userSpan.style.color = isBot ? "#3fb950" : distroInfo.color;
    userSpan.textContent = (isBot ? "TuxBot" : (msg.user || "penguin")) + ":";

    const textSpan = document.createElement("span");
    textSpan.className = "chat-text";
    formatSafeMessageNodes(msg.text, textSpan);

    row.appendChild(timeSpan);
    row.appendChild(tagSpan);
    row.appendChild(userSpan);
    row.appendChild(textSpan);

    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
}

function appendSystemChat(text) {
    const container = document.getElementById("chat-messages");
    const row = document.createElement("div");
    row.className = "chat-sys";
    row.textContent = text;
    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
}

function updateOnlineCounter() {
    const now = Date.now();
    activePeers.set(sessionClientId, {
        user: currentUsername,
        distro: currentDistroKey,
        lastSeen: now
    });

    activePeers.forEach((info, id) => {
        if (id !== sessionClientId && now - info.lastSeen > 35000) {
            activePeers.delete(id);
        }
    });

    const countEl = document.getElementById("online-count");
    if (countEl) {
        countEl.textContent = String(activePeers.size);
    }
}

function publishPresence(isOnline) {
    updateOnlineCounter();
    if (!mqttClient || !mqttClient.connected) return;

    const payload = JSON.stringify({
        clientId: sessionClientId,
        user: currentUsername,
        distro: currentDistroKey,
        online: isOnline,
        ts: Date.now()
    });
    mqttClient.publish(TOPIC_PRESENCE, payload, { qos: 0 });
}

function isLeaderClient() {
    let lowestId = sessionClientId;
    activePeers.forEach((info, id) => {
        if (id < lowestId) {
            lowestId = id;
        }
    });
    return lowestId === sessionClientId;
}

function publishBotReply(replyText) {
    const botMsg = {
        id: "bot_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
        user: "TuxBot",
        distro: "generic",
        text: replyText,
        isBot: true,
        ts: Date.now()
    };

    renderChatMessage(botMsg);
    if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_CHAT, JSON.stringify(botMsg), { qos: 0 });
    }
}

function handleBotTriggers(text, senderName) {
    const lower = text.trim().toLowerCase();
    let reply = null;

    if (lower === "!help") {
        reply = "TuxBot commands: !tip (Linux tip), !joke (Linux humor), !distro (random distro pick), !ping (check relay latency), or say @tux!";
    } else if (lower === "!tip") {
        const idx = Math.floor(Math.random() * TUX_TIPS.length);
        reply = TUX_TIPS.at(idx);
    } else if (lower === "!joke") {
        const idx = Math.floor(Math.random() * TUX_JOKES.length);
        reply = TUX_JOKES.at(idx);
    } else if (lower === "!distro") {
        const keys = Object.keys(DISTROS).filter(k => k !== "generic");
        const pick = keys.at(Math.floor(Math.random() * keys.length));
        reply = "@" + senderName + " Today's distro spotlight is " + Reflect.get(DISTROS, pick).name + "! Try it with: distro " + pick;
    } else if (lower === "!ping") {
        reply = "Pong! Live MQTT relay active with " + activePeers.size + " penguin(s) online.";
    } else if (lower.includes("@tux")) {
        reply = "Greetings @" + senderName + "! Welcome to The Linux Club. Type !tip or !joke anytime.";
    }

    if (reply) {
        setTimeout(() => {
            publishBotReply(reply);
        }, 450);
    }
}

function sendGlobalMessage(rawText) {
    const text = rawText.trim();
    if (!text) return false;

    const safety = validateMessageSafety(text);
    if (!safety.ok) {
        showBanner("chat-warning", safety.reason);
        return false;
    }

    lastActivityTimestamp = Date.now();

    const msgObj = {
        id: sessionClientId + "_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
        user: currentUsername,
        distro: currentDistroKey,
        text: text.slice(0, 280),
        isBot: false,
        ts: Date.now()
    };

    renderChatMessage(msgObj);

    if (mqttClient && mqttClient.connected) {
        mqttClient.publish(TOPIC_CHAT, JSON.stringify(msgObj), { qos: 0 });
    } else {
        showBanner("chat-warning", "Still connecting to live relay—retrying automatically...");
    }

    handleBotTriggers(text, currentUsername);
    return true;
}

function setupGlobalChat() {
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const statusBadge = document.getElementById("chat-status");

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (sendGlobalMessage(chatInput.value)) {
            chatInput.value = "";
        }
    });

    if (typeof mqtt === "undefined") {
        statusBadge.textContent = "● Offline (MQTT script blocked)";
        statusBadge.className = "chat-status offline";
        appendSystemChat("Could not load live chat client. Check your connection or script blocker.");
        return;
    }

    const brokers = [
        "wss://broker.hivemq.com:8884/mqtt",
        "wss://broker.emqx.io:8084/mqtt"
    ];
    let brokerIndex = 0;

    function connectToBroker(url) {
        statusBadge.textContent = "● Connecting...";
        statusBadge.className = "chat-status connecting";

        const willPayload = JSON.stringify({
            clientId: sessionClientId,
            user: currentUsername,
            distro: currentDistroKey,
            online: false,
            ts: Date.now()
        });

        const client = mqtt.connect(url, {
            clientId: sessionClientId,
            clean: true,
            connectTimeout: 8000,
            reconnectPeriod: 4000,
            keepalive: 25,
            will: {
                topic: TOPIC_PRESENCE,
                payload: willPayload,
                qos: 0,
                retain: false
            }
        });

        mqttClient = client;

        client.on("connect", () => {
            statusBadge.textContent = "● LIVE";
            statusBadge.className = "chat-status live";
            client.subscribe(TOPIC_CHAT);
            client.subscribe(TOPIC_PRESENCE);
            appendSystemChat("Connected to #linux-club live relay as " + currentUsername + "! Try typing !tip or !help.");
            publishPresence(true);
        });

        client.on("message", (topic, payloadBuffer) => {
            try {
                const data = JSON.parse(payloadBuffer.toString());
                if (topic === TOPIC_CHAT) {
                    lastActivityTimestamp = Date.now();
                    renderChatMessage(data);
                } else if (topic === TOPIC_PRESENCE && data.clientId) {
                    if (data.online === false) {
                        activePeers.delete(data.clientId);
                    } else {
                        activePeers.set(data.clientId, {
                            user: data.user || "penguin",
                            distro: data.distro || "generic",
                            lastSeen: Date.now()
                        });
                    }
                    updateOnlineCounter();
                }
            } catch (err) {
                // Ignore malformed packets
            }
        });

        client.on("error", () => {
            statusBadge.textContent = "● Switching relay...";
            statusBadge.className = "chat-status connecting";
            if (brokerIndex + 1 < brokers.length) {
                brokerIndex++;
                client.end(true);
                connectToBroker(brokers.at(brokerIndex));
            }
        });

        client.on("offline", () => {
            statusBadge.textContent = "● Reconnecting...";
            statusBadge.className = "chat-status offline";
        });
    }

    connectToBroker(brokers.at(0));

    setInterval(() => {
        publishPresence(true);
    }, 12000);

    setInterval(() => {
        const now = Date.now();
        if (now - lastActivityTimestamp > 45000 && now - lastAmbientTimestamp > 60000 && isLeaderClient()) {
            lastAmbientTimestamp = now;
            const chatter = TUX_CHATTER.at(Math.floor(Math.random() * TUX_CHATTER.length));
            publishBotReply(chatter);
        }
    }, 15000);

    window.addEventListener("beforeunload", () => {
        publishPresence(false);
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
                printLine("  nick <username>   - Change & save your username");
                printLine("  say <message>     - Send a message to #linux-club chat");
                printLine("  users             - Show active penguins online");
                printLine("  ls                - List files in club directory");
                printLine("  cat <file>        - Read a file (try: cat manifesto.txt)");
                printLine("  distro <name>     - Switch & save distro theme (e.g., distro mint)");
                printLine("  whoami            - Display current club member");
                printLine("  uname -a          - Print kernel & User-Agent info");
                printLine("  neofetch          - Refresh system info");
                printLine("  date              - Show current system date/time");
                printLine("  clear             - Clear terminal output");
                break;

            case "nick":
                if (!firstArg) {
                    printLine("Current username: " + currentUsername + " (Usage: nick <new_name>)");
                } else {
                    const res = setUsername(firstArg, true);
                    if (res.ok) {
                        document.getElementById("username-input").value = currentUsername;
                        printLine("Username updated to: " + currentUsername);
                    } else {
                        printLine(res.reason, "cmd-error");
                    }
                }
                break;

            case "say":
                if (args.length === 0) {
                    printLine("Usage: say <message>", "cmd-error");
                } else {
                    const msgText = args.join(" ");
                    if (sendGlobalMessage(msgText)) {
                        printLine("[#linux-club] " + currentUsername + ": " + msgText);
                    } else {
                        printLine("Message blocked by chat safety filter.", "cmd-error");
                    }
                }
                break;

            case "users":
                updateOnlineCounter();
                const names = new Array();
                activePeers.forEach((info) => {
                    names.push(info.user + " (" + info.distro + ")");
                });
                printLine("Penguins Online (" + activePeers.size + "): " + names.join(", "));
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
                    printLine("# Club Rules\n- Respect all distros.\n- Only share trusted Linux/GitHub links in chat.\n- Keep chat clean and welcoming.");
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
                printLine(currentUsername + " (" + currentUsername + "@linux-club)");
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

        const savedName = localStorage.getItem("linuxClubUsername");
        const defaultName = "penguin_" + Math.floor(1000 + Math.random() * 9000);
        if (savedName && setUsername(savedName, false).ok) {
            document.getElementById("username-input").value = currentUsername;
        } else {
            setUsername(defaultName, true);
            document.getElementById("username-input").value = currentUsername;
        }

        document.getElementById("username-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const inputVal = document.getElementById("username-input").value;
            const res = setUsername(inputVal, true);
            if (!res.ok) {
                showBanner("profile-warning", res.reason);
            } else {
                appendSystemChat("You are now known as " + currentUsername + ".");
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
