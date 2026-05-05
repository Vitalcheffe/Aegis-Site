#!/bin/bash
# Aegis Defense Systems - Real Photo Downloads from Unsplash
# All images are real photographs, no AI-generated content
# Using Unsplash direct photo URLs

DEST="/home/z/my-project/public/images/pages"
cd "$DEST"

download() {
  local url="$1"
  local file="$2"
  if [ -f "$file" ]; then
    echo "SKIP: $file already exists"
    return
  fi
  echo "Downloading: $file"
  curl -sL -o "$file" "$url" --max-time 30
  if [ -f "$file" ]; then
    local size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    if [ "$size" -lt 5000 ]; then
      echo "FAILED: $file too small ($size bytes), removing"
      rm -f "$file"
    else
      echo "OK: $file ($size bytes)"
    fi
  fi
}

# ═══════════════════════════════════════════════════
# CONTACT PAGE - Office Location Photos
# ═══════════════════════════════════════════════════
# Washington DC - Capitol / Government building
download "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1920&q=80" "dc-capitol.jpg"
# London - City skyline
download "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80" "london-skyline.jpg"
# Abu Dhabi - Modern skyline
download "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80" "abu-dhabi-skyline.jpg"
# Singapore - Marina Bay
download "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80" "singapore-marina.jpg"

# ═══════════════════════════════════════════════════
# PRODUCT PAGES - Unique images per SplitSection
# ═══════════════════════════════════════════════════

# Aegis Sentinel - AI/Autonomous (3 unique images)
download "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1920&q=80" "sentinel-ai-neural.jpg"
download "https://images.unsplash.com/photo-1534759893442-4b1b7306e5b7?w=1920&q=80" "sentinel-tower.jpg"
download "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80" "sentinel-watch.jpg"

# Aegis SkyWatch - Aerial surveillance (3 unique images)
download "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1920&q=80" "skywatch-aerial.jpg"
download "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" "skywatch-earth.jpg"
download "https://images.unsplash.com/photo-1530124566582-a45a7e3d0c71?w=1920&q=80" "skywatch-monitor.jpg"

# Aegis Shield - Perimeter protection (3 unique images)
download "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80" "shield-perimeter.jpg"
download "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80" "shield-array.jpg"
download "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80" "shield-defense.jpg"

# Aegis Mobile - Vehicle/tactical (3 unique images)
download "https://images.unsplash.com/photo-1548449112-96a38a643324?w=1920&q=80" "mobile-vehicle.jpg"
download "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&q=80" "mobile-field.jpg"
download "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1920&q=80" "mobile-tactical.jpg"

# Aegis Command - C2/Operations center (3 unique images)
download "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" "command-dashboard.jpg"
download "https://images.unsplash.com/photo-1517433456624-25b9f3199967?w=1920&q=80" "command-operations.jpg"
download "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80" "command-decision.jpg"

# Aegis Integrator - Systems integration (3 unique images)
download "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80" "integrator-network.jpg"
download "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80" "integrator-team.jpg"
download "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80" "integrator-code.jpg"

# ═══════════════════════════════════════════════════
# SOLUTION PAGES - Contextually correct images
# ═══════════════════════════════════════════════════

# Airports
download "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80" "airport-terminal.jpg"
# Prisons
download "https://images.unsplash.com/photo-1562514155-444b9a498de5?w=1920&q=80" "prison-facility.jpg"
# Border Security
download "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80" "border-patrol.jpg"
# Critical Infrastructure
download "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80" "infrastructure-power-plant.jpg"
# VIP Protection
download "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80" "vip-security.jpg"
# Urban Security
download "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" "urban-cityscape.jpg"
# Military Air Defense
download "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?w=1920&q=80" "airdefense-patriot.jpg"
# Forward Operating Base
download "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1920&q=80" "fob-military.jpg"
# Naval Operations
download "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=1920&q=80" "naval-warship.jpg"
# Military Convoys
download "https://images.unsplash.com/photo-1548449112-96a38a643324?w=1920&q=80" "convoy-vehicles.jpg"
# Special Operations
download "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&q=80" "specialops-night.jpg"

# ═══════════════════════════════════════════════════
# ABOUT / COMPANY / OTHER pages
# ═══════════════════════════════════════════════════

# About page - Engineering/R&D
download "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1920&q=80" "about-engineering.jpg"
# Company page - Team/Office
download "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" "company-office.jpg"
# Investors - Financial
download "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80" "investors-chart.jpg"
# News - Press
download "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1920&q=80" "news-press.jpg"
# Careers - Engineers at work
download "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" "careers-team.jpg"
# Technology page
download "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" "tech-circuit.jpg"
# Capabilities - Detection
download "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80" "detection-sensor.jpg"
# Capabilities - Classification
download "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80" "classification-ai.jpg"
# Capabilities - Tracking
download "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" "tracking-screen.jpg"
# Capabilities - Neutralization
download "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=1920&q=80" "neutralization-ew.jpg"
# Capabilities - C2
download "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80" "c2-operations.jpg"
# Capabilities - Integration
download "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80" "integration-network.jpg"
# Products overview
download "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80" "products-defense.jpg"
# Maritime
download "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80" "maritime-harbor.jpg"

echo "Download complete!"
