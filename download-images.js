const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "public", "images");

// const TOOL_NAMES = [
//     "Hammer",
//     "Ball Peen Hammer",
//     "Claw Hammer",
//     "Rubber Mallet",
//     "Piston Ring Compressor",
//     "Stud Remover",
// ];
const TOOL_NAMES = [
    "Valve Lifter",
    "Valve Lapper",
    "Valve Grinding Paste",
    "Adjustable Wrench",
    "Pipe Wrench",
    "Hacksaw",
    "Nylon Brush",
    "Steel Wire Brush",
    "Flat File",
    "Triangular File",
    "Square File",
    "Round File",
    "Half-Round File",
    "Wheel Spanner",
    "Oil Can",
    "Chisel",
    "Oil Filter Wrench",
    "Center Punch",
    "Scraper",
    "Speed Handle",
    "Star Allen Key",
    "Six-Point (Hex) Allen Key",
    "Feeler Gauge",
    "Socket Set",
    "Deep Socket",
    "Universal Joint",
    "Ratchet Handle",
    "Sliding T-Handle",
    "Half Extension Bar",
    "Full Extension Bar",
    "L-Handle Tommy Bar",
    "Combination Spanner",
    "Ring Spanner",
    "Box End Spanner",
    "Open End Spanner",
    "Adjustable (Dock) Spanner",
    "Piston Ring Expander",
    "Grip Pliers",
    "Monkey Pliers",
    "Slip Joint Pliers",
    "Combination Pliers",
    "Cutter Nose Pliers",
    "Long Nose Pliers",
    "Circlip Pliers Internal",
    "Circlip Pliers External",
];

const IMAGES_PER_TOOL = 3;

// Fetch a DuckDuckGo "vqd" token required for image search requests
async function getVqd(query) {
    const res = await fetch(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`);
    const html = await res.text();
    const match = html.match(/vqd=['"]?([\d-]+)['"]?/);
    if (!match) throw new Error(`Could not extract vqd token for "${query}"`);
    return match[1];
}

// Query DuckDuckGo's image search API
async function searchImages(query, count) {
    const vqd = await getVqd(query);
    const url = `https://duckduckgo.com/i.js?q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,&p=1`;

    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0",
            Referer: "https://duckduckgo.com/",
        },
    });

    if (!res.ok) throw new Error(`Search failed for "${query}" (${res.status})`);

    const data = await res.json();
    return (data.results || []).slice(0, count).map((r) => r.image);
}

// Download a single image and figure out its extension from content-type
async function downloadImage(url, destPathWithoutExt) {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`Download failed (${res.status}) for ${url}`);

    const contentType = res.headers.get("content-type") || "";
    let ext = "jpg";
    if (contentType.includes("png")) ext = "png";
    else if (contentType.includes("webp")) ext = "webp";
    else if (contentType.includes("avif")) ext = "avif";
    else if (contentType.includes("jpeg") || contentType.includes("jpg")) ext = "jpg";

    const buffer = await res.buffer();
    const destPath = `${destPathWithoutExt}.${ext}`;
    fs.writeFileSync(destPath, buffer);
    return destPath;
}

async function run() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const toolName of TOOL_NAMES) {
        console.log(`\nSearching images for: ${toolName}`);

        try {
            const imageUrls = await searchImages(toolName, IMAGES_PER_TOOL);

            if (imageUrls.length === 0) {
                console.warn(`  No images found for "${toolName}"`);
                continue;
            }

            for (let i = 0; i < imageUrls.length; i++) {
                const destWithoutExt = path.join(OUTPUT_DIR, `${toolName}${i + 1}`);
                try {
                    const savedPath = await downloadImage(imageUrls[i], destWithoutExt);
                    console.log(`  Saved: ${path.basename(savedPath)}`);
                } catch (err) {
                    console.warn(`  Failed to download image ${i + 1} for "${toolName}": ${err.message}`);
                }
            }
        } catch (err) {
            console.warn(`  Search failed for "${toolName}": ${err.message}`);
        }

        // Small delay to avoid hammering DuckDuckGo
        await new Promise((r) => setTimeout(r, 1500));
    }

    console.log("\nDone.");
}

run();