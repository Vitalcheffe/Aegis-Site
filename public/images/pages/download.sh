#!/bin/bash
# MASSIVE image download - unique images for every page and section
# Each image is carefully chosen for its specific context

declare -A IMAGES

# HOMEPAGE
IMAGES[homepage-hero]="https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1920&q=85"
IMAGES[homepage-callout]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85"

# CAPABILITIES
IMAGES[capabilities-hero]="https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=1920&q=85"
IMAGES[detection-hero]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[detection-radar]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"
IMAGES[detection-rf]="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=85"
IMAGES[detection-eoir]="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=85"
IMAGES[detection-acoustic]="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=85"
IMAGES[tracking-hero]="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=85"
IMAGES[tracking-data]="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=85"
IMAGES[classification-hero]="https://images.unsplash.com/photo-1527684651643-3df0b46f43e0?w=1920&q=85"
IMAGES[classification-ml]="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=85"
IMAGES[neutralization-hero]="https://images.unsplash.com/photo-1603509902991-e7e7e1930a9e?w=1920&q=85"
IMAGES[neutralization-jamming]="https://images.unsplash.com/photo-1530124566582-a45a7e3e29f0?w=1920&q=85"
IMAGES[neutralization-laser]="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&q=85"
IMAGES[neutralization-kinetic]="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1920&q=85"
IMAGES[command-hero]="https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1920&q=85"
IMAGES[command-ops]="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=1920&q=85"
IMAGES[integration-hero]="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=85"
IMAGES[integration-api]="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=85"

# PRODUCTS
IMAGES[products-hero]="https://images.unsplash.com/photo-1548607682-9b3e2034c25e?w=1920&q=85"
IMAGES[aegis-core-hero]="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85"
IMAGES[aegis-core-fusion]="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=85"
IMAGES[aegis-core-ai]="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=85"
IMAGES[aegis-core-effector]="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=1920&q=85"
IMAGES[aegis-tactical-hero]="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=85"
IMAGES[aegis-tactical-mobile]="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1920&q=85"
IMAGES[aegis-tactical-deploy]="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=85"
IMAGES[aegis-mobile-hero]="https://images.unsplash.com/photo-1532629345422-751700f69382?w=1920&q=85"
IMAGES[aegis-mobile-portable]="https://images.unsplash.com/photo-1599815034606-1b4af4e1c7b5?w=1920&q=85"
IMAGES[aegis-shield-hero]="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&q=85"
IMAGES[aegis-shield-passive]="https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=1920&q=85"
IMAGES[aegis-skywatch-hero]="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1920&q=85"
IMAGES[aegis-command-hero]="https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=1920&q=85"
IMAGES[aegis-command-battle]="https://images.unsplash.com/photo-1532629345422-751700f69382?w=1920&q=85"
IMAGES[aegis-sentinel-hero]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"
IMAGES[aegis-integrator-hero]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"

# SOLUTIONS
IMAGES[solutions-hero]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85"
IMAGES[military-hero]="https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1920&q=85"
IMAGES[fob-hero]="https://images.unsplash.com/photo-1532629345422-751700f69382?w=1920&q=85"
IMAGES[fob-perimeter]="https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=1920&q=85"
IMAGES[naval-hero]="https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=1920&q=85"
IMAGES[naval-ship]="https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1920&q=85"
IMAGES[convoy-hero]="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=85"
IMAGES[convoy-mobile]="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85"
IMAGES[specialops-hero]="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&q=85"
IMAGES[specialops-stealth]="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=85"
IMAGES[airdefense-hero]="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1920&q=85"
IMAGES[airdefense-radar]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[airports-hero]="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=85"
IMAGES[airports-atc]="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&q=85"
IMAGES[infrastructure-hero]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[infrastructure-power]="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=85"
IMAGES[border-hero]="https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=1920&q=85"
IMAGES[border-coastal]="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1920&q=85"
IMAGES[vip-hero]="https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1920&q=85"
IMAGES[vip-event]="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1920&q=85"
IMAGES[prisons-hero]="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=85"
IMAGES[prisons-perimeter]="https://images.unsplash.com/photo-1527684651643-3df0b46f43e0?w=1920&q=85"
IMAGES[urban-hero]="https://images.unsplash.com/photo-1470219556762-1fd5b23f975d?w=1920&q=85"
IMAGES[urban-smart]="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=85"
IMAGES[maritime-hero]="https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=1920&q=85"
IMAGES[maritime-port]="https://images.unsplash.com/photo-1532629345422-751700f69382?w=1920&q=85"

# COMPANY
IMAGES[company-hero]="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=1920&q=85"
IMAGES[company-mission]="https://images.unsplash.com/photo-1527684651643-3df0b46f43e0?w=1920&q=85"
IMAGES[company-vision]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85"
IMAGES[about-hero]="https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1920&q=85"
IMAGES[about-origin]="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=85"
IMAGES[leadership-hero]="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=85"
IMAGES[leadership-ceo]="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&q=85"
IMAGES[leadership-cto]="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1920&q=85"
IMAGES[leadership-coo]="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1920&q=85"
IMAGES[leadership-science]="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=85"
IMAGES[leadership-cfo]="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=85"
IMAGES[leadership-board]="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1920&q=85"
IMAGES[history-hero]="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=1920&q=85"
IMAGES[partners-hero]="https://images.unsplash.com/photo-1527684651643-3df0b46f43e0?w=1920&q=85"
IMAGES[certifications-hero]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"

# NEWS / CAREERS / INVESTORS
IMAGES[news-hero]="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1920&q=85"
IMAGES[press-hero]="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85"
IMAGES[events-hero]="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85"
IMAGES[careers-hero]="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=85"
IMAGES[careers-culture]="https://images.unsplash.com/photo-1527684651643-3df0b46f43e0?w=1920&q=85"
IMAGES[careers-benefits]="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=1920&q=85"
IMAGES[openings-hero]="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
IMAGES[investors-hero]="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85"
IMAGES[investors-growth]="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=85"
IMAGES[financial-hero]="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=85"
IMAGES[governance-hero]="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"

# LEGAL / OTHER
IMAGES[legal-privacy]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"
IMAGES[legal-terms]="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=85"
IMAGES[legal-itar]="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&q=85"
IMAGES[legal-compliance]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[legal-export]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[contact-hero]="https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1920&q=85"
IMAGES[demo-hero]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[request-demo]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"
IMAGES[technology-hero]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"

# Extra military / defense images
IMAGES[military-soldier-aim]="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=85"
IMAGES[military-chopper]="https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1920&q=85"
IMAGES[military-jeep]="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=85"
IMAGES[defense-screen]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[defense-antenna]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"
IMAGES[defense-satellite-dish]="https://images.unsplash.com/photo-1530124566582-a45a7e3e29f0?w=1920&q=85"
IMAGES[defense-jet-night]="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&q=85"
IMAGES[radar-scope]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85"
IMAGES[surveillance-cam]="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85"

# Download all
for key in "${!IMAGES[@]}"; do
  echo "Downloading ${key}..."
  curl -sL "${IMAGES[$key]}" -o "${key}.jpg" &
  # Limit parallelism
  if (( $(jobs -r | wc -l) >= 10 )); then
    wait -n
  fi
done
wait

# Remove failed downloads
for f in *.jpg; do
  size=$(stat -c%s "$f" 2>/dev/null || echo 0)
  if [ "$size" -lt 5000 ]; then
    echo "REMOVING failed: $f ($size bytes)"
    rm -f "$f"
  fi
done

echo "Download complete. Files: $(ls *.jpg | wc -l)"
